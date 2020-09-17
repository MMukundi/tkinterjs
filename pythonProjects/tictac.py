from tkinter import *
# import windowFunctions as winFunc
# import learning

positions = [(-1, -1), (-1, 0), (-1, 1), (0, -1),
			 (0, 1), (1, -1), (1, 0), (1, 1)]
compassPositions = [positions[i] for i in range(8) if 0 in positions[i]]


class settingsWin():
	"""docstring for settingsWin"""

	def __init__(self, master):
		# winFunc.centerWindow(master, 300, 150)
		master.title("TicTacToe")
		master.minsize(300, 150)
		master.maxsize(300, 150)
		self.master = master
		self.enter = Frame(master, height=150, width=200)

		self.label = Label(self.enter, text="Square Grid Size:")
		self.label.place(relx=.5, rely=.25, anchor='ne')

		self.size = StringVar()
		self.sizeEnter = Entry(self.enter, textvariable=self.size)
		self.sizeEnter.place(relx=.5, rely=.25, anchor='nw')

		self.AI = BooleanVar()
		self.askAI = Checkbutton(
			self.enter, variable=self.AI, text='AI')
		self.askAI.place(relx=.5, rely=.5, anchor='center')

		self.startButton = Button(
			self.enter, text="Start", command=self.start)
		self.startButton.place(relx=.5, rely=.75, anchor='center')

		self.enter.place(relheight=1,relwidth=1,relx=0, rely=0, anchor='nw')

		master.mainloop()

	def start(self):

		sizeStr = self.size.get().strip()
		s = int(sizeStr) if(sizeStr!="" and int(sizeStr)>0) else 3
		self.enter.destroy()
		g = gameWin(self.master, s,self.AI.get())

class gameWin():
	def __init__(self, master, size=3,ai=False):
		self.master = master
		self.size=size
		self.turnCount = 0
		self.moves = 0
		self.nextFirst = 1
		self.board = Frame(master,height=100,width=100)
		self.turn = Label(master)
		self.turn.place(relx=.5, rely=0, anchor='n')
		if ai == True:
			self.players = {0: ("You", "X", 'red'),
							1: ("The AI", "O", 'blue')}
			self.turn.config(text="It's Your turn")

		else:
			self.players = {0: ("Player 1", "X", 'red'),
							1: ("Player 2", "O", 'blue')}
			self.turn.config(text=f"It is {self.players[self.turnCount][0]}'s turn")



		self.buttons = [[gameWin.gameButton(self, (row,col)) for col in range(
			int(self.size))] for row in range(int(self.size))]

		# master.update()
		self.boardHeight = self.board.winfo_reqheight()
		self.boardWidth = self.board.winfo_reqwidth()
		# self.boardHeight = self.board._size[0]
		# self.boardWidth = self.board._size[1]

		# winFunc.centerWindow(self.master, self.boardWidth+60, self.boardHeight+70)

		self.board.place(relx=.5, rely=.55, anchor='center')

		master.mainloop()
	def reset(self):
		setTimeout(lambda: self._reset(),2000)
	def _reset(self):
		self.turnCount = self.nextFirst
		self.moves = 0
		self.nextFirst+=1
		self.nextFirst%=2
		for r in self.buttons:
			for b in r:
				b.config(text = "",state="enabled",background='none',foreground = "white")
				b.played = False
		self.turn.config(text=f"It is {self.players[self.turnCount][0]}'s turn")


	class gameButton(Button):
		def __init__(self, window, coord):
			Button.__init__(self,window.board, command=lambda: self.play())
			self.window = window
			self.coord = coord
			self.grid(row=coord[0], column=coord[1],sticky = "nesw")
			self.played = False
			self.config(background='none',foreground = "white",border="1px solid black")

		def play(self):
			if(self.played):
				return	  
			self.window.moves+=1
			self.played = True	  
			wrongFound = False
			player = self.window.players[self.window.turnCount][0]

			marker = self.window.players[self.window.turnCount][1]
			color = self.window.players[self.window.turnCount][2]
			
			self.config(text=str(marker))
			self.config(state='disabled',
							disabledforeground=color,foreground=color)
			
			toHiglight = None

			# Check in row
			if(self.checkRow(marker)):
				toHiglight = self.window.buttons[self.coord[0]]
			elif(self.checkColumn(marker)):
				toHiglight = [row[self.coord[1]] for row in self.window.buttons]
			elif(self.checkDownDiag(marker)):
				toHiglight = [self.window.buttons[i][i] for i in range(self.window.size)]
			elif(self.checkUpDiag(marker)):
				toHiglight = [self.window.buttons[self.window.size-1-i][i] for i in range(self.window.size)]
			if toHiglight!=None:
				for button in toHiglight:
					button.config(background='green',foreground = "white")
				for row in self.window.buttons:
					for button in row:
						if(not button.played):
							button.configure(state='disabled')
				
				self.window.turn.config(text=f"{player} Won!")
				self.window.reset()
			elif self.window.moves == (self.window.size**2):
				for row in self.window.buttons:
					for button in row:
						if(not button.played):
							button.config(state='disabled',background="red")
				self.window.turn.config(text="It's a draw!")
				self.window.reset()
			else:
				self.window.turnCount += 1
				self.window.turnCount %= 2
				player = self.window.players[self.window.turnCount][0]
				self.window.turn.config(text=f"It is {player}'s turn")

		def checkRow(self,marker): 
			for i in range(self.window.size):
				b=self.window.buttons[self.coord[0]][i]
				if((not b.played) or b.cget("text")!=marker):
					return False
			return True
		def checkColumn(self,marker): 
			for i in range(self.window.size):
				b=self.window.buttons[i][self.coord[1]]
				if((not b.played) or b.cget("text")!=marker):
					return False
			return True
		def checkDownDiag(self,marker): 
			for i in range(self.window.size):
				b=self.window.buttons[i][i]
				if((not b.played) or b.cget("text")!=marker):
					return False
			return True
		def checkUpDiag(self,marker): 
			for i in range(self.window.size):
				b=self.window.buttons[self.window.size-1-i][i]
				if((not b.played) or b.cget("text")!=marker):
					return False
			return True
l = 0
def n():
	root = Tk()
	# root.geometry("350x200")
	settings = settingsWin(root)
	root.window.style.left = 100*l+"px"
	l+=1
	# #

n()
# #
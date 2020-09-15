import tkinter
import random
# import dataFunctions as func
# import windowFunctions as winFunc
# import ToggleButton as tb
# import learning
import time
import math
__pragma__("kwargs")
positions = [(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)]
compassPositions = [positions[i] for i in range(8) if 0 in positions[i]]
colors = {1:"blue" , 2: "green" , 3: "red", 4:"dark blue", 5:"maroon", 6:"teal", 7:"purple", 8:"black"}
classicColor = None
class gameButton(tkinter.Button):
	def __init__(self, board, window = None, length = 10, wid = 10, coord = None,**kw):
		tkinter.Button.__init__(self,board , height = 100/length, width = 100/wid+"%", activebackground = 'grey', command = lambda: self.ifFlagged(window))
		self.isExp = False
		self.flagged = False
		self.len = length
		self.wid = wid
		self.board = board
		self.coord = coord
		self.row = coord[1]
		self.col = coord[0]
		self.window = window
		self.nearExp = 0
		self.flagNum = 0
		self.bind('<Meta-Button-1>', self.flag)
	def ifFlagged(self, window, doNotAdd = []):
		if not self.flagged:
			self.reveal(window, doNotAdd)

	def flag(self,event):
		self.flagNum += 1
		self.flagNum %= 3

		s= self.cget("state")
		if s.lower() != "disabled":
			if self.flagNum == 1:	
				if self.window.flagsUsed < self.window.num:
					self.config(text = self.window.flags[self.flagNum])
					self.flagged = True
			else:
				self.flagged = False
				self.config(text = self.window.flags[self.flagNum])

		self.window.checkWin()

	def reveal(self, window, doNotAdd = []):
		self.uncover = []
		# console.log(self.isExp,doNotAdd)
		if self.isExp:
			console.log("AHHHH")
			if window.firstMove:
				window.firstMove = False
				window.genExplos(toReplace = self)
				self.config(bg = 'grey')

			else:
				window.oldWin.endTime = time.time()
				window.elapsed = math.floor(window.oldWin.endTime- window.oldWin.startTime)
				if window.elapsed > 60:
					window.elapsed = (math.floor(window.elapsed/60), window.elapsed%60,int(window.flagsUsed))
					window.currSeed.config(text = "You lost .;(")
					window.messageLabel.config(text = "\nTime: "+window.elapsed[0]+"min "+window.elapsed[1]+" sec\nExplosves Defused: "+window.num)
					# window.messageLabel.place(relx = .5, rely = 1, anchor = 's')				
				else:
					window.elapsed = (math.floor(window.elapsed%60),int(window.flagsUsed))
					window.currSeed.config(text = "You lost .;(")
					window.messageLabel.config(text = "\nTime: "+window.elapsed+" sec\nExplosves Defused: "+window.num)
					# window.messageLabel.place(relx = .5, rely = 1, anchor = 's')									
				for row in window.buttons:
					for button in row:
						if button.isExp:
							button.config(bg = 'red4', disabledforeground = 'yellow')
						if button.cget("state") != "disabled":
							if button.flagged and not button.isExp:
								button.config(disabledforeground = 'red4')
							button.config(state = "disabled", relief = "raised")
						button.flagged = True
				window.gameOver = True

				self.config(bg='red')
				return		
				

			window.checkWin()	
			return
		else:
			window.buttLeft -=1
			# window.messageLabel.place(relx = .5, rely = 1,relwidth=1, anchor = 's')
		if self.nearExp == 0 and not self.isExp: 
			window.firstMove = False
			for pair in compassPositions:
				if not (self.row+pair[1] < 0 or self.row+pair[1]+1 > self.len or self.col+pair[0] < 0 or self.col+pair[0]+1 > self.wid):
					if (not window.buttons[self.row+pair[1]][self.col+pair[0]].isExp) and (window.buttons[self.row+pair[1]][self.col+pair[0]].nearExp == 0) and (window.buttons[self.row+pair[1]][self.col+pair[0]].coord not in doNotAdd):
						self.uncover.append(window.buttons[self.row+pair[1]][self.col+pair[0]].coord)
			if len(self.uncover) > 0:
				# console.log(self.uncover)
				for item in self.uncover:
					# console.log(item)
					b=window.buttons[item[1]][item[0]]
					if(not b.isExp):
						self.uncover.extend(b.reveal(window, doNotAdd+self.uncover + [self.coord]))

			# console.log(self.uncover,self.coord)
			if doNotAdd == []:
				self.uncover.append(self.coord)
			self.uncover.sort()
			
			for butt in self.uncover:
				for pair in positions:
					if not (butt[1]+pair[1] < 0 or butt[1]+pair[1]+1 > self.len or butt[0]+pair[0] < 0 or butt[0]+pair[0]+1 > self.wid):
						if (not window.buttons[butt[1]+pair[1]][butt[0]+pair[0]].coord in self.uncover) and (window.buttons[butt[1]+pair[1]][butt[0]+pair[0]].nearExp > 0) and (not window.buttons[butt[1]+pair[1]][butt[0]+pair[0]].isExp):
							window.buttons[butt[1]+pair[1]][butt[0]+pair[0]].config(font = ("sans 9 bold"), relief = "flat", state = 'disabled', disabledforeground = colors[window.buttons[butt[1]+pair[1]][butt[0]+pair[0]].nearExp], text = window.buttons[butt[1]+pair[1]][butt[0]+pair[0]].nearExp)
				
			for coord in self.uncover:
				window.buttons[coord[1]][coord[0]].config(relief = "flat", state = 'disabled', text = "")
			window.checkWin()	
			return self.uncover
		
		elif not self.isExp:	
			window.firstMove = False
			self.config(font = ("sans 9 bold"), text = self.nearExp, relief = 'flat', state = 'disabled', disabledforeground = colors[self.nearExp])
			window.checkWin()	
			return self.coord
class settingsWin:
	def __init__(self, master):
		master.maxsize(300,200)
		master.minsize(300,200)
		master.title("ExplosiveClearer")
		self.master = master
		self.random = tkinter.BooleanVar()
		self.seed = 7

		
		self.seedChoose = tkinter.Frame(master, height = 50, width = 280)
		self.label = tkinter.Label(self.seedChoose, text = "Choose your seed:")
		self.label.place(relx = .5, rely = 0, anchor = 'ne')
		self.enter = tkinter.Entry(self.seedChoose)
		self.enter.place(relx = .5, rely = 0, anchor = 'nw')
		#self.change = tkinter.Button(self.seedChoose, text = "Change Seed", command = lambda:self.changeSeed())
		#self.change.place(relx = 1, rely = 1, anchor = 'se')
		self.seedChoose.place(relx = .5, rely = .1, anchor = 'n')

		self.dimensions = tkinter.Frame(master, height = 60, width = 220)
		self.lenLabel = tkinter.Label(self.dimensions, text = "Length:")
		self.lenEntry = tkinter.Entry(self.dimensions, width = 5)
		self.widLabel = tkinter.Label(self.dimensions, text = "Width:")
		self.widEntry = tkinter.Entry(self.dimensions, width = 5)
		self.lenLabel.place(relx = .5, rely = 0, anchor = "ne")
		self.lenEntry.place(relx = .5, rely = 0, anchor = "nw")
		self.widLabel.place(relx = .5, rely = 1, anchor = "se")
		self.widEntry.place(relx = .5, rely = 1, anchor = "sw")
		self.dimensions.place(relx = .5, rely = .6, anchor = "s")

		self.tog = tkinter.Checkbutton(master, text = "Random", variable = self.random)
		self.tog.var = self.random
		self.tog.select()
		self.tog.place(relx = .5, rely = .8, anchor = 's')

		self.startButt = tkinter.Button(master, text = "Start game", command = lambda:self.start())
		self.startButt.place(relx = .5, rely = .9, anchor = 'center')

		master.mainloop()
		self.start()
		
	def start(self):
		if not self.random.get():
			# self.seed = func.retrieveVar('seed', 'saveData.dat')
			random.seed(self.seed)
	
		if self.enter.get() != '':
			self.seed = self.enter.get()

		else:
			pass
			# self.seed = func.retrieveVar('seed', "saveData.dat")
		
		# func.redefineVar('seed', self.seed, 'saveData.dat')
		if self.lenEntry.get() != '':
			self.newLen = self.lenEntry.get()
		else:
			self.newLen = 10
		if self.widEntry.get() != '':
			self.newWid = self.widEntry.get()
		else:
			self.newWid = 10
		self.startTime = time.time()
		runGame = gameWin(self, size = (self.newWid, self.newLen))
class gameWin(tkinter.Tk):
	def __init__(self, oldWin, size = (10,10), num = None):
		tkinter.Tk.__init__(self)
		self.title("Explosive Clearer")
		self.firstMove = True
		self.flags = {0:" ", 1: "X", 2: "?"}
		self.gameOver = False

		self.oldWin = oldWin
		self.len = int(size[0])
		self.wid = int(size[1])
		if num == None:
			self.num = math.floor(self.len * self.wid / 7.3)
		else:
			self.num = num
		self.flagsUsed = self.num
		self.expLeft = self.num
		self.buttLeft = (self.len * self.wid) - self.num
		self.currSeed = tkinter.Label(self)
		self.board = tkinter.Frame(self)
		self.buttons = [[gameButton(board = self.board, length = self.len, wid = self.wid, window = self, coord = (x,y)) for x in range(self.wid)] for y in range(self.len)]
		for row in enumerate(self.buttons):
			for col in enumerate(row[1]):
				col[1].grid(row = row[0], column = col[0])
		self.board.place(relx = .5, rely = .5, relwidth=.5,relheight=0.5, anchor = 'center')

		# self.update()
		self.frameH = self.board.winfo_height()
		self.frameW = self.board.winfo_width()
		# winFunc.centerWindow(master, width = self.frameW + 400, height = self.frameH + 100)
		self.genExplos()
		self.currSeed.config(text = "You\'re playing seed "+self.seed)
		self.currSeed.place(relx = .5, rely = 0, anchor = 'n')
		self.messageLabel = tkinter.Label(self)
		self.checkWin()
		self.messageLabel.place(relx = .5, rely = 1, relwidth=1, anchor = 's')


		self.mainloop()
	def __getattribute__(self,n):
		try:
			return object.__getattribute__(self,n)
		except(AttributeError):
			return tkinter.Tk.__getattribute__(self,n)
		

	def checkWin(self):
		if not self.gameOver:	
			self.flagsUsed = 0
			self.expLeft = 0
			self.buttLeft = 0
			for row in self.buttons:
				for butt in row:
					if not butt.cget("state") == "disabled":
						if not butt.isExp:
							self.buttLeft += 1
						if butt.isExp:
							if not (butt.cget("text") == "X"):
								self.expLeft += 1
					if butt.cget("text") == "X":
						self.flagsUsed += 1
			if self.expLeft == 0 or self.buttLeft == 0:
				self.oldWin.endTime = time.time()
				self.elapsed = math.floor(self.oldWin.endTime- self.oldWin.startTime)
				self.elapsed = (math.floor(self.elapsed/60), self.elapsed%60)
				for child in self.board.winfo_children():
						child.destroy()
				if self.elapsed[0] == 0:
					self.win = tkinter.Label(self.board, text = ("You Won!\nTime: "+self.elapsed[1]+"sec\nExplosives defused: ")+str(int(self.num)))
				else:
					self.win = tkinter.Label(self.board, text = ("You Won!\nTime: "+self.elapsed[0]+"min "+self.elapsed[1]+"sec\nExplosives defused: ")+str(int(self.num)))
				self.win.config(width = 150)
				self.win.place(relx = .5, rely = .5, anchor = 'center')
			else:

				self.messageLabel.config(text = "There are "+int(self.num-self.flagsUsed)+" more flags to place and "+int(self.buttLeft)+" more uncleared spaces.")
				self.messageLabel.place(relx = .5, rely = 1,relwidth=1, anchor = 's')

	def genExplos(self, toReplace = None):
		if not self.oldWin.random.get():
			self.seed = 7
			pass
			# self.seed = func.retrieveVar('seed', 'saveData.dat')
		else:
			self.seed = random.randint(999)
		random.seed(self.seed)		
			
		if toReplace == None:
			console.log(self.buttons)
			self.placing = True
			self.expCount = 0	
			self.placed = []	
			while self.placing:
				expRow = random.randint(0,self.len-1)
				expCol = random.randint(0,self.wid-1)
				console.log(expRow,expCol)
				if (expCol,expRow) not in self.placed:	
					#
					self.buttons[expRow][expCol].isExp = True
					self.buttons[expRow][expCol].config(bg="yellow")
					self.placed.append((expCol,expRow))
					self.expCount += 1

				if self.expCount == self.num:
					self.placing = False
		else:
			self.search = True
			for row in self.buttons:
				for butt in row:
					if not butt.isExp:
						replaceWith = butt
						replaceWith.isExp = True
						toReplace.isExp = False
						self.search = False
						break
				if not self.search:
					break
			for item in enumerate(self.placed):
				if item[1] == toReplace.coord:
					self.placed[item[0]] = replaceWith.coord	
		
		for row in range(self.len):
			for col in range(self.wid):
				self.buttons[row][col].nearExp = 0
				
		for row in range(self.len):
			for col in range(self.wid):
				for pair in positions:
					if row+pair[1] < 0 or row+pair[1]+1 > self.len or col+pair[0] < 0 or col+pair[0]+1 > self.wid:
						pass
					else:
						if self.buttons[row+pair[1]][col+pair[0]].isExp:
							self.buttons[row][col].nearExp +=1	
					 
		'''for row in range(self.len):
			for col in range(self.wid):
				if self.buttons[row][col].isExp:
					pass
				else:
					self.buttons[row][col].config(text = str(self.buttons[row][col].nearExp))'''
__pragma__("nokwargs")
root = tkinter.Tk()
run = settingsWin(root)
# #

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
        master.maxsize(300, 150)
        master.minsize(300, 150)
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

        self.enter.place(relx=.5, rely=.5, anchor='center')

        master.mainloop()

    def start(self):
        game = Tk()
        runGame = gameWin(game, self)
        self.master.destroy()


class gameWin():
    def __init__(self, master, settWin):
        if settWin.size.get() == '':
            settWin.size.set("3")
        print("AI: %s, Size: %s" % (settWin.AI.get(), settWin.size.get()))
        self.settWin = settWin
        self.placed = []
        self.master = master
        self.turnCount = 0
        sizeStr = settWin.size.get().strip()
        self.size = int(sizeStr) if(sizeStr!="" and int(sizeStr)>0) else 3
        self.board = Frame(master)
        self.turn = Label(master)
        self.turn.place(relx=.5, rely=0, anchor='n')
        self.win = False
        if settWin.AI.get() == True:
            self.players = {0: ("You", "X", 'red4'),
                            1: ("The AI", "O", 'blue')}
            self.turn.config(text="It's Your turn")
            print("Sorry, no AI available yet")
        else:
            self.players = {0: ("Player 1", "X", 'red4'),
                            1: ("Player 2", "O", 'blue')}
            self.turn.config(text="It is %s's turn" %
                             self.players[self.turnCount][0])
            print("Grab a friend!")

        self.buttons = [[gameButton(self, coord=(col, row)) for col in range(
            int(self.size))] for row in range(int(self.size))]

        # master.update()
        self.boardHeight = self.board.winfo_reqheight()
        self.boardWidth = self.board.winfo_reqwidth()
        # self.boardHeight = self.board._size[0]
        # self.boardWidth = self.board._size[1]

        # winFunc.centerWindow(self.master, self.boardWidth+60, self.boardHeight+70)

        self.board.place(relx=.5, rely=.55, anchor='center')

        master.mainloop()


class gameButton():
    def __init__(self, window, coord):
        self.window = window
        self.coord = coord
        self.button = Button(
            window.board, width=2, command=lambda: self.play())
        self.button.grid(column=coord[0], row=coord[1])
        self.player = window.players[self.window.turnCount][0]

    def play(self):
        self.toCheck = []
        self.wrongFond = False
        self.player = self.window.players[self.window.turnCount][0]
        print(self.player)
        self.marker = self.window.players[self.window.turnCount][1]
        self.color = self.window.players[self.window.turnCount][2]
        self.button.config(text="%s" % self.marker)
        self.window.placed.append(self.coord)
        self.button.config(state='disabled', relief='raised',
                           disabledforeground=self.color)

        for pair in positions:
            self.direction = []
            for iter in range(self.window.size):
                self.newCol = self.coord[0]+(pair[0]*(iter))
                self.newRow = self.coord[1]+(pair[1]*(iter))
                if (0 <= self.newCol < self.window.size) and (0 <= self.newRow < self.window.size):
                    self.direction.append(
                        self.window.buttons[self.newRow][self.newCol].button)
                self.newCol = self.coord[0]+(pair[0]*(-iter))
                self.newRow = self.coord[1]+(pair[1]*(-iter))
                if (0 <= self.newCol < self.window.size) and (0 <= self.newRow < self.window.size):
                    self.direction.append(
                        self.window.buttons[self.newRow][self.newCol].button)
            self.toCheck.append(self.direction)

        for direction in self.toCheck:
            self.correct = 0
            for label in direction:
                if label.cget('text') == self.marker:
                    self.correct += 1
            if self.correct-1 == self.window.size:
                for button in direction:
                    button.config(disabledforeground='green')
                self.window.win = True
                print("%r Won!" % self.player)
                for child in self.window.board.winfo_children():
                    child.config(state='disabled')
                self.window.turn.config(text="%s Won!" % self.player)
                for y in self.toCheck:
                    for i in y:
                        print(i.cget('text'),)
                return
        if len(self.window.placed) == (self.window.size**2):
            for child in self.window.board.winfo_children():
                child.config(state='disabled')
            self.window.turn.config(text="It's a draw!")
        else:
            if not self.window.win:
                self.window.turnCount += 1
                self.window.turnCount %= 2
                self.player = self.window.players[self.window.turnCount][0]
                if self.player == 'You':
                    pass
            elif self.player == "The AI":
                pass
                # learning.learn(self.window)
            else:
                self.window.turn.config(text="It is %s's turn" % self.player)

# print(Tk)
root = Tk()
settings = settingsWin(root)

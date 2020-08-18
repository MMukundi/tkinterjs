// Transcrypt'ed from Python, 2020-08-17 18:00:13
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {BaseWidget, BooleanVar, Button, Checkbutton, DoubleVar, E, Entry, Frame, GRID, Grid, IntVar, Label, LayoutManager, Misc, N, NE, NW, No, PACK, PLACE, Place, S, SE, SW, StringVar, Tk, Variable, W, Widget, Wm, Yes, _cnfmerge, _default_root, _flatten, _join, _magic_re, _space_re, _stringify, _support_default_root, _toBool} from './tkinter.js';
var __name__ = '__main__';
export var positions = [tuple ([-(1), -(1)]), tuple ([-(1), 0]), tuple ([-(1), 1]), tuple ([0, -(1)]), tuple ([0, 1]), tuple ([1, -(1)]), tuple ([1, 0]), tuple ([1, 1])];
export var compassPositions = (function () {
	var __accu0__ = [];
	for (var i = 0; i < 8; i++) {
		if (__in__ (0, positions [i])) {
			__accu0__.append (positions [i]);
		}
	}
	return __accu0__;
}) ();
export var settingsWin =  __class__ ('settingsWin', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master) {
		master.title ('TicTacToe');
		master.maxsize (300, 150);
		master.minsize (300, 150);
		self.master = master;
		self.enter = Frame (master, __kwargtrans__ ({height: 150, width: 200}));
		self.label = Label (self.enter, __kwargtrans__ ({text: 'Square Grid Size:'}));
		self.label.place (__kwargtrans__ ({relx: 0.5, rely: 0.25, anchor: 'ne'}));
		self.size = StringVar ();
		self.sizeEnter = Entry (self.enter, __kwargtrans__ ({textvariable: self.size}));
		self.sizeEnter.place (__kwargtrans__ ({relx: 0.5, rely: 0.25, anchor: 'nw'}));
		self.AI = BooleanVar ();
		self.askAI = Checkbutton (self.enter, __kwargtrans__ ({variable: self.AI, text: 'AI'}));
		self.askAI.place (__kwargtrans__ ({relx: 0.5, rely: 0.5, anchor: 'center'}));
		self.startButton = Button (self.enter, __kwargtrans__ ({text: 'Start', command: self.start}));
		self.startButton.place (__kwargtrans__ ({relx: 0.5, rely: 0.75, anchor: 'center'}));
		self.enter.place (__kwargtrans__ ({relx: 0.5, rely: 0.5, anchor: 'center'}));
		master.mainloop ();
	});},
	get start () {return __get__ (this, function (self) {
		var game = Tk ();
		var runGame = gameWin (game, self);
		self.master.destroy ();
	});}
});
export var gameWin =  __class__ ('gameWin', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, settWin) {
		if (settWin.size.py_get () == '') {
			settWin.size.set ('3');
		}
		print (__mod__ ('AI: %s, Size: %s', tuple ([settWin.AI.py_get (), settWin.size.py_get ()])));
		self.settWin = settWin;
		self.placed = [];
		self.master = master;
		self.turnCount = 0;
		var sizeStr = settWin.size.py_get ().strip ();
		self.size = (sizeStr != '' && int (sizeStr) > 0 ? int (sizeStr) : 3);
		self.board = Frame (master);
		self.turn = Label (master);
		self.turn.place (__kwargtrans__ ({relx: 0.5, rely: 0, anchor: 'n'}));
		self.win = false;
		if (settWin.AI.py_get () == true) {
			self.players = dict ({0: tuple (['You', 'X', 'red4']), 1: tuple (['The AI', 'O', 'blue'])});
			self.turn.config (__kwargtrans__ ({text: "It's Your turn"}));
			print ('Sorry, no AI available yet');
		}
		else {
			self.players = dict ({0: tuple (['Player 1', 'X', 'red4']), 1: tuple (['Player 2', 'O', 'blue'])});
			self.turn.config (__kwargtrans__ ({text: __mod__ ("It is %s's turn", self.players [self.turnCount] [0])}));
			print ('Grab a friend!');
		}
		self.buttons = (function () {
			var __accu0__ = [];
			for (var row = 0; row < int (self.size); row++) {
				__accu0__.append ((function () {
					var __accu1__ = [];
					for (var col = 0; col < int (self.size); col++) {
						__accu1__.append (gameButton (self, __kwargtrans__ ({coord: tuple ([col, row])})));
					}
					return __accu1__;
				}) ());
			}
			return __accu0__;
		}) ();
		self.boardHeight = self.board.winfo_reqheight ();
		self.boardWidth = self.board.winfo_reqwidth ();
		self.board.place (__kwargtrans__ ({relx: 0.5, rely: 0.55, anchor: 'center'}));
		master.mainloop ();
	});}
});
export var gameButton =  __class__ ('gameButton', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, window, coord) {
		self.window = window;
		self.coord = coord;
		self.button = Button (window.board, __kwargtrans__ ({width: 2, command: (function __lambda__ () {
			return self.play ();
		})}));
		self.button.grid (__kwargtrans__ ({column: coord [0], row: coord [1]}));
		self.player = window.players [self.window.turnCount] [0];
	});},
	get play () {return __get__ (this, function (self) {
		self.toCheck = [];
		self.wrongFond = false;
		self.player = self.window.players [self.window.turnCount] [0];
		print (self.player);
		self.marker = self.window.players [self.window.turnCount] [1];
		self.color = self.window.players [self.window.turnCount] [2];
		self.button.config (__kwargtrans__ ({text: __mod__ ('%s', self.marker)}));
		self.window.placed.append (self.coord);
		self.button.config (__kwargtrans__ ({state: 'disabled', relief: 'raised', disabledforeground: self.color}));
		for (var pair of positions) {
			self.direction = [];
			for (var py_iter = 0; py_iter < self.window.size; py_iter++) {
				self.newCol = self.coord [0] + pair [0] * py_iter;
				self.newRow = self.coord [1] + pair [1] * py_iter;
				if ((0 <= self.newCol && self.newCol < self.window.size) && (0 <= self.newRow && self.newRow < self.window.size)) {
					self.direction.append (self.window.buttons [self.newRow] [self.newCol].button);
				}
				self.newCol = self.coord [0] + pair [0] * -(py_iter);
				self.newRow = self.coord [1] + pair [1] * -(py_iter);
				if ((0 <= self.newCol && self.newCol < self.window.size) && (0 <= self.newRow && self.newRow < self.window.size)) {
					self.direction.append (self.window.buttons [self.newRow] [self.newCol].button);
				}
			}
			self.toCheck.append (self.direction);
		}
		for (var direction of self.toCheck) {
			self.correct = 0;
			for (var label of direction) {
				if (label.cget ('text') == self.marker) {
					self.correct++;
				}
			}
			if (self.correct - 1 == self.window.size) {
				for (var button of direction) {
					button.config (__kwargtrans__ ({disabledforeground: 'green'}));
				}
				self.window.win = true;
				print (__mod__ ('%r Won!', self.player));
				for (var child of self.window.board.winfo_children ()) {
					child.config (__kwargtrans__ ({state: 'disabled'}));
				}
				self.window.turn.config (__kwargtrans__ ({text: __mod__ ('%s Won!', self.player)}));
				for (var y of self.toCheck) {
					for (var i of y) {
						print (i.cget ('text'));
					}
				}
				return ;
			}
		}
		if (len (self.window.placed) == Math.pow (self.window.size, 2)) {
			for (var child of self.window.board.winfo_children ()) {
				child.config (__kwargtrans__ ({state: 'disabled'}));
			}
			self.window.turn.config (__kwargtrans__ ({text: "It's a draw!"}));
		}
		else if (!(self.window.win)) {
			self.window.turnCount++;
			self.window.turnCount = __mod__ (self.window.turnCount, 2);
			self.player = self.window.players [self.window.turnCount] [0];
			if (self.player == 'You') {
				// pass;
			}
		}
		else if (self.player == 'The AI') {
			// pass;
		}
		else {
			self.window.turn.config (__kwargtrans__ ({text: __mod__ ("It is %s's turn", self.player)}));
		}
	});}
});
export var root = Tk ();
export var settings = settingsWin (root);

//# sourceMappingURL=tictac.map
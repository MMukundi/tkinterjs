// Transcrypt'ed from Python, 2020-08-20 03:03:19
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {BaseWidget, BooleanVar, Button, Checkbutton, DoubleVar, Entry, Frame, Grid, IntVar, Label, LayoutManager, Misc, Place, StringVar, Tk, Variable, Widget, Wm, _dynamic_styles} from './tkinter.js';
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
		var sizeStr = self.size.py_get ().strip ();
		var s = (sizeStr != '' && int (sizeStr) > 0 ? int (sizeStr) : 3);
		self.enter.destroy ();
		var g = gameWin (self.master, s, self.AI.py_get ());
	});}
});
export var gameWin =  __class__ ('gameWin', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, size, ai) {
		if (typeof size == 'undefined' || (size != null && size.hasOwnProperty ("__kwargtrans__"))) {;
			var size = 3;
		};
		if (typeof ai == 'undefined' || (ai != null && ai.hasOwnProperty ("__kwargtrans__"))) {;
			var ai = false;
		};
		self.master = master;
		self.size = size;
		self.turnCount = 0;
		self.moves = 0;
		self.nextFirst = 1;
		self.board = Frame (master, __kwargtrans__ ({height: 100, width: 100}));
		self.turn = Label (master);
		self.turn.place (__kwargtrans__ ({relx: 0.5, rely: 0, anchor: 'n'}));
		if (ai == true) {
			self.players = dict ({0: tuple (['You', 'X', 'red']), 1: tuple (['The AI', 'O', 'blue'])});
			self.turn.config (__kwargtrans__ ({text: "It's Your turn"}));
		}
		else {
			self.players = dict ({0: tuple (['Player 1', 'X', 'red']), 1: tuple (['Player 2', 'O', 'blue'])});
			self.turn.config (__kwargtrans__ ({text: "It is {}'s turn".format (self.players [self.turnCount] [0])}));
		}
		self.buttons = (function () {
			var __accu0__ = [];
			for (var row = 0; row < int (self.size); row++) {
				__accu0__.append ((function () {
					var __accu1__ = [];
					for (var col = 0; col < int (self.size); col++) {
						__accu1__.append (gameWin.gameButton (self, tuple ([row, col])));
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
	});},
	get reset () {return __get__ (this, function (self) {
		setTimeout ((function __lambda__ () {
			return self._reset ();
		}), 2000);
	});},
	get _reset () {return __get__ (this, function (self) {
		self.turnCount = self.nextFirst;
		self.moves = 0;
		self.nextFirst++;
		self.nextFirst = __mod__ (self.nextFirst, 2);
		for (var r of self.buttons) {
			for (var b of r) {
				b.config (__kwargtrans__ ({text: '', state: 'enabled', background: 'none', foreground: 'white'}));
				b.played = false;
			}
		}
		self.turn.config (__kwargtrans__ ({text: "It is {}'s turn".format (self.players [self.turnCount] [0])}));
	});},
	gameButton: __class__ ('gameButton', [Button], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, window, coord) {
			Button.__init__ (self, window.board, __kwargtrans__ ({command: (function __lambda__ () {
				return self.play ();
			})}));
			self.window = window;
			self.coord = coord;
			self.grid (__kwargtrans__ ({row: coord [0], column: coord [1], sticky: 'nesw'}));
			self.played = false;
			self.config (__kwargtrans__ ({background: 'none', foreground: 'white', border: '1px solid black'}));
		});},
		get play () {return __get__ (this, function (self) {
			if (self.played) {
				return ;
			}
			self.window.moves++;
			self.played = true;
			var wrongFound = false;
			var player = self.window.players [self.window.turnCount] [0];
			var marker = self.window.players [self.window.turnCount] [1];
			var color = self.window.players [self.window.turnCount] [2];
			self.config (__kwargtrans__ ({text: str (marker)}));
			self.config (__kwargtrans__ ({state: 'disabled', disabledforeground: color, foreground: color}));
			var toHiglight = null;
			if (self.checkRow (marker)) {
				var toHiglight = self.window.buttons [self.coord [0]];
			}
			else if (self.checkColumn (marker)) {
				var toHiglight = (function () {
					var __accu0__ = [];
					for (var row of self.window.buttons) {
						__accu0__.append (row [self.coord [1]]);
					}
					return __accu0__;
				}) ();
			}
			else if (self.checkDownDiag (marker)) {
				var toHiglight = (function () {
					var __accu0__ = [];
					for (var i = 0; i < self.window.size; i++) {
						__accu0__.append (self.window.buttons [i] [i]);
					}
					return __accu0__;
				}) ();
			}
			else if (self.checkUpDiag (marker)) {
				var toHiglight = (function () {
					var __accu0__ = [];
					for (var i = 0; i < self.window.size; i++) {
						__accu0__.append (self.window.buttons [(self.window.size - 1) - i] [i]);
					}
					return __accu0__;
				}) ();
			}
			print (self.window.moves, self.window.moves == Math.pow (self.window.size, 2));
			if (toHiglight != null) {
				for (var button of toHiglight) {
					button.config (__kwargtrans__ ({background: 'green', foreground: 'white'}));
				}
				for (var row of self.window.buttons) {
					for (var button of row) {
						if (!(button.played)) {
							button.configure (__kwargtrans__ ({state: 'disabled'}));
						}
					}
				}
				self.window.turn.config (__kwargtrans__ ({text: '{} Won!'.format (player)}));
				self.window.reset ();
			}
			else if (self.window.moves == Math.pow (self.window.size, 2)) {
				for (var row of self.window.buttons) {
					for (var button of row) {
						if (!(button.played)) {
							button.config (__kwargtrans__ ({state: 'disabled', background: 'red'}));
						}
					}
				}
				self.window.turn.config (__kwargtrans__ ({text: "It's a draw!"}));
				self.window.reset ();
			}
			else {
				self.window.turnCount++;
				self.window.turnCount = __mod__ (self.window.turnCount, 2);
				var player = self.window.players [self.window.turnCount] [0];
				self.window.turn.config (__kwargtrans__ ({text: "It is {}'s turn".format (player)}));
			}
		});},
		get checkRow () {return __get__ (this, function (self, marker) {
			for (var i = 0; i < self.window.size; i++) {
				var b = self.window.buttons [self.coord [0]] [i];
				if (!(b.played) || b.cget ('text') != marker) {
					return false;
				}
			}
			return true;
		});},
		get checkColumn () {return __get__ (this, function (self, marker) {
			for (var i = 0; i < self.window.size; i++) {
				var b = self.window.buttons [i] [self.coord [1]];
				if (!(b.played) || b.cget ('text') != marker) {
					return false;
				}
			}
			return true;
		});},
		get checkDownDiag () {return __get__ (this, function (self, marker) {
			for (var i = 0; i < self.window.size; i++) {
				var b = self.window.buttons [i] [i];
				if (!(b.played) || b.cget ('text') != marker) {
					return false;
				}
			}
			return true;
		});},
		get checkUpDiag () {return __get__ (this, function (self, marker) {
			for (var i = 0; i < self.window.size; i++) {
				var b = self.window.buttons [(self.window.size - 1) - i] [i];
				if (!(b.played) || b.cget ('text') != marker) {
					return false;
				}
			}
			return true;
		});}
	})
});
export var l = 0;
export var n = function () {
	var root = Tk ();
	var settings = settingsWin (root);
	root.window.style.left = '{}px'.format (100 * l);
	l++;
};
n ();

//# sourceMappingURL=tictac.map
// Transcrypt'ed from Python, 2020-09-14 22:32:38
var math = {};
var random = {};
var time = {};
var tkinter = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
import * as __module_time__ from './time.js';
__nest__ (time, '', __module_time__);
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import * as __module_tkinter__ from './tkinter.js';
__nest__ (tkinter, '', __module_tkinter__);
var __name__ = 'mines';
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
export var colors = dict ([[1, 'blue'], [2, 'green'], [3, 'red'], [4, 'dark blue'], [5, 'maroon'], [6, 'teal'], [7, 'purple'], [8, 'black']]);
export var classicColor = null;
export var gameButton =  __class__ ('gameButton', [tkinter.Button], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, board, window, length, wid, coord) {
		if (typeof window == 'undefined' || (window != null && window.hasOwnProperty ("__kwargtrans__"))) {;
			var window = null;
		};
		if (typeof length == 'undefined' || (length != null && length.hasOwnProperty ("__kwargtrans__"))) {;
			var length = 10;
		};
		if (typeof wid == 'undefined' || (wid != null && wid.hasOwnProperty ("__kwargtrans__"))) {;
			var wid = 10;
		};
		if (typeof coord == 'undefined' || (coord != null && coord.hasOwnProperty ("__kwargtrans__"))) {;
			var coord = null;
		};
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'board': var board = __allkwargs0__ [__attrib0__]; break;
						case 'window': var window = __allkwargs0__ [__attrib0__]; break;
						case 'length': var length = __allkwargs0__ [__attrib0__]; break;
						case 'wid': var wid = __allkwargs0__ [__attrib0__]; break;
						case 'coord': var coord = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		tkinter.Button.__init__ (self, board, __kwargtrans__ ({height: 100 / length, width: 100 / wid + '%', activebackground: 'grey', command: (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.ifFlagged (window);
		})}));
		self.isExp = false;
		self.flagged = false;
		self.len = length;
		self.wid = wid;
		self.board = board;
		self.coord = coord;
		self.row = coord [1];
		self.col = coord [0];
		self.window = window;
		self.nearExp = 0;
		self.flagNum = 0;
		self.bind ('<Meta-Button-1>', self.flag);
	});},
	get ifFlagged () {return __get__ (this, function (self, window, doNotAdd) {
		if (typeof doNotAdd == 'undefined' || (doNotAdd != null && doNotAdd.hasOwnProperty ("__kwargtrans__"))) {;
			var doNotAdd = [];
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'window': var window = __allkwargs0__ [__attrib0__]; break;
						case 'doNotAdd': var doNotAdd = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(self.flagged)) {
			self.reveal (window, doNotAdd);
		}
	});},
	get flag () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.flagNum += 1;
		self.flagNum = __mod__ (self.flagNum, 3);
		var s = self.cget ('state');
		if (s.lower () != 'disabled') {
			if (self.flagNum == 1) {
				if (self.window.flagsUsed < self.window.num) {
					self.config (__kwargtrans__ ({text: self.window.flags [self.flagNum]}));
					self.flagged = true;
				}
			}
			else {
				self.flagged = false;
				self.config (__kwargtrans__ ({text: self.window.flags [self.flagNum]}));
			}
		}
		self.window.checkWin ();
	});},
	get reveal () {return __get__ (this, function (self, window, doNotAdd) {
		if (typeof doNotAdd == 'undefined' || (doNotAdd != null && doNotAdd.hasOwnProperty ("__kwargtrans__"))) {;
			var doNotAdd = [];
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'window': var window = __allkwargs0__ [__attrib0__]; break;
						case 'doNotAdd': var doNotAdd = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.uncover = [];
		if (self.isExp) {
			console.log ('AHHHH');
			if (window.firstMove) {
				window.firstMove = false;
				window.genExplos (__kwargtrans__ ({toReplace: self}));
				self.config (__kwargtrans__ ({bg: 'grey'}));
			}
			else {
				window.oldWin.endTime = time.time ();
				window.elapsed = math.floor (window.oldWin.endTime - window.oldWin.startTime);
				if (window.elapsed > 60) {
					window.elapsed = tuple ([math.floor (window.elapsed / 60), __mod__ (window.elapsed, 60), int (window.flagsUsed)]);
					window.currSeed.config (__kwargtrans__ ({text: 'You lost .;('}));
					window.messageLabel.config (__kwargtrans__ ({text: (((('\nTime: ' + window.elapsed [0]) + 'min ') + window.elapsed [1]) + ' sec\nExplosves Defused: ') + window.num}));
				}
				else {
					window.elapsed = tuple ([math.floor (__mod__ (window.elapsed, 60)), int (window.flagsUsed)]);
					window.currSeed.config (__kwargtrans__ ({text: 'You lost .;('}));
					window.messageLabel.config (__kwargtrans__ ({text: (('\nTime: ' + window.elapsed) + ' sec\nExplosves Defused: ') + window.num}));
				}
				for (var row of window.buttons) {
					for (var button of row) {
						if (button.isExp) {
							button.config (__kwargtrans__ ({bg: 'red4', disabledforeground: 'yellow'}));
						}
						if (button.cget ('state') != 'disabled') {
							if (button.flagged && !(button.isExp)) {
								button.config (__kwargtrans__ ({disabledforeground: 'red4'}));
							}
							button.config (__kwargtrans__ ({state: 'disabled', relief: 'raised'}));
						}
						button.flagged = true;
					}
				}
				window.gameOver = true;
				self.config (__kwargtrans__ ({bg: 'red'}));
				return ;
			}
			window.checkWin ();
			return ;
		}
		else {
			window.buttLeft -= 1;
		}
		if (self.nearExp == 0 && !(self.isExp)) {
			window.firstMove = false;
			for (var pair of compassPositions) {
				if (!(self.row + pair [1] < 0 || (self.row + pair [1]) + 1 > self.len || self.col + pair [0] < 0 || (self.col + pair [0]) + 1 > self.wid)) {
					if (!(window.buttons [self.row + pair [1]] [self.col + pair [0]].isExp) && window.buttons [self.row + pair [1]] [self.col + pair [0]].nearExp == 0 && !__in__ (window.buttons [self.row + pair [1]] [self.col + pair [0]].coord, doNotAdd)) {
						self.uncover.append (window.buttons [self.row + pair [1]] [self.col + pair [0]].coord);
					}
				}
			}
			if (len (self.uncover) > 0) {
				for (var item of self.uncover) {
					var b = window.buttons [item [1]] [item [0]];
					if (!(b.isExp)) {
						self.uncover.extend (b.reveal (window, (doNotAdd + self.uncover) + [self.coord]));
					}
				}
			}
			if (doNotAdd == []) {
				self.uncover.append (self.coord);
			}
			self.uncover.py_sort ();
			for (var butt of self.uncover) {
				for (var pair of positions) {
					if (!(butt [1] + pair [1] < 0 || (butt [1] + pair [1]) + 1 > self.len || butt [0] + pair [0] < 0 || (butt [0] + pair [0]) + 1 > self.wid)) {
						if (!(__in__ (window.buttons [butt [1] + pair [1]] [butt [0] + pair [0]].coord, self.uncover)) && window.buttons [butt [1] + pair [1]] [butt [0] + pair [0]].nearExp > 0 && !(window.buttons [butt [1] + pair [1]] [butt [0] + pair [0]].isExp)) {
							window.buttons [butt [1] + pair [1]] [butt [0] + pair [0]].config (__kwargtrans__ ({font: 'sans 9 bold', relief: 'flat', state: 'disabled', disabledforeground: colors [window.buttons [butt [1] + pair [1]] [butt [0] + pair [0]].nearExp], text: window.buttons [butt [1] + pair [1]] [butt [0] + pair [0]].nearExp}));
						}
					}
				}
			}
			for (var coord of self.uncover) {
				window.buttons [coord [1]] [coord [0]].config (__kwargtrans__ ({relief: 'flat', state: 'disabled', text: ''}));
			}
			window.checkWin ();
			return self.uncover;
		}
		else if (!(self.isExp)) {
			window.firstMove = false;
			self.config (__kwargtrans__ ({font: 'sans 9 bold', text: self.nearExp, relief: 'flat', state: 'disabled', disabledforeground: colors [self.nearExp]}));
			window.checkWin ();
			return self.coord;
		}
	});}
});
export var settingsWin =  __class__ ('settingsWin', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		master.maxsize (300, 200);
		master.minsize (300, 200);
		master.title ('ExplosiveClearer');
		self.master = master;
		self.random = tkinter.BooleanVar ();
		self.seed = 7;
		self.seedChoose = tkinter.Frame (master, __kwargtrans__ ({height: 50, width: 280}));
		self.label = tkinter.Label (self.seedChoose, __kwargtrans__ ({text: 'Choose your seed:'}));
		self.label.place (__kwargtrans__ ({relx: 0.5, rely: 0, anchor: 'ne'}));
		self.enter = tkinter.Entry (self.seedChoose);
		self.enter.place (__kwargtrans__ ({relx: 0.5, rely: 0, anchor: 'nw'}));
		self.seedChoose.place (__kwargtrans__ ({relx: 0.5, rely: 0.1, anchor: 'n'}));
		self.dimensions = tkinter.Frame (master, __kwargtrans__ ({height: 60, width: 220}));
		self.lenLabel = tkinter.Label (self.dimensions, __kwargtrans__ ({text: 'Length:'}));
		self.lenEntry = tkinter.Entry (self.dimensions, __kwargtrans__ ({width: 5}));
		self.widLabel = tkinter.Label (self.dimensions, __kwargtrans__ ({text: 'Width:'}));
		self.widEntry = tkinter.Entry (self.dimensions, __kwargtrans__ ({width: 5}));
		self.lenLabel.place (__kwargtrans__ ({relx: 0.5, rely: 0, anchor: 'ne'}));
		self.lenEntry.place (__kwargtrans__ ({relx: 0.5, rely: 0, anchor: 'nw'}));
		self.widLabel.place (__kwargtrans__ ({relx: 0.5, rely: 1, anchor: 'se'}));
		self.widEntry.place (__kwargtrans__ ({relx: 0.5, rely: 1, anchor: 'sw'}));
		self.dimensions.place (__kwargtrans__ ({relx: 0.5, rely: 0.6, anchor: 's'}));
		self.tog = tkinter.Checkbutton (master, __kwargtrans__ ({text: 'Random', variable: self.random}));
		self.tog.var = self.random;
		self.tog.select ();
		self.tog.place (__kwargtrans__ ({relx: 0.5, rely: 0.8, anchor: 's'}));
		self.startButt = tkinter.Button (master, __kwargtrans__ ({text: 'Start game', command: (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.start ();
		})}));
		self.startButt.place (__kwargtrans__ ({relx: 0.5, rely: 0.9, anchor: 'center'}));
		master.mainloop ();
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(self.random.py_get ())) {
			random.seed (self.seed);
		}
		if (self.enter.py_get () != '') {
			self.seed = self.enter.py_get ();
		}
		else {
			// pass;
		}
		if (self.lenEntry.py_get () != '') {
			self.newLen = self.lenEntry.py_get ();
		}
		else {
			self.newLen = 10;
		}
		if (self.widEntry.py_get () != '') {
			self.newWid = self.widEntry.py_get ();
		}
		else {
			self.newWid = 10;
		}
		self.startTime = time.time ();
		var runGame = gameWin (self, __kwargtrans__ ({size: tuple ([self.newWid, self.newLen])}));
	});}
});
export var gameWin =  __class__ ('gameWin', [tkinter.Tk], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, oldWin, size, num) {
		if (typeof size == 'undefined' || (size != null && size.hasOwnProperty ("__kwargtrans__"))) {;
			var size = tuple ([10, 10]);
		};
		if (typeof num == 'undefined' || (num != null && num.hasOwnProperty ("__kwargtrans__"))) {;
			var num = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'oldWin': var oldWin = __allkwargs0__ [__attrib0__]; break;
						case 'size': var size = __allkwargs0__ [__attrib0__]; break;
						case 'num': var num = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		tkinter.Tk.__init__ (self);
		self.title ('Explosive Clearer');
		self.firstMove = true;
		self.flags = dict ([[0, ' '], [1, 'X'], [2, '?']]);
		self.gameOver = false;
		self.oldWin = oldWin;
		self.len = int (size [0]);
		self.wid = int (size [1]);
		if (num == null) {
			self.num = math.floor ((self.len * self.wid) / 7.3);
		}
		else {
			self.num = num;
		}
		self.flagsUsed = self.num;
		self.expLeft = self.num;
		self.buttLeft = self.len * self.wid - self.num;
		self.currSeed = tkinter.Label (self);
		self.board = tkinter.Frame (self);
		self.buttons = (function () {
			var __accu0__ = [];
			for (var y = 0; y < self.len; y++) {
				__accu0__.append ((function () {
					var __accu1__ = [];
					for (var x = 0; x < self.wid; x++) {
						__accu1__.append (gameButton (__kwargtrans__ ({board: self.board, length: self.len, wid: self.wid, window: self, coord: tuple ([x, y])})));
					}
					return __accu1__;
				}) ());
			}
			return __accu0__;
		}) ();
		for (var row of enumerate (self.buttons)) {
			for (var col of enumerate (row [1])) {
				col [1].grid (__kwargtrans__ ({row: row [0], column: col [0]}));
			}
		}
		self.board.place (__kwargtrans__ ({relx: 0.5, rely: 0.5, relwidth: 0.5, relheight: 0.5, anchor: 'center'}));
		self.frameH = self.board.winfo_height ();
		self.frameW = self.board.winfo_width ();
		self.genExplos ();
		self.currSeed.config (__kwargtrans__ ({text: "You're playing seed " + self.seed}));
		self.currSeed.place (__kwargtrans__ ({relx: 0.5, rely: 0, anchor: 'n'}));
		self.messageLabel = tkinter.Label (self);
		self.checkWin ();
		self.messageLabel.place (__kwargtrans__ ({relx: 0.5, rely: 1, relwidth: 1, anchor: 's'}));
		self.mainloop ();
	});},
	get __getattribute__ () {return __get__ (this, function (self, n) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		try {
			return object.__getattribute__ (self, n);
		}
		catch (__except0__) {
			if (isinstance (__except0__, AttributeError)) {
				return tkinter.Tk.__getattribute__ (self, n);
			}
			else {
				throw __except0__;
			}
		}
	});},
	get checkWin () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(self.gameOver)) {
			self.flagsUsed = 0;
			self.expLeft = 0;
			self.buttLeft = 0;
			for (var row of self.buttons) {
				for (var butt of row) {
					if (!(butt.cget ('state') == 'disabled')) {
						if (!(butt.isExp)) {
							self.buttLeft += 1;
						}
						if (butt.isExp) {
							if (!(butt.cget ('text') == 'X')) {
								self.expLeft += 1;
							}
						}
					}
					if (butt.cget ('text') == 'X') {
						self.flagsUsed += 1;
					}
				}
			}
			if (self.expLeft == 0 || self.buttLeft == 0) {
				self.oldWin.endTime = time.time ();
				self.elapsed = math.floor (self.oldWin.endTime - self.oldWin.startTime);
				self.elapsed = tuple ([math.floor (self.elapsed / 60), __mod__ (self.elapsed, 60)]);
				for (var child of self.board.winfo_children ()) {
					child.destroy ();
				}
				if (self.elapsed [0] == 0) {
					self.win = tkinter.Label (self.board, __kwargtrans__ ({text: (('You Won!\nTime: ' + self.elapsed [1]) + 'sec\nExplosives defused: ') + str (int (self.num))}));
				}
				else {
					self.win = tkinter.Label (self.board, __kwargtrans__ ({text: (((('You Won!\nTime: ' + self.elapsed [0]) + 'min ') + self.elapsed [1]) + 'sec\nExplosives defused: ') + str (int (self.num))}));
				}
				self.win.config (__kwargtrans__ ({width: 150}));
				self.win.place (__kwargtrans__ ({relx: 0.5, rely: 0.5, anchor: 'center'}));
			}
			else {
				self.messageLabel.config (__kwargtrans__ ({text: ((('There are ' + int (self.num - self.flagsUsed)) + ' more flags to place and ') + int (self.buttLeft)) + ' more uncleared spaces.'}));
				self.messageLabel.place (__kwargtrans__ ({relx: 0.5, rely: 1, relwidth: 1, anchor: 's'}));
			}
		}
	});},
	get genExplos () {return __get__ (this, function (self, toReplace) {
		if (typeof toReplace == 'undefined' || (toReplace != null && toReplace.hasOwnProperty ("__kwargtrans__"))) {;
			var toReplace = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'toReplace': var toReplace = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(self.oldWin.random.py_get ())) {
			self.seed = 7;
			// pass;
		}
		else {
			self.seed = random.randint (999);
		}
		random.seed (self.seed);
		if (toReplace == null) {
			console.log (self.buttons);
			self.placing = true;
			self.expCount = 0;
			self.placed = [];
			while (self.placing) {
				var expRow = random.randint (0, self.len - 1);
				var expCol = random.randint (0, self.wid - 1);
				console.log (expRow, expCol);
				if (!__in__ (tuple ([expCol, expRow]), self.placed)) {
					self.buttons [expRow] [expCol].isExp = true;
					self.buttons [expRow] [expCol].config (__kwargtrans__ ({bg: 'yellow'}));
					self.placed.append (tuple ([expCol, expRow]));
					self.expCount += 1;
				}
				if (self.expCount == self.num) {
					self.placing = false;
				}
			}
		}
		else {
			self.search = true;
			for (var row of self.buttons) {
				for (var butt of row) {
					if (!(butt.isExp)) {
						var replaceWith = butt;
						replaceWith.isExp = true;
						toReplace.isExp = false;
						self.search = false;
						break;
					}
				}
				if (!(self.search)) {
					break;
				}
			}
			for (var item of enumerate (self.placed)) {
				if (item [1] == toReplace.coord) {
					self.placed [item [0]] = replaceWith.coord;
				}
			}
		}
		for (var row = 0; row < self.len; row++) {
			for (var col = 0; col < self.wid; col++) {
				self.buttons [row] [col].nearExp = 0;
			}
		}
		for (var row = 0; row < self.len; row++) {
			for (var col = 0; col < self.wid; col++) {
				for (var pair of positions) {
					if (row + pair [1] < 0 || (row + pair [1]) + 1 > self.len || col + pair [0] < 0 || (col + pair [0]) + 1 > self.wid) {
						// pass;
					}
					else if (self.buttons [row + pair [1]] [col + pair [0]].isExp) {
						self.buttons [row] [col].nearExp += 1;
					}
				}
			}
		}
	});}
});
export var root = tkinter.Tk ();
export var run = settingsWin (root);

//# sourceMappingURL=mines.map
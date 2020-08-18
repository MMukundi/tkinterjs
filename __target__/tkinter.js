// Transcrypt'ed from Python, 2020-08-17 18:00:13
var re = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
import {} from './helperFunc.js';
var __name__ = 'tkinter';
export var _support_default_root = 1;
export var _default_root = null;
export var N = 'n';
export var NE = 'ne';
export var E = 'e';
export var SE = 'se';
export var S = 's';
export var SW = 'sw';
export var W = 'w';
export var NW = 'nw';
export var Yes = 'yes';
export var No = 'no';
export var GRID = 'grid';
export var PACK = 'pack';
export var PLACE = 'place';
export var _join = function (value) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	return ' '.join (map (_stringify, value));
};
export var _stringify = function (value) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (isinstance (value, tuple ([list, tuple]))) {
		if (len (value) == 1) {
			var value = _stringify (value [0]);
			if (_magic_re.search (value)) {
				var value = __mod__ ('{%s}', value);
			}
		}
		else {
			var value = __mod__ ('{%s}', _join (value));
		}
	}
	else {
		var value = str (value);
		if (!(value)) {
			var value = '{}';
		}
		else if (_magic_re.search (value)) {
			var value = _magic_re.sub ('\\\\\\1', value);
			var value = value.py_replace ('\n', '\\n');
			var value = _space_re.sub ('\\\\\\1', value);
			if (value [0] == '"') {
				var value = '\\' + value;
			}
		}
		else if (value [0] == '"' || _space_re.search (value)) {
			var value = __mod__ ('{%s}', value);
		}
	}
	return value;
};
export var _flatten = function (seq) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'seq': var seq = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var res = tuple ([]);
	for (var item in seq) {
		if (isinstance (item, tuple ([tuple, list]))) {
			var res = res + _flatten (item);
		}
		else if (item !== null) {
			var res = res + tuple ([item]);
		}
	}
	return res;
};
export var _cnfmerge = function (cnfs) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'cnfs': var cnfs = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (isinstance (cnfs, dict)) {
		return cnfs;
	}
	else if (isinstance (cnfs, tuple ([py_typeof (null), str]))) {
		return cnfs;
	}
	else {
		var cnf = {};
		for (var c in _flatten (cnfs)) {
			try {
				cnf.py_update (c);
			}
			catch (__except0__) {
				if (isinstance (__except0__, tuple ([AttributeError, py_TypeError]))) {
					var msg = __except0__;
					print ('_cnfmerge: fallback due to:', msg);
					for (var i in c.py_items ()) {
						var k = i [0];
						var v = i [1];
						cnf [k] = v;
					}
				}
				else {
					throw __except0__;
				}
			}
		}
		return cnf;
	}
};
export var _magic_re = re.compile ('([\\\\{}])');
export var _space_re = re.compile ('([\\s])', re.ASCII);
var _support_default_root = 1;
var _default_root = null;
export var _toBool = function (v) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'v': var v = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	return v != null && (v == 'yes' || v == 1 || v == true);
};
export var LayoutManager =  __class__ ('LayoutManager', [object], {
	__module__: __name__,
	get _addToMaster () {return __get__ (this, function (self) {
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
		self.master.element.appendChild (self.element);
		self.master._children.append (self);
	});}
});
export var Grid =  __class__ ('Grid', [LayoutManager], {
	__module__: __name__,
	master: null,
	element: null,
	get __setupGrid__ () {return __get__ (this, function (self) {
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
		self.nextRow = 0;
		self.occupiedRows = set ();
		self.columns = 1;
		if (self.master.layoutMethod == null) {
			self.master.layoutMethod = GRID;
			self.master.element.classList.add ('grid');
		}
		else if (self.master.layoutMethod != GRID) {
			var __except0__ = Exception ('Cannot use grid with an element in {} mode'.format (self.master.layoutMethod));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get grid () {return __get__ (this, function (self, column, columnspan, in_, ipadx, ipady, padx, pady, row, rowspan, sticky) {
		if (typeof column == 'undefined' || (column != null && column.hasOwnProperty ("__kwargtrans__"))) {;
			var column = 0;
		};
		if (typeof columnspan == 'undefined' || (columnspan != null && columnspan.hasOwnProperty ("__kwargtrans__"))) {;
			var columnspan = 1;
		};
		if (typeof in_ == 'undefined' || (in_ != null && in_.hasOwnProperty ("__kwargtrans__"))) {;
			var in_ = null;
		};
		if (typeof ipadx == 'undefined' || (ipadx != null && ipadx.hasOwnProperty ("__kwargtrans__"))) {;
			var ipadx = 0;
		};
		if (typeof ipady == 'undefined' || (ipady != null && ipady.hasOwnProperty ("__kwargtrans__"))) {;
			var ipady = 0;
		};
		if (typeof padx == 'undefined' || (padx != null && padx.hasOwnProperty ("__kwargtrans__"))) {;
			var padx = 0;
		};
		if (typeof pady == 'undefined' || (pady != null && pady.hasOwnProperty ("__kwargtrans__"))) {;
			var pady = 0;
		};
		if (typeof row == 'undefined' || (row != null && row.hasOwnProperty ("__kwargtrans__"))) {;
			var row = null;
		};
		if (typeof rowspan == 'undefined' || (rowspan != null && rowspan.hasOwnProperty ("__kwargtrans__"))) {;
			var rowspan = 1;
		};
		if (typeof sticky == 'undefined' || (sticky != null && sticky.hasOwnProperty ("__kwargtrans__"))) {;
			var sticky = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'column': var column = __allkwargs0__ [__attrib0__]; break;
						case 'columnspan': var columnspan = __allkwargs0__ [__attrib0__]; break;
						case 'in_': var in_ = __allkwargs0__ [__attrib0__]; break;
						case 'ipadx': var ipadx = __allkwargs0__ [__attrib0__]; break;
						case 'ipady': var ipady = __allkwargs0__ [__attrib0__]; break;
						case 'padx': var padx = __allkwargs0__ [__attrib0__]; break;
						case 'pady': var pady = __allkwargs0__ [__attrib0__]; break;
						case 'row': var row = __allkwargs0__ [__attrib0__]; break;
						case 'rowspan': var rowspan = __allkwargs0__ [__attrib0__]; break;
						case 'sticky': var sticky = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.master.layoutMethod != GRID || !(hasattr (self, 'occupiedRows'))) {
			self.__setupGrid__ ();
		}
		if (row == null) {
			var row = 0;
			while (__in__ (row, self.occupiedRows)) {
				row++;
			}
		}
		self.occupiedRows.add (row);
		self.element.style.gridColumnStart = '{}'.format (column + 1);
		self.element.style.gridRowStart = '{}'.format (row + 1);
		self.element.style.gridColumnEnd = '{}'.format ((column + 1) + columnspan);
		self.element.style.gridRowEnd = '{}'.format ((row + 1) + rowspan);
		self._addToMaster ();
	});}
});
export var Place =  __class__ ('Place', [LayoutManager], {
	__module__: __name__,
	get place () {return __get__ (this, function (self) {
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		self._addToMaster ();
	});}
});
export var Misc =  __class__ ('Misc', [object], {
	__module__: __name__,
	element: null,
	_last_child_ids: null,
	options: {},
	getValue: (function __lambda__ (x) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return null;
	}),
	_children: [],
	get destroy () {return __get__ (this, function (self) {
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
		self.element.remove ();
	});},
	get _geometry () {return __get__ (this, function (self, g) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'g': var g = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var geo = list (map (int, g.py_split ('x')));
		return tuple ([min (self.maxWidth, max (geo [0], self.minWidth)), min (self.maxHeight, max (geo [1], self.minHeight))]);
	});},
	get geometry () {return __get__ (this, function (self, g) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'g': var g = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var __left0__ = self._geometry (g);
		var w = __left0__ [0];
		var h = __left0__ [1];
		print ('sizing', g, w, h);
		self.element.style.width = '{}px'.format (w);
		self.element.style.height = '{}px'.format (h);
	});},
	get maxsize () {return __get__ (this, function (self, w, h) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'w': var w = __allkwargs0__ [__attrib0__]; break;
						case 'h': var h = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.maxWidth = w;
		self.maxHeight = h;
	});},
	get minsize () {return __get__ (this, function (self, w, h) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'w': var w = __allkwargs0__ [__attrib0__]; break;
						case 'h': var h = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.minWidth = w;
		self.minHeight = h;
	});},
	get configure () {return __get__ (this, function (self) {
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		for (var k in kw) {
			var v = kw [k];
			if (k == 'activebackground') {
				// pass;
			}
			else if (k == 'activeforeground') {
				// pass;
			}
			else if (k == 'anchor') {
				self.element.style.position = 'relative';
				if (__in__ ('n', v) && __in__ ('s', v)) {
					self.element.style.height = '100%';
				}
				if (__in__ ('e', v) && __in__ ('w', v)) {
					self.element.style.width = '100%';
				}
				if (__in__ ('n', v)) {
					self.element.style.top = 0;
				}
				if (__in__ ('e', v)) {
					self.element.style.right = 0;
				}
				if (__in__ ('s', v)) {
					self.element.style.bottom = 0;
				}
				if (__in__ ('w', v)) {
					self.element.style.left = 0;
				}
			}
			else if (k == 'background') {
				self.element.style [k] = v;
			}
			else if (k == 'bitmap') {
				// pass;
			}
			else if (k == 'borderwidth') {
				self.element.style.borderWidth = v;
			}
			else if (k == 'cursor') {
				self.element.style.cursor = v;
			}
			else if (k == 'disabledforeground') {
				// pass;
			}
			else if (k == 'font') {
				self.element.style.fontFamily = v;
			}
			else if (k == 'foreground') {
				self.element.style.color = v;
			}
			else if (k == 'highlightbackground') {
				// pass;
			}
			else if (k == 'highlightcolor') {
				self.element.style.outlineColor = v;
			}
			else if (k == 'highlightthickness') {
				self.element.style.outlineWeight = v;
			}
			else if (k == 'image') {
				self.element.style.background = v;
			}
			else if (k == 'insertbackground') {
				self.element.style.caretColor = v;
			}
			else if (k == 'insertborderwidth') {
				// pass;
			}
			else if (k == 'jump') {
				// pass;
			}
			else if (k == 'justify') {
				self.element.style.textAlign = v;
				// pass;
			}
			else if (k == 'orient') {
				// pass;
			}
			else if (__in__ ('pad', k)) {
				if (__in__ ('x', k)) {
					var __left0__ = v;
					self.element.style.paddingLeft = __left0__;
					self.element.style.paddingRight = __left0__;
				}
				else {
					var __left0__ = v;
					self.element.style.paddingTop = __left0__;
					self.element.style.paddingBottom = __left0__;
				}
			}
			else if (k == 'relief') {
				// pass;
			}
			else if (k == 'selectbackground') {
				// pass;
			}
			else if (k == 'setgrid') {
				// pass;
			}
			else if (k == 'takefocus') {
				if (!(v)) {
					self.__defFoc__ = self.element.tabindex;
					self.element.tabindex = -(1);
				}
				else {
					self.element.tabindex = self.__defFoc__;
				}
			}
			else if (k == 'text') {
				if (self.element.children.length != 0) {
					var s = document.createElement ('span');
					s.innerText = v;
					self.element.appendChild (s);
				}
				else {
					self.element.innerText = v;
				}
			}
			else if (__in__ ('variable', k)) {
				v.py_get = (function __lambda__ () {
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
					return self.getValue ();
				});
			}
			else if (k == 'troughcolor') {
				// pass;
			}
			else if (k == 'underline') {
				// pass;
			}
			else if (k == 'wraplength') {
				// pass;
			}
			else if (__in__ ('scrollcommand', k)) {
				// pass;
			}
			self.options [k] = v;
		}
	});},
	get cget () {return __get__ (this, function (self, k) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'k': var k = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self.options [k];
	});},
	get winfo_reqheight () {return __get__ (this, function (self) {
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
		return self.element.clientHeight;
	});},
	get winfo_reqwidth () {return __get__ (this, function (self) {
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
		return self.element.clientWidth;
	});},
	get winfo_children () {return __get__ (this, function (self) {
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
		return self._children;
	});}
});
var __left0__ = float ('-inf');
Misc.minWidth = __left0__;
Misc.minHeight = __left0__;
var __left0__ = float ('inf');
Misc.maxWidth = __left0__;
Misc.maxHeight = __left0__;
export var BaseWidget =  __class__ ('BaseWidget', [Misc], {
	__module__: __name__,
	get _setup () {return __get__ (this, function (self, master, cnf) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.layoutMethod = null;
		self.element.onresize;
		if (_support_default_root) {
			if (!(master)) {
				if (!(_default_root)) {
					_default_root = Tk ();
				}
				var master = _default_root;
			}
		}
		self.master = master;
		var py_name = null;
		if (__in__ ('name', cnf)) {
			var py_name = cnf ['name'];
			delete cnf ['name'];
		}
		if (!(py_name)) {
			var py_name = self.__class__.__name__.lower ();
			if (master._last_child_ids === null) {
				master._last_child_ids = {};
			}
			var count = master._last_child_ids.py_get (py_name, 0) + 1;
			master._last_child_ids [py_name] = count;
			if (count == 1) {
				var py_name = __mod__ ('!%s', tuple ([py_name]));
			}
			else {
				var py_name = __mod__ ('!%s%d', tuple ([py_name, count]));
			}
		}
		self._name = py_name;
		if (master._w == '.') {
			self._w = '.' + py_name;
		}
		else {
			self._w = (master._w + '.') + py_name;
		}
		self.children = {};
		if (__in__ (self._name, self.master.children)) {
			self.master.children [self._name].destroy ();
		}
		self.master.children [self._name] = self;
	});},
	get __init__ () {return __get__ (this, function (self, master, widgetName, cnf, kw, extra) {
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = {};
		};
		if (typeof kw == 'undefined' || (kw != null && kw.hasOwnProperty ("__kwargtrans__"))) {;
			var kw = {};
		};
		if (typeof extra == 'undefined' || (extra != null && extra.hasOwnProperty ("__kwargtrans__"))) {;
			var extra = tuple ([]);
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'widgetName': var widgetName = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						case 'kw': var kw = __allkwargs0__ [__attrib0__]; break;
						case 'extra': var extra = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (kw) {
			var cnf = _cnfmerge (tuple ([cnf, kw]));
		}
		self.widgetName = widgetName;
		BaseWidget._setup (self, master, cnf);
		self.configure (__kwargtrans__ (cnf));
	});},
	get destroy () {return __get__ (this, function (self) {
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
		for (var c in list (self.children.py_values ())) {
			c.destroy ();
		}
		if (__in__ (self._name, self.master.children)) {
			delete self.master.children [self._name];
		}
		Misc.destroy (self);
	});}
});
export var Widget =  __class__ ('Widget', [BaseWidget, Grid, Place], {
	__module__: __name__,
});
export var Button =  __class__ ('Button', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = {};
		};
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('button');
		Widget.__init__ (self, master, 'button', cnf, kw);
		self.element.classList.add ('TkButton');
		self._callback = (kw ['command'] != null ? kw ['command'] : (function __lambda__ (x) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return null;
		}));
		self.element.onclick = (function __lambda__ (x) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._callback ();
		});
	});},
	get flash () {return __get__ (this, function (self) {
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
		print ("I know I should, but I shan't");
		return null;
	});},
	get invoke () {return __get__ (this, function (self) {
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
		return self._callback ();
	});}
});
export var Tk =  __class__ ('Tk', [Misc], {
	__module__: __name__,
	_dragging: null,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = {};
		};
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		print ('New window I guess?');
		self.window = document.createElement ('div');
		self.window.classList.add ('TkWindow');
		self.window.draggable = 'true';
		self.menuBar = document.createElement ('div');
		self.menuBar.classList.add ('MenuBar');
		self.closeButton = document.createElement ('button');
		self.closeButton.classList.add ('CloseButton');
		self.closeButton.classList.add ('TkButton');
		self.closeButton.innerText = 'X';
		self.closeButton.onclick = (function __lambda__ (e) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'e': var e = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.destroy ();
		});
		self.menuBar.appendChild (self.closeButton);
		self.titleSpan = document.createElement ('span');
		self.titleSpan.style.float = 'left';
		self.titleSpan.innerText = 'Tkinter';
		self.menuBar.appendChild (self.titleSpan);
		self.mainFrame = document.createElement ('div');
		self.element = self.mainFrame;
		self.mainFrame.classList.add ('Content');
		Widget.__init__ (self, self, 'tk', cnf, kw);
		self.window.appendChild (self.menuBar);
		self.window.appendChild (self.mainFrame);
		document.body.appendChild (self.window);
		self.window.ondragstart = self._dragStart;
		self.window.style.position = 'absolute';
		self._x = 0;
		self._y = 0;
		self._moveWindow (0, 0);
		self.children = {};
	});},
	get _dragStart () {return __get__ (this, function (self, e) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'e': var e = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		e.dataTransfer.setData ('x', e.clientX);
		e.dataTransfer.setData ('y', e.clientY);
		print ('Drag started at ', e.clientX, e.clientY);
		Tk._dragging = self;
	});},
	get _dragEnd () {return function (e) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'e': var e = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		print ('A');
		e.preventDefault ();
		var dx = e.clientX - int (e.dataTransfer.getData ('x'));
		var dy = e.clientY - int (e.dataTransfer.getData ('y'));
		print (e.pageX, e.pageY);
		print ('S', e.dataTransfer.getData ('x'), e.dataTransfer.getData ('y'));
		print ('Drag end at ', e.clientX, e.clientY, dx, dy);
		Tk._dragging._moveWindow (Tk._dragging._x + dx, Tk._dragging._y + dy);
	};},
	get _moveWindow () {return __get__ (this, function (self, x, y) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._x = x;
		self._y = y;
		self.window.style.left = '{}px'.format (x);
		self.window.style.top = '{}px'.format (y);
	});},
	get destroy () {return __get__ (this, function (self) {
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
		Misc.destroy (self);
		self.window.remove ();
	});},
	get geometry () {return __get__ (this, function (self, g) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'g': var g = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var __left0__ = self._geometry (g);
		var w = __left0__ [0];
		var h = __left0__ [1];
		self.window.style.width = '{}px'.format (w);
		self.window.style.height = '{}px'.format (h);
	});},
	get title () {return __get__ (this, function (self, t) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 't': var t = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		print (self.menuBar);
		self.titleSpan.innerText = t;
	});},
	get mainloop () {return __get__ (this, function (self) {
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
		// pass;
	});}
});
var __left0__ = '.';
Tk._w = __left0__;
Tk.path = __left0__;
export var Wm =  __class__ ('Wm', [Misc], {
	__module__: __name__,
	get wm_aspect () {return __get__ (this, function (self, minNumer, minDenom, maxNumer, maxDenom) {
		if (typeof minNumer == 'undefined' || (minNumer != null && minNumer.hasOwnProperty ("__kwargtrans__"))) {;
			var minNumer = null;
		};
		if (typeof minDenom == 'undefined' || (minDenom != null && minDenom.hasOwnProperty ("__kwargtrans__"))) {;
			var minDenom = null;
		};
		if (typeof maxNumer == 'undefined' || (maxNumer != null && maxNumer.hasOwnProperty ("__kwargtrans__"))) {;
			var maxNumer = null;
		};
		if (typeof maxDenom == 'undefined' || (maxDenom != null && maxDenom.hasOwnProperty ("__kwargtrans__"))) {;
			var maxDenom = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'minNumer': var minNumer = __allkwargs0__ [__attrib0__]; break;
						case 'minDenom': var minDenom = __allkwargs0__ [__attrib0__]; break;
						case 'maxNumer': var maxNumer = __allkwargs0__ [__attrib0__]; break;
						case 'maxDenom': var maxDenom = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return tuple ([self.element.clientWidth, self.element.clientHeight]);
	});},
	get wm_attriabutes () {return __get__ (this, function (self) {
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
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		// pass;
	});},
	get wm_client () {return __get__ (this, function (self, py_name) {
		if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
			var py_name = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'py_name': var py_name = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		// pass;
	});},
	get wm_resizable () {return __get__ (this, function (self, width, height) {
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = null;
		};
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var w = _toBool (width);
		var h = _toBool (height);
		self.element.style.resize = (w && h ? 'both' : (w ? 'horizontal' : (h ? 'vertical' : 'none')));
	});},
	get wm_colormapwindows () {return __get__ (this, function (self) {
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
			var wlist = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var wlist = tuple ();
		}
		// pass;
	});},
	get wm_command () {return __get__ (this, function (self, value) {
		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
			var value = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		// pass;
	});}
});
export var Frame =  __class__ ('Frame', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = {};
		};
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('div');
		Widget.__init__ (self, master, 'frame', cnf, kw);
	});}
});
export var Label =  __class__ ('Label', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = {};
		};
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('p');
		Widget.__init__ (self, master, 'label', cnf, kw);
	});}
});
export var Entry =  __class__ ('Entry', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = {};
		};
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('input');
		self.element.py_metatype = 'text';
		Widget.__init__ (self, master, 'input', cnf, kw);
	});},
	get getValue () {return __get__ (this, function (self) {
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
		return self.element.value;
	});}
});
export var Checkbutton =  __class__ ('Checkbutton', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = {};
		};
		var kw = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kw.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('input');
		self.element.py_metatype = 'checkbox';
		Widget.__init__ (self, master, 'checkbox', cnf, kw);
	});},
	get getValue () {return __get__ (this, function (self) {
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
		return self.element.checked;
	});}
});
export var Variable =  __class__ ('Variable', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
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
		self.val = null;
		self.py_get = (function __lambda__ (x) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return null;
		});
	});},
	get set () {return __get__ (this, function (self, v) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'v': var v = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.val = v;
	});},
	get __repr__ () {return __get__ (this, function (self) {
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
		print (self.val);
		return self.py_get ();
	});}
});
export var StringVar =  __class__ ('StringVar', [Variable], {
	__module__: __name__,
});
export var IntVar =  __class__ ('IntVar', [Variable], {
	__module__: __name__,
});
export var DoubleVar =  __class__ ('DoubleVar', [Variable], {
	__module__: __name__,
});
export var BooleanVar =  __class__ ('BooleanVar', [Variable], {
	__module__: __name__,
});
document.body.ondrop = Tk._dragEnd;

//# sourceMappingURL=tkinter.map
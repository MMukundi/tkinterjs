// Transcrypt'ed from Python, 2020-09-14 22:32:39
var re = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
import {_cnfmerge, _flatten, _join, _magic_re, _space_re, _stringify, _toBool} from './helperFunc.js';
var __name__ = 'tkinter';
export var StyleManager =  __class__ ('StyleManager', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, ss) {
		self.ss = ss;
		self.ids = [];
	});},
	get updateStyle () {return __get__ (this, function (self, elementId, styleTag, rule) {
		var py_selector = (elementId + ':-:') + styleTag;
		var index = self.ids.index (py_selector);
		if (index != -(1)) {
			self.ss.sheet.removeRule (index);
		}
		return self.ss.sheet.insertRule (rule, (index == -(1) ? self.ss.sheet.cssRules.length : index));
	});},
	get addStyle () {return __get__ (this, function (self, elementId, styleTag, rule, index) {
		if (typeof index == 'undefined' || (index != null && index.hasOwnProperty ("__kwargtrans__"))) {;
			var index = null;
		};
		var py_selector = (elementId + ':-:') + styleTag;
		if (index == null) {
			self.ids.append (py_selector);
			var index = self.ss.sheet.cssRules.length;
		}
		else {
			self.ids.insert (index, py_selector);
		}
		return self.ss.sheet.insertRule (rule, index);
	});},
	get deleteStyle () {return __get__ (this, function (self, elementId, styleTag) {
		var py_selector = (elementId + ':-:') + styleTag;
		var index = self.ids.index (py_selector);
		self.ss.sheet.removeRule (index);
		delete ids [index];
	});}
});
export var cssChars = re.compile ('(%|px|em|rm|vh|vw)');
export var resizeArea = 10;
export var _support_default_root = 1;
export var _default_root = null;
export var N = 'N';
export var NE = 'NE';
export var E = 'E';
export var SE = 'SE';
export var S = 'S';
export var SW = 'SW';
export var W = 'W';
export var NW = 'NW';
export var CENTER = 'CENTER';
export var X = 'X';
export var Y = 'Y';
export var BOTH = 'BOTH';
export var YES = 'YES';
export var NO = 'NO';
export var GRID = 'GRID';
export var PACK = 'PACK';
export var PLACE = 'PLACE';
export var TOP = 'TOP';
export var LEFT = 'LEFT';
export var RIGHT = 'RIGHT';
export var BOTTOM = 'BOTTOM';
export var _toCss = function (v) {
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
	return (isNaN (v) ? v : v + 'px');
};
export var _fromCss = function (css) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'css': var css = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	return cssChars.sub ('', css);
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
	get __setup__ () {return function (container) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'container': var container = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		container.nextRow = 0;
		container.occupiedRows = set ();
		container.columns = 1;
		if (container.layoutMethod == null) {
			container.layoutMethod = GRID;
			container.element.classList.add ('grid');
		}
		else if (container.layoutMethod != GRID) {
			var __except0__ = Exception ('{}{}{}'.format (container.layoutMethod));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	};},
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
		var kwargs = dict ();
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
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		var container = (kwargs ['in'] != null ? kwargs ['in'] : self.master);
		if (container.layoutMethod != GRID || !(hasattr (container, 'occupiedRows'))) {
			Grid.__setup__ (container);
		}
		if (column == null) {
			var column = 0;
		}
		if (row == null) {
			var row = 0;
			while (__in__ (row, container.occupiedRows)) {
				row += 1;
			}
		}
		container.occupiedRows.add (row);
		if (sticky != null) {
			var sticky = sticky.lower ();
			if (__in__ ('n', sticky) && __in__ ('s', sticky)) {
				self.element.style.alignSelf = 'stretch';
			}
			else if (__in__ ('n', sticky)) {
				self.element.style.alignSelf = 'start';
			}
			else if (__in__ ('s', sticky)) {
				self.element.style.alignSelf = 'end';
			}
			else {
				self.element.style.height = '';
				self.element.style.alignSelf = 'center';
			}
			if (__in__ ('e', sticky) && __in__ ('w', sticky)) {
				self.element.style.justifySelf = 'stretch';
			}
			else if (__in__ ('e', sticky)) {
				self.element.style.justifySelf = 'end';
			}
			else if (__in__ ('w', sticky)) {
				self.element.style.justifySelf = 'start';
			}
			else {
				self.element.style.width = '';
				self.element.style.justifySelf = 'center';
			}
		}
		self.element.style.gridColumnStart = '{}'.format (column + 1);
		self.element.style.gridRowStart = '{}'.format (row + 1);
		self.element.style.gridColumnEnd = '{}'.format ((column + 1) + columnspan);
		self.element.style.gridRowEnd = '{}'.format ((row + 1) + rowspan);
		self._addToMaster ();
	});}
});
export var Pack =  __class__ ('Pack', [LayoutManager], {
	__module__: __name__,
	element: null,
	master: null,
	get __setup__ () {return function (container) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'container': var container = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		container.packingList = [];
		container._last_top = null;
		container._last_bottom = null;
		container._last_element = null;
		container.element.style.display = 'flex';
		container.element.style.flexDirection = 'column';
		container.layoutMethod = PACK;
	};},
	get pack () {return __get__ (this, function (self, expand, side, fill) {
		if (typeof expand == 'undefined' || (expand != null && expand.hasOwnProperty ("__kwargtrans__"))) {;
			var expand = null;
		};
		if (typeof side == 'undefined' || (side != null && side.hasOwnProperty ("__kwargtrans__"))) {;
			var side = null;
		};
		if (typeof fill == 'undefined' || (fill != null && fill.hasOwnProperty ("__kwargtrans__"))) {;
			var fill = null;
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'expand': var expand = __allkwargs0__ [__attrib0__]; break;
						case 'side': var side = __allkwargs0__ [__attrib0__]; break;
						case 'fill': var fill = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		var container = (kwargs ['in'] != null ? kwargs ['in'] : self.master);
		if (container.layoutMethod != PACK || !(hasattr (self, '_last_top'))) {
			Pack.__setup__ (container);
		}
		if (side == TOP) {
			if (container._last_top == null) {
				if (container._last_element == null) {
					container.element.appendChild (self.element);
				}
				else {
					container._last_element.before (self.element);
				}
			}
			else {
				container._last_top.after (self.element);
			}
			container._last_top = self.element;
		}
		else if (side == BOTTOM) {
			if (container._last_bottom == null) {
				if (container._last_element == null) {
					container.element.appendChild (self.element);
				}
				else {
					container._last_element.after (self.element);
				}
			}
			else {
				container._last_bottom.before (self.element);
			}
			container._last_bottom = self.element;
		}
		else {
			if (container._last_element == null) {
				container.element.appendChild (self.element);
			}
			else {
				container._last_element.after (self.element);
			}
			self.element.alignSelf = (side == LEFT ? 'flex-start' : 'flex-end');
		}
		container._last_element = self.element;
	});}
});
export var Place =  __class__ ('Place', [LayoutManager], {
	__module__: __name__,
	master: null,
	element: null,
	get __setup__ () {return function (container) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'container': var container = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		container.element.style.display = 'flex';
		container.layoutMethod = PLACE;
	};},
	get place () {return __get__ (this, function (self, x, y, relx, rely, width, height, relwidth, relheight, anchor) {
		if (typeof x == 'undefined' || (x != null && x.hasOwnProperty ("__kwargtrans__"))) {;
			var x = 0;
		};
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = 0;
		};
		if (typeof relx == 'undefined' || (relx != null && relx.hasOwnProperty ("__kwargtrans__"))) {;
			var relx = 0;
		};
		if (typeof rely == 'undefined' || (rely != null && rely.hasOwnProperty ("__kwargtrans__"))) {;
			var rely = 0;
		};
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = 0;
		};
		if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
			var height = 0;
		};
		if (typeof relwidth == 'undefined' || (relwidth != null && relwidth.hasOwnProperty ("__kwargtrans__"))) {;
			var relwidth = 0;
		};
		if (typeof relheight == 'undefined' || (relheight != null && relheight.hasOwnProperty ("__kwargtrans__"))) {;
			var relheight = 0;
		};
		if (typeof anchor == 'undefined' || (anchor != null && anchor.hasOwnProperty ("__kwargtrans__"))) {;
			var anchor = NW;
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
						case 'relx': var relx = __allkwargs0__ [__attrib0__]; break;
						case 'rely': var rely = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
						case 'relwidth': var relwidth = __allkwargs0__ [__attrib0__]; break;
						case 'relheight': var relheight = __allkwargs0__ [__attrib0__]; break;
						case 'anchor': var anchor = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		var container = (kwargs ['in'] != null ? kwargs ['in'] : self.master);
		if (container.layoutMethod != PLACE || !(container.element.style.display == 'flex')) {
			Place.__setup__ (container);
		}
		self.element.style.position = 'absolute';
		var anchor = anchor.upper ();
		var __left0__ = 50;
		var transformX = __left0__;
		var transformY = __left0__;
		self.element.style.top = ((('calc(' + int (float (rely) * 100)) + '% + ') + y) + 'px)';
		self.element.style.left = ((('calc(' + int (float (relx) * 100)) + '% + ') + x) + 'px)';
		if (anchor != CENTER) {
			if (__in__ (N, anchor)) {
				var transformY = 0;
			}
			if (__in__ (E, anchor)) {
				var transformX = 100;
			}
			if (__in__ (S, anchor)) {
				var transformY = 100;
			}
			if (__in__ (W, anchor)) {
				var transformX = 0;
			}
		}
		var __left0__ = ((('translate(' + -(transformX)) + '%,') + -(transformY)) + '%)';
		self.element.style ['-ms-transform'] = __left0__;
		self.element.style ['-webkit-transform'] = __left0__;
		if (relwidth != 0 || width != 0) {
			var rw = int (float (relwidth) * 100);
			self.element.style.width = ((('calc(' + rw) + '% + ') + width) + 'px)';
		}
		if (relheight != 0 || height != 0) {
			var rh = int (float (relheight) * 100);
			self.element.style.height = ((('calc(' + rh) + '% + ') + height) + 'px)';
		}
		self.element.placed = true;
		self._addToMaster ();
	});}
});
export var Misc =  __class__ ('Misc', [object], {
	__module__: __name__,
	element: null,
	_last_child_ids: null,
	py_get: (function __lambda__ (x) {
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
	options: dict ({}),
	_children: [],
	textElement: null,
	get _create_text_element () {return __get__ (this, function (self) {
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
		if (self.textElement == null) {
			if (isinstance (self, Label)) {
				self.textElement = self.element;
			}
			else {
				if (isinstance (self, [Checkbutton, Entry])) {
					self.textElement = document.createElement ('label');
					self.textElement ['for'] = self.element.id;
					self.element.before (self.textElement);
				}
				else {
					self.textElement = document.createElement ('span');
					self.master.element.appendChild (self.textElement);
					self.textElement.style.width = '100%';
					self.textElement.style.height = '100%';
					self.element.appendChild (self.textElement);
				}
				self.textElement.style.display = 'flex';
				self.textElement.style.alignItems = 'center';
				self.textElement.style.justifyContent = 'center';
				self.textElement.style.position = 'relative';
			}
		}
	});},
	get bind () {return __get__ (this, function (self, sequence, func) {
		if (typeof sequence == 'undefined' || (sequence != null && sequence.hasOwnProperty ("__kwargtrans__"))) {;
			var sequence = null;
		};
		if (typeof func == 'undefined' || (func != null && func.hasOwnProperty ("__kwargtrans__"))) {;
			var func = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sequence': var sequence = __allkwargs0__ [__attrib0__]; break;
						case 'func': var func = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var sequenceArr = sequence.__getslice__ (1, -(1), 1).py_split ('-');
		var __left0__ = '';
		var m = __left0__;
		var t = __left0__;
		var d = __left0__;
		var indecies = [0];
		var l = len (sequenceArr);
		if (l < 1 || l > 4) {
			return false;
		}
		else if (l == 1) {
			var t = sequenceArr [0];
		}
		else {
			var t = sequenceArr [l - 2];
			var d = sequenceArr [l - 1];
			var indecies = (function () {
				var __accu0__ = [];
				for (var s of sequenceArr.__getslice__ (0, l - 2, 1)) {
					__accu0__.append (['control', 'alt', 'shift', 'meta'].index (s.lower ()) + 1);
				}
				return __accu0__;
			}) ();
		}
		if (t.find ('Button') == 0) {
			if (len (t) > 6) {
				var d = t.__getslice__ (6, null, 1);
				var t = 'Button';
			}
			if (!(self._function_bindings_ [t])) {
				self._function_bindings_ [t] = [dict ({}), dict ({}), dict ({}), dict ({}), dict ({})];
			}
			for (var i of indecies) {
				self._function_bindings_ [t] [i] [d] = func;
			}
		}
		else {
			if (!(self._function_bindings_ [t])) {
				self._function_bindings_ [t] = [null, null, null, null, null];
			}
			for (var i of indecies) {
				self._function_bindings_ [t] [i] = func;
			}
		}
	});},
	get _bindFunctions () {return __get__ (this, function (self) {
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
		var eventIndecies = function (e) {
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
			var inds = [];
			if (e.ctrlKey) {
				inds.append (1);
			}
			if (e.altKey) {
				inds.append (2);
			}
			if (e.shiftKey) {
				inds.append (3);
			}
			if (e.metaKey) {
				inds.append (4);
			}
			return (len (inds) > 0 ? inds : [0]);
		};
		var _buttonHandler = function (e) {
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
			e.preventDefault ();
			var allHandlers = self._function_bindings_ ['Button'];
			if (!(allHandlers)) {
				return ;
			}
			var button = e.button + 1;
			var rect = e.target.getBoundingClientRect ();
			for (var i of eventIndecies (e)) {
				if (allHandlers [i] && allHandlers [i] [button]) {
					allHandlers [i] [button] (dict ([['widget', self], ['x', e.clientX - rect.left], ['y', e.clientY - rect.top]]));
				}
			}
		};
		var _wheelHandler = function (e) {
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
			e.preventDefault ();
			var allHandlers = self._function_bindings_ ['MouseWheel'];
			if (!(allHandlers)) {
				return ;
			}
			var rect = e.target.getBoundingClientRect ();
			for (var i of eventIndecies (e)) {
				if (allHandlers [i]) {
					allHandlers [i] (dict ([['widget', self], ['delta', e.deltaY], ['x', e.clientX - rect.left], ['y', e.clientY - rect.top]]));
				}
			}
		};
		self.element.onclick = _buttonHandler;
		self.element.onscroll = _wheelHandler;
		self._function_bindings_ = dict ({});
		if (self.master && self.master._function_bindings_) {
			for (var t of self.master._function_bindings_.py_keys ()) {
				if (t == 'Button') {
					self._function_bindings_ [t] = [dict ({}), dict ({}), dict ({}), dict ({}), dict ({})];
					for (var i = 0; i < 5; i++) {
						console.log (self.master._function_bindings_ [t] [i]);
						self._function_bindings_ [t] [i] = self.master._function_bindings_ [t] [i].copy ();
					}
				}
				else {
					self._function_bindings_ [t] = [null, null, null, null, null];
				}
			}
		}
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
		return list (map (_toCss, g.py_split ('x')));
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
		self.element.style.width = w;
		self.element.style.height = h;
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
		self.element.style.maxWidth = _toCss (w);
		self.element.style.maxHeight = _toCss (h);
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
		self.element.style.minWidth = _toCss (w);
		self.element.style.minHeight = _toCss (h);
	});},
	get configure () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		for (var k of kwargs.py_keys ()) {
			var v = kwargs [k];
			if (k == 'activebackground' || k == 'activebg') {
				var k = 'activebackground';
				// pass;
			}
			else if (k == 'activeforeground' || k == 'activefg') {
				var k = 'activeforeground';
				// pass;
			}
			else if (k == 'anchor') {
				if (self.textElement == null) {
					self._create_text_element ();
				}
				var v = v.lower ();
				if (__in__ ('n', v)) {
					self.textElement.style.alignItems = 'top';
				}
				if (__in__ ('e', v)) {
					self.textElement.style.justifyContent = 'right';
				}
				if (__in__ ('s', v)) {
					self.textElement.style.alignItems = 'bottom';
				}
				if (__in__ ('w', v)) {
					self.textElement.style.justifyContent = 'left';
				}
			}
			else if (k == 'background' || k == 'bg') {
				var k = 'background';
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
				var s = ((('#' + self.element.id) + ':disabled{color:') + v) + '}';
				_dynamic_style_manager.updateStyle (self._w, 'dfg', s);
				// pass;
			}
			else if (k == 'font') {
				self.element.style.fontFamily = v;
			}
			else if (k == 'foreground' || k == 'fg') {
				var k = 'foreground';
				self.element.style.color = v;
			}
			else if (k == 'height' || k == 'width') {
				if (k == 'width' && isinstance (self, Entry)) {
					self.element.style [k] = v + 'ch';
				}
				else {
					self.element.style [k] = _toCss (v);
				}
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
			else if (k == 'state') {
				console.log (v);
				self.element.disabled = v == 'disabled';
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
				self._create_text_element ();
				self.textElement.textContent = v;
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
					return self.py_get ();
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
			else if (self.element.style [k] != undefined) {
				self.element.style [k] = v;
			}
			self.options [k] = v;
		}
	});},
	get config () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		self.configure (self, __kwargtrans__ (kwargs));
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
	get winfo_height () {return __get__ (this, function (self) {
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
		return self.element.scrollHeight;
	});},
	get winfo_width () {return __get__ (this, function (self) {
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
		return self.element.scrollWidth;
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
		return self.element.scrollHeight;
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
		return self.element.scrollWidth;
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
				master._last_child_ids = dict ({});
			}
			var count = master._last_child_ids.py_get (py_name, 0) + 1;
			master._last_child_ids [py_name] = count;
			if (count == 1) {
				var py_name = '!' + py_name;
			}
			else {
				var py_name = ('!' + py_name) + count;
			}
		}
		self._name = py_name;
		if (master._w == '.') {
			self._w = '.' + py_name;
		}
		else {
			self._w = (master._w + '.') + py_name;
		}
		self.element.id = self._w.py_replace ('.', '_').py_replace ('!', '');
		self.children = dict ({});
		if (__in__ (self._name, self.master.children)) {
			self.master.children [self._name].destroy ();
		}
		self.master.children [self._name] = self;
		self._bindFunctions ();
	});},
	get __init__ () {return __get__ (this, function (self, master, widgetName, cnf, kwargs, extra) {
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = dict ({});
		};
		if (typeof kwargs == 'undefined' || (kwargs != null && kwargs.hasOwnProperty ("__kwargtrans__"))) {;
			var kwargs = dict ({});
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
						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
						case 'extra': var extra = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.options = dict ({});
		self._children = [];
		if (len (kwargs.py_keys ())) {
			var cnf = _cnfmerge (tuple ([cnf, kwargs]));
		}
		self.widgetName = widgetName;
		BaseWidget._setup (self, master, cnf);
		if (!(hasattr (self.options, 'width'))) {
			self._width = self.element.scrollWidth;
		}
		if (!(hasattr (self.options, 'height'))) {
			self._height = self.element.scrollHeight;
		}
		var allCnf = dict ([['state', 'enabled']]);
		allCnf.py_update (cnf);
		self.configure (__kwargtrans__ (allCnf));
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
		for (var c of list (self.children.py_values ())) {
			c.destroy ();
		}
		if (__in__ (self._name, self.master.children)) {
			delete self.master.children [self._name];
		}
		Misc.destroy (self);
	});}
});
export var Widget =  __class__ ('Widget', [BaseWidget, Grid, Place, Pack], {
	__module__: __name__,
});
export var Button =  __class__ ('Button', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = dict ({});
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('button');
		Widget.__init__ (self, master, 'button', cnf, kwargs);
		self.element.classList.add ('TkButton');
		self._callback = (kwargs ['command'] != null ? kwargs ['command'] : (function __lambda__ (x) {
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
		self.bind ('<Button1>', self._callback);
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
	__zStack__: [],
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = dict ({});
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		self.shell = document.createElement ('div');
		self.shell.classList.add ('resizeShell');
		self.window = document.createElement ('div');
		self.window.classList.add ('TkWindow');
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
		self.titleSpan.classList.add ('WindowTitle', '__noselect__');
		self.titleSpan.style.float = 'left';
		self.titleSpan.innerText = 'Tkinter';
		self.menuBar.appendChild (self.titleSpan);
		self.mainFrame = document.createElement ('div');
		self.element = self.mainFrame;
		self.mainFrame.classList.add ('Content');
		Widget.__init__ (self, self, 'tk', cnf, kwargs);
		self.window.appendChild (self.menuBar);
		self.window.appendChild (self.mainFrame);
		self.menuBar.draggable = true;
		self.menuBar.ondragstart = self._dragStart;
		self.window.onclick = (function __lambda__ () {
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
			return self._bringToTop ();
		});
		self._resizeHandle ('n');
		self._resizeHandle ('ne');
		self._resizeHandle ('e');
		self._resizeHandle ('se');
		self._resizeHandle ('s');
		self._resizeHandle ('sw');
		self._resizeHandle ('w');
		self._resizeHandle ('nw');
		self.shell.style.position = 'absolute';
		self._x = 0;
		self._y = 0;
		self._width = 0;
		self._height = 0;
		var __left0__ = len (Tk.__zStack__);
		self._z = __left0__;
		self.shell.style.zIndex = __left0__;
		self._moveWindow (0, 0);
		self.shell.appendChild (self.window);
		document.body.appendChild (self.shell);
		Tk.__zStack__.append (self);
		self.children = dict ({});
		self._bringToTop ();
	});},
	get _resizeStart () {return __get__ (this, function (self, e, loc) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'e': var e = __allkwargs0__ [__attrib0__]; break;
						case 'loc': var loc = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._width = (self._width ? self._width : _fromCss (self.winfo_reqwidth ()));
		self._height = (self._height ? self._height : _fromCss (self.winfo_reqheight ()));
		var prevX = e.clientX;
		var prevY = e.clientY;
		var py_update = function (e) {
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
			e.preventDefault ();
			var delta = null;
			for (var d of loc) {
				if (__in__ (d, 'ew')) {
					var delta = (d == 'e' ? e.clientX - prevX : prevX - e.clientX);
					self._width += delta;
					self.mainFrame.style.width = _toCss (self._width);
					if (d == 'w') {
						self._x -= delta;
						self.shell.style.left = _toCss (self._x);
					}
				}
				else {
					var delta = (d == 's' ? e.clientY - prevY : prevY - e.clientY);
					self._height += delta;
					self.mainFrame.style.height = _toCss (self._height);
					if (d == 'n') {
						self._y -= delta;
						self.shell.style.top = _toCss (self._y);
					}
				}
			}
			prevX = e.clientX;
			prevY = e.clientY;
		};
		var end = function (e) {
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
			// pass;
		};
		document.body.ondrop = end;
		document.body.ondragover = (function __lambda__ (e) {
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
			return e.preventDefault (py_update (e));
		});
	});},
	get _resizeHandle () {return __get__ (this, function (self, loc) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'loc': var loc = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var handle = document.createElement ('div');
		handle.draggable = true;
		handle.style.width = (__in__ ('n', loc) || __in__ ('s', loc) ? '100%' : resizeArea + 'px');
		handle.style.height = (__in__ ('e', loc) || __in__ ('w', loc) ? '100%' : resizeArea + 'px');
		handle.style.cursor = loc + '-resize';
		handle.style.gridArea = loc + 'Handle';
		handle.ondragstart = (function __lambda__ (e) {
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
			return self._resizeStart (e, loc);
		});
		self.shell.appendChild (handle);
	});},
	get _bringToTop () {return __get__ (this, function (self) {
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
		var i = Tk.__zStack__.index (self);
		Tk.__zStack__.py_pop (i);
		for (var above of Tk.__zStack__.__getslice__ (i, null, 1)) {
			above._z -= 1;
			above.window.style.zIndex = above._z;
		}
		Tk.__zStack__.append (self);
		var __left0__ = len (Tk.__zStack__);
		self._z = __left0__;
		self.shell.style.zIndex = __left0__;
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
		var startX = e.clientX;
		var startY = e.clientY;
		var rect = self.shell.getBoundingClientRect ();
		self._x = rect.left;
		self._y = rect.top;
		var drag = function (e) {
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
			e.preventDefault ();
		};
		var end = function (e) {
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
			self._moveWindow (e.clientX - startX, e.clientY - startY);
		};
		document.body.ondrop = end;
		document.body.ondragover = drag;
	});},
	get _moveWindow () {return __get__ (this, function (self, dx, dy) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'dx': var dx = __allkwargs0__ [__attrib0__]; break;
						case 'dy': var dy = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._x += dx;
		self._y += dy;
		self.shell.style.left = _toCss (self._x);
		self.shell.style.top = _toCss (self._y);
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
		self.shell.remove ();
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
		self.shell.style.maxWidth = '{}{}'.format (w + 2 * resizeArea);
		self.shell.style.maxHeight = '{}{}{}'.format (h + 2 * resizeArea);
		Misc.maxsize (self, w, h);
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
		self.shell.style.minWidth = '{}{}'.format (w + 2 * resizeArea);
		self.shell.style.minHeight = '{}{}{}'.format (h + 2 * resizeArea);
		Misc.minsize (self, w, h);
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
		self.shell.style.width = '{}{}'.format (w + 2 * resizeArea);
		self.shell.styleheight = '{}{}{}'.format (h + 2 * resizeArea);
		Misc.geometry (self, g);
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
		return tuple ([self.element.scrollWidth, self.element.scrollHeight]);
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
			var cnf = dict ({});
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('div');
		self.element.classList.add ('TkFrame');
		Widget.__init__ (self, master, 'frame', cnf, kwargs);
	});}
});
export var Label =  __class__ ('Label', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = dict ({});
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('label');
		self.element.classList.add ('TkLabel');
		Widget.__init__ (self, master, 'label', cnf, kwargs);
	});}
});
export var Entry =  __class__ ('Entry', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, master, cnf) {
		if (typeof master == 'undefined' || (master != null && master.hasOwnProperty ("__kwargtrans__"))) {;
			var master = null;
		};
		if (typeof cnf == 'undefined' || (cnf != null && cnf.hasOwnProperty ("__kwargtrans__"))) {;
			var cnf = dict ({});
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('input');
		self.element.type = 'text';
		self.element.classList.add ('TkEntry');
		Widget.__init__ (self, master, 'input', cnf, kwargs);
	});},
	get py_get () {return __get__ (this, function (self) {
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
			var cnf = dict ({});
		};
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'master': var master = __allkwargs0__ [__attrib0__]; break;
						case 'cnf': var cnf = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
		}
		else {
		}
		self.element = document.createElement ('input');
		self.element.classList.add ('TkCheckbutton');
		Widget.__init__ (self, master, 'checkbutton', cnf, kwargs);
		self.element.type = 'checkbox';
	});},
	get select () {return __get__ (this, function (self) {
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
		self.element.checked = true;
	});},
	get select () {return __get__ (this, function (self) {
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
		self.element.checked = false;
	});},
	get py_get () {return __get__ (this, function (self) {
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
		self.py_get = (function __lambda__ () {
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
export var _dynamic_styles = document.createElement ('style');
document.head.appendChild (_dynamic_styles);
export var _dynamic_style_manager = StyleManager (_dynamic_styles);

//# sourceMappingURL=tkinter.map
// Transcrypt'ed from Python, 2020-08-20 03:03:19
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {E, GRID, N, NE, NW, No, PACK, PLACE, S, SE, SW, W, Yes, _cnfmerge, _default_root, _flatten, _join, _magic_re, _space_re, _stringify, _support_default_root, _toBool} from './helperFunc.js';
var __name__ = 'tkinter';
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
		if (column == null) {
			var column = 0;
		}
		if (row == null) {
			var row = 0;
			while (__in__ (row, self.occupiedRows)) {
				row++;
			}
		}
		self.occupiedRows.add (row);
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
export var Place =  __class__ ('Place', [LayoutManager], {
	__module__: __name__,
	get place () {return __get__ (this, function (self) {
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
		self._addToMaster ();
	});}
});
export var Misc =  __class__ ('Misc', [object], {
	__module__: __name__,
	element: null,
	_last_child_ids: null,
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
	options: dict ({}),
	_children: [],
	textElement: null,
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
			if (k == 'activebackground') {
				// pass;
			}
			else if (k == 'activeforeground') {
				// pass;
			}
			else if (k == 'anchor') {
				if (self.textElement == null) {
					self.textElement = document.createElement ('div');
					self.element.appendChild (self.textElement);
					self.textElement.style.width = '100%';
					self.textElement.style.height = '100%';
					self.textElement.style.display = 'flex';
					self.textElement.style.alignItems = 'center';
					self.textElement.style.justifyContent = 'center';
					self.textElement.style.position = 'relative';
				}
				var v = v.lower ();
				if (__in__ ('n', v)) {
					self.textElement.element.style.alignItems = 'top';
				}
				if (__in__ ('e', v)) {
					self.textElement.element.style.justifyContent = 'right';
				}
				if (__in__ ('s', v)) {
					self.textElement.element.style.alignItems = 'bottom';
				}
				if (__in__ ('w', v)) {
					self.textElement.element.style.justifyContent = 'left';
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
				if (hasattr (self, '_dfgid')) {
					_dynamic_styles.sheet.deleteRule (self._dfgid);
				}
				var s = (('#{}:disabled'.format (self.element.id) + '{color:') + v) + '}';
				self._dfgid = _dynamic_styles.sheet.insertRule (s, _dynamic_styles.sheet.cssRules.length);
				// pass;
			}
			else if (k == 'font') {
				self.element.style.fontFamily = v;
			}
			else if (k == 'foreground') {
				self.element.style.color = v;
			}
			else if (k == 'height' || k == 'width') {
				if (isNaN (v)) {
					self.element.style [k] = v;
				}
				else {
					self.element.style [k] = '{}px'.format (v);
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
				if (self.textElement == null) {
					self.textElement = document.createElement ('div');
					self.element.appendChild (self.textElement);
					self.textElement.style.width = '100%';
					self.textElement.style.height = '100%';
					self.textElement.style.display = 'flex';
					self.textElement.style.alignItems = 'center';
					self.textElement.style.justifyContent = 'center';
					self.textElement.style.position = 'relative';
				}
				self.textElement.innerText = v;
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
				master._last_child_ids = dict ({});
			}
			var count = master._last_child_ids.py_get (py_name, 0) + 1;
			master._last_child_ids [py_name] = count;
			if (count == 1) {
				var py_name = '!{}'.format (py_name);
			}
			else {
				var py_name = '!{}{}'.format (py_name, count);
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
		for (var c of list (self.children.py_values ())) {
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
		document.body.appendChild (self.window);
		self.mainFrame.ondragstart = self._dragStart;
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
		self.window.style.position = 'absolute';
		self._x = 0;
		self._y = 0;
		var __left0__ = len (Tk.__zStack__);
		self._z = __left0__;
		self.window.style.zIndex = __left0__;
		self._moveWindow (0, 0);
		Tk.__zStack__.append (self);
		self.children = dict ({});
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
		print (self);
		var i = Tk.__zStack__.index (self);
		Tk.__zStack__.py_pop (i);
		for (var above of Tk.__zStack__.__getslice__ (i, null, 1)) {
			above._z--;
			above.window.style.zIndex = above._z;
		}
		Tk.__zStack__.append (self);
		var __left0__ = len (Tk.__zStack__);
		self._z = __left0__;
		self.window.style.zIndex = __left0__;
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
		e.target = self.window;
		var startX = e.clientX;
		var startY = e.clientY;
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
			self._moveWindow ((self._x + e.clientX) - startX, (self._y + e.clientY) - startY);
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
			return e.preventDefault ();
		});
	});},
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
		self.element = document.createElement ('p');
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

//# sourceMappingURL=tkinter.map
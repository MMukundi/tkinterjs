// Transcrypt'ed from Python, 2020-08-17 18:00:14
var re = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
var __name__ = 'helperFunc';
export var _join = function (value) {
	return ' '.join (map (_stringify, value));
};
export var _stringify = function (value) {
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
	var res = tuple ([]);
	for (var item of seq) {
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
	if (isinstance (cnfs, dict)) {
		return cnfs;
	}
	else if (isinstance (cnfs, tuple ([py_typeof (null), str]))) {
		return cnfs;
	}
	else {
		var cnf = dict ({});
		for (var c of _flatten (cnfs)) {
			try {
				cnf.py_update (c);
			}
			catch (__except0__) {
				if (isinstance (__except0__, tuple ([AttributeError, py_TypeError]))) {
					var msg = __except0__;
					print ('_cnfmerge: fallback due to:', msg);
					for (var i of c.py_items ()) {
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
export var _support_default_root = 1;
export var _default_root = null;

//# sourceMappingURL=helperFunc.map
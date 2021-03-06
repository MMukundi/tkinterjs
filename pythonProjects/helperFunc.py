import re

# _magic_re = re.compile(r'([\\{}])')
# _space_re = re.compile(r'([\s])', re.ASCII)

def _join(value):
	"""Internal function."""
	return ' '.join(map(_stringify, value))

def _stringify(value):
	"""Internal function."""
	if isinstance(value, (list, tuple)):
		if len(value) == 1:
			value = _stringify(value[0])
			if _magic_re.search(value):
				value = '{%s}' % value
		else:
			value = '{%s}' % _join(value)
	else:
		value = str(value)
		if not value:
			value = '{}'
		elif _magic_re.search(value):
			# add '\' before special characters and spaces
			value = _magic_re.sub(r'\\\1', value)
			value = value.replace('\n', r'\n')
			value = _space_re.sub(r'\\\1', value)
			if value[0] == '"':
				value = '\\' + value
		elif value[0] == '"' or _space_re.search(value):
			value = '{%s}' % value
	return value

def _flatten(seq):
	"""Internal function."""
	res = []

	for item in seq:

		if isinstance(item, (tuple, list)):
			res += _flatten(item)
		elif item is not None:

			res.append(item)
	return tuple(res)

# try: _flatten = _tkinter._flatten
# except AttributeError: pass

def _cnfmerge(cnfs):
	"""Internal function."""

	if isinstance(cnfs, dict):
		return cnfs
	elif isinstance(cnfs, (type(None), str)):
		return cnfs
	else:
		cnf = {}
		f = _flatten(cnfs)

		for c in f:

			try:
				cnf.update(c)
			except:

				for k in c:
					v = c[k]
					cnf[k] = v
		return cnf

# try: _cnfmerge = _tkinter._cnfmerge
# except AttributeError: pass

_magic_re = re.compile(r'([\\{}])')
_space_re = re.compile(r'([\s])', re.ASCII)


def _toBool(v):
	return v!=None and (v=="YES" or v==1 or v==True)

import js
# from helperFunc import *

# _magic_re = re.compile(r'([\\{}])')
# _space_re = re.compile(r'([\s])', re.ASCII)
_support_default_root = 1
_default_root = None

N = "n"
NE = "ne"
E = "e"
SE = "se"
S = "s"
SW = "sw"
W = "w"
NW = "nw"

Yes = "yes"
No = "no"

GRID = "grid"
PACK = "pack"
PLACE = "place"

import re
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
    res = ()
    for item in seq:
        if isinstance(item, (tuple, list)):
            res = res + _flatten(item)
        elif item is not None:
            res = res + (item,)
    return res

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
        for c in _flatten(cnfs):
            try:
                cnf.update(c)
            except (AttributeError, TypeError) as msg:
                print("_cnfmerge: fallback due to:", msg)
                for k, v in c.items():
                    cnf[k] = v
        return cnf

# try: _cnfmerge = _tkinter._cnfmerge
# except AttributeError: pass

_magic_re = re.compile(r'([\\{}])')
_space_re = re.compile(r'([\s])', re.ASCII)
_support_default_root = 1
_default_root = None

def _toBool(v):
    return v!=None and (v=="yes" or v==1 or v==True)



class Grid:
    master = None
    element = None

    def __setupGrid__(self):
        self.nextRow = 0
        self.occupiedRows = set()
        self.columns = 1
        if(self.master.layoutMethod == None):
            self.master.layoutMethod = GRID
            self.master.element.classList.add("grid")
        elif(self.master.layoutMethod != GRID):
            raise Exception(
                f'Cannot use grid with an element in {self.master.layoutMethod} mode')

    def grid(self, column=0, columnspan=1, in_=None, ipadx=0, ipady=0, padx=0, pady=0, row=None, rowspan=1, sticky=None):
        print("gridding")
        if(self.master.layoutMethod != GRID or (not hasattr(self, 'occupiedRows'))):
            self.__setupGrid__()
        if(row == None):
            row = 0
            while(row in self.occupiedRows):
                row += 1
        self.occupiedRows.add(row)
        print(self.element.style)
        self.element.style.gridColumnStart = f'{column+1}'
        self.element.style.gridRowStart = f'{row+1}'
        self.element.style.gridColumnEnd = f'{column+1+columnspan}'
        self.element.style.gridRowEnd = f'{row+1+rowspan}'
        print(self.element.style)
        self.master.element.appendChild(self.element)

class Place:
    def place(self,**kw):
        self.master.element.appendChild(self.element)       

class Misc:
    element = None
    # used for generating child widget names
    _last_child_ids = None
    options = {}
    minWidth = minHeight = float("-inf")
    maxWidth = maxHeight = float("inf")
    getValue = lambda x:None
    _size = None

    def destroy(self):
        self.element.remove()

    def _geometry(self, g):
        geo = list(map(int,g.split("x")))
        print(geo)
        _size = geo
        return (min(self.maxWidth,max(geo[0],self.minWidth)),min(self.maxHeight,max(geo[1],self.minHeight)))

    def geometry(self, g):
        w,h = self._geometry(g)
        print("sizing",g,w,h)
        self.element.style.width = f'{w}px'
        self.element.style.height = f'{h}px'
    
    def maxsize(self,w,h):
        self.maxWidth = w
        self.maxHeight = h

    def minsize(self,w,h):
        self.minWidth = w
        self.minHeight = h

    def configure(self, **kw):
        for k in kw:
            v = kw[k]
            if(k == "activebackground"):
                pass
            elif(k == "activeforeground"):
                pass
            elif(k == "anchor"):
                self.element.style.position = 'relative'
                if('n' in v and 's' in v):
                    self.element.style.height = "100%"
                if('e' in v and 'w' in v):
                    self.element.style.width = "100%"

                if('n' in v):
                    self.element.style.top = 0
                if('e' in v):
                    self.element.style.right = 0
                if('s' in v):
                    self.element.style.bottom = 0
                if('w' in v):
                    self.element.style.left = 0
            elif(k == "background"):
                self.element.style[k] = v
            elif(k == "bitmap"):
                pass
            elif(k == "borderwidth"):
                self.element.style.borderWidth = v
            elif(k == "cursor"):
                self.element.style.cursor = v
            elif(k == "disabledforeground"):
                pass
            elif(k == "font"):
                self.element.style.fontFamily = v
            elif(k == "foreground"):
                self.element.style.color = v
            elif(k == "highlightbackground"):
                # self.element.style.borderWidth=v
                pass
            elif(k == "highlightcolor"):
                self.element.style.outlineColor = v
            elif(k == "highlightthickness"):
                self.element.style.outlineWeight = v
            elif(k == "image"):
                self.element.style.background = v
            elif(k == "insertbackground"):
                self.element.style.caretColor = v
            elif(k == "insertborderwidth"):
                pass
            elif(k == "jump"):
                pass
            elif(k == "justify"):
                self.element.style.textAlign = v
                pass
            elif(k == "orient"):
                pass
            elif("pad" in k):
                if("x" in k):
                    self.element.style.paddingLeft = self.element.style.paddingRight = v
                else:
                    self.element.style.paddingTop = self.element.style.paddingBottom = v
            elif(k == "relief"):
                pass
            elif(k == "selectbackground"):
                pass
            elif(k == "setgrid"):
                pass
            elif(k == "takefocus"):
                if(not v):
                    self.__defFoc__ = self.element.tabindex
                    self.element.tabindex = -1
                else:
                    self.element.tabindex = self.__defFoc__
            elif(k == "text"):
                if(self.element.children.length != 0):
                    s = js.document.createElement("span")
                    s.innerText = v
                    self.element.appendChild(s)
                else:
                    self.element.innerText = v
            elif("variable" in k):
                v.get = lambda: self.getValue()
            elif(k == "troughcolor"):
                pass
            elif(k == "underline"):
                pass
            elif(k == "wraplength"):
                pass
            elif("scrollcommand" in k):
                pass

            self.options[k] = v
    config = configure
    def cget(self, k):
        return self.options[k]

class BaseWidget(Misc):
    """Internal class."""

    def _setup(self, master, cnf):
        """Internal function. Sets up information about children."""
        self.layoutMethod = None
        if _support_default_root:
            global _default_root
            if not master:
                if not _default_root:
                    _default_root = Tk()
                master = _default_root
        self.master = master

        name = None
        if 'name' in cnf:
            name = cnf['name']
            del cnf['name']
        if not name:
            name = self.__class__.__name__.lower()
            if master._last_child_ids is None:
                master._last_child_ids = {}
            count = master._last_child_ids.get(name, 0) + 1
            master._last_child_ids[name] = count
            if count == 1:
                name = '!%s' % (name,)
            else:
                name = '!%s%d' % (name, count)
        self._name = name
        if master._w == '.':
            self._w = '.' + name
        else:
            self._w = master._w + '.' + name
        self.children = {}
        if self._name in self.master.children:
            self.master.children[self._name].destroy()
        self.master.children[self._name] = self

    def __init__(self, master, widgetName, cnf={}, kw={}, extra=()):
        """Construct a widget with the parent widget MASTER, a name WIDGETNAME
        and appropriate options."""
        if kw:
            cnf = _cnfmerge((cnf, kw))
        self.widgetName = widgetName

        BaseWidget._setup(self, master, cnf)
        if(hasattr(self,"default_size")):
            w,h = self.default_size
            if hasattr(cnf,"width"):
                w = cnf["width"]
            if hasattr(cnf,"height"):
                h = cnf["height"]
            self.geometry(f'{w}x{h}') 
        else:
            self._size = (self.element.clientWidth,self.element.clientHeight)
        
        # classes = [(k, v) for k, v in cnf.items() if isinstance(k, type)]
        # for k, v in classes:
        #     k.configure(self, v)
        # print(**cnf)
        self.configure(**cnf)

    def destroy(self):
        """Destroy this and all descendants widgets."""
        for c in list(self.children.values()):
            c.destroy()
        if self._name in self.master.children:
            del self.master.children[self._name]
        Misc.destroy(self)


class Widget(BaseWidget, Grid, Place):# , Pack):
    """Internal class.

    Base class for a widget which can be positioned with the geometry managers
    Pack, Place or Grid."""
    pass


class Button(Widget):
    """Button widget."""

    def __init__(self, master=None, cnf={}, **kw):
        """Construct a button widget with the parent MASTER.

        STANDARD OPTIONS

            activebackground, activeforeground, anchor,
            background, bitmap, borderwidth, cursor,
            disabledforeground, font, foreground
            highlightbackground, highlightcolor,
            highlightthickness, image, justify,
            padx, pady, relief, repeatdelay,
            repeatinterval, takefocus, text,
            textvariable, underline, wraplength

        WIDGET-SPECIFIC OPTIONS

            command, compound, default, height,
            overrelief, state, width
        """

        self.element = js.document.createElement("button")
        Widget.__init__(self, master, 'button', cnf, kw)
        self.element.classList.add("TkButton")
        print("el", self.master.element)
        # self.master.element.appendChild(self.element)

        self._callback = kw["command"] if kw["command"] != None else lambda x: None
        self.element.onclick = lambda x:self._callback()

    def flash(self):
        """Flash the button.

        This is accomplished by redisplaying
        the button several times, alternating between active and
        normal colors. At the end of the flash the button is left
        in the same normal/active state as when the command was
        invoked. This command is ignored if the button's state is
        disabled.
        """

        # self.tk.call(self._w, 'flash')
        print("I know I should, but I shan't")
        return None

    def invoke(self):
        """Invoke the command associated with the button.

        The return value is the return value from the command,
        or an empty string if there is no command associated with
        the button. This command is ignored if the button's state
        is disabled.
        """
        return self._callback()
        # return s elf.tk.call(self._w, 'invoke')


class Tk(Misc):
    _w = path = "."
    default_size = (500,300)

    def __init__(self, master=None, cnf={}, **kw):
        self.window = js.document.createElement("div")
        self.window.classList.add("TkWindow")
        self.window.draggable = "true"

        self.menuBar = js.document.createElement("div")
        self.menuBar.classList.add("MenuBar")

        self.closeButton = js.document.createElement("button")

        self.closeButton.classList.add("CloseButton")
        self.closeButton.classList.add("TkButton")
        self.closeButton.innerText = "X"
        self.closeButton.onclick = lambda e: self.destroy()
        self.menuBar.appendChild(self.closeButton)

        self.titleSpan = js.document.createElement("span")
        self.titleSpan.style.float = "left"
        self.titleSpan.innerText = "Tkinter"
        self.menuBar.appendChild(self.titleSpan)

        self.mainFrame = js.document.createElement("div")
        self.element = self.mainFrame
        self.mainFrame.classList.add("Content")
        Widget.__init__(self, self, 'tk', cnf, kw)

        self.window.appendChild(self.menuBar)
        self.window.appendChild(self.mainFrame)
        js.document.body.appendChild(self.window)

        self.window.ondragstart = self._moveWindow
        self.window.ondragend = self._endMove
        self.window.style.position = "absolute"
        self._x=0
        self._y=0

        self.children = {}

    def _moveWindow(self,e):
        e.dataTransfer.setData("x", e.clientX)
        e.dataTransfer.setData("y", e.clientY)

    def _endMove(self, e):
        e.preventDefault()
        # dx = e.clientX-e.dataTransfer.getData("x")
        # dy = e.clientY- e.dataTransfer.getData("y")
        dx =e.dataTransfer.getData("x")
        dy = e.dataTransfer.getData("y")
        self.window.style.left = f'{dx}px'
        
        # e.target.appendChild(document.getElementById(data));


    def destroy(self):
        Misc.destroy(self)
        self.window.remove()

    def geometry(self, g):
        w, h = self._geometry(g)
        self.window.style.width = f'{w}px'
        self.window.style.height = f'{h}px'

    def title(self, t):
        print(self.menuBar)
        self.titleSpan.innerText = t

    def mainloop(self):
        pass

class Wm(Misc):
    def wm_aspect(self,
              minNumer=None, minDenom=None,
              maxNumer=None, maxDenom=None):
        return self._size
    aspect = wm_aspect
    def wm_attriabutes(self,*args):
        pass
    def wm_client(self, name=None):
        pass
    client = wm_client
    def wm_resizable(self, width=None, height=None):
        w = _toBool(width)
        h = _toBool(height)
        self.element.style.resize = "both" if w and h else ("horizontal" if w else ("vertical" if h else "none"))
    def wm_colormapwindows(self, *wlist):
        pass
    colormapwindows = wm_colormapwindows

class Frame(Widget):
    def __init__(self, master=None, cnf={}, **kw):
        self.element = js.document.createElement("div")
        Widget.__init__(self, master, 'frame', cnf, kw)
        # js.document.body.appendChild(self.element)

class Label(Widget):
    def __init__(self, master=None, cnf={}, **kw):
        self.element = js.document.createElement("p")
        Widget.__init__(self, master, 'label', cnf, kw)
        # js.document.body.appendChild(self.element)

class Entry(Widget):
    def __init__(self, master=None, cnf={}, **kw):
        self.element = js.document.createElement("input")
        self.element.type = "text"
        Widget.__init__(self, master, 'input', cnf, kw)
        # js.document.body.appendChild(self.element)
    def getValue(self):
        return self.element.value

class Checkbutton(Widget):
    def __init__(self, master=None, cnf={}, **kw):
        self.element = js.document.createElement("input")
        self.element.type = "checkbox"
        Widget.__init__(self, master, 'checkbox', cnf, kw)
        # js.document.body.appendChild(self.element)
    def getValue(self):
        return self.element.checked

class Variable:
    def __init__(self):
        self.val = None
        self.get = lambda x: None
    def set(self,v):
        self.val = v
    # def get(self,v):
    #     self.val = v
    def __repr__(self):
        print(self.val)
        return self.get()

class StringVar(Variable):
    pass

class IntVar(Variable):
    pass

class DoubleVar(Variable):
   pass

class BooleanVar(Variable):
    pass
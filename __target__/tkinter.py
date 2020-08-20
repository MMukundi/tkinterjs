from org.transcrypt.stubs.browser import __pragma__
from helperFunc import *

__pragma__('kwargs')

class LayoutManager:
    def _addToMaster(self):
        self.master.element.appendChild(self.element)
        self.master._children.append(self)


class Grid(LayoutManager):
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
        if(self.master.layoutMethod != GRID or (not hasattr(self, 'occupiedRows'))):
            self.__setupGrid__()
        if(column == None):
            column = 0
        if(row == None):
            row = 0
            while(row in self.occupiedRows):
                row += 1
        self.occupiedRows.add(row)

        if(sticky!=None):
            sticky = sticky.lower()
                        
            if( 'n' in sticky and 's' in sticky):
                self.element.style.alignSelf = "stretch"
            elif('n' in sticky):
                self.element.style.alignSelf = "start"
            elif('s' in sticky):
                self.element.style.alignSelf = "end"
            else:
                self.element.style.height = ""
                self.element.style.alignSelf = "center"

            if('e' in sticky and 'w' in sticky):
                self.element.style.justifySelf = "stretch"
            elif('e' in sticky):
                self.element.style.justifySelf = "end"

            elif('w' in sticky):
                self.element.style.justifySelf = "start"
            else:
                self.element.style.width = ""
                self.element.style.justifySelf = "center"

        self.element.style.gridColumnStart = f'{column+1}'
        self.element.style.gridRowStart = f'{row+1}'
        self.element.style.gridColumnEnd = f'{column+1+columnspan}'
        self.element.style.gridRowEnd = f'{row+1+rowspan}'
        self._addToMaster()


class Place(LayoutManager):
    def place(self, **kwargs):
        self._addToMaster()


class Misc:
    element = None
    # used for generating child widget names
    _last_child_ids = None

    minWidth = minHeight = float("-inf")
    maxWidth = maxHeight = float("inf")
    getValue = lambda x: None

    options = {}
    _children = []
    textElement = None

    def destroy(self):
        self.element.remove()

    def _geometry(self, g):
        geo = list(map(int, g.split("x")))
        return (min(self.maxWidth, max(geo[0], self.minWidth)), min(self.maxHeight, max(geo[1], self.minHeight)))

    def geometry(self, g):
        w, h = self._geometry(g)

        self.element.style.width = f'{w}px'
        self.element.style.height = f'{h}px'

    def maxsize(self, w, h):
        self.maxWidth = w
        self.maxHeight = h

    def minsize(self, w, h):
        self.minWidth = w
        self.minHeight = h

    def configure(self, **kwargs):
        for k in kwargs.keys():
            v = kwargs[k]
            if(k == "activebackground"):
                pass
            elif(k == "activeforeground"):
                pass
            elif(k == "anchor"):
                if(self.textElement==None):
                    self.textElement = document.createElement("div")
                    self.element.appendChild(self.textElement)
                    self.textElement.style.width = "100%"
                    self.textElement.style.height = "100%"
                    self.textElement.style.display = "flex"
                    self.textElement.style.alignItems="center"
                    self.textElement.style.justifyContent="center"
                    self.textElement.style.position = 'relative'
                    

                v = v.lower()
                    
                if('n' in v):
                    self.textElement.element.style.alignItems = "top"
                if('e' in v):
                    self.textElement.element.style.justifyContent = "right"
                if('s' in v):
                    self.textElement.element.style.alignItems = "bottom"
                if('w' in v):
                    self.textElement.element.style.justifyContent = "left"
            elif(k == "background"):
                self.element.style[k] = v
            elif(k == "bitmap"):
                pass
            elif(k == "borderwidth"):
                self.element.style.borderWidth = v
            elif(k == "cursor"):
                self.element.style.cursor = v
            elif(k == "disabledforeground"):
                if(hasattr(self,"_dfgid")):
                    _dynamic_styles.sheet.deleteRule(self._dfgid)
                s = f"#{self.element.id}:disabled"+"{color:"+v+"}"
                self._dfgid=_dynamic_styles.sheet.insertRule(s,_dynamic_styles.sheet.cssRules.length)
                pass
            elif(k == "font"):
                self.element.style.fontFamily = v
            elif(k == "foreground"):
                self.element.style.color = v
            elif(k == "height" or k=="width"):
                if(js_isNaN(v)):
                    self.element.style[k]=v
                else:
                    self.element.style[k]=f"{v}px"
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
            elif(k == "state"):
                self.element.disabled = v=="disabled"
                # self.element.disabled=self.element.disabled.lower()
            elif(k == "takefocus"):
                if(not v):
                    self.__defFoc__ = self.element.tabindex
                    self.element.tabindex = -1
                else:
                    self.element.tabindex = self.__defFoc__
            elif(k == "text"):
                if(self.textElement==None):
                    self.textElement = document.createElement("div")
                    self.element.appendChild(self.textElement)
                    self.textElement.style.width = "100%"
                    self.textElement.style.height = "100%"
                    self.textElement.style.display = "flex"
                    self.textElement.style.alignItems="center"
                    self.textElement.style.justifyContent="center"
                    self.textElement.style.position = 'relative'
                self.textElement.innerText = v  
                # if(self.element.tagName=="INPUT"):
                #     l = document.createElement("label")
                #     l.innerText = v
                #     self.element.id = self._w
                #     l["for"] = self.element.id
                #     self.master.element.appendChild(l)
                # el
                # if(self.element.children.length != 0):
                #     s = document.createElement("span")
                #     s.innerText = v
                #     self.element.appendChild(s)
                # else:
                #     self.element.innerText = v
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
            elif(self.element.style[k] !=js_undefined):
                self.element.style[k]=v
            # console.log(k,self.element.style,self.element.style[k],self.element.style.k !=None)
            self.options[k] = v

    def config(self, **kwargs):
        self.configure(self, **kwargs)
    # config = Misc.configure

    def cget(self, k):
        return self.options[k]

    def winfo_reqheight(self):
        return self.element.clientHeight

    def winfo_reqwidth(self):
        return self.element.clientWidth

    def winfo_children(self):
        return self._children


class BaseWidget(Misc):
    """Internal class."""

    def _setup(self, master, cnf):
        """Internal function. Sets up information about children."""
        self.layoutMethod = None
        self.element.onresize
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
                name = f'!{name}'
            else:
                name = f'!{name}{count}'
        self._name = name
        if master._w=='.':
            self._w = '.' + name
        else:
            self._w = master._w + '.' + name
        self.element.id = self._w.replace(".","_").replace("!","")
        self.children = {}
        if self._name in self.master.children:
            self.master.children[self._name].destroy()
        self.master.children[self._name] = self

    def __init__(self, master, widgetName, cnf={}, kwargs={}, extra=()):
        """Construct a widget with the parent widget MASTER, a name WIDGETNAME
        and appropriate options."""
        self.options = {}
        self._children = []

        if len(kwargs.keys()):
            cnf = _cnfmerge((cnf, kwargs))

        self.widgetName = widgetName

        BaseWidget._setup(self, master, cnf)

        # if(hasattr(self,"default_size")):
        #     w,h = self.default_size
        #     if hasattr(cnf,"width"):
        #         w = cnf["width"]
        #     if hasattr(cnf,"height"):
        #         h = cnf["height"]
        #     self.geometry(f'{w}x{h}')
        # else:
        #     self._size = (self.element.clientWidth,self.element.clientHeight)

        # classes = [(k,cnf[k]) for k in cnf if isinstance(k, type)]
        # for k in c:
        #     v = c[k]
        #     k.configure(self, v)


        self.configure(**cnf)

    def destroy(self):
        """Destroy this and all descendants widgets."""
        for c in list(self.children.values()): 
            c.destroy()
        if self._name in self.master.children:
            del self.master.children[self._name]
        Misc.destroy(self)


class Widget(BaseWidget, Grid, Place):  # , Pack):
    """Internal class.

    Base class for a widget which can be positioned with the geometry managers
    Pack, Place or Grid."""
    pass


class Button(Widget):
    """Button widget."""

    def __init__(self, master=None, cnf={}, **kwargs):
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


        self.element = document.createElement("button")
        # def __init__(self, master, widgetName, cnf={}, kwargs={}, extra=()):
        Widget.__init__(self, master, 'button', cnf, kwargs)
        self.element.classList.add("TkButton")
        # self.master.element.appendChild(self.element)

        self._callback = kwargs["command"] if kwargs["command"] != None else lambda x: None
        self.element.onclick = lambda x: self._callback()

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
    _dragging = None
    __zStack__ = []

    def __init__(self, master=None, cnf={}, **kwargs):

        self.window = document.createElement("div")
        self.window.classList.add("TkWindow")
        self.window.draggable = "true"

        self.menuBar = document.createElement("div")
        self.menuBar.classList.add("MenuBar")

        self.closeButton = document.createElement("button")

        self.closeButton.classList.add("CloseButton")
        self.closeButton.classList.add("TkButton")
        self.closeButton.innerText = "X"
        self.closeButton.onclick = lambda e: self.destroy()
        self.menuBar.appendChild(self.closeButton)

        self.titleSpan = document.createElement("span")
        self.titleSpan.classList.add("WindowTitle","__noselect__")
        self.titleSpan.style.float = "left"
        self.titleSpan.innerText = "Tkinter"
        self.menuBar.appendChild(self.titleSpan)

        self.mainFrame = document.createElement("div")
        self.element = self.mainFrame
        self.mainFrame.classList.add("Content")
        # (self, master, widgetName, cnf={}, kwargs={}, extra=())
        Widget.__init__(self, self, 'tk', cnf, kwargs)

        self.window.appendChild(self.menuBar)
        self.window.appendChild(self.mainFrame)
        document.body.appendChild(self.window)

        self.mainFrame.ondragstart = self._dragStart
        self.window.onclick = lambda: self._bringToTop()
        # self.window.ondragend = lambda x: console.log("inside",Tk._dragEnd(x),x)

        self.window.style.position = "absolute"
        self._x = 0
        self._y = 0
        self._z = self.window.style.zIndex = len(Tk.__zStack__)
        self._moveWindow(0, 0)
        
        Tk.__zStack__.append(self)
        self.children = {}
    def _bringToTop(self):
        print(self)
        i = Tk.__zStack__.index(self)
        Tk.__zStack__.pop(i)

        for above in Tk.__zStack__[i:]:
            above._z -=1
            above.window.style.zIndex = above._z
        
        Tk.__zStack__.append(self)
        self._z = self.window.style.zIndex = len(Tk.__zStack__)

    def _dragStart(self , e):
        e.target=self.window
        startX=e.clientX
        startY=e.clientY

        def end(e):
            self._moveWindow(self._x+e.clientX-startX,self._y+e.clientY-startY)
        
        document.body.ondrop = end
        document.body.ondragover = lambda e:e.preventDefault()

    def _moveWindow(self, x,y):
        self._x = x
        self._y = y
        self.window.style.left = f'{x}px'
        self.window.style.top = f'{y}px'

    def destroy(self):
        Misc.destroy(self)
        self.window.remove()

    def geometry(self, g):
        w, h = self._geometry(g)
        self.window.style.width = f'{w}px'
        self.window.style.height = f'{h}px'

    def title(self, t):

        self.titleSpan.innerText = t

    def mainloop(self):
        pass


class Wm(Misc):
    def wm_aspect(self,
                  minNumer=None, minDenom=None,
                  maxNumer=None, maxDenom=None):
        return (self.element.clientWidth, self.element.clientHeight)
    # aspect = wm_aspect
    def wm_attriabutes(self, *args):
        pass

    def wm_client(self, name=None):
        pass
    # client = wm_client

    def wm_resizable(self, width=None, height=None):
        w = _toBool(width)
        h = _toBool(height)
        self.element.style.resize = "both" if w and h else (
            "horizontal" if w else ("vertical" if h else "none"))

    def wm_colormapwindows(self, *wlist):
        pass
    # colormapwindows = wm_colormapwindows

    def wm_command(self, value=None):
        pass
    # command = wm_command


class Frame(Widget):
    def __init__(self, master=None, cnf={}, **kwargs):
        self.element = document.createElement("div")
        self.element.classList.add("TkFrame")
        Widget.__init__(self, master, 'frame', cnf, kwargs)
        # document.body.appendChild(self.element)


class Label(Widget):
    def __init__(self, master=None, cnf={}, **kwargs):
        self.element = document.createElement("p")
        self.element.classList.add("TkLabel")
        Widget.__init__(self, master, 'label', cnf, kwargs)
        # document.body.appendChild(self.element)


class Entry(Widget):
    def __init__(self, master=None, cnf={}, **kwargs):
        self.element = document.createElement("input")
        self.element.js_type = "text"
        self.element.classList.add("TkEntry")
        Widget.__init__(self, master, 'input', cnf, kwargs)
        # document.body.appendChild(self.element)

    def getValue(self):
        return self.element.value


class Checkbutton(Widget):
    def __init__(self, master=None, cnf={}, **kwargs):
        self.element = document.createElement("input")
        self.element.classList.add("TkCheckbutton")

        Widget.__init__(self, master, 'checkbutton', cnf, kwargs)
        self.element.js_type = "checkbox"

    def getValue(self):
        return self.element.checked


class Variable:
    def __init__(self):
        self.val = None
        self.get = lambda: None
    def set(self, v):
        self.val = v
    # def get(self,v):
    #     self.val = v

    def __repr__(self):
        return self.get()


class StringVar(Variable):
    pass


class IntVar(Variable):
    pass


class DoubleVar(Variable):
    pass


class BooleanVar(Variable):
    pass



_dynamic_styles= document.createElement("style")
document.head.appendChild(_dynamic_styles)

__pragma__('nokwargs')

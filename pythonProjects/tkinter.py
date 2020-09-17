from org.transcrypt.stubs.browser import __pragma__
from helperFunc import *
import re
# import copy

class StyleManager:
	def __init__(self,ss):
		self.ss=ss
		self.ids=[]
	def updateStyle(self,elementId,styleTag,rule):
		# console.log(self)
		selector=elementId+":-:"+styleTag
		index = self.ids.index(selector)

		if(index!=-1):
			self.ss.sheet.removeRule(index)
		return self.ss.sheet.insertRule(rule,self.ss.sheet.cssRules.length if index==-1 else index)
	def addStyle(self,elementId,styleTag,rule,index=None):
		selector=elementId+":-:"+styleTag
		if(index==None):
			self.ids.append(selector)
			index = self.ss.sheet.cssRules.length
		else:
			self.ids.insert(index,selector)
		return self.ss.sheet.insertRule(rule,index)
	def deleteStyle(self,elementId,styleTag):
		selector=elementId+":-:"+styleTag
		index = self.ids.index(selector)
		self.ss.sheet.removeRule(index)
		del ids[index]
cssChars = re.compile("(%|px|em|rm|vh|vw)")
resizeArea = 10
_support_default_root = 1
_default_root = None

N = "N"
NE = "NE"
E = "E"
SE = "SE"
S = "S"
SW = "SW"
W = "W"
NW = "NW"
CENTER = "CENTER"

X="X"
Y="Y"
BOTH = "BOTH"

YES = "YES"
NO = "NO"

GRID = "GRID"
PACK = "PACK"
PLACE = "PLACE"

TOP = "TOP"
LEFT = "LEFT"
RIGHT = "RIGHT"
BOTTOM = "BOTTOM"

__pragma__('kwargs')

def _toCss(v):
	return v if js_isNaN(v) else v+"px"

def _fromCss(css):
	return cssChars.sub("",css)

class LayoutManager:
	def _addToMaster(self):
		self.master.element.appendChild(self.element)
		self.master._children.append(self)


class Grid(LayoutManager):
	master = None
	element = None

	@staticmethod
	def __setup__(container):
		container.nextRow = 0
		container.occupiedRows = set()
		container.columns = 1
		if(container.layoutMethod == None):
			container.layoutMethod = GRID
			container.element.classList.add("grid")
		elif(container.layoutMethod != GRID):
			raise Exception(
				f'Cannot use grid with an element in {container.layoutMethod} mode')

	def grid(self, column=0, columnspan=1, in_=None, ipadx=0, ipady=0, padx=0, pady=0, row=None, rowspan=1, sticky=None,**kwargs):
		container = kwargs["in"] if kwargs["in"]!=None else self.master
		if(container.layoutMethod != GRID or (not hasattr(container, 'occupiedRows'))):
			Grid.__setup__(container)
		if(column == None):
			column = 0
		if(row == None):
			row = 0
			while(row in container.occupiedRows):
				row += 1
		container.occupiedRows.add(row)

		if(sticky!=None):
			sticky = sticky.lower()
					
			if( 'n' in sticky and 's' in sticky):
				self.element.style.alignSelf = "stretch"
			elif('n' in sticky):
				self.element.style.alignSelf = "start"
			elif('s' in sticky):
				self.element.style.alignSelf = "end"
			else:
				# self.element.style.height = "initial"
				self.element.style.alignSelf = "center"

			if('e' in sticky and 'w' in sticky):
				self.element.style.justifySelf = "stretch"
			elif('e' in sticky):
				self.element.style.justifySelf = "end"

			elif('w' in sticky):
				self.element.style.justifySelf = "start"
			else:
				# self.element.style.width = "initial"
				self.element.style.justifySelf = "center"

		self.element.style.gridColumnStart = f'{column+1}'
		self.element.style.gridRowStart = f'{row+1}'
		self.element.style.gridColumnEnd = f'{column+1+columnspan}'
		self.element.style.gridRowEnd = f'{row+1+rowspan}'
		self._addToMaster()
class Pack(LayoutManager):
	element = None
	master = None

	@staticmethod
	def __setup__(container):
		container.packingList = []
		container._last_top = None
		container._last_bottom = None
		container._last_element = None
		container.element.style.display = "flex"
		container.element.style.flexDirection = "column"
		container.layoutMethod = PACK

	def pack(self, expand = None, side = None, fill = None, **kwargs):
		container = kwargs["in"] if kwargs["in"]!=None else self.master
		if(container.layoutMethod != PACK or (not hasattr(self,"_last_top"))):
			Pack.__setup__(container)
		
		if(side == TOP):
			if(container._last_top == None):
				if(container._last_element==None):
					container.element.appendChild(self.element)

				else:
					container._last_element.before(self.element)

			else:
				container._last_top.after(self.element)

			container._last_top = self.element
		elif(side == BOTTOM):
			if(container._last_bottom == None):
				if(container._last_element==None):
					container.element.appendChild(self.element)

				else:
					container._last_element.after(self.element)

			else:
				container._last_bottom.before(self.element)

			container._last_bottom = self.element
		else:
			if(container._last_element==None):
				container.element.appendChild(self.element)
			else:
				container._last_element.after(self.element)
			self.element.alignSelf = "flex-start" if side==LEFT else "flex-end"		
		container._last_element = self.element


class Place(LayoutManager):
	master = None
	element = None
	
	@staticmethod
	def __setup__(container):
		container.element.style.display = "flex"
		container.layoutMethod = PLACE 
				   
	def place(self,x=0,y=0,relx=0,rely=0,width=0,height=0,relwidth=0,relheight=0,anchor=NW, **kwargs):
		container = kwargs["in"] if kwargs["in"]!=None else self.master
		if(container.layoutMethod != PLACE or (not container.element.style.display == "flex")):
			Place.__setup__(container)

		self.element.style.position = 'absolute'
		# relx = int(float(relx)*100)
		# rely = int(float(rely)*100)
		anchor = anchor.upper()



		transformX=transformY=50
		self.element.style.top = "calc("+int(float(rely)*100)+"% + "+y+"px)"
		self.element.style.left = "calc("+int(float(relx)*100)+"% + "+x+"px)"

		if(anchor!=CENTER):
			if(N in anchor):
				transformY=0
			if(E in anchor):
				transformX=100
			if(S in anchor):
				transformY=100
			if(W in anchor):
				transformX=0
			
			# hCent=E not in anchor and W not in anchor
			# vCent=N not in anchor and S not in anchor
			# if(hCent):
			# 	self.element.style.left = "50%"
			# if(vCent):
			# 	self.element.style.top = "50%"			
		self.element.style["-ms-transform"] = self.element.style["-webkit-transform"] = "translate("+ -transformX +"%,"+ -transformY+"%)"


		if(relwidth!=0 or width!=0):
			rw = int( float ( relwidth ) *100 )
			self.element.style.width = "calc("+rw+"% + "+width+"px)"
		if(relheight!=0 or height!=0):
			rh = int(float(relheight)*100)
			self.element.style.height =  "calc("+rh+"% + "+height+"px)"

		self.element.placed = True
		self._addToMaster()
# class _BindingRequirements
class Misc:
	element = None
	# used for generating child widget names
	_last_child_ids = None

	minWidth = minHeight = float("-inf")
	maxWidth = maxHeight = float("inf")
	get = lambda x: None

	options = {}
	_children = []
	textElement = None
	def _create_text_element(self):
		if(self.textElement==None):
			if(isinstance(self,Label)):
				self.textElement = self.element
			else:
				if(isinstance(self,[Checkbutton,Entry])):
					self.textElement = document.createElement("label")
					self.textElement["for"] = self.element.id
					self.element.before(self.textElement)
				else:
					self.textElement = document.createElement("span")
					self.master.element.appendChild(self.textElement)
					self.textElement.style.width = "100%"
					self.textElement.style.height = "100%"
					self.element.appendChild(self.textElement)
				self.textElement.style.display = "flex"
				self.textElement.style.alignItems="center"
				self.textElement.style.justifyContent="center"
				self.textElement.style.position = 'relative'
	def bind(self, sequence = None, func = None):
		sequenceArr = sequence[1:-1].split("-")
		m=t=d=""
		indecies = [0]
		l=len(sequenceArr)
		if(l<1 or l>4):
			return False
		elif(l==1):
			t=sequenceArr[0]
		else:
			t=sequenceArr[l-2]
			d=sequenceArr[l-1]
			indecies = [["control","alt","shift","meta"].index(s.lower())+1 for s in sequenceArr[:l-2:]]
		if(t.find("Button")==0):
			if(len(t)>6):
				d = t[6::1]
				t= "Button"
			if(not self._function_bindings_[t]):
				self._function_bindings_[t]=[{},{},{},{},{}]		
			for i in indecies:
				self._function_bindings_[t][i][d]=func	
			# d=sequenceArr[1]
		else:
			if(not self._function_bindings_[t]):
				self._function_bindings_[t]=[None,None,None,None,None]	
			for i in indecies:
				self._function_bindings_[t][i]=func
		
		# console.log(sequence,self._function_bindings_)
		# console.log(sequence,self._function_bindings_)

		# type->[none,ctrl,alt,shift,meta]->details
	#currently only for single modifier
	def _bindFunctions(self):
		# self.onActivate = _genHandler("Activate")
		# self.onDeactivate = _genHandler("Activate")
		def eventIndecies(e):
			inds = []
			if(e.ctrlKey):
				inds.append(1)
			if(e.altKey):
				inds.append(2)
			if(e.shiftKey):
				inds.append(3)
			if(e.metaKey):
				inds.append(4)
			return inds if len(inds)>0 else [0]
		def _buttonHandler(e):
			# e.preventDefault()
			# console.log(self)
			allHandlers = self._function_bindings_["Button"]
			if(not allHandlers):
				return
			button = e.button+1
			rect = e.target.getBoundingClientRect()
			for i in eventIndecies(e):
				if(allHandlers[i] and allHandlers[i][button]):
					allHandlers[i][button]({"widget":self,"x":e.clientX-rect.left,"y":e.clientY-rect.top})
		def _wheelHandler(e):
			# e.preventDefault()
			allHandlers = self._function_bindings_["MouseWheel"]
			if(not allHandlers):
				return
			rect = e.target.getBoundingClientRect()
			for i in eventIndecies(e):
				if(allHandlers[i]):					
					allHandlers[i]({"widget":self,"delta":e.deltaY,"x":e.clientX-rect.left,"y":e.clientY-rect.top})

		self.element.onclick = _buttonHandler
		self.element.onscroll = _wheelHandler
		self._function_bindings_ = {}
		if(self.master and self.master._function_bindings_):
			for t in self.master._function_bindings_.keys():
				if(t=="Button"):
					self._function_bindings_[t]=[{},{},{},{},{}]
					for i in range(5):
						console.log(self.master._function_bindings_[t][i])
						self._function_bindings_[t][i]=self.master._function_bindings_[t][i].copy()
				else:
					self._function_bindings_[t]=[None,None,None,None,None]

			# self._function_bindings_ = (self.master._function_bindings_)
		
		# self.element.onclick = _genHandler()
		# self.element.onclick = _genHandler()
		# self.element.onclick = _genHandler()

	def destroy(self):
		self.element.remove()

	def _geometry(self, g):
		return list(map(_toCss, g.split("x")))
		# return (min(self.maxWidth, max(geo[0], self.minWidth)), min(self.maxHeight, max(geo[1], self.minHeight)))

	def geometry(self, g):
		w, h = self._geometry(g)

		self.element.style.width = w
		self.element.style.height = h

	def maxsize(self, w, h):
		self.element.style.maxWidth = _toCss(w)
		self.element.style.maxHeight = _toCss(h)

	def minsize(self, w, h):
		self.element.style.minWidth = _toCss(w)
		self.element.style.minHeight = _toCss(h)

	def configure(self, **kwargs):
		for k in kwargs.keys():
			v = kwargs[k]
			if(k == "activebackground" or k == "activebg"):
				k="activebackground"
				pass
			elif(k == "activeforeground"or k == "activefg"):
				k="activeforeground"
				pass
			elif(k == "anchor"):
				if(self.textElement==None):
					self._create_text_element()
				# self.textElement.textContent=v
					
				v = v.lower()
					
				if('n' in v):
					self.textElement.style.alignItems = "top"
				if('e' in v):
					self.textElement.style.justifyContent = "right"
				if('s' in v):
					self.textElement.style.alignItems = "bottom"
				if('w' in v):
					self.textElement.style.justifyContent = "left"
			elif(k == "background"or k == "bg"):
				k="background"
				self.element.style[k] = v
			elif(k == "bitmap"):
				pass
			elif(k == "borderwidth"):
				self.element.style.borderWidth = v
			elif(k == "cursor"):
				self.element.style.cursor = v
			elif(k == "disabledforeground"):
				s = "#"+self.element.id+":disabled{color:"+v+"}"
				_dynamic_style_manager.updateStyle(self._w,"dfg",s)
				# self._dfgid=_dynamic_styles.sheet.insertRule(s,_dynamic_styles.sheet.cssRules.length)
				pass
			elif(k == "font"):
				self.element.style.fontFamily = v
			elif(k == "foreground"or k =="fg"):
				k="foreground"
				self.element.style.color = v
			elif(k == "height" or k=="width"):
				if(k=="width" and isinstance(self,Entry)):
					self.element.style[k]=v+"ch"
				else:
					self.element.style[k]=_toCss(v)
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
				if(v=="flat"):
					self.element.classList.add("__flat_button__")
				else:
					self.element.classList.remove("__flat_button__")
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
				self._create_text_element()
				self.textElement.textContent = v  

			elif("variable" in k):
				v.get = lambda: self.get()
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
			#
			self.options[k] = v

	def config(self, **kwargs):
		self.configure(self, **kwargs)
	# config = Misc.configure

	def cget(self, k):
		return self.options[k]

	def winfo_height(self):
		return self.element.scrollHeight

	def winfo_width(self):
		return self.element.scrollWidth

	def winfo_reqheight(self):
		return self.element.scrollHeight

	def winfo_reqwidth(self):
		return self.element.scrollWidth

	def winfo_children(self):
		return self._children


class BaseWidget(Misc):
	"""Internal class."""

	def _setup(self, master, cnf):
		"""Internal function. Sets up information about children."""
		self.layoutMethod = None
		# self.element.onresize
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
				name = '!'+name
			else:
				name = '!'+name+count
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
		self._bindFunctions()

	def __init__(self, master, widgetName, cnf={}, kwargs={}, extra=()):
		"""Construct a widget with the parent widget MASTER, a name WIDGETNAME
		and appropriate options."""
		self.options = {}
		self._children = []

		if len(kwargs.keys()):
			cnf = _cnfmerge((cnf, kwargs))

		self.widgetName = widgetName

		BaseWidget._setup(self, master, cnf)
		#
		if(not hasattr(self.options,"width")):
			
			self._width=self.element.scrollWidth
		if(not hasattr(self.options,"height")):
			
			self._height=self.element.scrollHeight

		# if(hasattr(self,"default_size")):
		#	 w,h = self.default_size
		#	 if hasattr(cnf,"width"):
		#		 w = cnf["width"]
		#	 if hasattr(cnf,"height"):
		#		 h = cnf["height"]
		#	 self.geometry(f'{w}x{h}')
		# else:
		#	 self._size = (self.element.clientWidth,self.element.clientHeight)

		# classes = [(k,cnf[k]) for k in cnf if isinstance(k, type)]
		# for k in c:
		#	 v = c[k]
		#	 k.configure(self, v)

		allCnf = {"state":"enabled"}
		allCnf.update(cnf)
		self.configure(**allCnf)

	def destroy(self):
		"""Destroy this and all descendants widgets."""
		for c in list(self.children.values()): 
			c.destroy()
		if self._name in self.master.children:
			del self.master.children[self._name]
		Misc.destroy(self)


class Widget(BaseWidget, Grid, Place , Pack):
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
		self.bind("<Button1>",self._callback)
		# self.element.onclick = lambda x: self._callback()

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
		self.shell = document.createElement("div")
		self.shell.classList.add("resizeShell")

		self.window = document.createElement("div")
		self.window.classList.add("TkWindow")
		# self.window.draggable = "true"

		self.menuBar = document.createElement("div")
		self.menuBar.classList.add("MenuBar")

		self.closeButton = document.createElement("button")

		self.closeButton.classList.add("CloseButton","__flat_button__")
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
		# document.body.appendChild(self.window)

		self.menuBar.draggable = True
		self.menuBar.ondragstart = self._dragStart
		self.window.onclick = lambda: self._bringToTop()
		# self.window.ondragend = lambda x:
		
		self._resizeHandle("n")
		self._resizeHandle("ne")
		self._resizeHandle("e")
		self._resizeHandle("se")
		self._resizeHandle("s")
		self._resizeHandle("sw")
		self._resizeHandle("w")
		self._resizeHandle("nw")

		self.shell.style.position = 'absolute'
		self._x = 0
		self._y = 0
		self._width = 0
		self._height = 0
		self._z = self.shell.style.zIndex = len(Tk.__zStack__)
		self._moveWindow(0, 0)
		self.shell.appendChild(self.window)
		document.body.appendChild(self.shell)
		Tk.__zStack__.append(self)

		self.children = {}
		self._bringToTop()
	def _resizeStart(self,e,loc):
		# e.preventDefault()
		#
		self._width = self._width if self._width else _fromCss(self.winfo_reqwidth())
		self._height = self._height if self._height else _fromCss(self.winfo_reqheight())
		prevX=e.clientX
		prevY=e.clientY		
		# e.dataTransfer.setDragImage(self.window,startX-self._x,startY-self._y)
		def update(e):
			e.preventDefault()
			nonlocal prevX,prevY
			delta = None
			# debugger
			for d in loc:
				if(d in "ew"):
					delta = (e.clientX-prevX)if (d=="e")else (prevX-e.clientX)
					self._width+=delta
					self.mainFrame.style.width = _toCss(self._width)
					if(d=="w"):
						self._x-=delta
						self.shell.style.left = _toCss(self._x)
				else:
					delta = (e.clientY-prevY)if(d=="s")else(prevY-e.clientY)
					self._height+=delta
					self.mainFrame.style.height = _toCss(self._height)
					if(d=="n"):
						self._y-=delta
						self.shell.style.top = _toCss(self._y)
			prevX=e.clientX
			prevY=e.clientY  
		def end(e):
			pass
	 # self._moveWindow(self._x+e.clientX-startX,self._y+e.clientY-startY)
		document.body.ondrop = end
		document.body.ondragover = lambda e:e.preventDefault(update(e))

	def _resizeHandle(self, loc):
		handle = document.createElement("div")
		handle.draggable=True
		handle.style.width = "100%" if ('n' in loc or 's' in loc) else resizeArea+"px"
		handle.style.height = "100%" if ('e' in loc or 'w' in loc) else resizeArea+"px"
		handle.style.cursor = loc+"-resize"
		handle.style.gridArea = loc+"Handle"
		# handle.style.background = "red" if len(loc)==2 else "green"

		handle.ondragstart = lambda e: self._resizeStart(e,loc)
		self.shell.appendChild(handle)

	def _bringToTop(self):
		# self.activateHandler()
		i = Tk.__zStack__.index(self)
		Tk.__zStack__.pop(i)

		for above in Tk.__zStack__[i:]:
			above._z -=1
			above.window.style.zIndex = above._z
		
		Tk.__zStack__.append(self)
		self._z = self.shell.style.zIndex = len(Tk.__zStack__)

	def _dragStart(self , e):
		# e.preventDefault()
		startX=e.clientX
		startY=e.clientY

		rect = self.shell.getBoundingClientRect()
		self._x = rect.left
		self._y = rect.top
	

		# e.dataTransfer.setDragImage(self.window,startX,startY)
		# e.dataTransfer.setDragImage(None,startX-self._x,startY-self._y)

		def drag(e):
			nonlocal startX,startY

			e.preventDefault()
			#
			#
			
			# # self._moveWindow(e.clientX-startX,e.clientY-startY)
			
			# startX = e.clientX
			# startY = e.clientY
		def end(e):
			self._moveWindow(e.clientX-startX,e.clientY-startY)
		
		document.body.ondrop = end
		document.body.ondragover = drag

	def _moveWindow(self, dx,dy):
		self._x += dx
		self._y += dy

		self.shell.style.left = _toCss(self._x)
		self.shell.style.top = _toCss(self._y)

	def destroy(self):
		Misc.destroy(self)
		self.shell.remove()
	
	def maxsize(self,w,h):
		self.shell.style.maxWidth = f'{w+2*resizeArea}px'
		self.shell.style.maxHeight = f'calc({h+2*resizeArea}+var(--header-height))' 
		Misc.maxsize(self,w,h)

	def minsize(self,w,h):
		self.shell.style.minWidth = f'{w+2*resizeArea}px'
		self.shell.style.minHeight = f'calc({h+2*resizeArea}+var(--header-height))' 
		Misc.minsize(self,w,h)  

	def geometry(self, g):
		w, h = self._geometry(g)
		self.shell.style.width = f'{w+2*resizeArea}px'
		self.shell.styleheight = f'calc({h+2*resizeArea}+var(--header-height))' 
		Misc.geometry(self,g)	  


	def title(self, t):

		self.titleSpan.innerText = t

	def mainloop(self):
		pass


class Wm(Misc):
	def wm_aspect(self,
				  minNumer=None, minDenom=None,
				  maxNumer=None, maxDenom=None):
		return (self.element.scrollWidth, self.element.scrollHeight)
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
		self.element = document.createElement("label")
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

	def get(self):
		return self.element.value


class Checkbutton(Widget):
	def __init__(self, master=None, cnf={}, **kwargs):
		self.element = document.createElement("input")
		self.element.classList.add("TkCheckbutton")

		Widget.__init__(self, master, 'checkbutton', cnf, kwargs)
		self.element.js_type = "checkbox"   
	def select(self):
		self.element.checked = True
	def select(self):
		self.element.checked = False
	def get	(self):
		return self.element.checked


class Variable: 
	def __init__(self):
		self.val = None
		self.get = lambda: None
	def set(self, v):
		self.val = v
	# def get(self,v):
	#	 self.val = v

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
_dynamic_style_manager = StyleManager(_dynamic_styles)
	
__pragma__('nokwargs')

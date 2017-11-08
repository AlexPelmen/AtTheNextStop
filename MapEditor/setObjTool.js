var setObjTool = {
	mousePress:	null,
	mousePressRight: null,
	mouseWheelDown: null,
	mouseWheelUp: null,
	wait: null
}

//Событие нажатия клавиши мыши
setObjTool.mousePress 	= function(){
	Objects.addNewObject();
}

//Имитация объекта возле курсора
setObjTool.wait = function(){	
	var ob = ObjectsList[ currentObject ];
	OOP.drawArr( [ 
		game.newAnimationObject( {
			x: selBlock.x,
			y: selBlock.y,
			w: ob.w * map.width,
			h: ob.h * map.height,
			angle: curAngle,
			animation: ob.sprites[ 0 ],
			alpha: 0.5
		} ) 
	] );
}

//Нажатие правой кнопки мыши
setObjTool.mouseDownRight = function(){
	Objects.removeWithCoords();
}

//Колёсико мыши вверх
setObjTool.mouseWheelDown = function(){
	curAngle += curAngle == 270 ? -270 : 90;
}

//Колёсико мыши вниз
setObjTool.mouseWheelUp = function(){
	curAngle -= curAngle == 0 ? -270 : 90;
}
var setObjTool = {
	mousePress:	null,
	mousePressRight: null,
	mouseWheelDown: null,
	mouseWheelUp: null,
	wait: null
}

//������� ������� ������� ����
setObjTool.mousePress 	= function(){
	Objects.addNewObject();
}

//�������� ������� ����� �������
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

//������� ������ ������ ����
setObjTool.mouseDownRight = function(){
	Objects.removeWithCoords();
}

//������� ���� �����
setObjTool.mouseWheelDown = function(){
	curAngle += curAngle == 270 ? -270 : 90;
}

//������� ���� ����
setObjTool.mouseWheelUp = function(){
	curAngle -= curAngle == 0 ? -270 : 90;
}
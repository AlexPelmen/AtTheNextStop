var traficLightSyncTool = {
	mouseDown:	null,
	mouseUp: 	null,
	mousePress:	null,
}

//������� ������� ������� ����
traficLightSyncTool.mousePress 	= function(){
	cRect.x1 = selBlock.x;
	cRect.y1 = selBlock.y;
}

//������� ��������� ������� ����
traficLightSyncTool.mouseDown	= function(){
	x1 = x2 = y1 = y2 = null;
	var x1 = Math.min( cRect.x1, selBlock.x );
	var x2 = Math.max( cRect.x1, selBlock.x );
	var y1 = Math.min( cRect.y1, selBlock.y );
	var y2 = Math.max( cRect.y1, selBlock.y );
		
	brush.drawRect({		//��������� ���������� �������
		x: x1,
		y: y1,
		w: x2 - x1 + map.width,
		h: y2 - y1 + map.height,
		fillColor: "rgba( 125, 125, 255, 0.3)",
	})
}

//������� ������� ������� ����
traficLightSyncTool.mouseUp 	= function(){
	Areas.addNewArea();
}

//������� ������� ������ ������� ����
traficLightSyncTool.mouseDownRight = function(){
	Areas.removeWithCoords();
}

//�����
traficLightSyncTool.wait = function(){
	Areas.getVisObjs();
}

var cropTool = {
	mouseDown:	null,
	mouseUp: 	null,
	mousePress:	null,
	col: null,
	side: null,
}

//������� ��������� ������� ����
cropTool.mouseDown 	= function(){
	var y = selBlock.y - cRect.y1;
	var x = selBlock.x - cRect.x1;
	var w = 0; var h = 0;
	
	var max = pjs.system.getWH();
	
	if( y <= x && y >= -x ){	//������
		x = cRect.x1;
		y = 0;
		w = resizeMap.m*map.width - x;
		h = resizeMap.k*map.height;
		
		this.side = 'Right';
		this.col = w / map.width;
	}	
	else if( y >= x && y >= -x ){ //�����
		x = 0;
		y = cRect.y1;		
		w = resizeMap.m*map.width;
		h = resizeMap.k*map.height - y;
		
		this.side = 'Bottom';
		this.col = h / map.height;
	}
	else if( y < x && y < -x ){ //������	
		x = 0;
		y = 0;	
		w = resizeMap.m * map.width;
		h = cRect.y1 + map.height;
		
		this.side = 'Top';	
		this.col = h / map.height;
	}
	else if( y > x && y < -x ){ //�����
		x = 0;
		y = 0;
		w = cRect.x1 + map.width;
		h = resizeMap.k * map.height;
		
		this.side = 'Left';
		this.col = w / map.width;
	}
	brush.drawRect({		
		x: x,
		y: y,
		w: w,
		h: h,
		fillColor: "rgba( 255, 125, 0, 0.3)",
	})	
}

//������� ������� ������� ����
cropTool.mouseUp 	= function(){
	if( this.col > 0 )
		window[ 'resizeMap' ][ "remove" + [this.side] ]( this.col );
}

//������� ������� ������� ����
cropTool.mousePress 	= function(){
	cRect.x1 = selBlock.x;
	cRect.y1 = selBlock.y;
}
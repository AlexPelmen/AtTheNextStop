var setTool = {
	mouseDown:	null,
	mouseUp: 	null,
	mousePress:	null,
}

//������� ��������� ������� ����
setTool.mousePress 	= function(){
	cRect.x1 = selBlock.x;
	cRect.y1 = selBlock.y;
}

//������� ������� ������� ����
setTool.mouseDown	= function(){
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
		fillColor: "rgba( 255, 125, 0, 0.3)",
	})
}

//������� ������� ������� ����
setTool.mouseUp 	= function(){
	var x = mouse.getPosition().x;
	var y = mouse.getPosition().y;
	
	var k = map.matrix.length;
	var m = map.matrix[0].length;
	
	var i = Math.floor( x / map.width );
	var j = Math.floor( y / map.height );
	
	var col = 0;		//������� �������/����� ���������
	
	if( cRect.x1 != -1 )	//���������� �������
	{
		var x1 = Math.min( cRect.x1, selBlock.x )   /map.width;
		var w = Math.max( cRect.x1, selBlock.x )   /map.width - x1 + 1;
		var y1 = Math.min( cRect.y1, selBlock.y ) /map.height;
		var h = Math.max( cRect.y1, selBlock.y ) /map.height- y1 + 1;
		var ok = true;
		
		if( !w || !h ) ok = false; 
		if( x1 < 0 || y1 < 0 || x1 + w > m || y1 + h > k ) ok = false; 
		
		if( ok ){
			map.updateRect( x1, y1, w, h );
			cRect.x1 = cRect.y1 = -1;
		}
	}
	
	//���������� ����� ������
	if(  pjs.system.getFPS() > 25 ){
		if( i < 0 ){ //�����
			resizeMap.addLeft( -i );
			i = 0;
		}
		if( j < 0 ){ //������
			resizeMap.addTop( -j );
			j = 0;
		}
		if( i >= m ) //������
			resizeMap.addRight( i - m + 1 );			
		if( j >= k ) //�����
			resizeMap.addBottom( j - k + 1 );
		map.updateRect(i,j,1,1);
	}
}
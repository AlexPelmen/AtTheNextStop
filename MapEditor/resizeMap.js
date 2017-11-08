//Изменение размеров карты
var resizeMap = {
	//Текущие размеры 
	m: map.matrix[0].length,
	k: map.matrix.length,
	//Добавление блоков
	addLeft: 	null,
	addRight: 	null,
	addTop: 	null,
	addBottom: 	null,
	
	//Удаление блоков	
	removeLeft: 	null,
	removeRight: 	null,
	removeTop: 		null,
	removeBottom: 	null,
}

//Слева
resizeMap.addLeft = function( col ){
	for( var d = 0; d < this.k; d++ )
		for( var r = 0; r < col; r++ )
			map.matrix[d].unshift( 0 );
	
	var pos = camera.getPosition();
	pos.x = pos.x + 70*col;
	camera.setPosition( pos );
	
	Objects.moveAllObjectsH( col );
	Areas.moveAllAreasH( col );
	
	i = 0;
	this.m += col;
	map.init();
}

//Сверху
resizeMap.addTop = function( col ){
	var mass = [];			
	for( var d = 0; d < col; d++ ){
		for( var r = 0; r < this.m; r++ )
			mass.push( 0 );
		map.matrix.unshift( mass );
		mass = [];
	}
	
	var pos = camera.getPosition();
	pos.y = pos.y + 70*col;
	camera.setPosition( pos );
	
	Objects.moveAllObjectsV( col );
	Areas.moveAllAreasV( col );
	
	j = 0;
	this.k += col;
	
	map.init();
}

//Справа
resizeMap.addRight = function( col ){			
	for( var d = this.m; d < col + this.m; d++ )
		for( var r = 0; r < this.k; r++ )
			map.matrix[r].push( 0 );
	this.m += col;
	map.init();
}


//Снизу
resizeMap.addBottom = function( col ){
	var mass = [];				
	for( var d = this.k; d < col + this.k; d++ ){
		for( var r = 0; r < this.m; r++ )
			mass.push( 0 );
		map.matrix.push( mass );
		mass = [];
	}
	
	this.k += col;
	map.init();
}

//Слева
resizeMap.removeLeft = function( col ){
	col = col;
	for( var d = 0; d < this.k; d++ )
			map.matrix[d].splice( 0, col );
	
	var pos = camera.getPosition();
	pos.x = pos.x - 70*col;
	camera.setPosition( pos );
	
	Objects.moveAllObjectsH( -col );
	Areas.moveAllAreasH( -col );
	
	i = 0;
	this.m -= col;
	map.init();
}

//Сверху
resizeMap.removeTop = function( col ){
	col = col;
	map.matrix.splice( 0, col );
	
	var pos = camera.getPosition();
	pos.y = pos.y - 70*col;
	camera.setPosition( pos );
	
	Objects.moveAllObjectsV( -col );
	Areas.moveAllAreasV( -col );
	
	j = 0;
	this.k -= col;
	
	map.init();	
}

//Справа
resizeMap.removeRight = function( col ){
	for( var d = 0; d < col; d++ )
		for( var r = 0; r < this.k; r++ )
			map.matrix[r].pop();
	this.m -= col;
	map.init();	
}

//Снизу
resizeMap.removeBottom = function( col ){				
	for( var d = 0; d < col; d++ )
		map.matrix.pop();
	
	this.k -= col;
	map.init();	
}
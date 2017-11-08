var Areas = {
	init: null,
	array: [],

	removeWithCoords: null,
	addNewArea: null,
	getVisObjs: null,
	moveAllAreasH: null,
	moveAllAreasV: null,
	checkCoords: null
}

var gameAreas = [];

//Инициализация зон из списка
Areas.init = function(){
	gameAreas = [];
	Areas.array.forEach( function( a ){
		gameAreas.push( game.newRectObject({
			x: a.x1,
			y: a.y1,
			w: a.x2 - a.x1 + map.width,
			h: a.y2 - a.y1 + map.height,
			fillColor: "rgba( 125, 125, 255, 0.3)"			
		}) );
	});
}

//Находим зоны, которые видно
Areas.getVisObjs = function(){
	var visAreas = []; 
	gameAreas.forEach( function( a ){
		if( a.isInCamera() ){
			visAreas.push( a );
		}
	});
	OOP.drawArr( visAreas );
}


//Удаляем зоны по координатам
Areas.removeWithCoords = function(){
	OOP.forArr( Areas.array, function( a, i ){
		if( a.x2 >= selBlock.x && a.x1 <= selBlock.x )
			if( a.y2 >= selBlock.y && a.y1 <= selBlock.y ){
				Areas.array.splice( i, 1 );
				gameAreas.splice( i, 1 );
			}
	});
}

//Добавляем новую зону на карту
Areas.addNewArea = function(){
	var x1; var y1; var x2; var y2;
	x1 = Math.min( cRect.x1, selBlock.x );
	x2 = Math.max( cRect.x1, selBlock.x );
	y1 = Math.min( cRect.y1, selBlock.y );
	y2 = Math.max( cRect.y1, selBlock.y );
	
	if( ! Areas.checkCoords( x1,y1,x2,y2 ) ) return;
	
	Areas.array.push({
		x1: x1,
		y1: y1,
		x2: x2,
		y2: y2
	});
	gameAreas.push( game.newRectObject({
		x: x1,
		y: y1,
		w: x2-x1+map.width,
		h: y2-y1+map.height,
		fillColor: "rgba( 125, 125, 255, 0.3)"
	}));
}

//Сдвинуть все зоны по горизонтали
Areas.moveAllAreasH = function( col ){
	Areas.array.forEach( function( a ){
		a.x1 += col * map.width;
		a.x2 += col * map.width;
	});
	Areas.init();
}

//Сдвинуть все зоны по вертикали
Areas.moveAllAreasV = function( col ){
	Areas.array.forEach( function( a ){
		a.y1 += col * map.height;
		a.y2 += col * map.height;
	});
	Areas.init();
}

//Проверка координат
Areas.checkCoords = function( x1, y1, x2, y2 ){
	//Светофоры внутри...
	var ok = false;
	Objects.array.forEach( function( ob ){
		if( ob.type == "traficLight" ){
			if( ob.x <= x2 && ob.x >= x1 )
				if( ob.y <= y2 && ob.y >= y1 ){
					ok = true;
					return;
				}
		}
	});
	if( ! ok ){
		alert( "Ни одного светофора внутри зоны! Ты совсем попутал?" );
		return false;
	}
	//Пересечение с другой зоной
	Areas.array.forEach( function( a ){
		if( a.x1 <= x2 && a.x1 >= x1 )
			if( a.y1 <= y2 && a.y1 >= y1 )
				ok = false;
		if( a.x2 <= x2 && a.x2 >= x1 )
			if( a.y1 <= y2 && a.y1 >= y1 )
				ok = false;
		if( a.x1 <= x2 && a.x1 >= x1 )
			if( a.y2 <= y2 && a.y2 >= y1 )
				ok = false;
		if( a.x2 <= x2 && a.x2 >= x1 )
			if( a.y2 <= y2 && a.y2 >= y1 )
				ok = false;
		if( !ok ){
			alert( "Зоны пересекаются" );
			return;
		}
	});
	if( !ok ) return false;
	return true;
}
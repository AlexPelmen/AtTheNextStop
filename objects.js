var Objects = {
	init: null,
	array: [],

	removeWithCoords: null,
	addNewObject: null,
	getVisObjs: null,
	initSprites: null,
	moveAllObjectsH: null,
	moveAllObjectsV: null
}

var gameObjects = [];
var curAngle = 0;

//Инициализация объектов из списка
Objects.init = function(){
	gameObjects = [];
	Objects.array.forEach( function( ob ){
		var ol = ObjectsList[ ob.type ];
		gameObjects.push( game.newAnimationObject({
			x: ob.x,
			y: ob.y,
			w: ol.w*map.width,
			h: ol.h*map.height,
			angle: ob.angle,
			animation: ol.sprites[ ob.mode ],
		})
	)});
}

//Находим объекты, которые видно
Objects.getVisObjs = function(){
	var visObjs = [];
	OOP.forArr( gameObjects, function( ob ){
		if( ob.isInCamera() )
			visObjs.push( ob );		
	});
	OOP.drawArr( visObjs );
}


//Удаляем объекты по координатам
Objects.removeWithCoords = function(){
	OOP.forArr( Objects.array, function( ob, id ){
		if( ob.x == selBlock.x && ob.y == selBlock.y ){
			gameObjects.splice( id, 1 );
			Objects.array.splice( id, 1 );
		}
	});
}

//Добавляем новый объект на карту
Objects.addNewObject = function(){
	//Добавляем в массив объектов
	Objects.array.push({
		type: currentObject,
		x: selBlock.x,
		y: selBlock.y,
		angle: curAngle,
		mode: 0
	});
	
	var ob = ObjectsList[ currentObject ];
	
	//Добавляем аналогию 
	gameObjects.push( game.newAnimationObject( {
		x: selBlock.x,
		y: selBlock.y,
		w: ob.w * map.width,
		h: ob.h * map.height,
		angle: curAngle,
		animation: ob.sprites[ 0 ]
	} ) );
}


//Инициализация спрайтов
Objects.initSprites = function(){
	var img; 
	var ob;
	for( var key in ObjectsList ){
		ob = ObjectsList[ key ];
		for( var i = 0; i < ob.colModes; i++ ){
			img = pjs.tiles.newImage( "animation/" + key + "/" + i + ".png" );
			ob.sprites.push( img.getAnimation( 0, 0, ob.w * map.width, ob.h * map.height, spritesSizes[ key ][ i ]/(ob.w*map.width) ^ 0 ) );	
		}
	}
}

//Сдвинуть все объекты по горизонтали
Objects.moveAllObjectsH = function( col ){
	Objects.array.forEach( function( ob ){
		ob.x += col * map.width;
	});
	Objects.init();
}

//Сдвинуть все объекты по вертикали
Objects.moveAllObjectsV = function( col ){
	Objects.array.forEach( function( ob ){
		ob.y += col * map.height;
	});
	Objects.init();
}
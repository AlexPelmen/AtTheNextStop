var map = {
	width: 70,
	height: 70,
	source: pjs.tiles.newImage( "animation/Tiles.png" ),	//It may not work in some conditions
	matrix: [],
	sprites: [],
	
	init: null,
	initSprites: null,
	update: null,
	getTextureMap: null
}

var gameBlocks = [];

//Получаем матрицу из JSON
map.init = function(){
	gameBlocks = [];
	//Перебираем матрицу и создаем на ее основе блоки
	OOP.forArr( map.matrix, function( row, y ){
		OOP.forArr( row, function( el, x ){			
			gameBlocks.push( game.newAnimationObject({
					x: x * map.width,					
					y: y * map.height,
					w: map.width + 1,
					h: map.height + 1,
					animation: map.sprites[ el ]
			})
		) 			
		})
	})
}

//Подгрузка картинок
map.initSprites = function(){
	for( var i = 0; i < Blocks.length; i++ ){
		map.sprites.push(
			map.source.getAnimation( Blocks[i].tex.x, Blocks[i].tex.y, map.width,map.height, 1 )
		);
	}
}


//Обновление части карты ( специально для редактора карт )
map.updateRect = function( x,y,w,h ){
	var index = 0;	
	var m = map.matrix[0].length;
	var k = map.matrix.length;
	var el = 0;
	for( var j = y; j < y + h; j++ )
		for( var i = x; i < x + w; i++ ){			
			index =  m*k - m*j - (i+1);
			el = currentBlock;
			map.matrix[j][i] = currentBlock;
			gameBlocks[ index ] = game.newAnimationObject({
				x: i * map.width,					
				y: j * map.height,
				w: map.width + 1,
				h: map.height + 1,
				animation: map.source.getAnimation( Blocks[el].tex.x, Blocks[el].tex.y, map.width, map.width, 1 ),
			})
		}
}

//Возвращает массив с видимыми блоками и выбранным блоком
map.getVisibleBlocks = function(){
	var visBlocks = [];
	var sB = null;
	var m = map.matrix[0].length;
	var k = map.matrix.length;
	
	var stepY = Math.floor( pjs.system.getWH().h / map.width );
	var stepX = Math.floor( pjs.system.getWH().w / map.height );
	
	var x1 = null;
	var y1 = null;
	var x2 = null;
	var y2 = null;
	var ok = false;
	
	//Проверка видимости ключевых точек
	for( var j = 0; j < k; j += stepY )
		for( var i = 0; i < m; i += stepX ){
			var index =  m*j + i;
			if( gameBlocks[ index ].isInCamera() )
			{
				x1 = i - stepX - 3;
				y1 = j - stepY - 3;
				if( x1 < 0 ) x1 = 0;
				if( y1 < 0 ) y1 = 0;
				x2 = i + stepX + 3;
				y2 = j + stepY + 3;
				if( x2 > m-1 ) x2 = m-1;
				if( y2 > k-1 ) y2 = k-1;
				ok = true;
				break;
			}
		}


	//Если нет точек на экране
	if( ! ok ) return;
	
	//Заполняем массивчик
	for( var j = y1; j < y2 + 1; j++ )
		for( var i = x1; i < x2 + 1; i++ ){
			index = m*j + i;
			if( gameBlocks[ index ].isInCameraStatic() )
				visBlocks.push( gameBlocks[ index ] );
			if( mouse.isInStatic( gameBlocks[ index ].getStaticBox() ) )
				sB = gameBlocks[ index ];
		}
	OOP.drawArr( visBlocks );
	
	return sB;
}
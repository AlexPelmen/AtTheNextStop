var drawBlocks = []; //Блоки в пределах экрана
var selBlock;		//Блок под курсором
var camSpeed = 10;

var cRect = {		//Прямоугольник для создания блоков (Одна вершина)
	x1: -1,
	y1: -1
}

//Игровой цикл
game.newLoop( "game", function(){
	game.fill( "#777" );
	selBlock = null;	//Блок, на который наведен курсор
	selBlock = map.getVisibleBlocks(); //Отрисовка блоков + возврат выделенного блока
	Objects.getVisObjs();		//Отрисовка объектов
	//Селектор вне блоков
	if( ! selBlock )				
	{
		var x = mouse.getPosition().x;
		var y = mouse.getPosition().y;
		x = Math.floor( x / map.width ) * map.width;  
		y = Math.floor( y / map.height ) * map.height;
		selBlock = {x: x, y: y};
	}
	
	//Отрисовка выделенной области
	brush.drawRect({		
		x: selBlock.x,
		y: selBlock.y,
		w: map.width,
		h: map.height,
		fillColor: "rgba( 255, 125, 0, 0.3)",
	})
	
	//Вывод FPS
	brush.drawTextS({		
		text: pjs.system.getFPS(),
		size: 50,
		color: "black"
	})
	
	//Событие инструмента
	if( "wait" in currentTool ) currentTool.wait();
	//События мыши
	if( mouse.isPress( "LEFT" ) ) 
		if( "mousePress" in currentTool ) 
			currentTool.mousePress();
	if( mouse.isDown( "LEFT" ) ) 
		if( "mouseDown" in currentTool ) 
			currentTool.mouseDown();
	if( mouse.isUp( "LEFT" ) )
		if( "mouseUp" in currentTool ){
				backUp.save();
				currentTool.mouseUp();
			}
	if( mouse.isPress( "RIGHT" ) )
		if( "mouseDownRight" in currentTool ){
				backUp.save();
				currentTool.mouseDownRight();
			}
	if( mouse.isWheel( "UP" ) ) 
		if( "mouseWheelUp" in currentTool ) 
			currentTool.mouseWheelUp();
	if( mouse.isWheel( "DOWN" ) ) 
		if( "mouseWheelDown" in currentTool ) 
			currentTool.mouseWheelDown();
	
	//События клавиатуры
	if( key.isDown( "CTRL" ) && key.isDown( "Z" )) backUp.load();	
	if( key.isDown( "SHIFT" ) ) camSpeed = 20;
	if( key.isUp( "SHIFT" ) ) camSpeed = 10;	
	if( key.isDown( "UP" ) )
		camera.move( point( 0, -camSpeed ) );
	if( key.isDown( "DOWN" ) )
		camera.move( point( 0, camSpeed ) );
	if( key.isDown( "LEFT" ) )
		camera.move( point( -camSpeed, 0 ) );
	if( key.isDown( "RIGHT" ) )
		camera.move( point( camSpeed, 0 ) );
})

map.initSprites(); 		//Подгрузка текстур
map.init();				//Прогружаем блоки
Objects.initSprites(); 	//Подгрузка спрайтов объектов
Objects.init();			//Подгружаем объекты
Areas.init(); 			//Подгрузка зон
game.startLoop( "game" );

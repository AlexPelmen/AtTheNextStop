game.newLoopFromConstructor( "game", function(){
	game.fill( "#777" );
	map.init();
	
	this.update = function(){
		game.clear();
		OOP.drawArr( gameBlocks );
	}
})

game.startLoop( "game" );
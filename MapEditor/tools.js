var tools = document.getElementsByClassName( "Tool" );
var currentTool = setTool;

//¬ключение и отключение мыши при наведении на кнопку
OOP.forArr( tools, function( t ){
	t.onmousedown = function(){
		mouse.exitMouseControl();
	}
	t.onmouseout = function(){
		mouse.initMouseControl();
	}
});

var cropBtn = document.getElementById( "crop" ); 
var blockBtn = document.getElementById( "block" );
var objectBtn = document.getElementById( "object" );
var traficLightSyncBtn = document.getElementById( "traficLightSync" );
var currentBtn = blockBtn;

//ќтметить кнопку как выделенную
chooseBtn = function( Btn ){
	currentBtn.style.background = "#555";
	currentBtn.style.color = "#777";
	currentBtn.style.padding = "1.5%";
	
	currentBtn = Btn;
	currentBtn.style.background = "#262";
	currentBtn.style.color = "#393";
	currentBtn.style.padding = "1%";
}

//ќбрезать
cropBtn.onclick = function(){
	sidebarClear();
	currentTool = cropTool;
	chooseBtn( cropBtn );
} 
//Ѕлок
blockBtn.onclick = function(){
	sidebarToBlocks();
	chooseBlock( currentBlock );
	currentTool = setTool;
	chooseBtn( blockBtn );
}
//ќбъект
objectBtn.onclick = function(){
	sidebarToObjects();
	chooseObj( currentObject );
	currentTool = setObjTool;
	chooseBtn( objectBtn );
}

//Синхронизировать светофоры
traficLightSyncBtn.onclick = function(){
	sidebarClear();
	currentTool = traficLightSyncTool;
	chooseBtn( traficLightSyncBtn );
}

chooseBtn( blockBtn );
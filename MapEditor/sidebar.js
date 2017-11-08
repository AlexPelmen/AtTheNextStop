var sidebar = document.getElementById( "sidebar" );
var sidebarMode = "Blocks";

var currentBlock = 0;
var currentObject = "traficLight";


//Перевод сайдбара в режим блоков
function sidebarToBlocks(){
	sidebar.innerHTML = "";
	OOP.forArr( Blocks, function( b, i ){
		sidebar.innerHTML += "<div class = 'SidebarDiv' id = 'sidebarEl" + i + "' onclick = 'chooseBlock( " + i + " );' >" + b.name + "</div>";
	});	
}

//Выбираем нужный блок
var chooseBlock = function( id ){
	document.getElementById( "sidebarEl" + currentBlock ).classList.remove( "SidebarChosenDiv" );
	document.getElementById( "sidebarEl" + currentBlock ).classList.add( "SidebarDiv" );
	
	document.getElementById( "sidebarEl" + id ).classList.add("SidebarChosenDiv" ); 
	document.getElementById( "sidebarEl" + id ).classList.remove ("SidebarDiv" );
	
	currentBlock = id;		
}

//Перевод сайдбара в режим объектов
function sidebarToObjects(){
	sidebar.innerHTML = "";
	for( var ob in ObjectsList ){
		sidebar.innerHTML += "<div class = 'SidebarDiv' id = 'sidebarOb" + ob + "' onclick = 'chooseObj( \"" + ob + "\" );' >" + ObjectsList[ ob ].name + "</div>";
	}
}

//Перекрашиваем кнопочку
var chooseObj = function( id ){
	document.getElementById( "sidebarOb" + currentObject ).classList.remove( "SidebarChosenDiv" );
	document.getElementById( "sidebarOb" + currentObject ).classList.add( "SidebarDiv" );
	
	document.getElementById( "sidebarOb" + id ).classList.add("SidebarChosenDiv" ); 
	document.getElementById( "sidebarOb" + id ).classList.remove ("SidebarDiv" );
	
	currentOb = id;		
}


function sidebarClear(){
	sidebar.innerHTML = "";
}

//Чтобы мышь не работала
sidebar.onmouseover = function(){
	mouse.exitMouseControl();
}
//Выключаем мыху если выехали с сайдбара
sidebar.onmouseout = function(){
	mouse.initMouseControl();
}

sidebarToBlocks();
chooseBlock( 0 );
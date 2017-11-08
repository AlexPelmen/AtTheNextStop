var sidebar = document.getElementById( "sidebar" );
var sidebarMode = "Blocks";

var currentBlock = 0;
var currentObject = "traficLight";


//������� �������� � ����� ������
function sidebarToBlocks(){
	sidebar.innerHTML = "";
	OOP.forArr( Blocks, function( b, i ){
		sidebar.innerHTML += "<div class = 'SidebarDiv' id = 'sidebarEl" + i + "' onclick = 'chooseBlock( " + i + " );' >" + b.name + "</div>";
	});	
}

//�������� ������ ����
var chooseBlock = function( id ){
	document.getElementById( "sidebarEl" + currentBlock ).classList.remove( "SidebarChosenDiv" );
	document.getElementById( "sidebarEl" + currentBlock ).classList.add( "SidebarDiv" );
	
	document.getElementById( "sidebarEl" + id ).classList.add("SidebarChosenDiv" ); 
	document.getElementById( "sidebarEl" + id ).classList.remove ("SidebarDiv" );
	
	currentBlock = id;		
}

//������� �������� � ����� ��������
function sidebarToObjects(){
	sidebar.innerHTML = "";
	for( var ob in ObjectsList ){
		sidebar.innerHTML += "<div class = 'SidebarDiv' id = 'sidebarOb" + ob + "' onclick = 'chooseObj( \"" + ob + "\" );' >" + ObjectsList[ ob ].name + "</div>";
	}
}

//������������� ��������
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

//����� ���� �� ��������
sidebar.onmouseover = function(){
	mouse.exitMouseControl();
}
//��������� ���� ���� ������� � ��������
sidebar.onmouseout = function(){
	mouse.initMouseControl();
}

sidebarToBlocks();
chooseBlock( 0 );
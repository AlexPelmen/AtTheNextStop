var saveBtn = document.getElementById( "save_btn" );
var saveForm = document.getElementById( "save_form" );
var formBtns = document.getElementsByClassName( "formBtn" );
var showSaveForm = false;

//Отключение мыши
saveBtn.onmouseover = function(){
	mouse.exitMouseControl();
}
//включаем мыху если выехали с сайдбара
saveBtn.onmouseout = function(){
	if( ! showSaveForm )mouse.initMouseControl();
}

//Подгрузка матрицы в буфер
saveBtn.onclick = function(){
	var bufferMap = document.getElementById( "bufferMap" );
	var bufferObj = document.getElementById( "bufferObj" );
	var bufferAre = document.getElementById( "bufferAre" );
	bufferMap.value = JSON.stringify( map.matrix );
	bufferObj.value = JSON.stringify( Objects.array );
	bufferAre.value = JSON.stringify( Areas.array );
	saveForm.style.visibility = "visible";
	showSaveForm = true;
}

OOP.forArr( formBtns, function( b ){
	b.onclick = function(){
		saveForm.style.visibility = "hidden";
		mouse.initMouseControl();
		showSaveForm = false;
	}
});




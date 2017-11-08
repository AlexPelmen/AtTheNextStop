//Система бэкапов
var backUp = {
	
	m: map.matrix.slice(),
	
	load: null,
	save: null
}

//Сохранить бэк
backUp.save = function(){
	this.m = map.matrix.slice();
	for( var i = 0; i < resizeMap.k; i++ )
		this.m[i] = map.matrix[i].slice();	
}

//Загрузить бэк
backUp.load = function(){
	map.matrix = this.m.slice();
	for( var i = 0; i < this.m.length; i++ )
		map.matrix[i] = this.m[i].slice();
	resizeMap.m = map.matrix[0].length;
	resizeMap.k = map.matrix.length;
	map.init();
}
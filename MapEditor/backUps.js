//������� �������
var backUp = {
	
	m: map.matrix.slice(),
	
	load: null,
	save: null
}

//��������� ���
backUp.save = function(){
	this.m = map.matrix.slice();
	for( var i = 0; i < resizeMap.k; i++ )
		this.m[i] = map.matrix[i].slice();	
}

//��������� ���
backUp.load = function(){
	map.matrix = this.m.slice();
	for( var i = 0; i < this.m.length; i++ )
		map.matrix[i] = this.m[i].slice();
	resizeMap.m = map.matrix[0].length;
	resizeMap.k = map.matrix.length;
	map.init();
}
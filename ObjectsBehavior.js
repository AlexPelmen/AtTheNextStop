var ObjectsBehavior = {
	getTrafficLightGroups: null,
	trafficLightGroups: [],
	lastTriggering: 0,
	checkInterval: null,
	tickAllObjects: null,
	init: null	
	
}

//Получаем массивчики со светофорами
ObjectsBehavior.getTrafficLightGroups = function(){
	OOP.forArr( Areas.array, function( a, i ){
		this.trafficLightGroups.push( [] );
		Objects.array.forEach( function( ob ){
			if( ob.type == "traficLight" ){
				trafficLightGroups[i].push( ob );			
			}
		});
	});	
}

//Сверяем: прошла ли секунда
ObjectsBehavior.checkInterval = function(){
	var ms = Date.now();
	if( ms - this.lastTriggering >= 1000 )
		tickAllObjects();
	checkAllObjects();
}
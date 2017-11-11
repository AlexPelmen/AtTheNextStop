var ObjectsBehavior = {
	//Светофоры
	getTrafficLightGroups: null,
	trafficLightGroups: [],
	lastTriggering: 0,
	doTrafficLightBehavior: null,
	
	//Остальные объекты
	Collision: null,
	Intersect: null
}

//Получаем массивчики со светофорами
ObjectsBehavior.getTrafficLightGroups = function(){
	OOP.forArr( Areas.array, function( a, i ){
		var m = Math.rand( 0, 5 ) ^ 0;
		var v = ObjectsList.traficLight.behavior[ m ].vert;
		var h = ObjectsList.behavior[ m ].hor;
		var vSp = ObjectsList.traficLight.sprites[ v ];
		var hSp = ObjectsList.traficLight.sprites[ h ];
		this.trafficLightGroups.push( {
			mode: m,						//Текущий режим
			modeTime: Math.rand()*6 ^ 0,	//Сколько времени прошло с моменты смена режима
			objHor: []						//Массив со светофорами горизонтальными 
			objVert: []						//Массив со светофорами вертикальными
		} );
		gameObjects.forEach( function( ob ){
			if( ob.type == "traficLight" )
				if( ob.x < a.x2 && ob.x > a.x1 )
					if( ob.y < a.y2 && ob.y > a.y1 )
						if( ob.angle == 0 || ob.angle == 180 ){
							trafficLightGroups[i].objHor.push( ob );
							ob.animation = hSp; 
						}
						else{
							trafficLightGroups[i].objVert.push( ob );
							ob.animation = vSp;
						}
		});	
	});	
}

//Сверяем: прошла ли секунда
ObjectsBehavior.doTrafficLightBehavior = function(){
	var ms = Date.now();
	if( ms - this.lastTriggering >= 1000 ){
		OOP.forArr( trafficLightGroups, function( g ){
			var m = g.mode;
			var v = ObjectsList.traficLight.behavior[ m ].vert;
			var h = ObjectsList.behavior[ m ].hor;
			var vSp = ObjectsList.traficLight.sprites[ v ];
			var hSp = ObjectsList.traficLight.sprites[ h ];
				if( ++g.modeTime > ObjectsList.traficLight.behavior[ m ][1] ){
					g.modeTime = 0;
					g.objVert.forEach( function( vert ){
						vert.animation = vSp; 			
					});
					g.objHor.forEach( function( hor ){
						hor.animation = hSp; 			
					});
				}							
		});
		this.lastTriggering = ms;
	}
}

//Проверка: была ли коллизия ( каждая итерация )
ObjectsBehavior.collision = function( ob ){
	ob.animation = ObjectsList[ ob.type ].sprites.collision;
}
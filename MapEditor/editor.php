<html> 
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<link rel="stylesheet" type="text/css" href="style.css" /> 
		<title>AtTheNextStop - Редактор карт</title>
    </head> 
	<body>
		<!--Кнопочки -->
		<div id = "save_btn" >Сохранить</div>
		<div id = "crop"	class = "Tool" >Обрезать</div>
		<div id = "block" 	class = "Tool" >Блок	</div>
		<div id = "object" 	class = "Tool" >Объект	</div>
		<div id = "traficLightSync" class = "Tool" >Синх. светофоры</div>

		<!--Форма подтверждения сохранения  -->
		<form id = "save_form" class = "GuessForm"  action = "saveMap.php" method = "POST" >
			<p>Сохранить карту?</p>
			<input type = "hidden" id = "bufferMap" name = "map" value = "" />
			<input type = "hidden" id = "bufferObj" name = "objects" value = "" />
			<input type = "hidden" id = "bufferAre" name = "areas" value = "" />
			<input type = "submit" class = "FormBtn" value = "Ага" />
			<input type = "button" class = "FormBtn" value = "Неа" />
		</form>
		
		<div id = "sidebar" name = "sidebar" >
		</div>		
	</body>	
</html>

<script type = "text/javascript" src = "../point.min.js" 	></script>
<script type = "text/javascript" src = "../init.js" 		></script>
<script type = "text/javascript" src = "../blockList.js" 	></script>	
<script type = "text/javascript" src = "../map.js" 			></script>
<script type = "text/javascript" src = "../MAP/mapJSON.js" 	></script>
<script type = "text/javascript" >
	<?php require "../sprites.php"; ?>
</script>
<script type = "text/javascript" src = "../objecsList.js" 	></script>
<script type = "text/javascript" src = "../objects.js" 		></script>
<script type = "text/javascript" src = "../MAP/objectsJSON.js" 	></script>
<script type = "text/javascript" src = "../areas.js" 	></script>
<script type = "text/javascript" src = "../MAP/areasJSON.js" 	></script>

<script type = "text/javascript" src = "resizeMap.js" 		></script>
<script type = "text/javascript" src = "backUps.js" 		></script>
<script type = "text/javascript" src = "setTool.js" 		></script>
<script type = "text/javascript" src = "setObjTool.js" 		></script>
<script type = "text/javascript" src = "cropTool.js" 		></script>
<script type = "text/javascript" src = "traficLightSyncTool.js" ></script>
<script type = "text/javascript" src = "sidebar.js" 		></script>
<script type = "text/javascript" src = "tools.js" 			></script>
<script type = "text/javascript" src = "saveBtn.js" 		></script>
<script type = "text/javascript" src = "loop.js" 			></script>


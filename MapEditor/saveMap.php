<?php
	if( ! isset( $_POST[ "map" ] ) || ! isset( $_POST[ "objects" ] ) ){
		echo "That's piece of shit. There's nothing in the buffer, beach))";
		return;
	}
	$out = "map.matrix = ".$_POST[ "map" ].';';
	
	$fd = fopen( dirname( __DIR__ )."/MAP/mapJSON.js", 'w') or die("не удалось создать файл с картой");
	fputs( $fd, $out );
	fclose( $fd );
	
	echo "<h3>Карта сохранена</h3>";
	
	$out = "Objects.array = ".$_POST[ "objects" ].';';
	$fd = fopen( dirname( __DIR__ )."/MAP/objectsJSON.js", 'w') or die("не удалось создать файл с объектами");
	fputs( $fd, $out );
	fclose( $fd );
	
	echo "<h3>Объекты сохранены</h3>";
	
	$out = "Areas.array = ".$_POST[ "areas" ].';';
	$fd = fopen( dirname( __DIR__ )."/MAP/areasJSON.js", 'w') or die("не удалось создать файл с объектами");
	fputs( $fd, $out );
	fclose( $fd );
	
	echo "<p><a href = 'editor.php' >Вернуться</a></p>";
?>
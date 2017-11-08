<?php
	//Лезет в папку animation обшаривает папку каждого объекта
	//и сохраняет ширину спрайта
	$path = __Dir__ . "/animation";
	
	$animationDir = scandir( $path );
	$sizes;	//То что мы выводим
	foreach( $animationDir as $d ){
		if( $d == '.' || $d == '..' ) continue;
		if( !is_dir( $path."/$d" ) ) continue;
		$sizes[ $d ] = array();
		$objDir = scandir( $path."/$d" );
		foreach( $objDir as $f ){
			if( $f == '.' || $f == '..' ) continue;
			array_push( $sizes[ $d ], getImageSize( $path."/$d/".$f )[0] );
		}
	}
	echo "var spritesSizes = ".json_encode( $sizes );
?>
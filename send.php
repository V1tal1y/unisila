<?php
	$im = $_POST["im"];
	$tel = $_POST["pf"];
	$from = $_POST["from"];
	$about = $_POST["about"];
	$title = 'Заявка';
	
	if($from != ''){
		$title ="Юнисила Урал $from";
		$text = "$text \n$from";
	} 
	if($im != ''){
		$text = "$text \nИмя: $im";
	} 
	if($tel != ''){
		$text = "$text \nТелефон: $tel";
	} 
	if($about != ''){
		$text ="$text \nО ремонте: $about";
	} 
	$text = "$text  \n";
	
	mail('blohov@yandex.ru', "$title", "$text"); 
	//
?>

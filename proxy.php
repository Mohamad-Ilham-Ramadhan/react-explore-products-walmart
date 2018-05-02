<?php 
	$url = $_GET['search'];
		
	$curl = curl_init(); // $curl is going to be data type curl resource 

	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_HTTPGET, 1);
	curl_exec($curl);
	curl_close($curl);
?>
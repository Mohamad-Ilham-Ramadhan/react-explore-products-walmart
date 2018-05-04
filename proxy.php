<?php 
	$url = $_GET['search'];
		
	$curl = curl_init(); // $curl is going to be data type curl resource 

	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_HTTPGET, true);
	curl_setopt($curl, CURLINFO_HEADER_OUT, true);
	// curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

	if ( curl_exec($curl) === false ) {
		$info = curl_getinfo($curl, CURLINFO_HTTP_CODE );
		echo ( $info );
	} 

	
	curl_close($curl);
?>
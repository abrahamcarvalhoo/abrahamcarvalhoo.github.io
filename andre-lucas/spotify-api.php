<?php
  $url = 'https://accounts.spotify.com/api/token';
  $client_id = 'e74ea045ad134d1faf7ec187a1a063b9';
  $client_secret = '655ebe080f8342be9902d27540f83a16';
  $client_encoded = base64_encode($client_id.':'.$client_secret);
  $refresh_token = 'AQBmc1JD9q7VhtZdiYmI1YCYhcpHFa0Zqc4PoImhV41mrtSMLr2QKWzI4kmkRzjyoi9n8-7pKyClFMzpG49FTKOkZvrP7C10to06LtcZR-8AMo5Arzs5CnfCG1fpOF-onKo';
  $data = 'grant_type=refresh_token&refresh_token='.$refresh_token;
  $curl = curl_init();

  $headers = array();
  $headers[] = 'Authorization: Basic '.$client_encoded;
  $headers[] = 'Content-Type: application/x-www-form-urlencoded';
  $headers[] = 'Accept: application/json';

  curl_setopt($curl, CURLOPT_POST, 1);
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_HEADER, 0);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
  curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
  curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);

  $result = curl_exec($curl);

  if ($result === false) {
    die(curl_error($curl));
  }

  echo($result);

  curl_close($curl);

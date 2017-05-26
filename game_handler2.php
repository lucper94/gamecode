<?php

$db = new mysqli('hartlink.mysql.guardedhost.com','hartlink_featured','amaJF2j6-3cr','hartlink_featured');
$db2 = mysqli_connect('50.62.209.189','gamerscode','$Gamerscode521','sales');
$query = <<<SQL

SELECT ID_Product, Name, Type FROM games_titles;


SQL;



$result = mysqli_query($db, $query);
$i = 0;
$x=0;
while($row = mysqli_fetch_assoc($result)){
		$ID_Product = $row['ID_Product'];

		if($row['Type']=="bueno"){
			$sql = mysqli_query($db2,"SELECT price_s.Good as venta, price_p.Good as compra, price_e.Good as intercambio FROM sales.price_s, sales.price_p, sales.price_e WHERE price_s.ID_Price_S = '$ID_Product' AND price_p.ID_Price_P = '$ID_Product' AND price_e.ID_Price_E = '$ID_Product'");
			while ($row2 = mysqli_fetch_assoc($sql)){
			 $new_array[$x]=$row2;
			  $x++;
		}	

		}
			else if($row['Type']=="regular"){
				$sql = mysqli_query($db2,"SELECT price_s.OK as venta, price_p.OK as compra, price_e.OK as intercambio FROM sales.price_s, sales.price_p, sales.price_e WHERE price_s.ID_Price_S = '$ID_Product' AND price_p.ID_Price_P = '$ID_Product' AND price_e.ID_Price_E = '$ID_Product'");
				while ($row2 = mysqli_fetch_assoc($sql)){
			 $new_array[$x]=$row2;
			  $x++;
		}	

			
			}
				else if($row['Type']=="malo"){
				$sql = mysqli_query($db2,"SELECT price_s.Bad as venta, price_p.Bad as compra, price_e.Bad as intercambio FROM sales.price_s, sales.price_p, sales.price_e WHERE price_s.ID_Price_S = '$ID_Product' AND price_p.ID_Price_P = '$ID_Product' AND price_e.ID_Price_E = '$ID_Product'");
			while ($row2 = mysqli_fetch_assoc($sql)){
			 $new_array[$x]=$row2;
 			$x++;
			
			}
		}
					else if($row['Type']=="concaja"){
					$sql = mysqli_query($db2,"SELECT price_s.With_Box as venta, price_p.With_Box as compra, price_e.With_Box as intercambio FROM sales.price_s, sales.price_p, sales.price_e WHERE price_s.ID_Price_S = '$ID_Product' AND price_p.ID_Price_P = '$ID_Product' AND price_e.ID_Price_E = '$ID_Product'");
			while ($row2 = mysqli_fetch_assoc($sql)){
			 $new_array[$x]=$row2;
			 $x++;
			 //print_r($new_array);
			
		}	

			
			}
						else if($row['Type']=="sincaja"){
						$sql = mysqli_query($db2,"SELECT price_s.Without_Box as venta, price_p.Without_Box as compra, price_e.Without_Box as intercambio FROM sales.price_s, sales.price_p, sales.price_e WHERE price_s.ID_Price_S = '$ID_Product' AND price_p.ID_Price_P = '$ID_Product' AND price_e.ID_Price_E = '$ID_Product'");
			while ($row2 = mysqli_fetch_assoc($sql)){
			 $new_array[$x]=$row2;
			  $x++;
		}	

			
			}
			else{
				echo "";
			}
			

		
		

    $data_array[$i] = $row;
    $array_prueba[$i] = $data_array[$i]+$new_array[$i];


    
 
    
    $i++;

}
$data = json_encode($array_prueba);
	$file = 'js/games.json';
	file_put_contents($file, $data);

  /*Header("Content-Type: application/json;charset=UTF-8");
    $data = json_encode($array_prueba);
    $len  = strlen($data);
    Header("Content-Length: {$len}");
    die($data); // Ensure no more output after this..*/


?>
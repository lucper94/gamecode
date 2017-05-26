
 <link rel="stylesheet" href="css/bootstrap.min.css">
<?php


$db = new mysqli('hartlink.mysql.guardedhost.com','hartlink_featured','amaJF2j6-3cr','hartlink_featured');

$query = <<<SQL

SELECT * FROM games_titles;


SQL;

$result = mysqli_query($db, $query);

echo "<table class ='table table-condensed' width = '90px'>";
echo "<tr class='danger'> ";
echo "<th>ID_Producto</th>";
echo "<th width: 5%;>Nombre</th>";
echo "<th width: 5%;>Precio de Venta</th>";
echo "<th width: 5%;>Precio Compra</th>";
echo "<th width: 5%;>Precio Intercambio</th>";

echo "<th width: 5%;>Editar</th>";
echo "</tr>";
while($row = mysqli_fetch_array($result)){
	echo "<tr>";
	 echo "<td>".$row['ID_Product']."</td>";
    echo "<td>".$row['Name']."</td>";
    echo "<td>".$row['Sale_Price']."</td>";
    echo "<td>".$row['Purchase_Price']."</td>";
    echo "<td>".$row['Exchange_Price']."</td>";
    echo "<td><form action = 'http://beta.cieloytierra.mx/pictures/index.php'  method = 'get'>
			        
					<input type = 'hidden' name = 'id' value = '".$row['ID']."'>
					<input type = 'submit'  name  = 'submit'  value = 'Editar'>
                                         </form></td>";
    echo "</tr>";
}
echo "</table>";

?>
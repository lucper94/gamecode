
<?php 
  




$image = $_REQUEST['slider'];
echo $image;

?>
<form  action  = "changeimage.php" method = "post" enctype="multipart/form-data">


  subir imagen<input type ="file" size ="30" name ="nombre_archivo"> <br>
  <input type = "hidden" name ="slider" value="<?php echo $image; ?>">


  <input type ="submit" value ="Guardar">

 <?php


$slider = $_REQUEST['slider'];






				$tipoArchivo = $_FILES["nombre_archivo"]["type"];
 				

 					if ($tipoArchivo == "jpg" or $tipoArchivo == "JPG"){
  							echo "extension archivo erroneo";
 					}
 					else{
						if (is_uploaded_file($_FILES['nombre_archivo']['tmp_name']))
						{
 								$nombreDirectorio = "assets/";
 								$nombreFichero = $_FILES['nombre_archivo']['name'];
 
								$nombreCompleto =$nombreDirectorio.$slider.".jpg";
 								
 									if (is_file($nombreCompleto))
 									{
 
 										$nombreFichero = $slider;
 									}
 
						move_uploaded_file($_FILES['nombre_archivo']['tmp_name'], $nombreCompleto);
 
						}
 					}

 		
		?>
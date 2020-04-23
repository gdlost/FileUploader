<?php 


    $path = '_uploads_/';

    // fn: file name
    $fn = $path.basename($_FILES['file-input-uploadje']['name']);

    // fext: file extension
    $fext = strtolower(pathinfo($fn, PATHINFO_EXTENSION));

    $__f = $_FILES['file-input-uploadje'];

    if (move_uploaded_file($__f['tmp_name'], $path.$__f['name']))
    {
        echo "Archivo subido";
    } else {
        echo "Error";
    }

?>
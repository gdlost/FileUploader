<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="directory.css">
</head>
<body>
    <div class="header">

    </div>
    <table>
        <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Peso</th>
        </tr>
    <?php 

$c = scandir('_uploads_/');

for ($ind = 2; $ind < count($c); $ind++)
{
    if($ind%2 == 0){
        echo '<tr><td class="no-p name">'.$c[$ind].'</td></tr>';
    } else {
        echo '<tr><td class="yes-p name">'.$c[$ind].'</td></tr>';   
    }
}
?>
        
    </table>
</body>
<?php
$base = new SQLite3('../db/diccionario.sqlite');
$peticion = '
SELECT 
* 
FROM palabras

WHERE '.$_GET['idioma'].' LIKE "%'.$_GET['palabra'].'%"';
$resultado = $base->query($peticion);


while ($fila = $resultado->fetchArray()) {
    echo '
    <table>
        <tr>
            <td><img src="img/es.png"</td>
            <td>'.$fila['espanol'].'</td>
        <tr>
        <tr>
            <td><img src="img/en.png"</td>
            <td>'.$fila['ingles'].'</td>
        <tr>
        <tr>
            <td><img src="img/fr.png"</td>
            <td>'.$fila['frances'].'</td>
        <tr>
        <tr>
            <td><img src="img/it.png"</td>
            <td>'.$fila['italiano'].'</td>
        <tr>
        <tr>
            <td><img src="img/de.png"</td>
            <td>'.$fila['aleman'].'</td>
        <tr>
    </table>
    ';
}
?>
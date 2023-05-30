<?php
$base = new SQLite3('../db/diccionario.sqlite');

$resultado = $base->query('
SELECT 
* 
FROM palabras

WHERE espanol LIKE "%'.$_GET['palabra'].'%"');

while ($fila = $resultado->fetchArray()) {
    echo '
        Inglés:<br>
        '.$fila['ingles'].'<br>
        Francés:<br>
        '.$fila['frances'].'<br>
        Italiano:<br>
        '.$fila['italiano'].'<br>
        Alemán:<br>
        '.$fila['aleman'].'<br>
    ';
}
?>
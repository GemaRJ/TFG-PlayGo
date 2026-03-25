<?php
$conn = mysqli_connect("localhost", "root", "", "playgo");

if (!$conn) {
    die("Error de conexion: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8");
<<<<<<< HEAD
?>
=======
>>>>>>> c78e1684cb1c23d849da96308a8047d76abb52c7

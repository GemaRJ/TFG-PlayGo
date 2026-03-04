<?php
$conn = mysqli_connect("localhost", "root", "rootroot", "playgo");

if (!$conn) {
    die("Error de conexion: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8");
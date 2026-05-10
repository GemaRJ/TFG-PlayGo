<?php

if ($_SERVER['HTTP_HOST'] === 'localhost') {
    // Conexión local con XAMPP
    $conn = mysqli_connect("localhost", "root", "", "playgo");
} else {
    // Conexión online con InfinityFree
    $conn = mysqli_connect(
        "sql207.infinityfree.com",
        "if0_41876219",
        "TU_PASSWORD",
        "if0_41876219_playgo"
    );
}

if (!$conn) {
    die("Error de conexion: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8");

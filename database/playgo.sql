-- 1. CREACIÓN DE LA BASE DE DATOS
CREATE DATABASE IF NOT EXISTS playgo CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE playgo;

-- --------------------------------------------------------

-- 2. TABLA DE USUARIOS
CREATE TABLE IF NOT EXISTS usuario (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('nino', 'adulto', 'administrador') NOT NULL, 
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

-- 3. TABLA DE JUEGOS
CREATE TABLE IF NOT EXISTS juegos (
    id_juego INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ruta VARCHAR(100) NOT NULL,
    archivo_entrada VARCHAR(50) NOT NULL,
    categoria ENUM('niños', 'adultos') NOT NULL,
    descripcion TEXT,
    activo BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

-- 4. DATOS INICIALES

-- A. Insertar al ADMINISTRADOR (Corregido: faltaba el rol al final)
INSERT INTO usuario (nombres, correo, clave, tipo_usuario) VALUES 
('Equipo PlayGo', 'admin@playgo.com', '$2a$10$vY37nlRiKR7X30hzsOhi7.ce75hyMIL54KVo4mBVfF9W8epa4Gn9K', 'administrador');

-- B. Insertar USUARIOS DE PRUEBA
INSERT INTO usuario (nombres, correo, clave, tipo_usuario) VALUES 
('Enzo Niño', 'nino@playgo.com', '$2a$10$vY37nlRiKR7X30hzsOhi7.ce75hyMIL54KVo4mBVfF9W8epa4Gn9K', 'nino'),
('Gema Adulto', 'adulto@playgo.com', '$2a$10$vY37nlRiKR7X30hzsOhi7.ce75hyMIL54KVo4mBVfF9W8epa4Gn9K', 'adulto');

-- C. Insertar el CATÁLOGO DE JUEGOS

-- Juegos ADULTOS
INSERT INTO juegos (nombre, ruta, archivo_entrada, categoria) VALUES 
('Blackjack', 'blackjack', 'index.html', 'adultos'),
('Impostor', 'impostor', 'index.html', 'adultos'),
('Tabú', 'tabu', 'index.html', 'adultos'),
('Trivial', 'trivial', 'index.html', 'adultos');

-- Juegos NIÑOS
INSERT INTO juegos (nombre, ruta, archivo_entrada, categoria) VALUES 
('Cuenta Letras', 'cuenta_letras', 'index.html', 'niños'),
('Cuenta Números', 'cuenta_numeros', 'index.html', 'niños'),
('Memory', 'memory', 'index.html', 'niños'),
('Tabú Kids', 'tabu', 'index.html', 'niños'),
('Tres en Raya', 'tres_raya', 'juego.html', 'niños'), 
('Trivial Kids', 'trivial', 'index.html', 'niños');
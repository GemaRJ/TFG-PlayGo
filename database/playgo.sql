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

-- 5. TABLA DE RANKINGS Y PARTIDAS
-- Registra la puntuación de los usuarios en cada juego
CREATE TABLE IF NOT EXISTS ranking (
    id_ranking INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    id_juego INT NOT NULL,
    puntuacion INT NOT NULL,
    fecha_partida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario_ranking FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id) ON DELETE CASCADE,
    CONSTRAINT fk_juego_ranking FOREIGN KEY (id_juego) REFERENCES juegos(id_juego) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

-- 6. TABLA DE HISTORIAL DEL CHATBOT
-- Almacena las consultas para mejorar la asistencia del modelo
CREATE TABLE IF NOT EXISTS chatbot_logs (
    id_log INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NULL,
    mensaje_usuario TEXT NOT NULL,
    respuesta_bot TEXT NOT NULL,
    fecha_consulta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario_chatbot FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

-- 7. TABLA DE GESTIÓN DE INCIDENCIAS Y SOPORTE
-- Centraliza los reportes enviados mediante el sistema híbrido
CREATE TABLE IF NOT EXISTS incidencias (
    id_incidencia INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NULL,
    tipo ENUM(
        'sugerencia', 'queja', 'error_alta_usuario', 
        'solicitud_baja_usuario', 'solicitud_modificacion_usuario', 
        'incidencia_juego', 'fallo_seguridad', 'error_ranking'
    ) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    estado ENUM('pendiente', 'resuelta') DEFAULT 'pendiente',
    fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario_incidencia FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
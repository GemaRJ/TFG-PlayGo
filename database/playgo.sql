-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-02-2026 a las 12:22:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `playgo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chatbot_logs`
--

CREATE TABLE `chatbot_logs` (
  `id_log` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `mensaje_usuario` text NOT NULL,
  `respuesta_bot` text NOT NULL,
  `fecha_consulta` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `id_incidencia` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `tipo` enum('sugerencia','queja','error_alta_usuario','solicitud_baja_usuario','solicitud_modificacion_usuario','incidencia_juego','fallo_seguridad','error_ranking') NOT NULL,
  `asunto` varchar(150) NOT NULL,
  `mensaje` text NOT NULL,
  `estado` enum('pendiente','resuelta') DEFAULT 'pendiente',
  `fecha_reporte` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `incidencias`
--

INSERT INTO `incidencias` (`id_incidencia`, `usuario_id`, `tipo`, `asunto`, `mensaje`, `estado`, `fecha_reporte`) VALUES
(1, NULL, 'sugerencia', 'zxczxcz', 'cxzczxc', 'pendiente', '2026-02-12 21:10:17'),
(4, 2, 'incidencia_juego', 'Problema técnico en juego', 'no carga el juego correctamente', 'pendiente', '2026-02-12 22:24:48'),
(5, NULL, 'queja', 'no me gusta la web', 'no me gusta', 'resuelta', '2026-02-12 22:28:44'),
(6, 2, 'solicitud_baja_usuario', 'Solicitud de baja de cuenta', 'quiero dar de baja mi cuenta', 'pendiente', '2026-02-12 22:29:20'),
(7, NULL, 'error_alta_usuario', 'Error en el proceso de registro', 'no puede acceder', 'pendiente', '2026-02-13 09:42:39'),
(8, NULL, 'queja', 'no me gusta la web', 'no me gusta la web', 'pendiente', '2026-02-13 09:44:44'),
(9, 2, 'solicitud_baja_usuario', 'Solicitud de baja de cuenta', 'no quiero estar registrado', 'pendiente', '2026-02-13 09:50:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id_juego` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `archivo_entrada` varchar(50) NOT NULL,
  `categoria` enum('niños','adultos') NOT NULL,
  `descripcion` text DEFAULT NULL,
  `activo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id_juego`, `nombre`, `ruta`, `archivo_entrada`, `categoria`, `descripcion`, `activo`) VALUES
(1, 'Blackjack', 'blackjack', 'index.html', 'adultos', NULL, 1),
(2, 'Impostor', 'impostor', 'index.html', 'adultos', NULL, 1),
(3, 'Tabú', 'tabu', 'index.html', 'adultos', NULL, 1),
(4, 'Trivial', 'trivial', 'index.html', 'adultos', NULL, 1),
(5, 'Cuenta Letras', 'cuenta_letras', 'index.html', 'niños', NULL, 1),
(6, 'Cuenta Números', 'cuenta_numeros', 'index.html', 'niños', NULL, 1),
(7, 'Memory', 'memory', 'index.html', 'niños', NULL, 1),
(8, 'Tabú Kids', 'tabu', 'index.html', 'niños', NULL, 1),
(9, 'Tres en Raya', 'tres_raya', 'juego.html', 'niños', NULL, 1),
(10, 'Trivial Kids', 'trivial', 'index.html', 'niños', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ranking`
--

CREATE TABLE `ranking` (
  `id_ranking` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `id_juego` int(11) NOT NULL,
  `puntuacion` int(11) NOT NULL,
  `fecha_partida` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `tipo_usuario` enum('nino','adulto','administrador') NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

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

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-03-2026 a las 17:05:52
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
(5, NULL, 'queja', 'no me gusta la web', 'no me gusta', 'resuelta', '2026-02-12 22:28:44'),
(6, 2, 'solicitud_baja_usuario', 'Solicitud de baja de cuenta', 'quiero dar de baja mi cuenta', 'pendiente', '2026-02-12 22:29:20'),
(7, NULL, 'error_alta_usuario', 'Error en el proceso de registro', 'no puede acceder', 'pendiente', '2026-02-13 09:42:39'),
(8, NULL, 'queja', 'no me gusta la web', 'no me gusta la web', 'pendiente', '2026-02-13 09:44:44'),
(12, 3, 'solicitud_baja_usuario', 'Solicitud de baja de cuenta', 'quiero darme de baja', 'pendiente', '2026-02-13 12:59:18'),
(13, 1, 'solicitud_baja_usuario', 'Solicitud de baja de cuenta', 'Solicitud de baja de cuenta', 'pendiente', '2026-02-13 13:30:14'),
(14, 3, 'error_alta_usuario', 'Error en el proceso de registro', 'Error en el proceso de registro', 'resuelta', '2026-02-13 13:32:02'),
(15, NULL, 'queja', 'QUEJA', 'NO ME GUSTA LA WEB', 'pendiente', '2026-02-13 13:37:30'),
(16, NULL, 'queja', 'no me gusta la web', 'no me gusta la web', 'pendiente', '2026-02-14 16:21:24'),
(17, NULL, 'queja', 'no me gusta la web', 'no', 'pendiente', '2026-02-14 18:16:57'),
(18, NULL, 'queja', 'Reclamación de usuario', 'No me gusta la web', 'pendiente', '2026-02-17 12:56:58'),
(19, NULL, 'sugerencia', 'Nueva idea de mejora', 'NO ME GUSTA LA WEB', 'pendiente', '2026-02-18 13:23:08');

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

--
-- Volcado de datos para la tabla `ranking`
--

INSERT INTO `ranking` (`id_ranking`, `usuario_id`, `id_juego`, `puntuacion`, `fecha_partida`) VALUES
(1, 3, 1, 23, '2026-03-05 13:16:38'),
(2, 3, 1, 20, '2026-03-05 13:17:52'),
(3, 3, 1, 0, '2026-03-05 13:39:09'),
(4, 3, 1, 0, '2026-03-05 13:45:55'),
(5, 3, 1, 0, '2026-03-05 13:46:05'),
(6, 3, 1, 20, '2026-03-05 13:46:20'),
(7, 3, 4, 20, '2026-03-05 14:39:03');

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

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `nombres`, `correo`, `clave`, `tipo_usuario`, `fecha_registro`) VALUES
(1, 'Equipo PlayGo', 'admin@playgo.com', '$2a$10$vY37nlRiKR7X30hzsOhi7.ce75hyMIL54KVo4mBVfF9W8epa4Gn9K', 'administrador', '2026-02-09 18:49:25'),
(2, 'Enzo Niño', 'enzo@playgo.com', '$2a$10$vY37nlRiKR7X30hzsOhi7.ce75hyMIL54KVo4mBVfF9W8epa4Gn9K', 'nino', '2026-02-09 18:49:26'),
(3, 'Gema Adulto', 'gema@playgo.com', '$2a$10$vY37nlRiKR7X30hzsOhi7.ce75hyMIL54KVo4mBVfF9W8epa4Gn9K', 'adulto', '2026-02-09 18:49:26'),
(4, 'Leo', 'leo@playgo.com', '$2y$10$cH2ddbqnH8QivnwfMeRQJe4dN2D8d9bIXC9a8abvi2BeXLmJ1IYUy', 'nino', '2026-02-17 13:29:19');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`id_incidencia`),
  ADD KEY `fk_usuario_incidencia` (`usuario_id`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id_juego`);

--
-- Indices de la tabla `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`id_ranking`),
  ADD KEY `fk_usuario_ranking` (`usuario_id`),
  ADD KEY `fk_juego_ranking` (`id_juego`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  MODIFY `id_incidencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id_juego` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `ranking`
--
ALTER TABLE `ranking`
  MODIFY `id_ranking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD CONSTRAINT `fk_usuario_incidencia` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `ranking`
--
ALTER TABLE `ranking`
  ADD CONSTRAINT `fk_juego_ranking` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id_juego`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usuario_ranking` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

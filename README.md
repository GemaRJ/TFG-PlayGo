# PROYECTO_Play_Go

# 🎮 PlayGo - Plataforma Educativa y de Entretenimiento

PlayGo es una plataforma web interactiva diseñada para ofrecer experiencias de juego adaptadas a diferentes rangos de edad (Niños y Adultos).

El proyecto combina:

* juegos educativos y multijugador
* sistema de usuarios y sesiones
* administración completa
* rankings y soporte
* traducción multidioma
* despliegue online real
* arquitectura Full-Stack escalable

---

# 🚀 Estado del Proyecto

## Rama principal

```bash
main
```

## Despliegue Online

```txt
https://playgo.rf.gd/
```

---

# ✅ Funcionalidades Implementadas

## 1. 🏗️ Arquitectura y Configuración

### Estructura del proyecto

Organización modular profesional:

```txt
/administrador
/autenticacion
/assets
/chatbot
/configuracion
/juegos
/paginas
/utils
```

### Entornos compatibles

El proyecto funciona tanto en:

* entorno local (XAMPP)
* hosting remoto (InfinityFree)

mediante detección automática de entorno.

### Control de versiones

Uso profesional de:

* Git
* GitHub
* ramas
* merges
* resolución de conflictos

### Seguridad

Implementación de:

* `.gitignore`
* control de sesiones
* protección de rutas
* validaciones básicas

---

# 🔐 Backend y Base de Datos (PHP + MySQL)

## Sistema de Usuarios

Gestión completa de:

* usuarios
* login
* registro
* roles
* sesiones

## Roles implementados

* Administrador
* Adulto
* Niño
* Invitado

## Funcionalidades

* Inicio de sesión
* Cierre seguro de sesión
* Protección de rutas privadas
* Redirecciones automáticas según rol
* Gestión administrativa de usuarios

## Base de datos

Sistema relacional MySQL con:

* usuarios
* incidencias
* rankings
* juegos
* soporte

---

# 🎨 Frontend y Diseño (HTML5 + CSS3 + JavaScript)

## Diseño General

Interfaz moderna estilo:

* cyberpunk
* espacial
* dashboard interactivo

## Características visuales

* Responsive Design
* Animaciones
* Efectos hover
* Fondo dinámico
* Diseño móvil/tablet
* Transiciones suaves

## Tecnologías Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

---

# 🌍 Sistema Multidioma

Implementación completa de traducción:

* Español 🇪🇸
* Inglés 🇬🇧

Mediante:

```txt
utils/idiomas.js
utils/traductor.js
```

Uso de:

```html
data-key=""
```

para traducción dinámica de textos.

---

# 🤖 Chatbot Inteligente

Sistema de asistente virtual integrado:

* ayuda de navegación
* soporte rápido
* acceso a login y registro
* orientación para usuarios

Implementado en:

```txt
/chatbot
```

---

# 🕹️ Catálogo de Juegos

## 👦 Juegos Infantiles

* Cuenta Números
* Cuenta Letras
* Memory
* Tres en Raya
* Trivial Kids
* Tabú Kids

## 🧠 Juegos Adultos

* Trivial
* Blackjack
* Impostor
* Tabú

---

# 🏆 Sistema de Rankings

Integración de:

* puntuaciones
* almacenamiento
* ranking histórico
* conexión entre juegos y backend

---

# 📩 Sistema de Soporte

Implementación de:

* tickets
* incidencias
* sugerencias
* gestión administrativa
* cambio de estados
* resolución y reapertura

---

# 📱 Funcionalidades PWA

El proyecto incluye:

* `manifest.json`
* `service-worker.js`
* caché offline
* iconos adaptativos

Permitiendo comportamiento tipo aplicación móvil.

---

# ☁️ Despliegue Final

## Hosting utilizado

InfinityFree

## Base de datos remota

MySQL + phpMyAdmin

## Adaptaciones realizadas

* rutas dinámicas
* compatibilidad local/remota
* conexión dual MySQL
* subida ZIP + extracción automática
* estructura optimizada para hosting

---

# 📲 Código QR del Proyecto

Se generó un código QR para facilitar el acceso rápido al despliegue online durante la presentación del TFG.

URL del proyecto:

```txt
https://playgo-space.ct.ws
```

Herramienta utilizada:

```txt
QR Monkey
https://www.qrcode-monkey.com/
```

---

# 🛠️ Tecnologías Utilizadas

## Backend

* PHP

## Base de Datos

* MySQL

## Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

## Herramientas

* VS Code
* Git
* GitHub
* XAMPP
* InfinityFree

---

# 💿 Instalación del Proyecto

## 1. Clonar repositorio

```bash
git clone https://github.com/GemaRJ/PROYECTO_Playgo.git
```

## 2. Importar Base de Datos

Importar:

```txt
playgo.sql
```

en phpMyAdmin.

---

## 3. Configurar conexión

Editar:

```txt
/configuracion/conexion.php
```

---

## 4. Ejecutar servidor local

Usar:

* Apache
* MySQL
* XAMPP

y abrir:

```txt
http://localhost/playgo
```

---

# 📌 Conclusión

PlayGo representa una plataforma Full-Stack completa orientada al entretenimiento y aprendizaje interactivo.

El proyecto demuestra:

* desarrollo web completo
* integración frontend/backend
* despliegue real online
* arquitectura modular
* trabajo colaborativo con Git
* adaptación multiplataforma
* diseño responsive moderno
* integración de videojuegos web
* administración de usuarios y soporte

Todo ello dentro del contexto de un Trabajo de Fin de Grado (TFG).

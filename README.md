# PROYECTO_Play_Go

# 🎮 PlayGo - Plataforma Educativa y de Entretenimiento

**PlayGo** es una plataforma web interactiva diseñada para ofrecer una experiencia de juego adaptada a diferentes rangos de edad (Niños y Adultos). Este proyecto combina una gestión robusta de usuarios con una interfaz moderna y responsiva.

---

## 🚀 Estado del Proyecto

> **Rama Principal:** `principal`

### ✅ Lo que ya está hecho (Arquitectura y Núcleo)
Todo el sistema base, la seguridad, la base de datos y el diseño de la interfaz han sido implementados y probados.

#### 1. 🏗️ Arquitectura y Configuración
* **Estructura del Proyecto:** Organización profesional de carpetas (`/administrador`, `/autenticacion`, `/configuracion`, `/juegos`, etc.).
* **Entorno Local:** Configuración optimizada para XAMPP y Apache.
* **Control de Versiones:** Gestión de ramas, resolución de conflictos y fusión (Merge) a `principal`.
* **Seguridad:** Implementación de `.gitignore` para proteger archivos sensibles.

#### 2. 🔐 Backend y Base de Datos (PHP + MySQL)
* **Sistema de Usuarios:** Creación de base de datos relacional para gestionar usuarios y roles.
* **Autenticación Segura:**
    * Login con validación de credenciales.
    * Logout seguro (destrucción de sesiones).
    * **Control de Sesiones:** Protección de rutas (nadie puede entrar al panel sin loguearse).
* **Lógica de Roles:** Redirección automática y carga de contenido diferenciado según si el usuario es `NIÑO` o `ADULTO`.

#### 3. 🎨 Frontend y Diseño (HTML5, CSS3, Bootstrap 5)
* **Panel Principal (`panel.php`):** Diseño moderno tipo "Dashboard" SPA (Single Page Application).
* **UX/UI Avanzado:**
    * **Barra Lateral Fija:** Menú de navegación que no se desplaza.
    * **Modo "Zoom Out":** Adaptación inteligente (CSS Zoom 0.8) para que los juegos quepan en pantallas de portátiles sin scroll.
    * **Efectos Visuales:** Hover en botones, insignias de estado y transiciones suaves.
* **Responsive Design:** Adaptación total a móviles y tablets (menú colapsable).

#### 4. 🕹️ Integración de Juegos
* **Visor de Juegos:** Implementación de `iframe` dinámico que carga los juegos sin recargar la página.
* **Funcionalidades Extra:** Botón de "Pantalla Completa" (Fullscreen API) integrado.
* **Catálogo Preparado:**
    * *Niños:* Cuenta Números, Cuenta Letras, Memory, Tres en Raya.
    * *Adultos:* Trivial, Blackjack, Impostor, Tabú.

---

## 🛠️ Tecnologías Utilizadas
* **Backend:** PHP
* **Base de Datos:** MySQL
* **Frontend:** Bootstrap 5.3, CSS3, JavaScript, HTML
* **Herramientas:** VS Code, Git, XAMPP

---

## 📋 Tareas Pendientes (Para el equipo)
Aunque la estructura está terminada, faltan las siguientes integraciones para llegar al 100%:

1.  **Subir los Juegos:**
    * Rellenar las carpetas en `juegos/adultos/` y `juegos/ninos/` con los archivos HTML/JS de cada juego específico.
    * *Nota:* La lógica ya espera estos archivos; solo hay que pegar las rutas EN PANEL.PHP
2.  **Chatbot:**
    * Integrar el script del asistente virtual en la esquina inferior de la página principal.
3.  **Despliegue:**
    * Subida final a Vercel o hosting definitivo.

---

## 💿 Instalación (Para desarrolladores)
1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/GemaRJ/PROYECTO_Playgo.git](https://github.com/GemaRJ/PROYECTO_Playgo.git)
    ```
2.  Importar la base de datos `playgo_db.sql` en phpMyAdmin.
3.  Configurar la conexión en `configuracion/conexion.php`.
4.  Ejecutar en servidor local (Apache/XAMPP).

---
*Proyecto desarrollado para el ciclo DAW - 2026*


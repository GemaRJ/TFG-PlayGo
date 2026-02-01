export const preguntasTrivial = {
  response_code: 0,
  results: [
    // ==========================================
    // CATEGORÍA: INTERFACES
    // ==========================================
    {
      id: 1,
      category: "Interfaces",
      difficulty: "easy",
      question:
        "¿Qué propiedad CSS se utiliza para cambiar el color del texto?",
      correct_answer: "color",
      incorrect_answers: ["text-color", "font-color", "text-style"],
    },
    {
      id: 2,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Propiedad para establecer un fondo de color azul?",
      correct_answer: "background-color: blue;",
      incorrect_answers: [
        "color: blue;",
        "bg-color: blue;",
        "background: #blue;",
      ],
    },
    {
      id: 3,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Cómo se aplica un margen de 20 píxeles en todos los lados?",
      correct_answer: "Sirven: 'margin: 20px' o 'margin: 20px 20px...'",
      incorrect_answers: [
        "Solo padding: 20px;",
        "margin: 20;",
        "margin-all: 20px;",
      ],
    },
    {
      id: 4,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Qué propiedad pone el texto en negrita?",
      correct_answer: "font-weight: bold;",
      incorrect_answers: [
        "font-style: bold;",
        "weight: bold;",
        "text-weight: bold;",
      ],
    },
    {
      id: 5,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Cómo se escribe un comentario en CSS?",
      correct_answer: "/* Comentario */",
      incorrect_answers: ["// Comentario", "", "** Comentario **"],
    },
    {
      id: 6,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Qué propiedad subraya un texto?",
      correct_answer: "text-decoration: underline;",
      incorrect_answers: [
        "font-decoration: underline;",
        "underline: yes;",
        "text-style: underline;",
      ],
    },
    {
      id: 7,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Propiedad correcta para cambiar el tipo de fuente?",
      correct_answer: "font-family",
      incorrect_answers: ["font-type", "text-font", "typeface"],
    },
    {
      id: 8,
      category: "Interfaces",
      difficulty: "medium",
      question:
        "¿Qué valor de 'display' permite comportamiento de bloque y línea a la vez?",
      correct_answer: "inline-block",
      incorrect_answers: ["block", "inline", "flex"],
    },
    {
      id: 9,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Sintaxis correcta para borde rojo sólido de 2px?",
      correct_answer: "border: 2px solid red;",
      incorrect_answers: [
        "border: 2px red;",
        "border-line: 2px red solid;",
        "border-color: red;",
      ],
    },
    {
      id: 10,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Propiedad para alinear texto al centro?",
      correct_answer: "text-align: center;",
      incorrect_answers: [
        "align: center;",
        "horizontal-align: center;",
        "text-position: center;",
      ],
    },
    {
      id: 11,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Selector para un elemento con id 'menu'?",
      correct_answer: "#menu",
      incorrect_answers: [".menu", "element['menu']", "id('menu')"],
    },
    {
      id: 12,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Selector para todos los párrafos <p>?",
      correct_answer: "p",
      incorrect_answers: [".p", "#p", "parrafo"],
    },
    {
      id: 13,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Propiedad para redondear esquinas?",
      correct_answer: "border-radius",
      incorrect_answers: ["border-round", "corner-radius", "round-corner"],
    },
    {
      id: 14,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Padding de 10px verticales y 5px horizontales?",
      correct_answer: "padding: 10px 5px;",
      incorrect_answers: [
        "padding: 5px 10px;",
        "padding: 10px 5px 10px;",
        "padding: 10px 5px 0 0;",
      ],
    },
    {
      id: 15,
      category: "Interfaces",
      difficulty: "easy",
      question: "¿Propiedad para imagen de fondo?",
      correct_answer: "background-image",
      incorrect_answers: ["image-background", "bg-image", "background-picture"],
    },
    {
      id: 16,
      category: "Interfaces",
      difficulty: "hard",
      question:
        "¿Qué 'position' coloca un elemento relativo a su contenedor posicionado más cercano?",
      correct_answer: "absolute",
      incorrect_answers: ["static", "relative", "fixed"],
    },
    {
      id: 17,
      category: "Interfaces",
      difficulty: "hard",
      question:
        "Para que 'position: absolute' funcione respecto a un padre, el padre debe tener:",
      correct_answer: "position: relative (u otra distinta a static)",
      incorrect_answers: ["position: static", "display: block", "float: left"],
    },
    {
      id: 18,
      category: "Interfaces",
      difficulty: "hard",
      question: "¿Propiedad para el orden de apilamiento (eje Z)?",
      correct_answer: "z-index",
      incorrect_answers: ["stack-order", "layer-index", "depth"],
    },
    {
      id: 19,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Cómo se oculta un elemento manteniendo su espacio?",
      correct_answer: "Sirven: visibility: hidden u opacity: 0",
      incorrect_answers: ["display: none;", "hidden: true;", "visible: false;"],
    },
    {
      id: 20,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Selector para estado 'hover'?",
      correct_answer: ":hover",
      incorrect_answers: [":active", ":focus", ":over"],
    },
    {
      id: 21,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Sintaxis correcta de box-shadow?",
      correct_answer: "box-shadow: 5px 5px 10px gray;",
      incorrect_answers: [
        "shadow: 5px 5px gray;",
        "element-shadow: 10px;",
        "box-effect: shadow;",
      ],
    },
    {
      id: 22,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Propiedad para convertir texto a mayúsculas?",
      correct_answer: "text-transform",
      incorrect_answers: ["font-transform", "text-case", "case-style"],
    },
    {
      id: 23,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Propiedad para espacio entre letras?",
      correct_answer: "letter-spacing",
      incorrect_answers: ["word-spacing", "text-spacing", "font-spacing"],
    },
    {
      id: 24,
      category: "Interfaces",
      difficulty: "hard",
      question: "¿Cómo organizar hijos en una fila flexible?",
      correct_answer: "Sirven: display: flex o inline-flex",
      incorrect_answers: ["display: block;", "display: grid;", "display: row;"],
    },
    {
      id: 25,
      category: "Interfaces",
      difficulty: "hard",
      question: "¿Propiedad Flexbox para alinear en el eje principal?",
      correct_answer: "justify-content",
      incorrect_answers: ["align-items", "align-content", "flex-align"],
    },
    {
      id: 26,
      category: "Interfaces",
      difficulty: "hard",
      question: "¿Transición de 0.5s en background-color?",
      correct_answer: "transition: background-color 0.5s;",
      incorrect_answers: [
        "animate: background 0.5s;",
        "effect: background 0.5s;",
        "change: background 0.5s;",
      ],
    },
    {
      id: 27,
      category: "Interfaces",
      difficulty: "hard",
      question: "¿Media query para max-width 768px?",
      correct_answer: "Sirven: @media (max-width: 768px)...",
      incorrect_answers: [
        "@media screen and 768px",
        "@screen max-width",
        "@media < 768px",
      ],
    },
    {
      id: 28,
      category: "Interfaces",
      difficulty: "medium",
      question: "¿Imagen de fondo sin repetirse?",
      correct_answer: "background-repeat: no-repeat;",
      incorrect_answers: [
        "background: no-repeat;",
        "repeat: none;",
        "bg-repeat: none;",
      ],
    },
    {
      id: 29,
      category: "Interfaces",
      difficulty: "medium",
      question:
        "¿Unidad relativa al tamaño de fuente del elemento raíz (html)?",
      correct_answer: "rem",
      incorrect_answers: ["em", "px", "vh"],
    },
    {
      id: 30,
      category: "Interfaces",
      difficulty: "hard",
      question: "¿Cómo aplicar filtro blur de 5px?",
      correct_answer: "filter: blur(5px);",
      incorrect_answers: [
        "blur: 5px;",
        "transform: blur(5px);",
        "filter-blur: 5px;",
      ],
    },

    // ==========================================
    // CATEGORÍA: DESARROLLO WEB EN ENTORNO SERVIDOR
    // ==========================================
    {
      id: 31,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question: "¿Cuál es la forma correcta de declarar una variable en PHP?",
      correct_answer: "$variable = 'valor';",
      incorrect_answers: [
        "variable = 'valor';",
        "var variable = 'valor';",
        "declare variable = 'valor';",
      ],
    },
    {
      id: 32,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question: "¿Qué tipo de dato sería la variable $num = '25' por defecto?",
      correct_answer: "String",
      incorrect_answers: ["Integer", "Boolean", "Float"],
    },
    {
      id: 33,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question: "¿Cuál es la función principal para mostrar texto en PHP?",
      correct_answer: "print()",
      incorrect_answers: ["console.log()", "display()", "write()"],
    },
    {
      id: 34,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question: "Para concatenar dos cadenas de texto en PHP se utiliza:",
      correct_answer: "El operador .",
      incorrect_answers: ["El signo +", "El operador &", "El operador ,"],
    },
    {
      id: 35,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Cuál es la forma correcta de crear un array indexado en PHP?",
      correct_answer: "Ambas: array(...) o [...]",
      incorrect_answers: ["Solo array(...)", "Solo [...]", "new Array(...)"],
    },
    {
      id: 36,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Cómo se accede al segundo elemento del array $frutas?",
      correct_answer: "$frutas[1]",
      incorrect_answers: ["$frutas[0]", "$frutas[2]", "$frutas[second]"],
    },
    {
      id: 37,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question:
        "¿Qué función se utiliza para añadir un elemento al final de un array?",
      correct_answer: "array_push()",
      incorrect_answers: ["array_add()", "array_insert()", "array_pop()"],
    },
    {
      id: 38,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question:
        "Para iniciar el uso de variables de sesión, ¿qué función usar?",
      correct_answer: "session_start()",
      incorrect_answers: [
        "session_begin()",
        "start_session()",
        "init_session()",
      ],
    },
    {
      id: 39,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Cómo se almacena un valor en una variable de sesión?",
      correct_answer: "$_SESSION['usuario'] = 'Juan';",
      incorrect_answers: [
        "$_SESSION = 'usuario';",
        "SESSION['usuario'] = 'Juan';",
        "session_save('usuario', 'Juan');",
      ],
    },
    {
      id: 40,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question:
        "¿Dónde se almacenan normalmente las variables de sesión en el servidor?",
      correct_answer: "En archivos temporales en el servidor.",
      incorrect_answers: [
        "En la base de datos.",
        "En la memoria RAM del cliente.",
        "En cookies encriptadas.",
      ],
    },
    {
      id: 41,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "Para destruir todos los datos registrados en una sesión:",
      correct_answer: "session_destroy()",
      incorrect_answers: [
        "session_delete()",
        "session_clean()",
        "session_unset()",
      ],
    },
    {
      id: 42,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Para qué se utiliza principalmente la función setcookie()?",
      correct_answer: "Para crear o modificar una cookie en el cliente.",
      incorrect_answers: [
        "Para leer un valor de una cookie.",
        "Para eliminar una sesión.",
        "Para enviar un formulario.",
      ],
    },
    {
      id: 43,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question: "¿Forma correcta de crear una cookie que expire en 1 hora?",
      correct_answer: "setcookie('u', 'v', time() + 3600);",
      incorrect_answers: [
        "setcookie('u', 'v', 3600);",
        "create_cookie('u', 'v', 1);",
        "setcookie('u', 'v', time() + 60);",
      ],
    },
    {
      id: 44,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question: "¿En qué array superglobal se almacenan las cookies recibidas?",
      correct_answer: "$_COOKIE",
      incorrect_answers: ["$_GET", "$_POST", "$_REQUEST"],
    },
    {
      id: 45,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question: "Para eliminar una cookie inmediatamente, ¿qué se debe hacer?",
      correct_answer: "Establecer expiración en fecha pasada (time() - 3600).",
      incorrect_answers: [
        "Usar deletecookie().",
        "No se pueden eliminar.",
        "Usar unset($_COOKIE).",
      ],
    },
    {
      id: 46,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Bloque para manejar excepciones?",
      correct_answer: "try...catch",
      incorrect_answers: ["if...else", "error...handle", "exception...resolve"],
    },
    {
      id: 47,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question: "¿Palabra clave para lanzar una excepción manualmente?",
      correct_answer: "throw",
      incorrect_answers: ["exception", "trigger", "raise"],
    },
    {
      id: 48,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question: "¿Método principal para obtener datos enviados por POST?",
      correct_answer: "A través de $_POST",
      incorrect_answers: [
        "A través de $_GET",
        "A través de $REQUEST",
        "get_post_data()",
      ],
    },
    {
      id: 49,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "Acceder a <input name='email'> enviado por POST:",
      correct_answer: "$_POST['email']",
      incorrect_answers: [
        "$_POST['input']",
        "$_POST['text']",
        "$_GET['email']",
      ],
    },
    {
      id: 50,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question: "¿Qué hace htmlspecialchars()?",
      correct_answer: "Convierte caracteres especiales en entidades HTML.",
      incorrect_answers: [
        "Valida que el dato sea un email.",
        "Encripta la contraseña.",
        "Convierte texto a mayúsculas.",
      ],
    },
    {
      id: 51,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question: "Para verificar si un formulario fue enviado con POST:",
      correct_answer: "if ($_SERVER['REQUEST_METHOD'] == 'POST')",
      incorrect_answers: [
        "if (isset($_GET['submit']))",
        "if (form_submitted())",
        "if ($_POST['submit'] == true)",
      ],
    },
    {
      id: 52,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Función para redirigir a otra página?",
      correct_answer: "header('Location: pagina.php')",
      incorrect_answers: ["redirect()", "location()", "goto()"],
    },
    {
      id: 53,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Forma correcta de declarar una constante?",
      correct_answer: "define('PI', 3.1416);",
      incorrect_answers: [
        "constant PI = 3.1416;",
        "$const PI = 3.1416;",
        "const PI = 3.1416;",
      ],
    },
    {
      id: 54,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "easy",
      question: "¿Cómo se cuenta el número de elementos en un array?",
      correct_answer: "Ambas: count() o sizeof()",
      incorrect_answers: [
        "Solo array_count()",
        "Solo $array->length()",
        "size()",
      ],
    },
    {
      id: 55,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Verificar si variable de sesión está definida?",
      correct_answer: "if (isset($_SESSION['id']))",
      incorrect_answers: [
        "if ($_SESSION['id'] != null)",
        "if (exists(...))",
        "if (session_is_set(...))",
      ],
    },
    {
      id: 56,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Cómo se elimina una sola variable de sesión?",
      correct_answer: "unset($_SESSION['usuario'])",
      incorrect_answers: [
        "delete $_SESSION['usuario']",
        "session_unset('usuario')",
        "$_SESSION = null",
      ],
    },
    {
      id: 57,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "¿Función para enviar un correo electrónico?",
      correct_answer: "mail()",
      incorrect_answers: ["sendmail()", "email()", "smtp()"],
    },
    {
      id: 58,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question: "¿Ámbito de una variable definida dentro de una función?",
      correct_answer: "Local a esa función.",
      incorrect_answers: ["Global.", "Superglobal.", "Estático."],
    },
    {
      id: 59,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "medium",
      question: "Para recorrer un array asociativo se usa:",
      correct_answer: "Un bucle foreach.",
      incorrect_answers: [
        "Un bucle for.",
        "Un bucle while.",
        "Un bucle do...while.",
      ],
    },
    {
      id: 60,
      category: "DESARROLLO WEB EN ENTORNO SERVIDOR",
      difficulty: "hard",
      question: "¿Qué hace la función empty()?",
      correct_answer: "Comprueba si está vacía (0, null, false, etc).",
      incorrect_answers: [
        "Comprueba si está declarada.",
        "Comprueba si es distinto de cero.",
        "Comprueba si es string.",
      ],
    },

    // ==========================================
    // CATEGORÍA: SOSTENIBILIDAD
    // ==========================================
    {
      id: 61,
      category: "Sostenibilidad",
      difficulty: "easy",
      question: "¿Cuántos ODS hay?",
      correct_answer: "17",
      incorrect_answers: ["15", "20"],
    },
    {
      id: 62,
      category: "Sostenibilidad",
      difficulty: "easy",
      question: "¿Año horizonte Agenda 2030?",
      correct_answer: "2050",
      incorrect_answers: ["2025", "2030"],
    },
    {
      id: 63,
      category: "Sostenibilidad",
      difficulty: "easy",
      question: "¿Organismo impulsor Agenda 2030?",
      correct_answer: "ONU",
      incorrect_answers: ["UE", "OTAN"],
    },
    {
      id: 64,
      category: "Sostenibilidad",
      difficulty: "easy",
      question: "¿Qué NO es pilar de sostenibilidad?",
      correct_answer: "Tecnológico",
      incorrect_answers: ["Social", "Económico", "Ambiental"],
    },
    {
      id: 65,
      category: "Sostenibilidad",
      difficulty: "easy",
      question: "¿Qué es la ONU?",
      correct_answer: "Org. internacional para la paz",
      incorrect_answers: ["Agencia de noticias", "Alianza militar"],
    },
    {
      id: 66,
      category: "Sostenibilidad",
      difficulty: "easy",
      question: "¿ODS relacionado con el agua?",
      correct_answer: "ODS 6",
      incorrect_answers: ["ODS 1", "ODS 10"],
    },
    {
      id: 67,
      category: "Sostenibilidad",
      difficulty: "easy",
      question: "Integrar ASG mejora:",
      correct_answer: "Imagen de marca",
      incorrect_answers: ["Coste financiero", "Rotación de personal"],
    },
    {
      id: 68,
      category: "Sostenibilidad",
      difficulty: "medium",
      question: "Definición Sostenibilidad:",
      correct_answer: "Satisfacer presente sin comprometer futuro",
      incorrect_answers: ["Crecimiento infinito", "Ahorro total"],
    },
    {
      id: 69,
      category: "Sostenibilidad",
      difficulty: "medium",
      question: "¿Medida de emisiones GEI?",
      correct_answer: "Huella de carbono",
      incorrect_answers: ["Huella ecológica", "Emisión neta"],
    },
    {
      id: 70,
      category: "Sostenibilidad",
      difficulty: "medium",
      question: "¿Impacto cambio climático en costes?",
      correct_answer: "Aumentan (seguros/adaptación)",
      incorrect_answers: ["Disminuyen", "Se mantienen"],
    },
    {
      id: 71,
      category: "Sostenibilidad",
      difficulty: "medium",
      question: "¿Qué es descarbonización?",
      correct_answer: "Reducir emisiones CO2",
      incorrect_answers: ["Eliminar carbono comida", "Usar carbón"],
    },
    {
      id: 72,
      category: "Sostenibilidad",
      difficulty: "medium",
      question: "¿Qué es desmaterialización?",
      correct_answer: "Sustituir físico por digital",
      incorrect_answers: ["Reciclar todo", "Destruir materiales"],
    },
    {
      id: 73,
      category: "Sostenibilidad",
      difficulty: "medium",
      question: "¿Alianza software libre afecta a?",
      correct_answer: "Gobernanza",
      incorrect_answers: ["Social", "Ambiental"],
    },
    {
      id: 74,
      category: "Sostenibilidad",
      difficulty: "medium",
      question: "¿Objetivo Pacto Verde Europeo?",
      correct_answer: "Neutralidad climática 2050",
      incorrect_answers: ["Digitalización 2030", "PIB x2"],
    },
    {
      id: 75,
      category: "Sostenibilidad",
      difficulty: "hard",
      question: "¿Ejemplo concreto de descarbonización?",
      correct_answer: "Cambiar planta fósil a renovable",
      incorrect_answers: [
        "Deforestación",
        "Coches gasolina eficientes",
        "Aumentar producción",
      ],
    },
    {
      id: 76,
      category: "Sostenibilidad",
      difficulty: "hard",
      question: "¿Medidas de desmaterialización corporativa?",
      correct_answer: "Factura-e, firma digital, interoperabilidad",
      incorrect_answers: [
        "Copias físicas respaldo",
        "Papel reciclado",
        "Archivos locales",
      ],
    },
    {
      id: 77,
      category: "Sostenibilidad",
      difficulty: "hard",
      question: "Acciones consumo descarbonizador:",
      correct_answer: "Economía circular y proveedores bajos en C02",
      incorrect_answers: ["Materiales vírgenes", "Obsolescencia"],
    },
    {
      id: 78,
      category: "Sostenibilidad",
      difficulty: "hard",
      question: "¿ODS de dimensión ECONÓMICA?",
      correct_answer: "7, 8, 9, 10, 11, 12",
      incorrect_answers: ["1, 2, 3 (Social)", "13, 14, 15 (Ambiental)"],
    },
    {
      id: 79,
      category: "Sostenibilidad",
      difficulty: "hard",
      question: "¿ODS de dimensión AMBIENTAL?",
      correct_answer: "6, 13, 14, 15",
      incorrect_answers: ["4, 5, 16", "8, 9, 12"],
    },
    {
      id: 80,
      category: "Sostenibilidad",
      difficulty: "hard",
      question: "¿Aspectos gobernanza BBVA?",
      correct_answer: "Ciberseguridad, Ética, Riesgos, Sencillez",
      incorrect_answers: [
        "Conciliación (Social)",
        "Inclusión (Social)",
        "Voluntariado",
      ],
    },
    // ==========================================
    // CATEGORÍA: DESARROLLO WEB EN ENTORNO CLIENTE
    // ==========================================
    {
      id: 91,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "La declaración de variables con var...",
      correct_answer: "Define una variable a nivel de función.",
      incorrect_answers: [
        "Define una variable a nivel de bloque.",
        "Define una variable a nivel global.",
        "Define una variable local.",
      ],
    },
    {
      id: 92,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question: "En JavaScript, '5' * 4 es igual a...",
      correct_answer: "20.",
      incorrect_answers: [
        "54.",
        "Error en tiempo de ejecución.",
        "Error de sintaxis.",
      ],
    },
    {
      id: 93,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "Una función anónima...",
      correct_answer:
        "Puede ejecutarse si se referencia en una variable o se pasa como parámetro a otra función.",
      incorrect_answers: [
        "Puede ejecutarse solo si se referencia en una variable.",
        "Puede ejecutarse solo si se pasa como parámetro a otra función.",
        "No puede ejecutarse, al no tener nombre.",
      ],
    },
    {
      id: 94,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Dada la función 'function f(a, b, c)', ¿cómo asignamos los valores del array 'params = [1, 2, 3]'?",
      correct_answer: "f(...params)",
      incorrect_answers: ["f(params...)", "f([params])", "f(params)"],
    },
    {
      id: 95,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Para crear un objeto 'a' enlazado con un prototipo 'b', se debe ejecutar...",
      correct_answer: "a = Object.create(b);",
      incorrect_answers: [
        "b = Object.create(a);",
        "b = Object.assign(a);",
        "a = Object.assign(b);",
      ],
    },
    {
      id: 96,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "La palabra clave 'super'...",
      correct_answer: "Se utiliza dentro de class.",
      incorrect_answers: [
        "Se utiliza dentro de Object.assign.",
        "Se utiliza dentro de Object.clone.",
        "Se utiliza dentro de Object.create.",
      ],
    },
    {
      id: 97,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Si se desea importar las funciones f1 y f2 de './modulo1.js', se debe ejecutar:",
      correct_answer: "import {f1, f2} from './modulo1.js';",
      incorrect_answers: [
        "import [f1, f2] from './modulo1.js';",
        "import {f1, f2} as misFunciones from './modulo1.js';",
        "import [f1, f2] as misFunciones from './modulo1.js';",
      ],
    },
    {
      id: 98,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question: "La función map...",
      correct_answer: "Se utiliza para realizar transformaciones de arrays.",
      incorrect_answers: [
        "Se utiliza exclusivamente para filtrar los elementos de un array.",
        "Se utiliza exclusivamente para buscar elementos en un array.",
        "Se utiliza para calcular datos agregados, como totales.",
      ],
    },
    {
      id: 99,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question: "El código 'miArray.filter(return el < 5)'...",
      correct_answer:
        "Provoca un error de sintaxis, ya que no incluye una función como parámetro.",
      incorrect_answers: [
        "Obliga a que miArray sea un objeto que tenga almacenados sus valores en la propiedad el.",
        "Realiza un filtrado del array devolviendo un array cuyos elementos sean menores que 5.",
        "Provoca un error de sintaxis, ya que faltan los paréntesis alrededor de el < 5.",
      ],
    },
    {
      id: 100,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Qué estructura se utiliza en JavaScript para capturar errores?",
      correct_answer: "try...catch",
      incorrect_answers: ["try...error", "throw...error", "throw...catch"],
    },
    {
      id: 101,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Si se desea acceder al listado de elementos hijo de un elemento, sin incluir otro tipo de nodos como los nodos de texto, se debe utilizar...",
      correct_answer: "element.children",
      incorrect_answers: [
        "element.firstChild",
        "element.childNodes",
        "element.firstElementChild",
      ],
    },
    {
      id: 102,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "Si se desea obtener el primer elemento con clases 'clase1' y 'clase2', se debe ejecutar...",
      correct_answer: 'document.getElementsByClassName("clase1 clase2")[0]',
      incorrect_answers: [
        'document.querySelectorAll(".clase1.clase2")',
        'document.querySelector(".clase1 .clase2")',
        'document.getElementsByClassName("clase1 clase2")',
      ],
    },
    {
      id: 103,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "La diferencia entre event.target y event.currentTarget es...",
      correct_answer:
        "event.target hace referencia al elemento sobre el que se produce el evento y event.currentTarget hace referencia al elemento que tiene definido el manejador.",
      incorrect_answers: [
        "event.target hace referencia al elemento (objeto) y event.currentTarget hace referencia al nombre del elemento (string).",
        "event.currentTarget hace referencia al elemento sobre el que se produce el evento y event.target hace referencia al elemento que tiene definido el manejador.",
        "Ninguna.",
      ],
    },
    {
      id: 104,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "Para impedir el comportamiento por defecto asociado a un evento, se debe ejecutar...",
      correct_answer: "event.preventDefault()",
      incorrect_answers: [
        "event.stopDefault()",
        "event.submit()",
        "event.stopPropagation()",
      ],
    },
    {
      id: 105,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "La función form.reportValidity...",
      correct_answer:
        "Ejecuta la validación HTML5 del formulario mostrando los mensajes estándar del navegador.",
      incorrect_answers: [
        "Ejecuta la validación HTML5 del formulario sin mostrar los mensajes estándar del navegador.",
        "Ejecuta una función de validación definida por el usuario mostrando mensajes de error.",
        "Ejecuta una función de validación definida por el usuario sin mostrar mensajes de error.",
      ],
    },
    {
      id: 106,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Para realizar una validación antes del envío de un formulario...",
      correct_answer:
        "Es recomendable crear un manejador del evento submit sobre el formulario, ya que, de esta manera, se puede capturar también la acción de envío si el usuario pulsa la tecla Enter.",
      incorrect_answers: [
        "Es recomendable crear un manejador del evento click sobre el botón de envío, ya que es el método más sencillo.",
        "Es recomendable crear un manejador del evento click sobre el formulario, ya que, de esta manera, se puede capturar también la acción de envío si el usuario pulsa la tecla Enter.",
        "Es recomendable crear un manejador del evento submit sobre el botón de envío, ya que, de esta manera, se puede capturar también la acción de envío si el usuario pulsa la tecla Enter.",
      ],
    },
    {
      id: 107,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "Dada una clase que define un componente personalizado, ¿en qué método es posible crear elementos del DOM?",
      correct_answer: "connectedCallback",
      incorrect_answers: [
        "constructor",
        "En cualquier método.",
        "En ningún método.",
      ],
    },
    {
      id: 108,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: 'El código /hola/.test("Hola mundo"); devuelve...',
      correct_answer: "false",
      incorrect_answers: ["true", '"Hola"', "Error."],
    },
    {
      id: 109,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "Si un objeto que tiene definidos métodos se guarda en almacenamiento local, ¿qué ocurre con dichos métodos?",
      correct_answer:
        "Se pierden, ya que el almacenamiento local solo almacena datos, aunque se pueden recuperar construyendo un nuevo objeto a partir del prototipo, y posteriormente copiando los datos recuperados del almacenamiento.",
      incorrect_answers: [
        "Se genera un error al guardar el objeto.",
        "Se pierden, ya que el almacenamiento local solo almacena datos. No hay manera de recuperarlos.",
        "Se guardan junto con los datos en el almacenamiento local.",
      ],
    },
    {
      id: 110,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Qué tipo de datos utiliza el almacenamiento web para almacenar la información?",
      correct_answer: "Cadenas de texto.",
      incorrect_answers: [
        "Binario.",
        "Cadenas de texto en formato JSON.",
        "Objetos.",
      ],
    },
    {
      id: 111,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "Dado el código 'let a = miArray.map(transformar)'...",
      correct_answer: "La función transformar es una función de callback.",
      incorrect_answers: [
        "Se trata de un código asíncrono, puesto que usa callbacks.",
        "La función map es una función de callback.",
        "transformar no puede ser una función.",
      ],
    },
    {
      id: 112,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "Si lanzas un setTimeout de 4s y acto seguido uno de 3s...",
      correct_answer:
        "El segundo temporizador terminará 1 segundo antes que el primero.",
      incorrect_answers: [
        "El segundo temporizador terminará 1 segundo después que el primero.",
        "El segundo temporizador terminará 3 segundos después que el primero.",
        "El segundo temporizador terminará a los 7 segundos del comienzo del programa.",
      ],
    },
    {
      id: 113,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question: "Si una promesa es rechazada...",
      correct_answer:
        "Se genera un error que puede ser capturado por su método catch.",
      incorrect_answers: [
        "Devuelve un valor -1.",
        "Devuelve un valor null.",
        "Se genera un error que puede ser capturado por su método finally.",
      ],
    },
    {
      id: 114,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Si se desea lanzar varias promesas a la vez y obtener su resultado (todas), se debe utilizar...",
      correct_answer:
        "Promise.all, pasando las promesas en un único parámetro en forma de array.",
      incorrect_answers: [
        "Promise.race, pasando las promesas en un único parámetro en forma de array.",
        "Promise.all, pasando cada promesa como un parámetro independiente.",
        "Promise.race, pasando cada promesa como un parámetro independiente.",
      ],
    },
    {
      id: 115,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Si se desea lanzar varias promesas a la vez y obtener únicamente el resultado de la primera que finalice...",
      correct_answer:
        "Promise.race, pasando las promesas en un único parámetro en forma de array.",
      incorrect_answers: [
        "Promise.race, pasando cada promesa como un parámetro independiente.",
        "Promise.all, pasando las promesas en un único parámetro en forma de array.",
        "Promise.all, pasando cada promesa como un parámetro independiente.",
      ],
    },
    {
      id: 116,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "Dentro de una función definida como async...",
      correct_answer:
        "Se pueden utilizar tanto promesas como callbacks para ejecutar funciones asíncronas.",
      incorrect_answers: [
        "No pueden utilizarse ni promesas ni callbacks para ejecutar funciones asíncronas.",
        "Se pueden utilizar únicamente promesas para ejecutar funciones asíncronas.",
        "Se pueden utilizar únicamente callbacks para ejecutar funciones asíncronas.",
      ],
    },
    {
      id: 117,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "Si 'miFuncionAsincrona' devuelve un string, ¿qué almacena 'res' en: 'let res = await miFuncionAsincrona()':?",
      correct_answer: "Un string.",
      incorrect_answers: [
        "Un callback.",
        "Una promesa.",
        "Un objeto cuya propiedad result es el resultado de la función.",
      ],
    },
    {
      id: 118,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "Dado 'let res = await fetch(url)', ¿cómo obtienes los datos JSON?",
      correct_answer: "await res.json();",
      incorrect_answers: [
        "res.json();",
        "JSON.parse(res);",
        "JSON.parse(res.json());",
      ],
    },
    {
      id: 119,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Qué propiedad del objeto Response indica que la petición HTTP ha tenido éxito (200-299)?",
      correct_answer: "Response.ok",
      incorrect_answers: [
        "Response.success",
        "Response.statusCode",
        "Response.code",
      ],
    },
    {
      id: 120,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Es posible descargar datos de otro dominio distinto al origen con fetch?",
      correct_answer:
        "Sí, siempre que el servidor correspondiente haya habilitado el acceso CORS.",
      incorrect_answers: [
        "No, solo es posible el acceso a URL del mismo dominio.",
        "Sí, aunque es necesario proporcionar autenticación.",
        "Sí, en cualquier caso.",
      ],
    },
    {
      id: 121,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Cuál de las siguientes herramientas se utiliza para instalar paquetes y gestionar sus dependencias?",
      correct_answer: "NPM.",
      incorrect_answers: ["Webpack.", "Grunt.", "Gulp."],
    },
    {
      id: 122,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "En un proyecto con Webpack, ¿qué hay que hacer para probar la aplicación tras un cambio en el código?",
      correct_answer:
        "Ejecutar npx webpack para generar el archivo de salida dist/main.js, actualizar index.html y cargarlo en el servidor.",
      incorrect_answers: [
        "Cargar simplemente el archivo HTML de entrada (index.html).",
        "Modificar el archivo index.html para que utilice el archivo de entrada src/index.js.",
        "Ejecutar npm webpack para generar el archivo de salida dist/main.js.",
      ],
    },
    {
      id: 123,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿En qué consiste la característica de enrutamiento (routing) de los frameworks JS?",
      correct_answer:
        "En cargar una vista o un componente en función de la URL a la que se esté accediendo.",
      incorrect_answers: [
        "En visualizar los cambios sin recompilar.",
        "En cargar los datos de los componentes desde archivos.",
        "En actualizar la interfaz cuando cambian los datos.",
      ],
    },
    {
      id: 124,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "En Angular, ¿para qué se utiliza el selector de un componente?",
      correct_answer:
        "Para relacionar el componente con el nombre de la etiqueta que utilizará en una plantilla.",
      incorrect_answers: [
        "Para enlazar una propiedad de datos del componente con un campo de formulario.",
        "Para establecer un enlace de datos unidireccional entre propiedad y atributo.",
        "Para establecer un enlace de datos unidireccional entre propiedad y plantilla.",
      ],
    },
    {
      id: 125,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question: "¿Para qué se utilizan las dobles llaves {{ }} en Angular?",
      correct_answer: "Para mostrar el valor de una propiedad del componente.",
      incorrect_answers: [
        "Para crear un enlace de datos de doble sentido (Two-way binding).",
        "Para enlazar un evento con un método.",
        "Para enlazar el valor de un atributo con una propiedad.",
      ],
    },
    {
      id: 126,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "¿Para qué se utilizan los corchetes [ ] en Angular?",
      correct_answer:
        "Para enlazar el valor de un atributo con una propiedad del componente.",
      incorrect_answers: [
        "Para enlazar un evento con un método del componente.",
        "Para mostrar el valor de una propiedad del componente.",
        "Para crear un enlace de datos de doble sentido.",
      ],
    },
    {
      id: 127,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Qué directiva se usa en Angular para crear copias de elementos basadas en un array?",
      correct_answer: "*ngFor.",
      incorrect_answers: ["ngRepeat.", "ngFor.", "*ngSwitch."],
    },
    {
      id: 128,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Qué directiva utiliza React para crear listas de elementos a partir de arrays?",
      correct_answer:
        "Ninguna: utiliza las estructuras propias de JavaScript, como map.",
      incorrect_answers: [
        "Ninguna: no existe esa posibilidad.",
        "repeat.",
        "ngFor.",
      ],
    },
    {
      id: 129,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Qué utiliza React para crear enlaces de datos de doble sentido en formularios?",
      correct_answer:
        "Un enlace de datos del atributo value y un manejador de eventos para el evento change.",
      incorrect_answers: [
        "La directiva ngModel.",
        "Un enlace de datos del atributo value.",
        "Un manejador de eventos para el evento change.",
      ],
    },
    {
      id: 130,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "¿Qué funciones incorpora React para realizar peticiones AJAX?",
      correct_answer:
        "Ninguna: debe hacer uso de una librería externa (fetch o axios).",
      incorrect_answers: [
        "La función fetch.",
        "El módulo http.",
        "La librería axios.",
      ],
    },
    {
      id: 131,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "En Vue, si el método es 'procesar(nombre, evento)', ¿cómo se pasa el evento nativo del DOM en el HTML?",
      correct_answer: "procesar('Juan', $event)",
      incorrect_answers: [
        "procesar('Juan', event)",
        "procesar('Juan', this.event)",
        "procesar('Juan', evento)",
      ],
    },
    {
      id: 132,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "En Vue, ¿cómo se realiza un doble enlace de datos (two-way binding) con un campo de formulario?",
      correct_answer: 'v-model="nombre"',
      incorrect_answers: [':value="nombre"', 'v-bind="nombre"', "{{ nombre }}"],
    },
    {
      id: 133,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Qué directiva se usa en Vue para mostrar u ocultar un elemento según una variable booleana?",
      correct_answer: 'v-if="visible"',
      incorrect_answers: [
        'v-for="visible"',
        "{{ visible }}",
        ':visible="true"',
      ],
    },
    {
      id: 134,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Cómo escucha un componente padre un evento personalizado llamado 'evento1' emitido por el hijo?",
      correct_answer: '@evento1="accion"',
      incorrect_answers: [
        ':evento1="accion"',
        'v-on:accion="evento1"',
        '$emit("evento1")',
      ],
    },
    {
      id: 135,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "En Vue, ¿cómo se pasa el valor de una variable 'var1' del padre a una prop 'prop1' del hijo?",
      correct_answer: ':prop1="var1"',
      incorrect_answers: [
        'prop1="{{var1}}"',
        'v-model:prop1="var1"',
        'prop1="var1"',
      ],
    },
    {
      id: 136,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Cuál es el código correcto para emitir un evento desde un componente hijo con dos argumentos?",
      correct_answer: "this.$emit('evento1', arg1, arg2)",
      incorrect_answers: [
        "this.emit('evento1', arg1, arg2)",
        "this.$emit(evento1, arg1, arg2)",
        "$dispatch('evento1', arg1, arg2)",
      ],
    },
    {
      id: 137,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿En qué evento del ciclo de vida de Vue se suelen realizar las peticiones a APIs (fetch)?",
      correct_answer: "created",
      incorrect_answers: ["mounted", "updated", "beforeMount"],
    },
    {
      id: 138,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "Si defines una ruta dinámica '/vehiculos/:vehiculo', ¿cómo accedes al parámetro en el componente?",
      correct_answer: "this.$route.params.vehiculo",
      incorrect_answers: [
        "this.route.params.vehiculo",
        "this.$router.vehiculo",
        "this.params.vehiculo",
      ],
    },
    {
      id: 139,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "En Nuxt, ¿qué fichero hay que crear para definir la ruta automática '/vehiculos'?",
      correct_answer: "pages/vehiculos/index.vue",
      incorrect_answers: [
        "pages/vehiculos.vue",
        "pages/vehiculos/vehiculos.vue",
        "routes/vehiculos.js",
      ],
    },
    {
      id: 140,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "En el framework Nuxt, ¿qué directorio se utiliza para almacenar las vistas (páginas) de la aplicación?",
      correct_answer: "pages",
      incorrect_answers: ["views", "components", "static"],
    },
    {
      id: 141,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Cuántas veces hay que enviar las credenciales en un sitio con autenticación básica?",
      correct_answer: "Con cada petición a cada página.",
      incorrect_answers: [
        "Con la petición a la primera página.",
        "Únicamente en el proceso de login.",
        "No hay que enviarlas: basta con la cookie de sesión.",
      ],
    },
    {
      id: 142,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question: "¿Qué información almacena un token JWT?",
      correct_answer:
        "Información de identificación de la persona, firmada digitalmente por el emisor.",
      incorrect_answers: [
        "Las credenciales de usuario (usuario y contraseña).",
        "El identificador de sesión.",
        "Una clave de acceso de una API.",
      ],
    },
    {
      id: 143,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question: "La cookie de sesión...",
      correct_answer: "Almacena el identificador de sesión.",
      incorrect_answers: [
        "Almacena el identificador de usuario y su contraseña.",
        "Almacena el identificador de usuario.",
        "Almacena la contraseña de usuario.",
      ],
    },
    {
      id: 144,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Qué formato utiliza GitHub Actions en sus ficheros de configuración?",
      correct_answer: "YAML.",
      incorrect_answers: ["JSON.", "JavaScript.", "XML."],
    },
    {
      id: 145,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Cómo almacenar credenciales para que GitHub Actions las utilice?",
      correct_answer:
        "En variables de secretos, a través de la configuración de ajustes del repositorio.",
      incorrect_answers: [
        "En un archivo oculto almacenado en el repositorio.",
        "En un archivo cifrado en el repositorio.",
        "En un archivo almacenado en el repositorio.",
      ],
    },
    {
      id: 146,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Qué etapa ejecuta GitHub Actions justo después de clonar el repositorio?",
      correct_answer: "La instalación de las dependencias del proyecto.",
      incorrect_answers: [
        "El despliegue de la aplicación.",
        "La ejecución de los test.",
        "La compilación de la aplicación.",
      ],
    },
    {
      id: 147,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "Para desplegar una aplicación Vue, el sistema de integración continua debe:",
      correct_answer:
        "Compilar el código fuente del repositorio y copiar el resultado al servidor web estático.",
      incorrect_answers: [
        "Clonar el repositorio en el servidor web estático.",
        "Copiar la carpeta dist del repositorio al servidor web estático.",
        "Copiar el código fuente del repositorio al servidor web estático.",
      ],
    },
    {
      id: 148,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question: "¿Qué es Azure Blob Storage?",
      correct_answer: "Un servicio cloud de alojamiento masivo de ficheros.",
      incorrect_answers: [
        "Un servicio de entrega de contenido o CDN.",
        "Un servidor web estático.",
        "Un servicio de despliegue continuo.",
      ],
    },
    {
      id: 149,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "medium",
      question:
        "¿Qué servicios ofrecen características de despliegue continuo?",
      correct_answer: "AWS Amplify y Azure Web Apps.",
      incorrect_answers: [
        "AWS S3 y Azure Blob Storage.",
        "AWS Amplify y AWS S3.",
        "AWS CloudFront y Azure CDN.",
      ],
    },
    {
      id: 150,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "easy",
      question:
        "¿Cuáles de los siguientes servicios proporcionan servicios de entrega de contenido (CDN)?",
      correct_answer: "AWS CloudFront y Azure CDN.",
      incorrect_answers: [
        "AWS S3 y Azure Blob Storage.",
        "AWS Amplify y Azure CDN.",
        "AWS Amplify y Azure Web Apps.",
      ],
    },
    // ==========================================
    // CATEGORÍA: DESPLIEGUE DE APLICACIONES WEB (10 Preguntas)
    // ==========================================
    {
      id: 151,
      category: "Despliegue de aplicaciones web",
      difficulty: "easy",
      question: "¿Qué capa no corresponde a la computación en la nube pública?",
      correct_answer: "In-house.",
      incorrect_answers: ["IaaS.", "PaaS y SaaS.", "CaaS."],
    },
    {
      id: 152,
      category: "Despliegue de aplicaciones web",
      difficulty: "easy",
      question:
        "¿Qué servicios de red deberemos configurar para desplegar aplicaciones web?",
      correct_answer: "Todas son válidas.",
      incorrect_answers: [
        "Servicios de transferencia de archivos.",
        "Servicio DNS o servicio de directorio activo.",
        "Servicios web.",
      ],
    },
    {
      id: 153,
      category: "Despliegue de aplicaciones web",
      difficulty: "hard",
      question:
        "¿Cuántos subtipos de los dominios de primer nivel genéricos gTLD existen?",
      correct_answer: "3.",
      incorrect_answers: ["2.", "1.", "0."],
    },
    {
      id: 154,
      category: "Despliegue de aplicaciones web",
      difficulty: "medium",
      question: "¿De qué tipo son las zonas DNS?",
      correct_answer: "De búsqueda o resolución directa o inversa.",
      incorrect_answers: [
        "De búsqueda o resolución directa o iterativa.",
        "De búsqueda o resolución recursiva o inversa.",
        "De búsqueda o resolución recursiva o iterativa.",
      ],
    },
    {
      id: 155,
      category: "Despliegue de aplicaciones web",
      difficulty: "medium",
      question: "¿Cuántos tipos de servidores DNS diferentes existen?",
      correct_answer: "4.",
      incorrect_answers: ["1.", "3.", "2."],
    },
    {
      id: 156,
      category: "Despliegue de aplicaciones web",
      difficulty: "hard",
      question: "El protocolo LDAP está basado en el protocolo:",
      correct_answer: "X.500.",
      incorrect_answers: ["Y.300.", "Active Directory.", "OpenLDAP."],
    },
    {
      id: 157,
      category: "Despliegue de aplicaciones web",
      difficulty: "hard",
      question:
        "¿Cuál es el origen común de la herencia de todos los objetos en OpenLDAP?",
      correct_answer: "El objeto top.",
      incorrect_answers: [
        "El objeto person.",
        "El objeto organizationalPerson.",
        "El objeto inetOrgPerson.",
      ],
    },
    {
      id: 158,
      category: "Despliegue de aplicaciones web",
      difficulty: "medium",
      question: "Indica cuál no es un sistema de contenedores.",
      correct_answer: "LXE.",
      incorrect_answers: ["LXD.", "Docker.", "LXC."],
    },
    {
      id: 159,
      category: "Despliegue de aplicaciones web",
      difficulty: "medium",
      question:
        "¿Cuál es la imagen de sistema operativo GNU/Linux más optimizada para contenedores?",
      correct_answer: "Alpine Slimmed down kernel.",
      incorrect_answers: [
        "Debian Slim.",
        "Ubuntu Slim.",
        "macOS Slimmed down kernel.",
      ],
    },
    {
      id: 160,
      category: "Despliegue de aplicaciones web",
      difficulty: "easy",
      question: "¿Qué elemento forma parte del ecosistema Docker?",
      correct_answer: "Todas son válidas.",
      incorrect_answers: ["Docker CLI.", "Docker Host.", "Registry."],
    },

    // ==========================================
    // CATEGORÍA: DIGITALIZACIÓN (78 Preguntas nuevas)
    // ==========================================
    {
      id: 161,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "La digitalización:",
      correct_answer: "Mejora la productividad en la empresa.",
      incorrect_answers: [
        "Dificulta las relaciones entre trabajadores.",
        "Aumenta los costes.",
        "Aumenta la complejidad en la gestión de los datos.",
      ],
    },
    {
      id: 162,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "El almacenamiento de datos en la nube es una ventaja porque:",
      correct_answer: "Permite el acceso a los datos desde cualquier lugar.",
      incorrect_answers: [
        "El almacenamiento es ilimitado para cualquier tipo de datos.",
        "La única diferencia entre empresas es la velocidad de acceso.",
        "La información almacenada es completamente segura y nunca puede ser vulnerada.",
      ],
    },
    {
      id: 163,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "La tecnología:",
      correct_answer:
        "Permite la creación de nuevas profesiones relacionadas con su gestión.",
      incorrect_answers: [
        "Provoca la desaparición de trabajos cualificados.",
        "Aumenta las tareas rutinarias.",
        "Reduce la colaboración entre empleados.",
      ],
    },
    {
      id: 164,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "Las herramientas digitales enfocadas en el control y automatización de procesos físicos (industriales) son:",
      correct_answer: "Tecnologías de la operación (OT).",
      incorrect_answers: [
        "Tecnologías de la información (IT).",
        "Realidad virtual (RV).",
        "Internet de las cosas (IoT).",
      ],
    },
    {
      id: 165,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "Es un ejemplo de tecnología de la información (IT):",
      correct_answer: "Una aplicación de reservas online.",
      incorrect_answers: [
        "Un termostato.",
        "Un lavavajillas industrial.",
        "Un exprimidor.",
      ],
    },
    {
      id: 166,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "La tendencia actual en las tecnologías IT y OT es:",
      correct_answer: "La integración completa de IT y OT.",
      incorrect_answers: [
        "La convergencia gradual de IT y OT.",
        "La ciberseguridad.",
        "La IT y OT diferenciadas.",
      ],
    },
    {
      id: 167,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "La inteligencia artificial:",
      correct_answer: "Sustituye tareas repetitivas y rutinarias.",
      incorrect_answers: [
        "Aumenta los costes de producción.",
        "Está libre de ataques informáticos.",
        "No requiere supervisión humana.",
      ],
    },
    {
      id: 168,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "El departamento que identifica oportunidades para aprovechar nuevas tecnologías se denomina:",
      correct_answer: "Innovación y Estrategia Digital.",
      incorrect_answers: [
        "Desarrollo Web y Multimedia.",
        "Seguridad de la Información.",
        "Desarrollo de Software.",
      ],
    },
    {
      id: 169,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "¿Qué aspecto organizativo se ve afectado por la personalización de productos y servicios?",
      correct_answer: "La experiencia del cliente.",
      incorrect_answers: [
        "La toma de decisiones informadas.",
        "La seguridad integral.",
        "El mantenimiento predictivo.",
      ],
    },
    {
      id: 170,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "Las Tecnologías de Operación (OT):",
      correct_answer: "Solo se emplean en entornos industriales.",
      incorrect_answers: [
        "Tienen ciclos de vida más cortos que las IT.",
        "Recopilan información y analizan datos.",
        "Emplean software, redes y aplicaciones informáticas.",
      ],
    },
    {
      id: 171,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "¿Cuál es el principal objetivo de las Tecnologías Habilitadoras Digitales (THD)?",
      correct_answer:
        "Actuar como elementos de cambio en la transformación digital en diversos sectores.",
      incorrect_answers: [
        "Facilitar nuevas vías de entretenimiento digital.",
        "Crear nuevas herramientas de aplicación exclusiva en informática.",
        "Convertir el comercio tradicional en empresas digitales.",
      ],
    },
    {
      id: 172,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "La clave para llevar a cabo una transformación digital exitosa es:",
      correct_answer:
        "Conectar e integrar todas las innovaciones que se vayan incorporando.",
      incorrect_answers: [
        "Ignorar la necesidad de invertir en seguridad digital.",
        "Adoptar cada vez más tecnologías.",
        "Mantener todas las tecnologías aplicadas, aunque estén obsoletas.",
      ],
    },
    {
      id: 173,
      category: "Digitalizacion",
      difficulty: "easy",
      question:
        "La tecnología empleada para la autenticación a través de huellas dactilares y reconocimiento facial es:",
      correct_answer: "La biometría.",
      incorrect_answers: [
        "El blockchain.",
        "El Internet de las Cosas (IoT).",
        "La ciberseguridad.",
      ],
    },
    {
      id: 174,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "Tecnología que permite recopilar datos en tiempo real conectando objetos físicos a Internet:",
      correct_answer: "El Internet de las Cosas (IoT).",
      incorrect_answers: [
        "El blockchain.",
        "La Inteligencia Artificial (IA).",
        "El big data.",
      ],
    },
    {
      id: 175,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "¿Cuál de las siguientes características NO es propia de las THD?",
      correct_answer: "Rigidez.",
      incorrect_answers: ["Escalabilidad.", "Versatilidad.", "Innovación."],
    },
    {
      id: 176,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "En el ámbito de la seguridad, las THD:",
      correct_answer: "Protegen contra amenazas cibernéticas.",
      incorrect_answers: [
        "Limitan los procesos.",
        "Tienden a exponer gran cantidad de datos.",
        "Dificultan la reducción de costos a largo plazo.",
      ],
    },
    {
      id: 177,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "¿Qué objetivo tienen las THD orientadas a la ciberseguridad?",
      correct_answer:
        "Garantizar que los productos y servicios digitales sean seguros.",
      incorrect_answers: [
        "Analizar datos y ayudar a comprender mejor las necesidades de los clientes.",
        "Ayudar a rastrear y optimizar la cadena de suministros.",
        "Facilitar la innovación y la personalización.",
      ],
    },
    {
      id: 178,
      category: "Digitalizacion",
      difficulty: "easy",
      question:
        "La tecnología THD que permite diseñar y crear prototipos de manera rápida y económica es:",
      correct_answer: "La impresión 3D.",
      incorrect_answers: [
        "El big data.",
        "La automatización.",
        "La ciberseguridad.",
      ],
    },
    {
      id: 179,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "¿Qué THD beneficia directamente la satisfacción del cliente?",
      correct_answer:
        "Una experiencia de compra personalizada basada en datos.",
      incorrect_answers: [
        "El almacenamiento de datos en la nube.",
        "La eficiencia energética.",
        "La automatización del proceso de fabricación.",
      ],
    },
    {
      id: 180,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "¿Cuál de los siguientes efectos de la digitalización es beneficioso para el medioambiente?",
      correct_answer:
        "La disminución del uso de papel y la extensión del teletrabajo.",
      incorrect_answers: [
        "Rápidos ciclos de obsolescencia de dispositivos electrónicos.",
        "Únicamente la disminución del uso de papel.",
        "Únicamente la extensión del teletrabajo.",
      ],
    },
    {
      id: 181,
      category: "Digitalizacion",
      difficulty: "easy",
      question:
        "¿Qué función cumple la tecnología en el modelo de ciudad inteligente?",
      correct_answer: "Mejorar la calidad de vida de sus ciudadanos.",
      incorrect_answers: [
        "Reducir la seguridad.",
        "Aumentar el consumo de recursos.",
        "Limitar el desarrollo sostenible.",
      ],
    },
    {
      id: 182,
      category: "Digitalizacion",
      difficulty: "easy",
      question:
        "¿Qué tecnología se emplea para la creación de objetos tridimensionales a partir de modelos digitales?",
      correct_answer: "Impresión 3D.",
      incorrect_answers: [
        "Realidad virtual.",
        "Blockchain.",
        "Internet de las cosas.",
      ],
    },
    {
      id: 183,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "La inteligencia artificial permite...",
      correct_answer:
        "Aprender por sí misma o mediante el análisis y el procesamiento de datos.",
      incorrect_answers: [
        "Tomar decisiones autónomas, aunque no se disponga de datos.",
        "Prever el futuro de manera precisa.",
        "Reemplazar a los humanos en todos los trabajos.",
      ],
    },
    {
      id: 184,
      category: "Digitalizacion",
      difficulty: "easy",
      question:
        "El Internet de las cosas (IoT) es conocido especialmente por su aplicación en...",
      correct_answer: "Los hogares (domótica).",
      incorrect_answers: [
        "La construcción.",
        "La educación.",
        "La agricultura.",
      ],
    },
    {
      id: 185,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Es una función de los robots de patrulla:",
      correct_answer: "Vigilar zonas y alertar sobre actividades sospechosas.",
      incorrect_answers: [
        "Ayudar a clientes en tiendas y centros de servicio.",
        "Cuidar de niños en escuelas infantiles.",
        "Entregar paquetes en entornos urbanos.",
      ],
    },
    {
      id: 186,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Los robots colaborativos (cobots):",
      correct_answer:
        "Trabajan junto a humanos en entornos de producción seguros.",
      incorrect_answers: [
        "Se emplean en exploración espacial.",
        "Solo realizan tareas autónomas.",
        "Ayudan a la rehabilitación con ejercicios guiados.",
      ],
    },
    {
      id: 187,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "El blockchain es:",
      correct_answer:
        "Un registro digital descentralizado y seguro de transacciones y datos.",
      incorrect_answers: [
        "Un protocolo de seguridad para redes sociales.",
        "Una criptomoneda.",
        "Una base de datos que almacena información de forma segura.",
      ],
    },
    {
      id: 188,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "¿Qué es la biometría?",
      correct_answer: "Una tecnología para autenticar la identidad.",
      incorrect_answers: [
        "Un método de pago digital.",
        "Un sistema que permite realizar pagos en entornos seguros.",
        "Un tipo de realidad aumentada.",
      ],
    },
    {
      id: 189,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "La mayor velocidad en la transmisión de datos del 5G permite:",
      correct_answer:
        "Incrementar la capacidad de descarga y carga de archivos.",
      incorrect_answers: [
        "Evitar el blanqueo de dinero.",
        "Mejorar la privacidad de los usuarios.",
        "Mejorar la seguridad biométrica.",
      ],
    },
    {
      id: 190,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "Alexa, Siri y Google Assistant son:",
      correct_answer: "Asistentes de voz.",
      incorrect_answers: [
        "Sistemas de blockchain.",
        "Sistemas de seguridad inteligentes.",
        "Electrodomésticos inteligentes.",
      ],
    },
    {
      id: 191,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "¿Qué son los sistemas basados en la nube?",
      correct_answer:
        "Plataformas que permiten acceder y gestionar datos a través de Internet.",
      incorrect_answers: [
        "Software instalado exclusivamente en servidores locales.",
        "Servidores que solo operan en redes privadas.",
        "Dispositivos electrónicos que funcionan sin conexión a Internet.",
      ],
    },
    {
      id: 192,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "Es una función principal del almacenamiento en la nube:",
      correct_answer: "Guardar y acceder a archivos a través de Internet.",
      incorrect_answers: [
        "Realizar transacciones bancarias.",
        "Enviar mensajes de texto en dispositivos móviles.",
        "Realizar cálculos complejos a través de servidores locales.",
      ],
    },
    {
      id: 193,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "La implantación del cloud computing:",
      correct_answer:
        "Puede requerir la formación y capacitación de los empleados de la empresa.",
      incorrect_answers: [
        "Es un proceso sencillo y sin desafíos.",
        "No implica riesgos de seguridad.",
        "No es necesario realizar cambios en las infraestructuras de la empresa.",
      ],
    },
    {
      id: 194,
      category: "Digitalizacion",
      difficulty: "hard",
      question:
        "La principal función del servidor central en el cloud computing es:",
      correct_answer:
        "Gestionar toda la comunicación entre los dispositivos clientes.",
      incorrect_answers: [
        "Definir políticas internas de seguridad en una empresa.",
        "Desarrollar sistemas que mejoran la comunicación entre diferentes empresas.",
        "Tomar decisiones estratégicas relacionadas con la ciberdelincuencia.",
      ],
    },
    {
      id: 195,
      category: "Digitalizacion",
      difficulty: "hard",
      question:
        "¿Cuál de los siguientes problemas NO se aborda con soluciones edge/fog/mist?",
      correct_answer: "Pérdida de datos.",
      incorrect_answers: [
        "Sobrecarga de servidores.",
        "Reducción de la latencia.",
        "Falta de ancho de banda.",
      ],
    },
    {
      id: 196,
      category: "Digitalizacion",
      difficulty: "hard",
      question:
        "¿Cuál es la función del fog computing en relación con el edge y la cloud?",
      correct_answer: "Proporcionar nodos de procesamiento intermedios.",
      incorrect_answers: [
        "Realizar todo el procesamiento de datos cerca de la fuente.",
        "Llevar el procesamiento más cerca de la fuente de datos.",
        "Descentralizar parte del procesamiento.",
      ],
    },
    {
      id: 197,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "La solución edge computing, en relación con la latencia:",
      correct_answer: "La reduce.",
      incorrect_answers: [
        "La incrementa.",
        "No tiene impacto.",
        "La descentraliza.",
      ],
    },
    {
      id: 198,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Las nubes privadas, en comparación con las públicas:",
      correct_answer: "Proporcionan más control y seguridad sobre los datos.",
      incorrect_answers: [
        "Ofrecen las mismas características pero a un precio mayor.",
        "Pertenecen a proveedores externos.",
        "Ofrecen servicios bajo demanda.",
      ],
    },
    {
      id: 199,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "Los contenedores en la nube son:",
      correct_answer: "Tecnología de virtualización en la nube.",
      incorrect_answers: [
        "Tecnología de almacenamiento.",
        "Tecnología de desarrollo de software.",
        "Tecnología de seguridad en la nube.",
      ],
    },
    {
      id: 200,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "La infraestructura como servicio (IaaS):",
      correct_answer:
        "Permite el acceso bajo demanda a servicios de infraestructura informática.",
      incorrect_answers: [
        "Permite alquilar un ordenador capaz de construir aplicaciones.",
        "Ofrece todos los recursos de hardware y software necesarios.",
        "Proporciona aplicaciones completas, desde la infraestructura hasta el mantenimiento.",
      ],
    },
    {
      id: 201,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "Se considera que una empresa es digital cuando:",
      correct_answer:
        "Emplea tecnologías digitales en aspectos clave de su operación.",
      incorrect_answers: [
        "Tiene perfiles en redes sociales.",
        "Vende productos en línea.",
        "Tiene una página web.",
      ],
    },
    {
      id: 202,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "NO es una herramienta de seguridad informática:",
      correct_answer: "CRM.",
      incorrect_answers: [
        "Sistemas de gestión de identidades.",
        "Antivirus.",
        "Firewall.",
      ],
    },
    {
      id: 203,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "¿En qué partes del proceso productivo intervienen las THD?",
      correct_answer: "En cualquier parte en el que tenga cabida.",
      incorrect_answers: [
        "En el desarrollo de plataformas digitales.",
        "Únicamente en el análisis del cliente.",
        "En la producción.",
      ],
    },
    {
      id: 204,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "Una consecuencia de implementar tecnologías avanzadas de manera coordinada es:",
      correct_answer: "Optimización del resultado empresarial.",
      incorrect_answers: [
        "Desarrollo de productos estándar.",
        "Reducción de la eficiencia empresarial.",
        "Aumento de los costes de producción.",
      ],
    },
    {
      id: 205,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "El principal objetivo del phishing es:",
      correct_answer: "Suplantar la identidad.",
      incorrect_answers: [
        "Proteger la privacidad en línea.",
        "Ofrecer publicidad personalizada.",
        "Crear redes sociales seguras.",
      ],
    },
    {
      id: 206,
      category: "Digitalizacion",
      difficulty: "hard",
      question:
        "El principal obstáculo para la implementación del Internet de los Pagos (IoP) es:",
      correct_answer: "La gran complejidad técnica que tiene su aplicación.",
      incorrect_answers: [
        "Apenas tiene ventajas.",
        "Produce rechazo a la mayor parte de los consumidores.",
        "Su vulnerabilidad y necesidad de medidas de seguridad.",
      ],
    },
    {
      id: 207,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "La dark web es:",
      correct_answer: "Una parte de Internet oculta a los motores de búsqueda.",
      incorrect_answers: [
        "Un directorio de empresas locales.",
        "Un navegador web.",
        "Un mercado legal online.",
      ],
    },
    {
      id: 208,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "¿Cómo afecta la ciberdelincuencia a las empresas?",
      correct_answer:
        "Puede afectar a través del fraude financiero, ciberespionaje, entre otros.",
      incorrect_answers: [
        "Únicamente afecta a particulares, no a empresas.",
        "Solo se roban datos a grandes empresas.",
        "Únicamente puede provocar fraude financiero.",
      ],
    },
    {
      id: 209,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "¿Qué amenazas aborda la ciberseguridad?",
      correct_answer: "Virus y malware.",
      incorrect_answers: [
        "Amenazas políticas.",
        "Publicidad personalizada.",
        "Amenazas climáticas.",
      ],
    },
    {
      id: 210,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "En relación con los hackers y ciberdelincuentes:",
      correct_answer:
        "Un hacker investiga un sistema, mientras que un ciberdelincuente comete delitos.",
      incorrect_answers: [
        "Un hacker es siempre un ciberdelincuente.",
        "Los ciberdelincuentes tienen mayores habilidades técnicas.",
        "Son lo mismo.",
      ],
    },
    {
      id: 211,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "¿Cuál es la principal diferencia entre datos e información?",
      correct_answer:
        "Los datos son hechos sin procesar, mientras que la información se ha interpretado y comunicado.",
      incorrect_answers: [
        "Los conceptos de datos e información son sinónimos.",
        "La información es la materia prima necesaria para producir datos.",
        "Los datos se convierten en información automáticamente.",
      ],
    },
    {
      id: 212,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Tener demasiados datos:",
      correct_answer:
        "Paraliza o entorpece al complicar la identificación de lo realmente importante.",
      incorrect_answers: [
        "Facilita la información de lo importante.",
        "Simplifica el enfoque.",
        "Ayuda en la toma de decisiones.",
      ],
    },
    {
      id: 213,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "¿Qué implica el ciclo de vida de los datos?",
      correct_answer:
        "Una serie de fases desde la creación hasta la eliminación o archivado de los datos.",
      incorrect_answers: [
        "Una secuencia lineal de eventos.",
        "Un proceso exclusivo de captura de datos.",
        "La recopilación de datos sin un orden concreto.",
      ],
    },
    {
      id: 214,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "El objetivo de la fase de «Uso operativo» en el ciclo de vida de datos es:",
      correct_answer:
        "Emplear datos procesados para apoyar la toma de decisiones.",
      incorrect_answers: [
        "Eliminar datos al final de su vida útil.",
        "Procesar y analizar datos para extraer información valiosa.",
        "Almacenar datos en la nube.",
      ],
    },
    {
      id: 215,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "¿En qué fase los datos se convierten en información?",
      correct_answer: "En la fase de «Procesamiento y visualización».",
      incorrect_answers: [
        "En la fase de «Captura».",
        "En la fase de «Almacenamiento».",
        "En la fase de «Uso operativo».",
      ],
    },
    {
      id: 216,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Podría definirse el big data como:",
      correct_answer:
        "Datos que son tan grandes, rápidos o complejos que son difíciles de procesar con métodos tradicionales.",
      incorrect_answers: [
        "Datos que son fáciles de procesar con métodos tradicionales.",
        "Datos pequeños, lentos o simples de procesar.",
        "Datos que no tienen relevancia para las empresas.",
      ],
    },
    {
      id: 217,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "La dimensión «volumen» en las 5 V del big data implica:",
      correct_answer:
        "El aumento constante en la cantidad de datos generados o procesados por una empresa.",
      incorrect_answers: [
        "La certeza de los datos para tomar decisiones correctas.",
        "La variedad de fuentes de datos.",
        "La rapidez del análisis de los datos.",
      ],
    },
    {
      id: 218,
      category: "Digitalizacion",
      difficulty: "easy",
      question:
        "Objetos inteligentes que se pueden llevar en el cuerpo (relojes, pulseras):",
      correct_answer: "Wearables.",
      incorrect_answers: ["Chatbot.", "KPI.", "Dashboard."],
    },
    {
      id: 219,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "Diferencia entre deep learning y machine learning:",
      correct_answer:
        "El deep learning es una forma avanzada de machine learning que utiliza redes neuronales artificiales.",
      incorrect_answers: [
        "El machine learning es más avanzado que el deep learning.",
        "El deep learning utiliza algoritmos y modelos estadísticos, y el machine learning redes neuronales.",
        "Ambos conceptos son sinónimos.",
      ],
    },
    {
      id: 220,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "¿Qué es ChatGPT?",
      correct_answer: "Un asistente virtual que te permite aprender.",
      incorrect_answers: [
        "Un lenguaje digital.",
        "Una herramienta de comunicación entre empresas.",
        "Un asistente que permite modificar el entorno.",
      ],
    },
    {
      id: 221,
      category: "Digitalizacion",
      difficulty: "hard",
      question:
        "¿Qué avance fue clave en los 2010 para que la IA pudiera realizar tareas complejas?",
      correct_answer: "Redes neuronales y deep learning.",
      incorrect_answers: [
        "Máquinas de soporte vectorial.",
        "ChatGPT.",
        "Algoritmos genéticos.",
      ],
    },
    {
      id: 222,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Los desarrolladores de IA se enfocan en:",
      correct_answer: "En una amplia gama de capacidades diversas.",
      incorrect_answers: [
        "Solo en la creatividad y la comprensión del lenguaje.",
        "Exclusivamente en habilidades sociales.",
        "Únicamente en la capacidad de razonamiento lógico.",
      ],
    },
    {
      id: 223,
      category: "Digitalizacion",
      difficulty: "hard",
      question:
        "¿Cuál es la definición de «inteligencia» según Howard Gardner?",
      correct_answer:
        "Capacidad mental de resolver problemas y/o elaborar productos valiosos para una cultura.",
      incorrect_answers: [
        "Aptitud general e innata.",
        "Conjunto de habilidades lógico-matemáticas.",
        "Medida específica de la capacidad verbal.",
      ],
    },
    {
      id: 224,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "¿Cómo se agrupa la inteligencia artificial?",
      correct_answer: "IA débil y fuerte.",
      incorrect_answers: [
        "IA estrecha y débil.",
        "IA única y fuerte.",
        "IA general y específica.",
      ],
    },
    {
      id: 225,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "El deep learning se considera eficaz porque:",
      correct_answer:
        "El diseño de la red neuronal artificial se inspira en el cerebro humano.",
      incorrect_answers: [
        "Emplea árboles de elección.",
        "Es una forma de trabajar mucho más barata.",
        "Crea una red neuronal artificial que nunca comete errores.",
      ],
    },
    {
      id: 226,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "¿Qué enfoques de enseñanza se utilizan para la IA?",
      correct_answer: "Aprendizaje supervisado, no supervisado y por refuerzo.",
      incorrect_answers: [
        "Aprendizaje por refuerzo y transferencia exclusivamente.",
        "Aprendizaje supervisado y no supervisado.",
        "Aprendizaje supervisado.",
      ],
    },
    {
      id: 227,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "¿Cómo aprende la máquina en el aprendizaje por refuerzo?",
      correct_answer: "A través de la experiencia y del ensayo-error.",
      incorrect_answers: [
        "Utilizando únicamente datos supervisados.",
        "Mostrándole miles de datos etiquetados.",
        "Buscando similitudes entre datos sin etiquetas.",
      ],
    },
    {
      id: 228,
      category: "Digitalizacion",
      difficulty: "hard",
      question:
        "El momento en el que la inteligencia artificial pueda programarse a sí misma se conoce como:",
      correct_answer: "Singularidad tecnológica.",
      incorrect_answers: [
        "Fusión hombre-máquina.",
        "Cíborg.",
        "Desarrollo exponencial.",
      ],
    },
    {
      id: 229,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "El principal objetivo de los cíborgs sería:",
      correct_answer:
        "Mejorar las capacidades del ser humano mediante la implantación de tecnología en su organismo.",
      incorrect_answers: [
        "Alimentar de conciencia humana a la tecnología.",
        "Limitar las capacidades naturales del ser humano.",
        "Eliminar cualquier elemento tecnológico del organismo humano.",
      ],
    },
    {
      id: 230,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "¿Cómo emplean las redes sociales la IA para sugerir contenido?",
      correct_answer: "Analizando datos de navegación.",
      incorrect_answers: [
        "Rastreando información contenida en los correos electrónicos.",
        "Evaluando el uso de tiempo de las redes sociales.",
        "A través del reconocimiento facial y la biometría.",
      ],
    },
    {
      id: 231,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "¿Qué beneficio se espera de unir IA y blockchain?",
      correct_answer:
        "Mejora en la transparencia y seguridad en la gestión de descuentos.",
      incorrect_answers: [
        "Reducción de la participación ciudadana.",
        "Automatización total en el proceso de toma de decisiones.",
        "Incremento en fraudes y riesgos de seguridad.",
      ],
    },
    {
      id: 232,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "La inteligencia artificial generativa es un sistema...",
      correct_answer: "Con capacidad de generar contenido nuevo y original.",
      incorrect_answers: [
        "Diseñado exclusivamente para el análisis de big data.",
        "Dedicado solo a la creación de asistentes virtuales.",
        "Que solo reconoce imágenes y voz.",
      ],
    },
    {
      id: 233,
      category: "Digitalizacion",
      difficulty: "hard",
      question: "¿En qué consiste la biometría comportamental?",
      correct_answer: "Evalúa la forma de caminar y la firma manuscrita.",
      incorrect_answers: [
        "Reconoce solo rasgos faciales.",
        "Analiza patrones genéticos.",
        "Toma medidas estandarizadas de seres vivos.",
      ],
    },
    {
      id: 234,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Es una ventaja potencial de la IA en la impresión 3D:",
      correct_answer: "Permite crear productos personalizados a bajo coste.",
      incorrect_answers: [
        "Reduce la producción automatizada.",
        "Su uso es gratuito.",
        "Aumento de riesgo de error.",
      ],
    },
    {
      id: 235,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Es un uso de la IA en la nube:",
      correct_answer: "Facilitar la búsqueda y organización de información.",
      incorrect_answers: [
        "Producir contenido nuevo y original.",
        "Controlar dispositivos electrónicos en el hogar.",
        "Simular entornos profesionales para estudiantes.",
      ],
    },
    {
      id: 236,
      category: "Digitalizacion",
      difficulty: "easy",
      question:
        "Término para describir la rápida circulación de información por Internet:",
      correct_answer: "Viralidad.",
      incorrect_answers: [
        "Inteligencia artificial generativa.",
        "Inteligencia emocional.",
        "Deep learning.",
      ],
    },
    {
      id: 237,
      category: "Digitalizacion",
      difficulty: "easy",
      question: "La aplicación de la IA en la robótica aún NO permite:",
      correct_answer: "Que sientan emociones propias.",
      incorrect_answers: [
        "Que puedan aprender de la experiencia.",
        "Que los robots se encarguen de tareas monótonas y repetitivas.",
        "Que procesen y analicen grandes cantidades de datos.",
      ],
    },
    {
      id: 238,
      category: "Digitalizacion",
      difficulty: "medium",
      question: "Una de las principales críticas a la IA artística es:",
      correct_answer:
        "Permite copiar y emplear gratuitamente contenidos ya creados por otros autores.",
      incorrect_answers: [
        "Permite conocer los gustos de la población para crear contenidos adaptados.",
        "Permite la automatización de tareas repetitivas.",
        "Permite crear nuevas expresiones artísticas con la combinación de otras tecnologías.",
      ],
    },
    {
      id: 239,
      category: "Digitalizacion",
      difficulty: "medium",
      question:
        "La IA puede contribuir a la mejora de la motivación de los empleados:",
      correct_answer:
        "Analizando encuestas de satisfacción y proponiendo mejoras.",
      incorrect_answers: [
        "Ignorando conflictos internos.",
        "Reduciendo los tiempos de evaluación en los procesos de selección de personal.",
        "Cuantificando el número de conflictos.",
      ],
    },

    // ==========================================
    // CATEGORÍA: INGLÉS TÉCNICO Y GRAMÁTICA (90+ Preguntas)
    // ==========================================

    // --- BLOQUE 1: Present Tenses & Basic Work ---
    {
      id: 240,
      category: "Ingles",
      difficulty: "easy",
      question: "Where does she usually ( … ) during the week?",
      correct_answer: "work",
      incorrect_answers: ["works", "working", "worked"],
    },
    {
      id: 241,
      category: "Ingles",
      difficulty: "easy",
      question: "Right now, he (…) an important meeting with the clients.",
      correct_answer: "is attending",
      incorrect_answers: ["attend", "attended", "attends"],
    },
    {
      id: 242,
      category: "Ingles",
      difficulty: "medium",
      question: "She decided (…) a course to enhance her skills.",
      correct_answer: "to take",
      incorrect_answers: ["takes", "taken", "taking"],
    },
    {
      id: 243,
      category: "Ingles",
      difficulty: "easy",
      question: "What is the (…) for submitting the project report?",
      correct_answer: "deadline",
      incorrect_answers: ["vacations", "deadlines", "vacation"],
    },
    {
      id: 244,
      category: "Ingles",
      difficulty: "easy",
      question: "He usually earns a good (…) for his hard work.",
      correct_answer: "salary",
      incorrect_answers: ["promotion", "salaries", "promotions"],
    },
    {
      id: 245,
      category: "Ingles",
      difficulty: "medium",
      question:
        "At this moment, the team (…) in the conference room to discuss the project.",
      correct_answer: "is meeting",
      incorrect_answers: ["meets", "meet", "meeting"],
    },
    {
      id: 246,
      category: "Ingles",
      difficulty: "medium",
      question: "They have plans (…) their business to new markets.",
      correct_answer: "to expand",
      incorrect_answers: ["expanding", "expand", "expands"],
    },
    {
      id: 247,
      category: "Ingles",
      difficulty: "easy",
      question: "His colleagues helped him prepare for the (…).",
      correct_answer: "interview",
      incorrect_answers: ["interviews", "workspaces", "workplace"],
    },
    {
      id: 248,
      category: "Ingles",
      difficulty: "medium",
      question: "The company provides its employees with paid (…).",
      correct_answer: "sick leave",
      incorrect_answers: ["vacations", "sick leaves", "vacation days"],
    },
    {
      id: 249,
      category: "Ingles",
      difficulty: "medium",
      question: "Right now, she (…) candidates for the new job position.",
      correct_answer: "is interviewing",
      incorrect_answers: ["interviewed", "interview", "interviews"],
    },

    {
      id: 250,
      category: "Ingles",
      difficulty: "hard",
      question: "He (…) (deliver) the project report before the deadline.",
      correct_answer: "has delivered",
      incorrect_answers: ["had delivered", "delivered", "was delivering"],
    },
    {
      id: 251,
      category: "Ingles",
      difficulty: "hard",
      question: "By the time we arrived, they (…) (finish) the task.",
      correct_answer: "had finished",
      incorrect_answers: ["has finished", "finished", "were finishing"],
    },
    {
      id: 252,
      category: "Ingles",
      difficulty: "medium",
      question: "I can’t believe I ( … ) (never/visit) that museum before.",
      correct_answer: "had never visited",
      incorrect_answers: [
        "have never visited",
        "never visited",
        "was never visiting",
      ],
    },
    {
      id: 253,
      category: "Ingles",
      difficulty: "hard",
      question:
        "In project management, a ( … ) is a significant achievement or event that helps track progress.",
      correct_answer: "milestone",
      incorrect_answers: ["budget", "risk", "timeline"],
    },
    {
      id: 254,
      category: "Ingles",
      difficulty: "medium",
      question:
        "The project manager needed to clarify the project’s ( … ) to ensure everyone knew their roles.",
      correct_answer: "scope",
      incorrect_answers: ["brainstorm", "prioritize", "issue"],
    },
    {
      id: 255,
      category: "Ingles",
      difficulty: "medium",
      question:
        "It’s essential to identify and mitigate potential ( … ) that could affect the project’s success.",
      correct_answer: "risks",
      incorrect_answers: ["timelines", "budgets", "milestones"],
    },
    {
      id: 256,
      category: "Ingles",
      difficulty: "easy",
      question:
        "The team held a ( … ) session to generate creative solutions to a complex problem.",
      correct_answer: "brainstorm",
      incorrect_answers: ["scope", "milestone", "deliverable"],
    },
    {
      id: 257,
      category: "Ingles",
      difficulty: "easy",
      question: "They ( … ) the project yesterday.",
      correct_answer: "finished",
      incorrect_answers: ["have finished", "were finishing", "finish"],
    },
    {
      id: 258,
      category: "Ingles",
      difficulty: "medium",
      question: "She (…) on many projects (experience up to now).",
      correct_answer: "has worked",
      incorrect_answers: ["worked", "works", "was working"],
    },
    {
      id: 259,
      category: "Ingles",
      difficulty: "medium",
      question:
        "Before starting the project, we should ( … ) the tasks to determine which ones are most critical.",
      correct_answer: "prioritize",
      incorrect_answers: ["deliverable", "risk", "issue"],
    },
    {
      id: 260,
      category: "Ingles",
      difficulty: "medium",
      question:
        "Select the appropriate article: 'She bought ( … ) refund policy.'",
      correct_answer: "a",
      incorrect_answers: ["the", "an", "(no article)"],
    },
    {
      id: 261,
      category: "Ingles",
      difficulty: "medium",
      question:
        "Identify the correct form: 'The call center representative ( … ) the issue.'",
      correct_answer: "quickly solves",
      incorrect_answers: [
        "quick solve",
        "will solve quickly",
        "quickly solving",
      ],
    },
    {
      id: 262,
      category: "Ingles",
      difficulty: "medium",
      question: "The company implemented a ( … ) to reward loyal customers.",
      correct_answer: "loyalty program",
      incorrect_answers: ["assistance", "refund", "courtesy"],
    },
    {
      id: 263,
      category: "Ingles",
      difficulty: "hard",
      question:
        "Choose the grammatically correct sentence regarding response times.",
      correct_answer:
        "The response time of the customer service team is crucial.",
      incorrect_answers: [
        "A response time of a customer service team is crucial.",
        "The response times of a customer service team are crucial.",
        "The response time of a customer service team are crucial.",
      ],
    },
    {
      id: 264,
      category: "Ingles",
      difficulty: "hard",
      question: "Select the correct sentence regarding complaints.",
      correct_answer:
        "Companies should listen to complaints, even if it doesn't concern them directly.",
      incorrect_answers: [
        "Companies should listen to a complaints...",
        "Companies should listening to complaints...",
        "Companies should listens to complaints...",
      ],
    },
    {
      id: 265,
      category: "Ingles",
      difficulty: "medium",
      question:
        "The ( … ) provided by the customer service team greatly influences customer satisfaction.",
      correct_answer: "feedback",
      incorrect_answers: ["issue", "complaint", "courtesy"],
    },
    {
      id: 266,
      category: "Ingles",
      difficulty: "hard",
      question: "Choose the correct sentence regarding satisfaction.",
      correct_answer:
        "The satisfaction of resolving customers' problems is important.",
      incorrect_answers: [
        "The satisfaction of resolving customer problems is important.",
        "The satisfactions of resolving customer problems are important.",
        "The satisfaction of resolved customer problems is important.",
      ],
    },
    {
      id: 267,
      category: "Ingles",
      difficulty: "hard",
      question:
        "Employees ( … ) adhere to strict cybersecurity measures to protect data.",
      correct_answer: "must",
      incorrect_answers: ["mustn't", "could", "don't need"],
    },
    {
      id: 268,
      category: "Ingles",
      difficulty: "easy",
      question:
        "Now, the company ( … ) its products online and in physical stores.",
      correct_answer: "sells",
      incorrect_answers: ["will sell", "sold", "selling"],
    },
    {
      id: 269,
      category: "Ingles",
      difficulty: "medium",
      question:
        "What technology is commonly used for effective remote meetings?",
      correct_answer: "virtual meetings",
      incorrect_answers: ["freelancer", "cloud computing", "flexible hours"],
    },
    {
      id: 270,
      category: "Ingles",
      difficulty: "medium",
      question:
        "To enhance collaboration, teams should embrace ( … ) tools to work together.",
      correct_answer: "virtual meetings",
      incorrect_answers: ["mustn't", "don't need", "flexible hours"],
    },
    {
      id: 271,
      category: "Ingles",
      difficulty: "easy",
      question:
        "What is a common technology used for remote training sessions?",
      correct_answer: "Webinar",
      incorrect_answers: ["May", "Telecommuting", "Cloud computing"],
    },
    {
      id: 272,
      category: "Ingles",
      difficulty: "easy",
      question:
        "Embracing flexible hours means employees can't adjust their work schedules. True or False?",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      id: 273,
      category: "Ingles",
      difficulty: "easy",
      question:
        "Employees may prioritise cybersecurity to protect sensitive data. True or False?",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      id: 274,
      category: "Ingles",
      difficulty: "hard",
      question: "Last week, she ( … ) (to work) in healthcare for three years.",
      correct_answer: "had worked",
      incorrect_answers: ["has worked", "working", "worked"],
    },
    {
      id: 275,
      category: "Ingles",
      difficulty: "hard",
      question:
        "In which sentence is the Past Continuous tense used correctly?",
      correct_answer: "The hospitality event was starting when I arrived.",
      incorrect_answers: [
        "The telecommunications meeting is starting when I arrive.",
        "The finance conference had starting when I arrived.",
        "The agriculture fair started when I arrive.",
      ],
    },
    {
      id: 276,
      category: "Ingles",
      difficulty: "hard",
      question:
        "Choose the correct sentence with both Past Perfect and Past Continuous.",
      correct_answer:
        "While I was working, I had received an urgent call from the energy company.",
      incorrect_answers: [
        "While I worked, I receive an urgent call...",
        "While I worked, I had receiving...",
        "While I working, I had received...",
      ],
    },
    {
      id: 277,
      category: "Ingles",
      difficulty: "medium",
      question:
        "Before joining the energy team, he (…) (to work) in retail for five years.",
      correct_answer: "had worked",
      incorrect_answers: ["has worked", "worked", "working"],
    },
    {
      id: 278,
      category: "Ingles",
      difficulty: "hard",
      question:
        "In which sentence is the Past Continuous tense used correctly?",
      correct_answer:
        "While she was working, she had realised a mistake in the hospitality project.",
      incorrect_answers: [
        "While she working, she had realised...",
        "While she work, she realises...",
        "While she worked, she had realising...",
      ],
    },
    {
      id: 279,
      category: "Ingles",
      difficulty: "medium",
      question: "Choose the correct sentence describing a past building event.",
      correct_answer: "The retail store had built a new branch last year.",
      incorrect_answers: [
        "The retail store built a new branch last year.",
        "The retail store has built a new branch last year.",
        "The retail store building a new branch last year.",
      ],
    },
    {
      id: 280,
      category: "Ingles",
      difficulty: "medium",
      question:
        "By the time we arrived, the telecommunications team ( … ) (to finish) the project.",
      correct_answer: "had finished",
      incorrect_answers: ["finished", "is finishing", "finishes"],
    },
    {
      id: 281,
      category: "Ingles",
      difficulty: "hard",
      question: "Indirect question: 'Can you explain the benefits...?'",
      correct_answer:
        "Would you mind explaining the benefits of our new procurement system?",
      incorrect_answers: [
        "Can you benefit the new procurement system?",
        "How much are the benefits...?",
        "What are the benefits...?",
      ],
    },
    {
      id: 282,
      category: "Ingles",
      difficulty: "hard",
      question: "Indirect question: 'Is the company planning to invest...?'",
      correct_answer:
        "Could you tell me if the company is planning to invest in venture capital for expansion?",
      incorrect_answers: [
        "How much is the company planning...?",
        "Is the planning company to invest...?",
        "What the company planning...?",
      ],
    },
    {
      id: 283,
      category: "Ingles",
      difficulty: "medium",
      question:
        "Superlative: 'Out of all options, this software is the ( … )'.",
      correct_answer: "user-friendliest",
      incorrect_answers: [
        "user-friendlyest",
        "more user-friendly",
        "most user-friendly",
      ],
    },
    {
      id: 284,
      category: "Ingles",
      difficulty: "hard",
      question: "Superlative: 'Maria is known as the ( … ) salesperson'.",
      correct_answer: "productiveest",
      incorrect_answers: ["most productive", "productiveer", "more productive"],
    },
    {
      id: 285,
      category: "Ingles",
      difficulty: "medium",
      question: "What economic system involves private ownership for profit?",
      correct_answer: "Capitalism",
      incorrect_answers: ["Globalization", "Arbitrage", "Stockholder"],
    },
    {
      id: 286,
      category: "Ingles",
      difficulty: "medium",
      question:
        "Which term refers to increased integration among countries on a global scale?",
      correct_answer: "Globalization",
      incorrect_answers: ["Capitalism", "Arbitrage", "Stockholder"],
    },
    {
      id: 287,
      category: "Ingles",
      difficulty: "hard",
      question:
        "Practice involving buying and selling in different markets to exploit price differences:",
      correct_answer: "Arbitrage",
      incorrect_answers: ["Globalization", "Capitalism", "Stockholder"],
    },
    {
      id: 288,
      category: "Ingles",
      difficulty: "medium",
      question: "An individual who owns shares in a company:",
      correct_answer: "Stockholder",
      incorrect_answers: ["Capitalism", "Globalization", "Arbitrage"],
    },
    {
      id: 289,
      category: "Ingles",
      difficulty: "medium",
      question:
        "If we invest in research, more people ( … ) discover new solutions. (1st Conditional)",
      correct_answer: "will",
      incorrect_answers: ["would", "can", "should"],
    },
    {
      id: 290,
      category: "Ingles",
      difficulty: "hard",
      question:
        "If we challenged the status quo, we ( … ) break new ground. (2nd Conditional)",
      correct_answer: "would",
      incorrect_answers: ["could", "can", "must"],
    },
    {
      id: 291,
      category: "Ingles",
      difficulty: "medium",
      question:
        "If the government encourages entrepreneurship, more businesses ( … ) start.",
      correct_answer: "would",
      incorrect_answers: ["can", "should", "will"],
    },
    {
      id: 292,
      category: "Ingles",
      difficulty: "medium",
      question:
        "If we collaborate with different disciplines, we ( … ) come up with creative solutions.",
      correct_answer: "will",
      incorrect_answers: ["can", "should", "could"],
    },
    {
      id: 293,
      category: "Ingles",
      difficulty: "medium",
      question:
        "If we developed new technologies, we ( … ) reduce our environmental impact.",
      correct_answer: "should",
      incorrect_answers: ["must", "can", "would"],
    },
    {
      id: 294,
      category: "Ingles",
      difficulty: "hard",
      question:
        "The company is using ( … ) innovation to quickly develop new products.",
      correct_answer: "dynamic",
      incorrect_answers: ["reliable", "fast", "agile"],
    },
    {
      id: 295,
      category: "Ingles",
      difficulty: "hard",
      question:
        "The team is working on a ( … ) innovation that will transform the way people interact.",
      correct_answer: "groundbreaking",
      incorrect_answers: ["innovative", "disruptive", "established"],
    },
    {
      id: 296,
      category: "Ingles",
      difficulty: "medium",
      question: "The company is open to ( … ) by collaborating with others.",
      correct_answer: "collaborative",
      incorrect_answers: ["innovation", "individualistic", "exclusive"],
    },
    {
      id: 297,
      category: "Ingles",
      difficulty: "medium",
      question: "Using ( … ) design to ensure products meet customer needs.",
      correct_answer: "personalised",
      incorrect_answers: ["standardised", "user-centred", "generic"],
    },
    {
      id: 298,
      category: "Ingles",
      difficulty: "medium",
      question:
        "The company is creating a ( … ) of the new product to test it.",
      correct_answer: "imitation",
      incorrect_answers: ["replica", "prototype", "blueprint"],
    },
    {
      id: 299,
      category: "Ingles",
      difficulty: "easy",
      question: "The door ( … ) I was trying to open was locked.",
      correct_answer: "which",
      incorrect_answers: ["whose", "who", "where"],
    },
    {
      id: 300,
      category: "Ingles",
      difficulty: "easy",
      question: "The police officer ( … ) arrested the suspect was praised.",
      correct_answer: "who",
      incorrect_answers: ["where", "which", "whose"],
    },
    {
      id: 301,
      category: "Ingles",
      difficulty: "easy",
      question:
        "The computer ( … ) was stolen contained confidential information.",
      correct_answer: "whose",
      incorrect_answers: ["which", "who", "where"],
    },
    {
      id: 302,
      category: "Ingles",
      difficulty: "hard",
      question: "Reported Speech: The guard said: 'I saw a suspicious person'.",
      correct_answer:
        "The security guard reported that he had seen a suspicious person entering the building.",
      incorrect_answers: [
        "The security guard warned that a suspicious person was entering...",
        "The security guard said that he had been robbed...",
        "The security guard asked if...",
      ],
    },
    {
      id: 303,
      category: "Ingles",
      difficulty: "hard",
      question:
        "Reported Speech: The officer warned: 'Be careful, the area is not safe'.",
      correct_answer: "The police officer said that the area was not safe.",
      incorrect_answers: [
        "The police officer reported that the area was not safe.",
        "The police officer warned that he had seen...",
        "The police officer said that he had been robbed...",
      ],
    },
    {
      id: 304,
      category: "Ingles",
      difficulty: "medium",
      question:
        "( … ) is a technique to trick users into revealing confidential info.",
      correct_answer: "Social engineering",
      incorrect_answers: [
        "Intrusion prevention system",
        "Firewall",
        "Password policy",
      ],
    },
    {
      id: 305,
      category: "Ingles",
      difficulty: "medium",
      question: "( … ) is the process of scrambling data so it cannot be read.",
      correct_answer: "Authentication",
      incorrect_answers: [
        "Authorisation",
        "Intrusion detection system",
        "Data encryption",
      ],
    },
    {
      id: 306,
      category: "Ingles",
      difficulty: "medium",
      question: "Network security device that filters traffic.",
      correct_answer: "Firewall",
      incorrect_answers: [
        "Data encryption",
        "Intrusion detection system",
        "Authentication",
      ],
    },
    {
      id: 307,
      category: "Ingles",
      difficulty: "easy",
      question: "Set of rules that govern the creation and use of passwords.",
      correct_answer: "Password policy",
      incorrect_answers: ["Data encryption", "Authorisation", "Authentication"],
    },
    {
      id: 308,
      category: "Ingles",
      difficulty: "medium",
      question: "The new policy ( … ) by the board of directors last week.",
      correct_answer: "was implemented",
      incorrect_answers: ["implementing", "implemented", "was implementing"],
    },
    {
      id: 309,
      category: "Ingles",
      difficulty: "hard",
      question: "Our team needs to ( … ) the issues before moving forward.",
      correct_answer: "iron out",
      incorrect_answers: ["follow up", "sign off", "break even"],
    },
    {
      id: 310,
      category: "Ingles",
      difficulty: "medium",
      question: "The report ( … ) by the marketing department next Monday.",
      correct_answer: "will be prepared",
      incorrect_answers: ["prepared", "is preparing", "prepares"],
    },
    {
      id: 311,
      category: "Ingles",
      difficulty: "hard",
      question:
        "The company decided to ( … ) the project due to budget constraints.",
      correct_answer: "hold off on",
      incorrect_answers: ["move forward", "jump on board", "wrap up"],
    },
    {
      id: 312,
      category: "Ingles",
      difficulty: "medium",
      question: "Important decisions ( … ) during yesterday’s meeting.",
      correct_answer: "were made",
      incorrect_answers: ["were making", "made", "make"],
    },
    {
      id: 313,
      category: "Ingles",
      difficulty: "medium",
      question: "Our team uses ( … ) to store and share documents securely.",
      correct_answer: "project management software",
      incorrect_answers: ["webinar", "instant messaging", "social media"],
    },
    {
      id: 314,
      category: "Ingles",
      difficulty: "medium",
      question:
        "The marketing department regularly hosts (…) to promote new products.",
      correct_answer: "video conferencing",
      incorrect_answers: ["collaboration platform", "intranet", "podcast"],
    },
    {
      id: 315,
      category: "Ingles",
      difficulty: "medium",
      question: "The CEO announced the new strategy through a ( … ) series.",
      correct_answer: "podcast",
      incorrect_answers: ["cloud storage", "webinar", "intranet"],
    },
    {
      id: 316,
      category: "Ingles",
      difficulty: "easy",
      question:
        "Employees can access company news and resources through the (…).",
      correct_answer: "intranet",
      incorrect_answers: ["collaboration platform", "social media", "email"],
    },
    {
      id: 317,
      category: "Ingles",
      difficulty: "medium",
      question: "We rely on ( … ) to conduct virtual meetings with clients.",
      correct_answer: "video conferencing",
      incorrect_answers: [
        "cloud storage",
        "project management software",
        "instant messaging",
      ],
    },
    {
      id: 318,
      category: "Ingles",
      difficulty: "easy",
      question: "The sun ... when I looked out of the window.",
      correct_answer: "was shining",
      incorrect_answers: ["shone", "shines", "is shining"],
    },
    {
      id: 319,
      category: "Ingles",
      difficulty: "medium",
      question: "What ... when you saw him at the dance?",
      correct_answer: "was he wearing",
      incorrect_answers: ["did he wear", "is he wearing", "wears he"],
    },
    {
      id: 320,
      category: "Ingles",
      difficulty: "medium",
      question: "They ... spaghetti for dinner last night.",
      correct_answer: "made",
      incorrect_answers: ["were making", "make", "are making"],
    },
    {
      id: 321,
      category: "Ingles",
      difficulty: "medium",
      question: "They ... for their friends an hour ago.",
      correct_answer: "were waiting",
      incorrect_answers: ["waited", "wait", "are waiting"],
    },
    {
      id: 322,
      category: "Ingles",
      difficulty: "medium",
      question: "While Sam ... his homework, I was playing the guitar.",
      correct_answer: "was doing",
      incorrect_answers: ["is doing", "did", "doing"],
    },
    {
      id: 323,
      category: "Ingles",
      difficulty: "easy",
      question: "We ... the house twice last week.",
      correct_answer: "cleaned",
      incorrect_answers: ["was cleaning", "cleaning", "clean"],
    },
    {
      id: 324,
      category: "Ingles",
      difficulty: "hard",
      question: "What were you doing at 8 p.m. yesterday?",
      correct_answer: "I was watching TV.",
      incorrect_answers: ["I watch TV.", "I watched TV.", "I am watching TV."],
    },
    {
      id: 325,
      category: "Ingles",
      difficulty: "medium",
      question: "He ... (sleep) when the doorbell ... (ring).",
      correct_answer: "was sleeping / rang",
      incorrect_answers: [
        "slept / rang",
        "was sleeping / ringing",
        "slept / was ringing",
      ],
    },
    // ==========================================
    // CATEGORÍA: ITINERARIO PERSONAL PARA LA EMPLEABILIDAD II
    // ==========================================

    // --- BLOQUE 1: Búsqueda de Empleo ---
    {
      id: 416,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Cuál es el primer paso recomendable al iniciar una búsqueda de empleo?",
      correct_answer:
        "Identificar tus objetivos laborales y habilidades clave.",
      incorrect_answers: [
        "Enviar currículums a todas las ofertas disponibles sin discriminar.",
        "Crear una cuenta en una red social personal.",
        "Esperar a que las empresas contacten contigo.",
      ],
    },
    {
      id: 417,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué herramienta es más eficaz para establecer contactos profesionales durante la búsqueda de empleo?",
      correct_answer: "LinkedIn.",
      incorrect_answers: ["Instagram.", "WhatsApp.", "TikTok."],
    },
    {
      id: 418,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cuál es una estrategia adecuada al escribir una carta de presentación?",
      correct_answer:
        "Personalizar la carta para cada puesto destacando habilidades relevantes.",
      incorrect_answers: [
        "Usar la misma carta para todas las aplicaciones.",
        "Redactar un texto breve sin detalles.",
        "Copiar el currículum en el cuerpo del correo.",
      ],
    },
    {
      id: 419,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Cómo puedes destacar en una entrevista de trabajo?",
      correct_answer:
        "Preparándote para responder preguntas comunes y practicando.",
      incorrect_answers: [
        "Hablando más que quien hace la entrevista para mostrar seguridad.",
        "Evitando hacer preguntas al final.",
        "Improvisando todas las respuestas para parecer natural.",
      ],
    },
    {
      id: 420,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cuál es la mejor forma de identificar oportunidades laborales ocultas?",
      correct_answer: "Utilizar tu red de contactos y el networking.",
      incorrect_answers: [
        "Buscar exclusivamente en bolsas de empleo en línea.",
        "Esperar a que las empresas publiquen vacantes en redes sociales.",
        "Enviar CVs a correos genéricos.",
      ],
    },
    {
      id: 421,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Cuál es un error común al hacer networking?",
      correct_answer: "No seguir el contacto después de una reunión inicial.",
      incorrect_answers: [
        "Establecer una relación basada en el interés mutuo.",
        "Ser respetuoso y auténtico.",
        "Escuchar activamente a la otra persona.",
      ],
    },
    {
      id: 422,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué es la marca personal?",
      correct_answer:
        "La percepción que otros tienen de ti basada en tus habilidades, valores y comunicación.",
      incorrect_answers: [
        "Una estrategia para vender productos físicos en redes sociales.",
        "El logotipo que usas en tus redes sociales y currículum.",
        "Tu nombre de usuario en internet.",
      ],
    },
    {
      id: 423,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Cómo puede ayudarte la marca personal en tu carrera?",
      correct_answer:
        "Generando reconocimiento, oportunidades laborales y conexiones.",
      incorrect_answers: [
        "Haciendo que seas el centro de atención sin importar tus habilidades.",
        "Evitando la necesidad de buscar empleo activamente.",
        "Garantizando un puesto sin pasar entrevistas.",
      ],
    },
    {
      id: 424,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué es la gamificación en la selección de personal?",
      correct_answer:
        "El uso de técnicas de juego y dinámicas interactivas para evaluar habilidades y conocimientos.",
      incorrect_answers: [
        "La aplicación de juegos para evaluar la personalidad de los candidatos.",
        "La utilización de juegos de vídeo para entrenar a los nuevos empleados.",
        "Jugar videojuegos en la oficina.",
      ],
    },
    {
      id: 425,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué se busca al usar inteligencia artificial (IA) en la selección de personal?",
      correct_answer:
        "Analizar grandes cantidades de currículums y preseleccionar candidatos de forma objetiva.",
      incorrect_answers: [
        "Sustituir completamente las entrevistas personales.",
        "Hacer que los reclutadores tomen todas las decisiones sin intervención humana.",
        "Eliminar el factor humano del proceso.",
      ],
    },
    {
      id: 426,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué es lo más importante que debe hacer un candidato antes de una entrevista de selección?",
      correct_answer: "Investigar sobre la empresa y el puesto al que postula.",
      incorrect_answers: [
        "Llegar puntual, pero no prepararse.",
        "Hablar mucho durante la entrevista para impresionar al entrevistador.",
        "Memorizar el CV palabra por palabra.",
      ],
    },
    {
      id: 427,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cómo se debe manejar una pregunta inesperada o difícil durante una entrevista?",
      correct_answer:
        "Tomándose un momento para pensar y dar una respuesta reflexiva.",
      incorrect_answers: [
        "Evitando responder y cambiando de tema.",
        "Respondiendo rápidamente sin pensar demasiado.",
        "Inventando una respuesta para salir del paso.",
      ],
    },
    {
      id: 428,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cuál es la mejor forma de hacer preguntas al final de una entrevista de selección?",
      correct_answer:
        "Preguntar sobre la cultura de la empresa y las oportunidades de desarrollo profesional.",
      incorrect_answers: [
        "Preguntar sobre el salario y los beneficios sin mostrar interés en otros aspectos.",
        "Preguntar solo si el puesto está disponible de inmediato.",
        "No hacer ninguna pregunta.",
      ],
    },
    {
      id: 429,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué documentos principales puedes crear con Europass?",
      correct_answer: "Curriculum vitae y carta de presentación.",
      incorrect_answers: [
        "Certificados y diplomas.",
        "Informes financieros.",
        "Títulos universitarios oficiales.",
      ],
    },
    {
      id: 430,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué herramienta de Europass te permite registrar tus competencias lingüísticas?",
      correct_answer: "El Pasaporte Europeo de Competencias.",
      incorrect_answers: [
        "La carta de presentación.",
        "La red EURES.",
        "El suplemento al título.",
      ],
    },

    // --- BLOQUE 2: Habilidades y Competencias ---
    {
      id: 431,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cuál es la principal diferencia entre las competencias personales y las competencias sociales?",
      correct_answer:
        "Las personales incluyen autoestima/autodisciplina; las sociales enfocan en comunicación/trabajo en equipo.",
      incorrect_answers: [
        "Las competencias personales están relacionadas con la interacción efectiva con otros.",
        "Las competencias personales son innatas, las sociales adquiridas.",
        "No hay diferencia.",
      ],
    },
    {
      id: 432,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Habilidad clave para la comunicación eficiente (escucha activa):",
      correct_answer:
        "Prestar atención al contenido verbal y no verbal, hacer preguntas y parafrasear lo dicho.",
      incorrect_answers: [
        "La capacidad de liderar conversaciones y controlar el flujo.",
        "Expresar opiniones de forma clara sin escuchar.",
        "Interrumpir para demostrar interés.",
      ],
    },
    {
      id: 433,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Cómo influye la inteligencia emocional en la toma de decisiones profesionales?",
      correct_answer:
        "Facilita la comprensión de emociones en la toma de decisiones, mejorando la autorregulación.",
      incorrect_answers: [
        "Ayuda a identificar emociones, pero sin impacto en las decisiones.",
        "Se enfoca exclusivamente en habilidades de liderazgo.",
        "Permite ignorar las emociones para ser más racional.",
      ],
    },
    {
      id: 434,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué aspecto del liderazgo es esencial para guiar y motivar a un grupo?",
      correct_answer:
        "Escuchar, apoyar y empoderar al equipo, además de comunicar eficazmente.",
      incorrect_answers: [
        "Tomar decisiones sin consultar a los demás.",
        "Delegar tareas y evitar conflictos dentro del grupo.",
        "Mantener una distancia jerárquica estricta.",
      ],
    },
    {
      id: 435,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Estrategia recomendada para mejorar la asertividad:",
      correct_answer:
        "Reflexionar sobre nuestras prioridades y objetivos antes de expresarlos.",
      incorrect_answers: [
        "Aprender a decir constantemente 'no'.",
        "Evitar la crítica constructiva.",
        "Aprender a decir 'sí' a todo para evitar conflictos.",
      ],
    },
    {
      id: 436,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Técnica de escucha activa para demostrar interés y comprensión:",
      correct_answer:
        "Parafrasear lo dicho por la otra persona con nuestras propias palabras.",
      incorrect_answers: [
        "Hacer preguntas cerradas.",
        "Ignorar el lenguaje no verbal.",
        "Asentir continuamente.",
      ],
    },
    {
      id: 437,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué estrategia es clave para desarrollar la empatía?",
      correct_answer:
        "Evitar cualquier tipo de juicio sobre el comportamiento de los demás.",
      incorrect_answers: [
        "Practicar una comunicación asertiva constante.",
        "Imponer nuestras prioridades.",
        "Dar soluciones rápidas a los problemas ajenos.",
      ],
    },
    {
      id: 438,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Técnica para reducir la ansiedad y mejorar la voz en una presentación oral:",
      correct_answer: "Técnicas de respiración y relajación.",
      incorrect_answers: [
        "Escucha activa.",
        "Uso de metáforas.",
        "Memorizar el discurso completo.",
      ],
    },
    {
      id: 439,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "Práctica que facilita la organización lógica en la comunicación escrita:",
      correct_answer: "Aplicar mapas mentales o diagramas.",
      incorrect_answers: [
        "Uso de metáforas y símiles.",
        "Redacción libre sin restricciones.",
        "Escribir sin esquema previo.",
      ],
    },
    {
      id: 440,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Clave para captar la atención del público al inicio de una presentación de negocio:",
      correct_answer: "Comenzar con un inicio sorprendente.",
      incorrect_answers: [
        "Especificar problemas técnicos.",
        "Desglosar el modelo de negocio inmediatamente.",
        "Leer el título de la diapositiva.",
      ],
    },
    {
      id: 441,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué equipo se caracteriza por miembros con habilidades en áreas diferentes?",
      correct_answer: "Equipos multidisciplinares.",
      incorrect_answers: [
        "Equipos informales.",
        "Equipos virtuales.",
        "Equipos homogéneos.",
      ],
    },
    {
      id: 442,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Fase de equipo donde disminuyen conflictos y se obtienen resultados:",
      correct_answer: "Normalización o desarrollo.",
      incorrect_answers: [
        "Formación.",
        "Finalización.",
        "Conflicto (Storming).",
      ],
    },

    // --- BLOQUE 3: Entorno y Modelos de Negocio ---
    {
      id: 443,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué variable NO pertenece al microentorno de una empresa?",
      correct_answer: "Los factores medioambientales.",
      incorrect_answers: [
        "Los productos sustitutivos.",
        "La competencia.",
        "Los clientes.",
      ],
    },
    {
      id: 444,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Factor del macroentorno sobre cambios en actitudes y estilos de vida:",
      correct_answer: "Factores sociales.",
      incorrect_answers: [
        "Factores políticos.",
        "Factores tecnológicos.",
        "Factores económicos.",
      ],
    },
    {
      id: 445,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "Rasgo positivo característico de las pymes:",
      correct_answer: "La flexibilidad.",
      incorrect_answers: [
        "Las limitaciones de financiación.",
        "La obsolescencia tecnológica.",
        "La burocracia.",
      ],
    },
    {
      id: 446,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Estrategia competitiva de diferenciación:",
      correct_answer:
        "Que los consumidores perciban como únicos nuestros productos o servicios.",
      incorrect_answers: [
        "Segmentar el mercado.",
        "Conseguir un precio inferior a la competencia.",
        "Vender productos genéricos.",
      ],
    },
    {
      id: 447,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué elemento NO forma parte del mapa de valor (Value Proposition Canvas)?",
      correct_answer: "Análisis de la competencia.",
      incorrect_answers: [
        "Productos y servicios.",
        "Creadores de alegrías.",
        "Aliviadores de frustraciones.",
      ],
    },
    {
      id: 448,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Propósito del 'encaje' en el lienzo de propuesta de valor:",
      correct_answer:
        "Evaluar si los productos cubren eficazmente las necesidades y deseos del cliente.",
      incorrect_answers: [
        "Validar el precio.",
        "Determinar la estrategia de marketing.",
        "Analizar a los proveedores.",
      ],
    },
    {
      id: 449,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "Objetivo del patrón de negocio de desagregación:",
      correct_answer:
        "Dividir actividades en compañías independientes para aumentar rentabilidad.",
      incorrect_answers: [
        "Agrupar todas las actividades en una sola unidad.",
        "Ofrecer productos gratuitos.",
        "Crear una franquicia.",
      ],
    },
    {
      id: 450,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "En el análisis DAFO, las amenazas son:",
      correct_answer:
        "Factores externos que pueden afectar negativamente al rendimiento.",
      incorrect_answers: [
        "Factores internos controlables.",
        "Características internas positivas.",
        "Oportunidades de crecimiento.",
      ],
    },
    {
      id: 451,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Diferencia entre misión y visión:",
      correct_answer:
        "La misión es el propósito/razón de ser; la visión describe metas futuras.",
      incorrect_answers: [
        "La misión describe valores y la visión objetivos financieros.",
        "La misión es financiera y la visión operativa.",
        "Son términos sinónimos.",
      ],
    },
    {
      id: 452,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Cómo contribuye la IA a la personalización del cliente?",
      correct_answer:
        "Analizando preferencias y comportamientos para ofrecer productos personalizados.",
      incorrect_answers: [
        "Mejorando la infraestructura tecnológica.",
        "Redefiniendo precios.",
        "Sustituyendo el soporte humano.",
      ],
    },
    {
      id: 453,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué aspecto del balance social evalúa la relación con el entorno y la comunidad?",
      correct_answer:
        "La transparencia y las prácticas éticas en las operaciones.",
      incorrect_answers: [
        "El rendimiento financiero.",
        "La gestión de recursos humanos.",
        "La eficiencia productiva.",
      ],
    },
    // ==========================================
    // PREGUNTAS ADICIONALES DE ARCHIVOS (Unidades 1-5)
    // ==========================================

    // --- UNIDAD 1: ACTIVIDADES DE REFUERZO (Extras) ---
    {
      id: 454,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué es la identidad digital?",
      correct_answer:
        "El conjunto de información y actividades que te representan en el entorno digital.",
      incorrect_answers: [
        "Un documento oficial que certifica tu identidad en internet.",
        "Una contraseña segura para acceder a portales de empleo.",
        "Tu nombre de usuario en redes sociales.",
      ],
    },
    {
      id: 455,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué significa ATS en el contexto de la búsqueda de empleo?",
      correct_answer:
        "Applicant Tracking System (Sistema de seguimiento de candidatos).",
      incorrect_answers: [
        "Asociación de Trabajadores Sindicados.",
        "Advanced Technical Skills (Habilidades técnicas avanzadas).",
        "Automatic Talent Search.",
      ],
    },
    {
      id: 456,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué técnica se recomienda para responder preguntas en entrevistas basadas en competencias?",
      correct_answer: "Técnica STAR.",
      incorrect_answers: ["Técnica ABC.", "Técnica 360°.", "Técnica DAFO."],
    },
    {
      id: 457,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué establece la Ley de Inteligencia Artificial (Reglamento UE 2024/1689)?",
      correct_answer:
        "Normas para asegurar que la inteligencia artificial sea segura en Europa.",
      incorrect_answers: [
        "La prohibición total del uso de IA en procesos de selección.",
        "La obligación de usar IA en todas las empresas europeas.",
        "Un impuesto especial para robots.",
      ],
    },

    // --- UNIDAD 2: ACTIVIDADES DE REFUERZO (Extras) ---
    {
      id: 458,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cuál de los siguientes NO es un pilar fundamental de la industria 4.0?",
      correct_answer: "Comercio tradicional.",
      incorrect_answers: ["Internet de las cosas.", "Big data.", "Blockchain."],
    },
    {
      id: 459,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué tecnología permite crear un registro digital inmutable sin consenso de todos?",
      correct_answer: "Blockchain.",
      incorrect_answers: ["Big data.", "Realidad virtual.", "Cloud computing."],
    },
    {
      id: 460,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué técnica de gestión del tiempo divide el trabajo en bloques de 25 minutos?",
      correct_answer: "Técnica Pomodoro.",
      incorrect_answers: [
        "Matriz de Eisenhower.",
        "Time blocking.",
        "Regla de los 2 minutos.",
      ],
    },
    {
      id: 461,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué metodología de trabajo en equipo se basa en las 5 ces?",
      correct_answer:
        "Las 5 ces (comunicación, coordinación, complementariedad, confianza, compromiso).",
      incorrect_answers: ["Scrum.", "Lean project management.", "Agile."],
    },
    {
      id: 462,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "En la comunicación no verbal, ¿qué porcentaje del mensaje proviene de las palabras según Mehrabian?",
      correct_answer: "7%.",
      incorrect_answers: ["50%.", "25%.", "93%."],
    },
    {
      id: 463,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué técnica consiste en presentar una idea de negocio en 60-90 segundos?",
      correct_answer: "Elevator pitch.",
      incorrect_answers: [
        "Storytelling.",
        "Diagrama de Gantt.",
        "Design Thinking.",
      ],
    },
    {
      id: 464,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Qué herramienta de gestión coloca actividades en el eje vertical y el tiempo en el horizontal?",
      correct_answer: "Diagrama de Gantt.",
      incorrect_answers: [
        "Método del camino crítico.",
        "Técnica PERT.",
        "Matriz de prioridades.",
      ],
    },

    // --- UNIDAD 3: EVALUACIÓN Y ACTIVIDADES (Emprendimiento) ---
    {
      id: 465,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cuál es la principal diferencia entre un emprendedor y un empresario?",
      correct_answer:
        "El emprendedor busca nuevas oportunidades y asume riesgos; el empresario optimiza la rentabilidad de un negocio existente.",
      incorrect_answers: [
        "El emprendedor gestiona negocios establecidos; el empresario busca innovar.",
        "El empresario es más innovador que el emprendedor.",
        "No hay diferencia, son sinónimos.",
      ],
    },
    {
      id: 466,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué cualidad es fundamental para enfrentar adversidades en el emprendimiento?",
      correct_answer: "La resiliencia.",
      incorrect_answers: [
        "La empatía.",
        "La eficiencia operativa.",
        "La capacidad financiera.",
      ],
    },
    {
      id: 467,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué estrategia ayuda a mejorar la autoestima emprendedora?",
      correct_answer:
        "Identificar pensamientos negativos e inseguridades y transformarlos en oportunidades.",
      incorrect_answers: [
        "Compararse constantemente con otros.",
        "Evitar la autoobservación.",
        "Ignorar las críticas.",
      ],
    },
    {
      id: 468,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "¿Qué analiza el bloque 'quién eres y qué tienes' del Personal Model Canvas?",
      correct_answer:
        "Tus intereses, habilidades, competencias específicas y rasgos de personalidad.",
      incorrect_answers: [
        "Las personas que te ayudarán.",
        "Las actividades clave a realizar.",
        "Los costes de tu actividad.",
      ],
    },
    {
      id: 469,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué beneficio clave aportan los intraemprendedores?",
      correct_answer:
        "Generan nuevas ideas que incrementan el negocio y la rentabilidad desde dentro.",
      incorrect_answers: [
        "Mejoran la eficiencia administrativa únicamente.",
        "Reducen los costes operativos recortando personal.",
        "Mantienen el statu quo de la empresa.",
      ],
    },
    {
      id: 470,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Fase del proceso creativo donde las ideas reposan y trabaja el subconsciente:",
      correct_answer: "Incubación.",
      incorrect_answers: ["Preparación.", "Ejecución.", "Verificación."],
    },
    {
      id: 471,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿En qué consiste la técnica SCAMPER?",
      correct_answer:
        "Modificar productos usando: Sustituir, Combinar, Adaptar, Modificar, Proponer, Eliminar, Reorganizar.",
      incorrect_answers: [
        "Crear ideas desde cero sin base previa.",
        "Analizar la competencia exhaustivamente.",
        "Generar un plan financiero.",
      ],
    },
    {
      id: 472,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué es la innovación de producto?",
      correct_answer:
        "La creación de un nuevo producto o añadir nuevas características a uno existente.",
      incorrect_answers: [
        "La disminución de costes de producción.",
        "La implantación de nuevos canales de venta.",
        "El cambio en la gestión de recursos humanos.",
      ],
    },
    {
      id: 473,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué es el autoempleo?",
      correct_answer:
        "Actividad profesional generada por una persona por su cuenta y riesgo.",
      incorrect_answers: [
        "Trabajo por cuenta ajena en una empresa.",
        "Ser funcionario del estado.",
        "Trabajar en una ONG.",
      ],
    },
    {
      id: 474,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Metodología ágil que utiliza tarjetas visuales para gestionar tareas:",
      correct_answer: "Kanban.",
      incorrect_answers: ["Scrum.", "Crystal.", "Waterfall."],
    },
    {
      id: 475,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question:
        "Rol de innovación que analiza la conducta humana y el entorno:",
      correct_answer: "El antropólogo.",
      incorrect_answers: [
        "El experimentador.",
        "El interpolinizador.",
        "El saltador de obstáculos.",
      ],
    },
    {
      id: 476,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Diferencia principal entre Emprendimiento Social y RSE:",
      correct_answer:
        "En el emprendimiento social, mejorar la sociedad es la base; en RSE es secundario.",
      incorrect_answers: [
        "El emprendimiento social no busca dinero.",
        "La RSE tiene mayor impacto social.",
        "Son exactamente lo mismo.",
      ],
    },
    {
      id: 477,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Técnica de Design Thinking para identificar necesidades emocionales del cliente:",
      correct_answer: "Customer journey.",
      incorrect_answers: [
        "Matriz DAFO.",
        "Diagrama de Porter.",
        "Cinco fuerzas.",
      ],
    },
    {
      id: 478,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué es el entorno de la empresa?",
      correct_answer:
        "El conjunto de factores externos que influyen en su estrategia.",
      incorrect_answers: [
        "Los factores internos de funcionamiento.",
        "Solo los factores económicos.",
        "La ubicación física de la oficina.",
      ],
    },
    {
      id: 479,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué es el modelo Canvas?",
      correct_answer: "Un instrumento para diseñar modelos de negocio.",
      incorrect_answers: [
        "Una herramienta para analizar a la competencia.",
        "Un método de cálculo de costes.",
        "Un tipo de organigrama.",
      ],
    },
    {
      id: 480,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué significa el acrónimo DAFO?",
      correct_answer: "Debilidades, Amenazas, Fortalezas y Oportunidades.",
      incorrect_answers: [
        "Desarrollo, Análisis, Formación y Organización.",
        "Dirección, Administración, Finanzas y Operaciones.",
        "Dinero, Ahorro, Financiación y Objetivos.",
      ],
    },
    {
      id: 481,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué es la cultura empresarial?",
      correct_answer:
        "El conjunto de rasgos que identifican la forma de ser de una empresa.",
      incorrect_answers: [
        "El conjunto de normas legales.",
        "El nivel educativo de los trabajadores.",
        "El logotipo y los colores de la marca.",
      ],
    },
    {
      id: 482,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué caracteriza al mundo BANI?",
      correct_answer:
        "Fragilidad, ansiedad, no linealidad e incomprensibilidad.",
      incorrect_answers: [
        "Estabilidad, certidumbre y previsibilidad.",
        "Volatilidad, incertidumbre, complejidad y ambigüedad (VUCA).",
        "Bienestar, armonía, naturaleza e innovación.",
      ],
    },
    {
      id: 483,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Patrón de negocio que crea valor mediante la interacción de grupos diferentes:",
      correct_answer: "Plataformas multilaterales.",
      incorrect_answers: [
        "Patrón de desagregación.",
        "Patrón de cola larga (long tail).",
        "Modelo Freemium.",
      ],
    },
    {
      id: 484,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué aplicación de IA optimiza procesos productivos?",
      correct_answer: "La automatización de procesos operativos.",
      incorrect_answers: [
        "La creación de contenidos personalizados.",
        "El análisis de sentimientos en redes.",
        "Los chatbots de atención al cliente.",
      ],
    },
    {
      id: 485,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "¿Cuál es el interés principal de los propietarios del capital?",
      correct_answer:
        "El rendimiento económico y valor de mercado de la empresa.",
      incorrect_answers: [
        "El desarrollo profesional de los empleados.",
        "El cumplimiento de la legislación.",
        "La satisfacción de los proveedores.",
      ],
    },
    {
      id: 486,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué pretende la empresa con el estudio de mercado?",
      correct_answer:
        "Determinar la aceptación o rechazo del mercado ante un producto.",
      incorrect_answers: [
        "Adquirir factores de producción.",
        "Analizar precios de la competencia únicamente.",
        "Contratar nuevo personal.",
      ],
    },
    {
      id: 487,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "Característica principal del prescriptor:",
      correct_answer: "Recomienda la compra de un producto.",
      incorrect_answers: [
        "Fabrica el producto.",
        "Distribuye el producto.",
        "Consume el producto final.",
      ],
    },
    {
      id: 488,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "En la estrategia del océano azul, los 'océanos rojos' son:",
      correct_answer:
        "Mercados con gran competencia en diferenciación o costes.",
      incorrect_answers: [
        "Mercados sin competencia.",
        "Mercados nuevos e innovadores.",
        "Mercados ilegales.",
      ],
    },
    {
      id: 489,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué grupo de interés se preocupa por los plazos de pago?",
      correct_answer: "Proveedores.",
      incorrect_answers: [
        "Empleados.",
        "Administraciones públicas.",
        "Clientes.",
      ],
    },
    {
      id: 490,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Objetivo del mapa de empatía en Design Thinking:",
      correct_answer:
        "Conocer y concretar a los clientes para diseñar el modelo de negocio.",
      incorrect_answers: [
        "Identificar a los competidores.",
        "Analizar tendencias macroeconómicas.",
        "Calcular costes de producción.",
      ],
    },
    {
      id: 491,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué aspecto considerar al elegir un envase?",
      correct_answer: "Tamaño, color, forma, materiales y coste.",
      incorrect_answers: [
        "Solo el diseño visual.",
        "Exclusivamente el coste.",
        "Solo la sostenibilidad.",
      ],
    },
    {
      id: 492,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "Propósito de la prueba 'imposter judo' en testeo de PMV:",
      correct_answer:
        "Aprovechar productos existentes para simular lanzamiento y obtener datos.",
      incorrect_answers: [
        "Crear una versión mejorada real.",
        "Realizar un test A/B.",
        "Falsificar datos de la competencia.",
      ],
    },
    {
      id: 493,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué es el mercado desde una óptica comercial?",
      correct_answer: "Conjunto de compradores y vendedores de un producto.",
      incorrect_answers: [
        "Lugar físico de intercambio.",
        "Conjunto de empresas similares.",
        "Edificio de la bolsa.",
      ],
    },
    {
      id: 494,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "Tipo de mercado con un solo oferente y muchos demandantes:",
      correct_answer: "Monopolio.",
      incorrect_answers: [
        "Oligopolio.",
        "Competencia perfecta.",
        "Monopsonio.",
      ],
    },
    {
      id: 495,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "easy",
      question: "¿Qué son las fuentes de información internas?",
      correct_answer: "Aquellas que provienen de la propia empresa.",
      incorrect_answers: [
        "Fuentes externas.",
        "Fuentes primarias.",
        "Fuentes secundarias.",
      ],
    },
    {
      id: 496,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "¿Qué es la cuota de mercado?",
      correct_answer:
        "Porcentaje de ventas de una empresa respecto al total del sector.",
      incorrect_answers: [
        "Número de unidades físicas vendidas.",
        "Beneficio neto de la empresa.",
        "Valor de las acciones en bolsa.",
      ],
    },
    {
      id: 497,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Estrategia de segmentación para empresas con pocos recursos:",
      correct_answer: "Concentrada.",
      incorrect_answers: ["Diferenciada.", "Indiferenciada.", "Global."],
    },
    {
      id: 498,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question: "Diferencia principal entre SEO y SEM:",
      correct_answer:
        "El SEO es gratuito/orgánico, el SEM es publicidad pagada.",
      incorrect_answers: [
        "El SEO es para redes sociales, el SEM para buscadores.",
        "El SEO es para móviles, el SEM para PC.",
        "No hay diferencia.",
      ],
    },
    {
      id: 499,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "medium",
      question:
        "Método de fijación de precios basado en la percepción del valor:",
      correct_answer: "Basado en el comprador.",
      incorrect_answers: [
        "Basado en los costes.",
        "Basado en la competencia.",
        "Basado en el margen comercial.",
      ],
    },

    // ==========================================
    // CATEGORÍA: PYTHON
    // ==========================================
    {
      id: 500,
      category: "Python",
      difficulty: "easy",
      question:
        "¿Qué estructura de control se usa para repetir un bloque de código mientras se cumple una condición?",
      correct_answer: "while",
      incorrect_answers: ["if", "for", "switch"],
    },
    {
      id: 501,
      category: "Python",
      difficulty: "easy",
      question: "¿Cuál es el operador de asignación en Python?",
      correct_answer: "=",
      incorrect_answers: ["==", ":=", "=>"],
    },
    {
      id: 502,
      category: "Python",
      difficulty: "medium",
      question: "¿Qué se necesita para evitar un bucle infinito en un while?",
      correct_answer: "Que la condición cambie dentro del bucle.",
      incorrect_answers: [
        "Que la condición sea siempre verdadera.",
        "No usar break.",
        "Incluir un else.",
      ],
    },
    {
      id: 503,
      category: "Python",
      difficulty: "easy",
      question: "¿Qué método agrega un elemento al final de una lista?",
      correct_answer: "append()",
      incorrect_answers: ["insert()", "add()", "push()"],
    },
    {
      id: 504,
      category: "Python",
      difficulty: "easy",
      question:
        "¿Qué estructura permite recorrer los elementos de una lista uno por uno?",
      correct_answer: "for",
      incorrect_answers: ["if", "while", "switch"],
    },
    {
      id: 505,
      category: "Python",
      difficulty: "easy",
      question:
        "¿Cuál de las siguientes estructuras permite almacenar pares clave-valor?",
      correct_answer: "dict",
      incorrect_answers: ["list", "set", "tuple"],
    },
    {
      id: 506,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Cuál de los siguientes no es un tipo de estructura de control en Python?",
      correct_answer: "select",
      incorrect_answers: ["if", "for", "while"],
    },
    {
      id: 507,
      category: "Python",
      difficulty: "medium",
      question: "¿Cuál es el resultado de 3 // 2 en Python?",
      correct_answer: "1",
      incorrect_answers: ["1.5", "2", "0"],
    },
    {
      id: 508,
      category: "Python",
      difficulty: "easy",
      question: "¿Qué símbolo se usa para comentarios en Python?",
      correct_answer: "#",
      incorrect_answers: ["//", "<!--", "%"],
    },
    {
      id: 509,
      category: "Python",
      difficulty: "easy",
      question:
        "¿Qué palabra se utiliza para terminar un bucle antes de que finalice normalmente?",
      correct_answer: "break",
      incorrect_answers: ["stop", "exit", "return"],
    },
    {
      id: 510,
      category: "Python",
      difficulty: "easy",
      question: "Si lista = [1, 2, 3, 4], ¿qué devuelve lista[-1]?",
      correct_answer: "4",
      incorrect_answers: ["0", "1", "Error."],
    },
    {
      id: 511,
      category: "Python",
      difficulty: "medium",
      question: "¿Qué función se utiliza para mostrar texto en la consola?",
      correct_answer: "print()",
      incorrect_answers: ["input()", "scan()", "echo()"],
    },
    {
      id: 512,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Qué tipo de estructura permite almacenar múltiples valores en una sola variable y es inmutable?",
      correct_answer: "tuple",
      incorrect_answers: ["list", "dict", "set"],
    },
    {
      id: 513,
      category: "Python",
      difficulty: "easy",
      question: "¿Cuál es la salida de print(len('Python'))?",
      correct_answer: "6",
      incorrect_answers: ["5", "7", "Error"],
    },
    {
      id: 514,
      category: "Python",
      difficulty: "easy",
      question: "¿Cuál es la extensión típica de los archivos en Python?",
      correct_answer: ".py",
      incorrect_answers: [".txt", ".exe", ".docx"],
    },
    {
      id: 515,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Qué ocurre si se definen parámetros por defecto antes de parámetros sin valor en una función?",
      correct_answer: "Provoca un error.",
      incorrect_answers: [
        "La función se ejecuta igual.",
        "Se ignoran los parámetros por defecto.",
        "Python los reorganiza automáticamente.",
      ],
    },
    {
      id: 516,
      category: "Python",
      difficulty: "easy",
      question:
        "¿Cuál es el nombre que recibe la convención de nombrado como nombre_funcion en Python?",
      correct_answer: "snake_case",
      incorrect_answers: ["camelCase", "PascalCase", "kebab-case"],
    },
    {
      id: 517,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Qué método permite acceder a métodos o constructores de la clase padre desde una subclase?",
      correct_answer: "super()",
      incorrect_answers: ["init()", "base()", "parent()"],
    },
    {
      id: 518,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Cómo se importa solo una función específica desde un módulo en Python?",
      correct_answer: "from modulo import funcion",
      incorrect_answers: [
        "import modulo.funcion",
        "include modulo:funcion",
        "use modulo.funcion",
      ],
    },
    {
      id: 519,
      category: "Python",
      difficulty: "easy",
      question:
        "¿Qué palabra clave se utiliza para definir una clase en Python?",
      correct_answer: "class",
      incorrect_answers: ["define", "struct", "object"],
    },
    {
      id: 520,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Qué tipo de atributo en una clase está precedido por dos guiones bajos (__)?",
      correct_answer: "Privado.",
      incorrect_answers: ["Público.", "Protegido.", "Estático."],
    },
    {
      id: 521,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Qué módulo del sistema se usa en Python para trabajar con fechas y horas?",
      correct_answer: "datetime",
      incorrect_answers: ["timeutils", "date", "calendar"],
    },
    {
      id: 522,
      category: "Python",
      difficulty: "hard",
      question:
        "¿Qué principio de la POO se aplica cuando diferentes clases tienen un mismo método con comportamientos distintos?",
      correct_answer: "Polimorfismo.",
      incorrect_answers: [
        "Encapsulamiento.",
        "Herencia múltiple.",
        "Inicialización.",
      ],
    },
    {
      id: 523,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Qué tipo de parámetro convierte los argumentos en una tupla dentro de una función?",
      correct_answer: "*args",
      incorrect_answers: ["**kwargs", "*named", "default"],
    },
    {
      id: 524,
      category: "Python",
      difficulty: "easy",
      question: "¿Cuál es el propósito del método __init__ en una clase?",
      correct_answer: "Inicializar objetos.",
      incorrect_answers: [
        "Validar atributos.",
        "Eliminar objetos.",
        "Ordenar métodos.",
      ],
    },
    {
      id: 525,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Cuál es la ventaja principal de usar modularidad en un programa?",
      correct_answer: "Mejora la organización y reutilización del código.",
      incorrect_answers: [
        "Disminuye la velocidad del código.",
        "Elimina la necesidad de comentarios.",
        "Permite usar solo variables globales.",
      ],
    }, // <--- AQUÍ FALTABA ESTA LLAVE Y ESTA COMA
    {
      id: 526,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Cuál es el principio de la POO que permite reutilizar atributos y métodos de una clase base?",
      correct_answer: "Herencia.",
      incorrect_answers: ["Polimorfismo.", "Encapsulamiento.", "Abstracción."],
    },
    {
      id: 527,
      category: "Python",
      difficulty: "easy",
      question:
        "¿Qué palabra reservada se utiliza en Python para definir una función?",
      correct_answer: "def",
      incorrect_answers: ["function", "define", "lambda"],
    },
    {
      id: 528,
      category: "Python",
      difficulty: "medium",
      question:
        "¿Cuál de las siguientes afirmaciones sobre las funciones lambda es correcta?",
      correct_answer: "Son funciones anónimas con cuerpo corto.",
      incorrect_answers: [
        "No pueden tener parámetros.",
        "Solo se usan en módulos externos.",
        "No retornan valores.",
      ],
    },
    {
      id: 529,
      category: "Python",
      difficulty: "medium",
      question: "¿Cómo se define un método estático en una clase de Python?",
      correct_answer: "@staticmethod",
      incorrect_answers: [
        "static function metodo():",
        "static def metodo(self):",
        "@staticmethod(self)",
      ],
    },
    {
      id: 530,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question:
        "¿Cuál es el primer paso en un proceso de empleabilidad eficiente?",
      correct_answer:
        "Conocerse a uno mismo (habilidades, intereses y objetivos)",
      incorrect_answers: [
        "Enviar currículums",
        "Hacer entrevistas",
        "Aceptar cualquier trabajo",
      ],
    },
    {
      id: 531,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question:
        "¿Qué documento resume la formación y experiencia profesional de una persona?",
      correct_answer: "Currículum vitae",
      incorrect_answers: [
        "Carta de presentación",
        "Contrato laboral",
        "Nómina",
      ],
    },
    {
      id: 532,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué significa adaptar el currículum a una oferta concreta?",
      correct_answer: "Destacar lo más relacionado con el puesto",
      incorrect_answers: [
        "Mentir sobre la experiencia",
        "Cambiar el diseño sin modificar el contenido",
        "Usar siempre el mismo modelo",
      ],
    },
    {
      id: 533,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question:
        "¿Qué herramienta digital es más útil para buscar empleo actualmente?",
      correct_answer: "Portales de empleo y LinkedIn",
      incorrect_answers: ["Facebook personal", "WhatsApp", "Juegos online"],
    },
    {
      id: 534,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Por qué es importante prepararse antes de una entrevista?",
      correct_answer: "Para responder con seguridad y coherencia",
      incorrect_answers: [
        "Para hablar más que el entrevistador",
        "Para improvisar mejor",
        "No es importante",
      ],
    },
    {
      id: 535,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Cuál de estas acciones mejora la empleabilidad?",
      correct_answer: "Aprender nuevas competencias",
      incorrect_answers: [
        "Rechazar la formación",
        "No aceptar cambios",
        "Trabajar siempre solo",
      ],
    },
    {
      id: 536,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué son las competencias transversales?",
      correct_answer:
        "Habilidades útiles en muchos trabajos (trabajo en equipo, comunicación…)",
      incorrect_answers: [
        "Conocimientos técnicos específicos",
        "Idiomas",
        "Títulos académicos",
      ],
    },
    {
      id: 537,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué actitud valoran más las empresas?",
      correct_answer: "Proactividad",
      incorrect_answers: ["Pasividad", "Falta de iniciativa", "Desinterés"],
    },
    {
      id: 538,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Para qué sirve la formación continua?",
      correct_answer: "Para adaptarse a los cambios del mercado laboral",
      incorrect_answers: [
        "Solo para estudiantes",
        "Para perder tiempo",
        "Para evitar trabajar",
      ],
    },
    {
      id: 539,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué es la marca personal?",
      correct_answer: "La imagen profesional que transmites",
      incorrect_answers: [
        "Un logotipo",
        "La forma de vestir",
        "Un perfil falso",
      ],
    },
    {
      id: 540,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué es emprender?",
      correct_answer: "Crear un proyecto propio asumiendo riesgos",
      incorrect_answers: [
        "Copiar ideas sin permiso",
        "Trabajar para otros",
        "No tener jefe",
      ],
    },
    {
      id: 541,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question:
        "¿Cuál es una característica común de las personas emprendedoras?",
      correct_answer: "Creatividad",
      incorrect_answers: [
        "Miedo al cambio",
        "Falta de iniciativa",
        "Pasividad",
      ],
    },
    {
      id: 542,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué documento explica cómo funcionará una empresa?",
      correct_answer: "Plan de empresa",
      incorrect_answers: ["Currículum", "Contrato laboral", "Nómina"],
    },
    {
      id: 543,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué significa que una empresa sea viable?",
      correct_answer: "Que pueda mantenerse económicamente",
      incorrect_answers: [
        "Que sea bonita",
        "Que tenga muchos empleados",
        "Que tenga redes sociales",
      ],
    },
    {
      id: 544,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué tipo de empresa pertenece a una sola persona?",
      correct_answer: "Autónomo/a",
      incorrect_answers: ["Sociedad anónima", "Cooperativa", "Multinacional"],
    },
    {
      id: 545,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué es el análisis del entorno?",
      correct_answer:
        "Estudiar factores externos e internos que influyen en la empresa",
      incorrect_answers: [
        "Mirar la decoración del local",
        "Analizar sólo a los trabajadores",
        "Revisar el horario",
      ],
    },
    {
      id: 546,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Cuál de estos es un factor externo?",
      correct_answer: "Situación económica",
      incorrect_answers: [
        "Motivación del personal",
        "Organización interna",
        "Horarios",
      ],
    },
    {
      id: 547,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué analiza el estudio de la competencia?",
      correct_answer: "Otras empresas que ofrecen lo mismo",
      incorrect_answers: [
        "Los precios del proveedor",
        "Los empleados",
        "El local",
      ],
    },
    {
      id: 548,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué es un cliente potencial?",
      correct_answer: "Una persona que podría comprar el producto",
      incorrect_answers: ["Un proveedor", "Un trabajador", "Un competidor"],
    },
    {
      id: 549,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Por qué es importante conocer el entorno antes de emprender?",
      correct_answer: "Para tomar mejores decisiones",
      incorrect_answers: [
        "Para copiar ideas",
        "Para gastar más dinero",
        "No es importante",
      ],
    },
    {
      id: 550,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué es un plan de marketing?",
      correct_answer:
        "Un conjunto de acciones para vender un producto o servicio",
      incorrect_answers: ["Un documento legal", "Un contrato", "Un currículum"],
    },
    {
      id: 551,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué significa la “P” de producto en el marketing mix?",
      correct_answer: "Lo que se ofrece al cliente",
      incorrect_answers: ["Precio", "Promoción", "Publicidad"],
    },
    {
      id: 552,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué objetivo principal tiene la promoción?",
      correct_answer: "Dar a conocer el producto o servicio",
      incorrect_answers: [
        "Subir precios",
        "Reducir calidad",
        "Cerrar la empresa",
      ],
    },
    {
      id: 553,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Qué canal es un ejemplo de marketing digital?",
      correct_answer: "Redes sociales",
      incorrect_answers: ["Cartel en la calle", "Buzoneo", "Radio antigua"],
    },
    {
      id: 554,
      category: "Itinerario Personal para la Empleabilidad II",
      difficulty: "hard",
      question: "¿Por qué es importante definir el público objetivo?",
      correct_answer: "Para dirigir mejor las acciones de marketing",
      incorrect_answers: [
        "Para vender a todo el mundo",
        "Para gastar más dinero",
        "No es necesario",
      ],
    },
    {
      id: 555,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué es el hoisting en JavaScript?",
      correct_answer:
        "El comportamiento por el cual las declaraciones se mueven al inicio de su contexto",
      incorrect_answers: [
        "La ejecución anticipada de funciones",
        "La conversión automática de tipos",
        "La eliminación de variables no usadas",
      ],
    },
    {
      id: 556,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué tipo de scope tiene una variable declarada con let?",
      correct_answer: "Ámbito de bloque",
      incorrect_answers: [
        "Ámbito global",
        "Ámbito de función",
        "Ámbito dinámico",
      ],
    },
    {
      id: 557,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué devuelve una función sin sentencia return?",
      correct_answer: "undefined",
      incorrect_answers: ["null", "false", "0"],
    },
    {
      id: 558,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué operador se utiliza para la propagación de elementos en arrays u objetos?",
      correct_answer: "El operador spread (...)",
      incorrect_answers: [
        "El operador rest (**)",
        "El operador concat (+)",
        "El operador assign (=)",
      ],
    },
    {
      id: 559,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método convierte un JSON en un objeto JavaScript?",
      correct_answer: "JSON.parse()",
      incorrect_answers: [
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.toObject()",
      ],
    },
    {
      id: 560,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método convierte un objeto JavaScript en una cadena JSON?",
      correct_answer: "JSON.stringify()",
      incorrect_answers: ["JSON.parse()", "JSON.encode()", "JSON.toString()"],
    },
    {
      id: 561,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué estructura se usa para manejar errores en JavaScript?",
      correct_answer: "try...catch",
      incorrect_answers: ["if...else", "throw...error", "errorHandle"],
    },
    {
      id: 562,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué palabra clave lanza manualmente una excepción?",
      correct_answer: "throw",
      incorrect_answers: ["error", "exception", "catch"],
    },
    {
      id: 563,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método de Array ejecuta una función para cada elemento sin devolver un nuevo array?",
      correct_answer: "forEach()",
      incorrect_answers: ["map()", "filter()", "reduce()"],
    },
    {
      id: 564,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método de Array devuelve un nuevo array con los elementos que cumplen una condición?",
      correct_answer: "filter()",
      incorrect_answers: ["map()", "forEach()", "find()"],
    },
    {
      id: 565,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método de Array transforma cada elemento y devuelve un nuevo array?",
      correct_answer: "map()",
      incorrect_answers: ["forEach()", "reduce()", "every()"],
    },
    {
      id: 566,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método de Array devuelve el primer elemento que cumple una condición?",
      correct_answer: "find()",
      incorrect_answers: ["filter()", "some()", "includes()"],
    },
    {
      id: 567,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué devuelve el método includes()?",
      correct_answer: "Un valor booleano",
      incorrect_answers: [
        "El índice del elemento",
        "El propio elemento",
        "Un array",
      ],
    },
    {
      id: 568,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué hace el método reduce()?",
      correct_answer: "Reduce un array a un único valor",
      incorrect_answers: [
        "Elimina elementos duplicados",
        "Ordena el array",
        "Filtra elementos",
      ],
    },
    {
      id: 569,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué operador comprueba si una propiedad existe en un objeto?",
      correct_answer: "in",
      incorrect_answers: ["has", "exists", "typeof"],
    },
    {
      id: 570,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué valor devuelve typeof null?",
      correct_answer: "object",
      incorrect_answers: ["null", "undefined", "boolean"],
    },
    {
      id: 571,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué estructura permite desestructurar valores de arrays u objetos?",
      correct_answer: "Destructuring",
      incorrect_answers: ["Hoisting", "Cloning", "Binding"],
    },
    {
      id: 572,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué objeto representa la ventana del navegador?",
      correct_answer: "window",
      incorrect_answers: ["document", "navigator", "screen"],
    },
    {
      id: 573,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método muestra información en la consola del navegador?",
      correct_answer: "console.log()",
      incorrect_answers: ["alert()", "print()", "debug()"],
    },
    {
      id: 574,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué API permite almacenar datos en el navegador sin fecha de caducidad?",
      correct_answer: "localStorage",
      incorrect_answers: ["sessionStorage", "cookies", "cacheStorage"],
    },
    {
      id: 575,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método elimina un dato de localStorage?",
      correct_answer: "localStorage.removeItem()",
      incorrect_answers: [
        "localStorage.delete()",
        "localStorage.clearItem()",
        "localStorage.remove()",
      ],
    },
    {
      id: 576,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué API se utiliza para realizar peticiones HTTP modernas?",
      correct_answer: "Fetch API",
      incorrect_answers: ["DOM API", "Storage API", "History API"],
    },
    {
      id: 577,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué devuelve fetch() por defecto?",
      correct_answer: "Una Promise",
      incorrect_answers: ["Un objeto JSON", "Un string", "Un NodeList"],
    },
    {
      id: 578,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué palabra clave se usa para trabajar con código asíncrono de forma secuencial?",
      correct_answer: "async/await",
      incorrect_answers: ["promise/then", "callback", "defer"],
    },
    {
      id: 579,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué objeto representa una operación asíncrona futura?",
      correct_answer: "Promise",
      incorrect_answers: ["Callback", "Event", "Thread"],
    },
    {
      id: 580,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método se ejecuta cuando una Promise se resuelve correctamente?",
      correct_answer: "then()",
      incorrect_answers: ["catch()", "finally()", "resolve()"],
    },
    {
      id: 581,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método captura errores en una Promise?",
      correct_answer: "catch()",
      incorrect_answers: ["error()", "fail()", "reject()"],
    },
    {
      id: 582,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método se ejecuta siempre al finalizar una Promise?",
      correct_answer: "finally()",
      incorrect_answers: ["then()", "catch()", "end()"],
    },
    {
      id: 583,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué objeto proporciona información sobre el navegador?",
      correct_answer: "navigator",
      incorrect_answers: ["window", "location", "history"],
    },
    {
      id: 584,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué propiedad devuelve la URL actual?",
      correct_answer: "window.location.href",
      incorrect_answers: ["document.url", "navigator.url", "history.href"],
    },
    {
      id: 585,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué API permite manipular el historial del navegador?",
      correct_answer: "History API",
      incorrect_answers: ["Location API", "Navigator API", "Storage API"],
    },
    {
      id: 586,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método añade una nueva entrada al historial sin recargar la página?",
      correct_answer: "history.pushState()",
      incorrect_answers: [
        "history.add()",
        "history.replace()",
        "history.forward()",
      ],
    },
    {
      id: 587,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método reemplaza la entrada actual del historial?",
      correct_answer: "history.replaceState()",
      incorrect_answers: [
        "history.pushState()",
        "history.swapState()",
        "history.setState()",
      ],
    },
    {
      id: 588,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué es un callback?",
      correct_answer: "Una función pasada como argumento a otra función",
      incorrect_answers: [
        "Una promesa rechazada",
        "Un evento del DOM",
        "Un método del navegador",
      ],
    },
    {
      id: 589,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué problema describe el callback hell?",
      correct_answer: "Anidamiento excesivo de callbacks",
      incorrect_answers: [
        "Errores de sintaxis",
        "Bloqueo del hilo principal",
        "Fugas de memoria",
      ],
    },
    {
      id: 590,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué técnica evita modificar directamente un objeto original?",
      correct_answer: "Inmutabilidad",
      incorrect_answers: ["Mutación", "Hoisting", "Encapsulación"],
    },
    {
      id: 591,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método crea una copia superficial de un objeto?",
      correct_answer: "Object.assign()",
      incorrect_answers: ["Object.clone()", "Object.copy()", "Object.merge()"],
    },
    {
      id: 592,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué operador permite copiar un objeto superficialmente?",
      correct_answer: "Spread operator (...)",
      incorrect_answers: [
        "Assign operator (=)",
        "Clone operator (++)",
        "Copy operator (&&)",
      ],
    },
    {
      id: 593,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué diferencia hay entre copia superficial y profunda?",
      correct_answer: "La profunda copia también los objetos anidados",
      incorrect_answers: [
        "La superficial es más lenta",
        "La profunda no copia arrays",
        "No existe diferencia",
      ],
    },
    {
      id: 594,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método permite convertir un NodeList en un Array?",
      correct_answer: "Array.from()",
      incorrect_answers: [
        "Array.parse()",
        "NodeList.toArray()",
        "Object.values()",
      ],
    },
    {
      id: 595,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué objeto representa el evento global en JavaScript moderno?",
      correct_answer: "El objeto event pasado al manejador",
      incorrect_answers: ["window.event", "document.event", "globalEvent"],
    },
    {
      id: 596,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué fase del evento ocurre desde el elemento padre al hijo?",
      correct_answer: "Captura",
      incorrect_answers: ["Burbujeo", "Target", "Callback"],
    },
    {
      id: 597,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué fase del evento ocurre desde el elemento hijo al padre?",
      correct_answer: "Burbujeo",
      incorrect_answers: ["Captura", "Delegación", "Target"],
    },
    {
      id: 598,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué tercer parámetro de addEventListener activa la fase de captura?",
      correct_answer: "true",
      incorrect_answers: ["false", "capture", "once"],
    },
    {
      id: 599,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué es la delegación de eventos?",
      correct_answer: "Gestionar eventos desde un elemento padre",
      incorrect_answers: [
        "Eliminar eventos automáticamente",
        "Reasignar eventos",
        "Detener la propagación",
      ],
    },
    {
      id: 600,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método comprueba si un elemento contiene otro?",
      correct_answer: "element.contains()",
      incorrect_answers: [
        "element.hasChild()",
        "element.includes()",
        "element.find()",
      ],
    },
    {
      id: 601,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué propiedad devuelve los nodos hijos de un elemento?",
      correct_answer: "childNodes",
      incorrect_answers: ["childrenList", "childElements", "nodes"],
    },
    {
      id: 602,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué propiedad devuelve solo los elementos HTML hijos?",
      correct_answer: "children",
      incorrect_answers: ["childNodes", "elements", "htmlChildren"],
    },
    {
      id: 603,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué propiedad devuelve el nodo padre?",
      correct_answer: "parentNode",
      incorrect_answers: ["parentElementNode", "fatherNode", "ownerNode"],
    },
    {
      id: 604,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método clona un nodo del DOM?",
      correct_answer: "cloneNode()",
      incorrect_answers: ["copyNode()", "duplicateNode()", "replicateNode()"],
    },
    {
      id: 605,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué argumento de cloneNode indica clonación profunda?",
      correct_answer: "true",
      incorrect_answers: ["false", "deep", "all"],
    },
    {
      id: 606,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué método comprueba si dos nodos son iguales?",
      correct_answer: "isEqualNode()",
      incorrect_answers: ["equals()", "compareNode()", "sameNode()"],
    },
    {
      id: 607,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question:
        "¿Qué método devuelve true si dos referencias apuntan al mismo nodo?",
      correct_answer: "isSameNode()",
      incorrect_answers: ["isEqualNode()", "compare()", "equalsNode()"],
    },
    {
      id: 608,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué propiedad indica si un elemento tiene nodos hijos?",
      correct_answer: "hasChildNodes()",
      incorrect_answers: ["hasChildren", "childrenExists", "childCount"],
    },
    {
      id: 609,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Qué API permite observar cambios en el DOM?",
      correct_answer: "MutationObserver",
      incorrect_answers: ["DOMWatcher", "EventObserver", "ChangeListener"],
    },
    {
      id: 610,
      category: "DESARROLLO WEB EN ENTORNO CLIENTE",
      difficulty: "hard",
      question: "¿Para qué se utiliza MutationObserver?",
      correct_answer: "Detectar cambios dinámicos en el DOM",
      incorrect_answers: [
        "Gestionar eventos del usuario",
        "Modificar estilos CSS",
        "Optimizar peticiones HTTP",
      ],
    },
  ], // Cierra el array 'results'
}; // Cierra el objeto principal 'window.preguntasTrivial'

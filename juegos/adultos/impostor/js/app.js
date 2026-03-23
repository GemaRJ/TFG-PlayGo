// ========================================
// EL IMPOSTOR - VERSIÓN OPTIMIZADA 3.0
// ========================================
// Código completamente refactorizado con:
// - Estructura modular
// - Banco de palabras expandido (25+ palabras por categoría)
// - Sistema de palabras relacionadas mejorado (250+ pares)
// - Mejor manejo de errores
// - Cacheo de elementos DOM
// ========================================

"use strict";

// ========================================
// CONFIGURACIÓN GLOBAL
// ========================================

const CONFIG = {
  MIN_PLAYERS: 3,
  MAX_PLAYERS: 20,
  MIN_IMPOSTORS: 1,
  MAX_IMPOSTORS: 10,
  PARTICLES_COUNT: 30,
  RESET_DELAY: 1000,
  TUTORIAL_DELAY: 1000,
  API_TIMEOUT: 5000,
  API_MODEL: "claude-sonnet-4-20250514",
  API_MAX_TOKENS: 1000,
  STORAGE_KEY_TUTORIAL: "impostorGameFirstTime",
};

// ========================================
// TRADUCCIONES
// ========================================

const TRANSLATIONS = {
  es: {
    title: "El Impostor",
    subtitle: "Juego de Detección",
    tutorialButton: "❓ ¿Cómo se juega?",
    difficultyLabel: "Dificultad",
    difficultyEasy: "🟢 Fácil",
    difficultyNormal: "🟡 Normal",
    difficultyHard: "🟠 Difícil",
    difficultyExtreme: "🔴 Extremo",
    categoryLabel: "Categoría",
    categoryFood: "🍕 Comida y Bebidas",
    categoryAnimals: "🐶 Animales",
    categoryEntertainment: "🎬 Cine y TV",
    categorySports: "⚽ Deportes",
    categoryGeography: "🌍 Geografía",
    categoryMusic: "🎵 Música",
    categoryProfessions: "💼 Profesiones",
    categoryTransport: "🚗 Transporte",
    categoryHistory: "🏛️ Historia",
    categoryScience: "🔬 Ciencia",
    relatedWordsLabel: "🎭 Modo Palabras Relacionadas",
    relatedWordsTooltip:
      "El impostor recibe una palabra relacionada en lugar de 'impostor'",
    numPlayersLabel: "Número de jugadores",
    numPlayersPlaceholder: "Mínimo 3 jugadores",
    numImpostorsLabel: "Número de impostores",
    numImpostorsPlaceholder: "Mínimo 1 impostor",
    playerNamesLabel: "Nombres de los jugadores",
    startButton: "Generar Palabra y Empezar",
    resetButton: "Empezar de 0",
    loadingMessage: "⚡ Generando palabra y tema...",
    infoText:
      "Se generará automáticamente una palabra aleatoria y un tema. Los impostores recibirán una palabra diferente.",
    warningMessage:
      "⚠️ Pasa el dispositivo al siguiente jugador. Asegúrate de que nadie más esté mirando.",
    themeLabel: "Tema",
    revealButton: "Ver mi palabra",
    yourWordLabel: "Tu palabra es:",
    nextPlayerButton: "Siguiente Jugador",
    playerLabel: "Jugador",
    nameLabel: "Nombre",
    minPlayersMessage: "Mínimo 3 jugadores",
    alertMinPlayers: "Necesitas al menos 3 jugadores",
    alertMinImpostors: "Necesitas al menos 1 impostor",
    alertImpostorsTooMany:
      "El número de impostores debe ser menor que el número de jugadores",
    alertEnterName: "Por favor ingresa el nombre del Jugador",
    tutorialTitle: "📖 Cómo Jugar",
    tutorialStep1Title: "Configura el Juego",
    tutorialStep1Text:
      "Selecciona la dificultad, categoría y número de jugadores e impostores.",
    tutorialStep2Title: "Ingresa los Nombres",
    tutorialStep2Text: "Escribe el nombre de cada jugador que participará.",
    tutorialStep3Title: "Genera y Revela",
    tutorialStep3Text:
      "Cada jugador verá su palabra en privado. Los impostores recibirán una palabra diferente.",
    tutorialStep4Title: "Discute y Descubre",
    tutorialStep4Text:
      "Hagan preguntas para descubrir quién es el impostor. ¡El impostor debe ocultarse!",
    tutorialCloseBtn: "¡Entendido!",
    language: "es",
  },
  en: {
    title: "The Impostor",
    subtitle: "Detection Game",
    tutorialButton: "❓ How to Play?",
    difficultyLabel: "Difficulty",
    difficultyEasy: "🟢 Easy",
    difficultyNormal: "🟡 Normal",
    difficultyHard: "🟠 Hard",
    difficultyExtreme: "🔴 Extreme",
    categoryLabel: "Category",
    categoryFood: "🍕 Food & Drinks",
    categoryAnimals: "🐶 Animals",
    categoryEntertainment: "🎬 Movies & TV",
    categorySports: "⚽ Sports",
    categoryGeography: "🌍 Countries & Cities",
    categoryMusic: "🎵 Music",
    categoryProfessions: "💼 Professions",
    categoryTransport: "🚗 Transport",
    categoryHistory: "🏛️ History",
    categoryScience: "🔬 Science",
    relatedWordsLabel: "🎭 Related Words Mode",
    relatedWordsTooltip:
      "Impostor receives a related word instead of 'impostor'",
    numPlayersLabel: "Number of players",
    numPlayersPlaceholder: "Minimum 3 players",
    numImpostorsLabel: "Number of impostors",
    numImpostorsPlaceholder: "Minimum 1 impostor",
    playerNamesLabel: "Player names",
    startButton: "Generate Word and Start",
    resetButton: "Start from Scratch",
    loadingMessage: "⚡ Generating word and theme...",
    infoText:
      "A random word and theme will be automatically generated. Impostors will receive a different word.",
    warningMessage:
      "⚠️ Pass the device to the next player. Make sure no one else is watching.",
    themeLabel: "Theme",
    revealButton: "See my word",
    yourWordLabel: "Your word is:",
    nextPlayerButton: "Next Player",
    playerLabel: "Player",
    nameLabel: "Name",
    minPlayersMessage: "Minimum 3 players",
    alertMinPlayers: "You need at least 3 players",
    alertMinImpostors: "You need at least 1 impostor",
    alertImpostorsTooMany:
      "The number of impostors must be less than the number of players",
    alertEnterName: "Please enter the name for Player",
    tutorialTitle: "📖 How to Play",
    tutorialStep1Title: "Configure the Game",
    tutorialStep1Text:
      "Select difficulty, category and number of players and impostors.",
    tutorialStep2Title: "Enter Names",
    tutorialStep2Text: "Write the name of each player who will participate.",
    tutorialStep3Title: "Generate and Reveal",
    tutorialStep3Text:
      "Each player will see their word privately. Impostors will receive a different word.",
    tutorialStep4Title: "Discuss and Discover",
    tutorialStep4Text:
      "Ask questions to discover who is the impostor. The impostor must hide!",
    tutorialCloseBtn: "Got it!",
    language: "en",
  },
};

// ========================================
// BANCO DE PALABRAS EXPANDIDO (25+ palabras por categoría)
// ========================================

const WORD_BANK = {
  es: {
    easy: {
      food: {
        words: [
          "pan",
          "agua",
          "leche",
          "manzana",
          "arroz",
          "papa",
          "carne",
          "pescado",
          "huevo",
          "queso",
          "sal",
          "azúcar",
          "tomate",
          "zanahoria",
          "lechuga",
          "pollo",
          "jamón",
          "mantequilla",
          "aceite",
          "vinagre",
          "cebolla",
          "ajo",
          "pimienta",
          "limón",
          "naranja",
          "plátano",
          "uva",
          "fresa",
        ],
        themes: ["comida"],
      },
      animals: {
        words: [
          "perro",
          "gato",
          "pájaro",
          "pez",
          "vaca",
          "caballo",
          "cerdo",
          "oveja",
          "gallina",
          "ratón",
          "conejo",
          "pato",
          "cabra",
          "burro",
          "loro",
          "tortuga",
          "rana",
          "hormiga",
          "abeja",
          "mariposa",
          "araña",
          "mosca",
          "caracol",
          "canario",
          "hamster",
          "paloma",
          "gallo",
          "pollito",
        ],
        themes: ["animales"],
      },
      entertainment: {
        words: [
          "película",
          "juego",
          "música",
          "baile",
          "teatro",
          "circo",
          "parque",
          "fiesta",
          "canción",
          "cuento",
          "payaso",
          "magia",
          "títere",
          "dibujo",
          "pintura",
          "canto",
          "risa",
          "chiste",
          "broma",
          "adivinanza",
          "globo",
          "piñata",
          "pastel",
          "regalo",
          "sorpresa",
          "aplausos",
          "silbato",
          "tambor",
        ],
        themes: ["entretenimiento"],
      },
      sports: {
        words: [
          "pelota",
          "correr",
          "nadar",
          "saltar",
          "jugar",
          "bici",
          "patines",
          "columpio",
          "red",
          "gol",
          "balón",
          "carrera",
          "equipo",
          "partido",
          "ganar",
          "perder",
          "empate",
          "árbitro",
          "cancha",
          "campo",
          "meta",
          "punto",
          "raqueta",
          "bate",
          "guante",
          "casco",
          "medalla",
          "trofeo",
        ],
        themes: ["deportes"],
      },
      geography: {
        words: [
          "mar",
          "río",
          "monte",
          "ciudad",
          "playa",
          "bosque",
          "país",
          "isla",
          "lago",
          "campo",
          "pueblo",
          "valle",
          "colina",
          "costa",
          "bahía",
          "puerto",
          "puente",
          "camino",
          "calle",
          "plaza",
          "parque",
          "jardín",
          "fuente",
          "casa",
          "escuela",
          "iglesia",
          "tienda",
          "mercado",
        ],
        themes: ["geografía"],
      },
      music: {
        words: [
          "tambor",
          "flauta",
          "cantar",
          "piano",
          "guitarra",
          "campana",
          "silbar",
          "música",
          "ritmo",
          "nota",
          "violín",
          "trompeta",
          "canción",
          "melodía",
          "sonido",
          "voz",
          "coro",
          "banda",
          "disco",
          "radio",
          "micrófono",
          "auricular",
          "bocina",
          "batería",
          "tecla",
          "cuerda",
          "arco",
          "partitura",
        ],
        themes: ["música"],
      },
      professions: {
        words: [
          "doctor",
          "maestro",
          "cocinero",
          "policía",
          "bombero",
          "cartero",
          "piloto",
          "pintor",
          "jardinero",
          "panadero",
          "dentista",
          "enfermera",
          "veterinario",
          "conductor",
          "músico",
          "cantante",
          "actor",
          "carpintero",
          "mecánico",
          "electricista",
          "plomero",
          "soldado",
          "marinero",
          "granjero",
          "pastor",
          "pescador",
          "cajero",
          "vendedor",
        ],
        themes: ["profesiones"],
      },
      transport: {
        words: [
          "coche",
          "bus",
          "tren",
          "barco",
          "avión",
          "bici",
          "moto",
          "camión",
          "taxi",
          "patín",
          "metro",
          "tranvía",
          "helicóptero",
          "lancha",
          "balsa",
          "canoa",
          "triciclo",
          "carrito",
          "carro",
          "ambulancia",
          "patrulla",
          "grúa",
          "tractor",
          "scooter",
          "monopatín",
          "carreta",
          "globo",
          "cohete",
        ],
        themes: ["transporte"],
      },
      history: {
        words: [
          "rey",
          "reina",
          "castillo",
          "corona",
          "espada",
          "escudo",
          "soldado",
          "príncipe",
          "guerra",
          "batalla",
          "caballero",
          "armadura",
          "torre",
          "muralla",
          "bandera",
          "trono",
          "cetro",
          "dragón",
          "héroe",
          "leyenda",
          "moneda",
          "tesoro",
          "mapa",
          "brújula",
          "antorcha",
          "flecha",
          "arco",
          "lanza",
        ],
        themes: ["historia"],
      },
      science: {
        words: [
          "planta",
          "animal",
          "tierra",
          "cielo",
          "estrella",
          "nube",
          "lluvia",
          "viento",
          "fuego",
          "hielo",
          "sol",
          "luna",
          "árbol",
          "flor",
          "hoja",
          "raíz",
          "semilla",
          "fruto",
          "agua",
          "aire",
          "roca",
          "arena",
          "montaña",
          "volcán",
          "río",
          "mar",
          "isla",
          "desierto",
        ],
        themes: ["ciencia"],
      },
    },
    normal: {
      food: {
        words: [
          "sushi",
          "pizza",
          "hamburguesa",
          "paella",
          "tacos",
          "pasta",
          "ensalada",
          "helado",
          "chocolate",
          "café",
          "té",
          "jugo",
          "refresco",
          "cerveza",
          "vino",
          "whisky",
          "coctel",
          "smoothie",
          "batido",
          "licuado",
          "burrito",
          "quesadilla",
          "empanada",
          "croissant",
          "donut",
          "muffin",
          "brownie",
          "galleta",
          "tarta",
          "flan",
        ],
        themes: ["comida"],
      },
      animals: {
        words: [
          "elefante",
          "jirafa",
          "león",
          "tigre",
          "oso",
          "mono",
          "cebra",
          "hipopótamo",
          "cocodrilo",
          "rinoceronte",
          "leopardo",
          "pantera",
          "guepardo",
          "lobo",
          "zorro",
          "ciervo",
          "alce",
          "búfalo",
          "bisonte",
          "antílope",
          "canguro",
          "koala",
          "panda",
          "gorila",
          "chimpancé",
          "orangután",
          "lemur",
          "suricata",
          "mapache",
          "tejón",
        ],
        themes: ["animales"],
      },
      entertainment: {
        words: [
          "actor",
          "comedia",
          "drama",
          "escenario",
          "concierto",
          "festival",
          "espectáculo",
          "videojuego",
          "novela",
          "serie",
          "documental",
          "animación",
          "thriller",
          "acción",
          "romance",
          "fantasía",
          "ciencia ficción",
          "terror",
          "suspenso",
          "musical",
          "ópera",
          "ballet",
          "danza",
          "circo",
          "magia",
          "ilusionismo",
          "stand-up",
          "sketch",
          "improvisación",
          "karaoke",
        ],
        themes: ["entretenimiento"],
      },
      sports: {
        words: [
          "fútbol",
          "baloncesto",
          "tenis",
          "natación",
          "atletismo",
          "ciclismo",
          "voleibol",
          "balonmano",
          "rugby",
          "golf",
          "béisbol",
          "softbol",
          "hockey",
          "patinaje",
          "esquí",
          "snowboard",
          "surf",
          "boxeo",
          "lucha",
          "judo",
          "karate",
          "taekwondo",
          "gimnasia",
          "halterofilia",
          "escalada",
          "remo",
          "vela",
          "buceo",
          "polo",
          "críquet",
        ],
        themes: ["deportes"],
      },
      geography: {
        words: [
          "montaña",
          "océano",
          "continente",
          "desierto",
          "selva",
          "valle",
          "península",
          "archipiélago",
          "cordillera",
          "meseta",
          "volcán",
          "cráter",
          "glaciar",
          "iceberg",
          "tundra",
          "sabana",
          "pradera",
          "estepa",
          "pampa",
          "llanura",
          "delta",
          "estuario",
          "fiordo",
          "bahía",
          "golfo",
          "cabo",
          "estrecho",
          "canal",
          "laguna",
          "pantano",
        ],
        themes: ["geografía"],
      },
      music: {
        words: [
          "guitarra",
          "piano",
          "batería",
          "violín",
          "saxofón",
          "trompeta",
          "flauta",
          "arpa",
          "acordeón",
          "contrabajo",
          "clarinete",
          "oboe",
          "fagot",
          "tuba",
          "trompa",
          "trombón",
          "xilófono",
          "marimba",
          "timbal",
          "bongó",
          "conga",
          "cajón",
          "pandereta",
          "castañuelas",
          "armónica",
          "ukelele",
          "banjo",
          "mandolina",
          "cítara",
          "laúd",
        ],
        themes: ["música"],
      },
      professions: {
        words: [
          "ingeniero",
          "arquitecto",
          "abogado",
          "periodista",
          "fotógrafo",
          "electricista",
          "mecánico",
          "carpintero",
          "veterinario",
          "dentista",
          "contador",
          "economista",
          "administrador",
          "gerente",
          "secretario",
          "recepcionista",
          "bibliotecario",
          "archivista",
          "traductor",
          "intérprete",
          "diseñador",
          "ilustrador",
          "animador",
          "programador",
          "analista",
          "consultor",
          "asesor",
          "coach",
          "terapeuta",
          "psicólogo",
        ],
        themes: ["profesiones"],
      },
      transport: {
        words: [
          "autobús",
          "helicóptero",
          "yate",
          "tranvía",
          "metro",
          "ferrocarril",
          "crucero",
          "lancha",
          "furgoneta",
          "scooter",
          "limusina",
          "convertible",
          "camioneta",
          "pickup",
          "jeep",
          "SUV",
          "sedan",
          "coupé",
          "minivan",
          "remolque",
          "trailer",
          "locomotora",
          "vagón",
          "góndola",
          "teleférico",
          "funicular",
          "monoraíl",
          "tren bala",
          "ferry",
          "catamarán",
        ],
        themes: ["transporte"],
      },
      history: {
        words: [
          "imperio",
          "revolución",
          "conquista",
          "civilización",
          "dinastía",
          "colonia",
          "independencia",
          "tratado",
          "alianza",
          "república",
          "democracia",
          "monarquía",
          "feudalismo",
          "nobleza",
          "burguesía",
          "reforma",
          "renacimiento",
          "ilustración",
          "industrialización",
          "globalización",
          "guerra mundial",
          "guerra civil",
          "revolución francesa",
          "revolución industrial",
          "descubrimiento",
          "exploración",
          "colonización",
          "emancipación",
          "abolición",
          "sufragio",
        ],
        themes: ["historia"],
      },
      science: {
        words: [
          "átomo",
          "célula",
          "energía",
          "gravedad",
          "magnetismo",
          "electricidad",
          "ecosistema",
          "evolución",
          "genética",
          "vacuna",
          "molécula",
          "proteína",
          "enzima",
          "vitamina",
          "hormona",
          "bacteria",
          "virus",
          "anticuerpo",
          "ADN",
          "ARN",
          "fotosíntesis",
          "respiración",
          "digestión",
          "circulación",
          "neurona",
          "sinapsis",
          "cromosoma",
          "gen",
          "mutación",
          "selección",
        ],
        themes: ["ciencia"],
      },
    },
    hard: {
      food: {
        words: [
          "caviar",
          "trufas",
          "foiegras",
          "sashimi",
          "risotto",
          "carpaccio",
          "ceviche",
          "gazpacho",
          "bouillabaisse",
          "tempura",
          "ratatouille",
          "coq au vin",
          "cassoulet",
          "bouillabaisse",
          "ossobuco",
          "tiramisú",
          "panna cotta",
          "crème brûlée",
          "soufflé",
          "macaron",
          "croissant",
          "brioche",
          "baguette",
          "ciabatta",
          "focaccia",
          "prosciutto",
          "mortadela",
          "salami",
          "chorizo",
          "morcilla",
        ],
        themes: ["comida"],
      },
      animals: {
        words: [
          "ornitorrinco",
          "koala",
          "canguro",
          "lemur",
          "suricata",
          "okapi",
          "tapir",
          "pangolín",
          "quetzal",
          "ajolote",
          "tarsero",
          "aye-aye",
          "fosa",
          "binturong",
          "numbat",
          "wombat",
          "kiwi",
          "casuario",
          "ñandú",
          "emú",
          "capibara",
          "nutria",
          "visón",
          "marta",
          "comadreja",
          "turón",
          "hurón",
          "chinchilla",
          "degú",
          "marmota",
        ],
        themes: ["animales"],
      },
      entertainment: {
        words: [
          "sinfonía",
          "ópera",
          "ballet",
          "performance",
          "instalación",
          "monólogo",
          "improvisación",
          "pantomima",
          "cabaret",
          "vodevil",
          "soliloquio",
          "monólogo interior",
          "flashback",
          "flashforward",
          "elipsis",
          "metáfora",
          "alegoría",
          "simbolismo",
          "expresionismo",
          "surrealismo",
          "dadaísmo",
          "futurismo",
          "minimalismo",
          "conceptualismo",
          "abstracción",
          "figurativismo",
          "realismo",
          "naturalismo",
          "romanticismo",
          "clasicismo",
        ],
        themes: ["entretenimiento"],
      },
      sports: {
        words: [
          "esgrima",
          "waterpolo",
          "bádminton",
          "skeleton",
          "curling",
          "pentatlón",
          "triatlón",
          "escalada",
          "remo",
          "vela",
          "bobsleigh",
          "luge",
          "biatlón",
          "heptatlón",
          "decatlón",
          "salto con pértiga",
          "lanzamiento de disco",
          "lanzamiento de jabalina",
          "lanzamiento de martillo",
          "lanzamiento de peso",
          "marcha atlética",
          "cross country",
          "trail running",
          "ultramaratón",
          "ironman",
          "duatlón",
          "acuatlón",
          "parkour",
          "freerunning",
          "slackline",
        ],
        themes: ["deportes"],
      },
      geography: {
        words: [
          "glaciar",
          "cañón",
          "géiser",
          "fiordo",
          "estepa",
          "taiga",
          "tundra",
          "manglar",
          "estuario",
          "atolón",
          "arrecife",
          "archipiélago",
          "península",
          "istmo",
          "cabo",
          "promontorio",
          "meseta",
          "altiplano",
          "depresión",
          "cuenca",
          "falla",
          "placa tectónica",
          "dorsal oceánica",
          "fosa oceánica",
          "talud continental",
          "plataforma continental",
          "abismo",
          "sima",
          "dolina",
          "karst",
        ],
        themes: ["geografía"],
      },
      music: {
        words: [
          "violonchelo",
          "oboe",
          "contrabajo",
          "clavicordio",
          "fagot",
          "trompa",
          "timbal",
          "arpa",
          "acordeón",
          "saxofón",
          "clavecín",
          "virginal",
          "espineta",
          "salterio",
          "dulcémele",
          "zanfona",
          "gaita",
          "chirimía",
          "sacabuche",
          "corneta",
          "serpentón",
          "oficleido",
          "bombardino",
          "sousafón",
          "fliscorno",
          "melófono",
          "tuba wagneriana",
          "contrafagot",
          "piccolo",
          "flauta dulce",
        ],
        themes: ["música"],
      },
      professions: {
        words: [
          "neurocirujano",
          "astronauta",
          "arqueólogo",
          "paleontólogo",
          "cartógrafo",
          "oceanógrafo",
          "sommelier",
          "taxidermista",
          "orfebre",
          "relojero",
          "gemólogo",
          "numismático",
          "filatélico",
          "heraldista",
          "genealogista",
          "grafólogo",
          "quiromántico",
          "astrólogo",
          "adivino",
          "vidente",
          "medium",
          "exorcista",
          "chamán",
          "druida",
          "alquimista",
          "nigromante",
          "hechicero",
          "brujo",
          "mago",
          "ilusionista",
        ],
        themes: ["profesiones"],
      },
      transport: {
        words: [
          "dirigible",
          "teleférico",
          "funicular",
          "hidroavión",
          "aerodeslizador",
          "monoraíl",
          "rompehielos",
          "catamarán",
          "zepelín",
          "trineo",
          "góndola",
          "rickshaw",
          "tuk-tuk",
          "ciclomotor",
          "velomotor",
          "motocarro",
          "carromato",
          "diligencia",
          "calesa",
          "berlina",
          "landó",
          "faetón",
          "tilbury",
          "cabriolé",
          "coupé",
          "victoria",
          "break",
          "omnibus",
          "tartana",
          "carreta",
        ],
        themes: ["transporte"],
      },
      history: {
        words: [
          "feudalismo",
          "renacimiento",
          "ilustración",
          "cruzadas",
          "inquisición",
          "armisticio",
          "tratado",
          "monarquía",
          "senado",
          "república",
          "oligarquía",
          "plutocracia",
          "aristocracia",
          "teocracia",
          "autocracia",
          "tiranía",
          "dictadura",
          "totalitarismo",
          "fascismo",
          "comunismo",
          "socialismo",
          "capitalismo",
          "liberalismo",
          "conservadurismo",
          "anarquismo",
          "nihilismo",
          "existencialismo",
          "pragmatismo",
          "utilitarismo",
          "relativismo",
        ],
        themes: ["historia"],
      },
      science: {
        words: [
          "fotosíntesis",
          "mitocondria",
          "electroimán",
          "termodinámica",
          "cromosoma",
          "neutrino",
          "catalizador",
          "enzima",
          "polímero",
          "isótopo",
          "ribosoma",
          "lisosoma",
          "peroxisoma",
          "retículo endoplasmático",
          "aparato de Golgi",
          "citoesqueleto",
          "membrana plasmática",
          "pared celular",
          "cloroplasto",
          "vacuola",
          "núcleo",
          "nucleolo",
          "cromatina",
          "histona",
          "telómero",
          "centrómero",
          "cromátida",
          "huso mitótico",
          "citocinesis",
          "meiosis",
        ],
        themes: ["ciencia"],
      },
    },
    extreme: {
      food: {
        words: [
          "umami",
          "fermentación",
          "emulsión",
          "gelificación",
          "osmosis",
          "caramelización",
          "molecular",
          "deconstrucción",
          "esferificación",
          "nitrogeno",
          "sous-vide",
          "liofilización",
          "texturización",
          "gelificación",
          "espumificación",
          "encapsulación",
          "criogenia",
          "hidrocoloides",
          "emulgentes",
          "estabilizantes",
          "espesantes",
          "gelificantes",
          "acidulantes",
          "antioxidantes",
          "conservantes",
          "colorantes",
          "aromatizantes",
          "potenciadores",
          "edulcorantes",
          "enzimas",
        ],
        themes: ["comida"],
      },
      animals: {
        words: [
          "equidna",
          "narval",
          "axolotl",
          "mantarraya",
          "medusa",
          "cefalópodo",
          "cnidario",
          "artrópodo",
          "anélido",
          "molusco",
          "platelminto",
          "nemertino",
          "nematodo",
          "rotífero",
          "tardígrado",
          "onicóforo",
          "priapúlido",
          "quinorrinco",
          "loricífero",
          "gastrotrico",
          "cefalocordado",
          "tunicado",
          "lamprea",
          "mixino",
          "condrictio",
          "osteíctio",
          "dipnoo",
          "actinopterigios",
          "sarcopterigios",
          "anfibios",
        ],
        themes: ["animales"],
      },
      entertainment: {
        words: [
          "cinematografía",
          "escenografía",
          "dramaturgia",
          "coreografía",
          "dirección",
          "producción",
          "postproducción",
          "edición",
          "guion",
          "narrativa",
          "montaje",
          "iluminación",
          "sonorización",
          "musicalización",
          "ambientación",
          "caracterización",
          "maquillaje",
          "vestuario",
          "atrezzo",
          "utilería",
          "storyboard",
          "animática",
          "previz",
          "VFX",
          "CGI",
          "motion capture",
          "rotoscopia",
          "compositing",
          "color grading",
          "masterización",
        ],
        themes: ["entretenimiento"],
      },
      sports: {
        words: [
          "halterofilia",
          "taekwondo",
          "jiu-jitsu",
          "kitesurf",
          "parapente",
          "alpinismo",
          "espeleología",
          "parkour",
          "slackline",
          "freerunning",
          "wingsuit",
          "base jumping",
          "bungee jumping",
          "rappel",
          "barranquismo",
          "canyoning",
          "rafting",
          "kayak extremo",
          "snowkite",
          "speedriding",
          "ski-alpinismo",
          "telemark",
          "freestyle",
          "big air",
          "halfpipe",
          "slopestyle",
          "boardercross",
          "skicross",
          "moguls",
          "aerials",
        ],
        themes: ["deportes"],
      },
      geography: {
        words: [
          "orogénesis",
          "tectónica",
          "geomorfología",
          "estratigrafía",
          "paleoclimatología",
          "hidrología",
          "topografía",
          "cartografía",
          "geodesia",
          "batimetría",
          "petrología",
          "mineralogía",
          "cristalografía",
          "sedimentología",
          "paleontología",
          "paleogeografía",
          "paleoecología",
          "bioestratigrafía",
          "cronoestratigrafía",
          "magnetoestratigrafía",
          "sismología",
          "vulcanología",
          "geoquímica",
          "geofísica",
          "geomorfometría",
          "morfometría",
          "morfodinámica",
          "morfoestructura",
          "morfoclimática",
          "morfogénesis",
        ],
        themes: ["geografía"],
      },
      music: {
        words: [
          "contrapunto",
          "armonía",
          "polifonía",
          "dodecafonismo",
          "serialismo",
          "tonalidad",
          "modalidad",
          "cadencia",
          "modulación",
          "temperamento",
          "disonancia",
          "consonancia",
          "intervalo",
          "acorde",
          "escala",
          "modo",
          "grado",
          "función tonal",
          "progresión armónica",
          "círculo de quintas",
          "enarmonia",
          "cromatismo",
          "alteración",
          "bemol",
          "sostenido",
          "becuadro",
          "doble bemol",
          "doble sostenido",
          "transposición",
          "inversión",
        ],
        themes: ["música"],
      },
      professions: {
        words: [
          "epidemiólogo",
          "radiólogo",
          "endocrinólogo",
          "nefrólogo",
          "hematólogo",
          "inmunólogo",
          "genetista",
          "bioinformático",
          "astrofísico",
          "nanotecnólogo",
          "neurobiológo",
          "neurocientífico",
          "neurofisiólogo",
          "neuropsicólogo",
          "neuropsiquiatra",
          "psiconeurólogo",
          "biofísico",
          "bioquímico",
          "biomédico",
          "biotecnólogo",
          "criptógrafo",
          "criptólogo",
          "criptoanalista",
          "esteganógrafo",
          "forense digital",
          "perito informático",
          "auditor de seguridad",
          "pentester",
          "hacker ético",
          "ingeniero de reversión",
        ],
        themes: ["profesiones"],
      },
      transport: {
        words: [
          "maglev",
          "hipersónico",
          "cohete",
          "transbordador",
          "propulsión",
          "vectorial",
          "astronave",
          "cápsula",
          "satélite",
          "sonda",
          "lanzadera",
          "módulo lunar",
          "rover",
          "orbitador",
          "aterrizador",
          "sobreorbital",
          "suborbital",
          "órbita geoestacionaria",
          "órbita polar",
          "órbita elíptica",
          "propulsión iónica",
          "propulsión nuclear",
          "vela solar",
          "motor de plasma",
          "ramjet",
          "scramjet",
          "pulsejet",
          "turbojet",
          "turbofan",
          "turboprop",
        ],
        themes: ["transporte"],
      },
      history: {
        words: [
          "paleolítico",
          "neolítico",
          "mesozoico",
          "cenozoico",
          "helenismo",
          "romanización",
          "bizantino",
          "carolingio",
          "otomano",
          "absolutismo",
          "mercantilismo",
          "fisiocracia",
          "cameralismo",
          "colonialismo",
          "imperialismo",
          "proteccionismo",
          "librecambismo",
          "bullionismo",
          "cartismo",
          "luddismo",
          "fourierismo",
          "owenismo",
          "sansimonismo",
          "proudhonismo",
          "bakuninismo",
          "kropotkinismo",
          "blanquismo",
          "sorelianismo",
          "sindicalismo",
          "corporativismo",
        ],
        themes: ["historia"],
      },
      science: {
        words: [
          "antimateria",
          "quark",
          "bosón",
          "entropía",
          "superconductor",
          "relatividad",
          "mecánica cuántica",
          "singularidad",
          "agujero negro",
          "antipartícula",
          "fermión",
          "hadrón",
          "leptón",
          "barión",
          "mesón",
          "gluón",
          "fotón",
          "gravitón",
          "neutrino",
          "muón",
          "tauón",
          "electrón",
          "positrón",
          "protón",
          "antiprotón",
          "neutrón",
          "antineutrón",
          "deuterón",
          "tritón",
          "alfa",
        ],
        themes: ["ciencia"],
      },
    },
  },
  en: {
    easy: {
      food: {
        words: [
          "bread",
          "water",
          "milk",
          "apple",
          "rice",
          "potato",
          "meat",
          "fish",
          "egg",
          "cheese",
          "salt",
          "sugar",
          "tomato",
          "carrot",
          "lettuce",
          "chicken",
          "ham",
          "butter",
          "oil",
          "vinegar",
          "onion",
          "garlic",
          "pepper",
          "lemon",
          "orange",
          "banana",
          "grape",
          "strawberry",
        ],
        themes: ["food"],
      },
      animals: {
        words: [
          "dog",
          "cat",
          "bird",
          "fish",
          "cow",
          "horse",
          "pig",
          "sheep",
          "chicken",
          "mouse",
          "rabbit",
          "duck",
          "goat",
          "donkey",
          "parrot",
          "turtle",
          "frog",
          "ant",
          "bee",
          "butterfly",
          "spider",
          "fly",
          "snail",
          "canary",
          "hamster",
          "pigeon",
          "rooster",
          "chick",
        ],
        themes: ["animals"],
      },
      entertainment: {
        words: [
          "movie",
          "game",
          "music",
          "dance",
          "theater",
          "circus",
          "park",
          "party",
          "song",
          "story",
          "clown",
          "magic",
          "puppet",
          "drawing",
          "painting",
          "singing",
          "laugh",
          "joke",
          "prank",
          "riddle",
          "balloon",
          "piñata",
          "cake",
          "gift",
          "surprise",
          "applause",
          "whistle",
          "drum",
        ],
        themes: ["entertainment"],
      },
      sports: {
        words: [
          "ball",
          "run",
          "swim",
          "jump",
          "play",
          "bike",
          "skates",
          "swing",
          "net",
          "goal",
          "balloon",
          "race",
          "team",
          "match",
          "win",
          "lose",
          "tie",
          "referee",
          "court",
          "field",
          "goal",
          "point",
          "racket",
          "bat",
          "glove",
          "helmet",
          "medal",
          "trophy",
        ],
        themes: ["sports"],
      },
      geography: {
        words: [
          "sea",
          "river",
          "mountain",
          "city",
          "beach",
          "forest",
          "country",
          "island",
          "lake",
          "field",
          "town",
          "valley",
          "hill",
          "coast",
          "bay",
          "port",
          "bridge",
          "road",
          "street",
          "square",
          "park",
          "garden",
          "fountain",
          "house",
          "school",
          "church",
          "store",
          "market",
        ],
        themes: ["geography"],
      },
      music: {
        words: [
          "drum",
          "flute",
          "sing",
          "piano",
          "guitar",
          "bell",
          "whistle",
          "music",
          "rhythm",
          "note",
          "violin",
          "trumpet",
          "song",
          "melody",
          "sound",
          "voice",
          "choir",
          "band",
          "record",
          "radio",
          "microphone",
          "headphone",
          "speaker",
          "drums",
          "key",
          "string",
          "bow",
          "sheet music",
        ],
        themes: ["music"],
      },
      professions: {
        words: [
          "doctor",
          "teacher",
          "cook",
          "police",
          "firefighter",
          "mailman",
          "pilot",
          "painter",
          "gardener",
          "baker",
          "dentist",
          "nurse",
          "veterinarian",
          "driver",
          "musician",
          "singer",
          "actor",
          "carpenter",
          "mechanic",
          "electrician",
          "plumber",
          "soldier",
          "sailor",
          "farmer",
          "shepherd",
          "fisherman",
          "cashier",
          "seller",
        ],
        themes: ["professions"],
      },
      transport: {
        words: [
          "car",
          "bus",
          "train",
          "boat",
          "plane",
          "bike",
          "motorcycle",
          "truck",
          "taxi",
          "scooter",
          "subway",
          "tram",
          "helicopter",
          "speedboat",
          "raft",
          "canoe",
          "tricycle",
          "cart",
          "car",
          "ambulance",
          "patrol",
          "crane",
          "tractor",
          "scooter",
          "skateboard",
          "wagon",
          "balloon",
          "rocket",
        ],
        themes: ["transport"],
      },
      history: {
        words: [
          "king",
          "queen",
          "castle",
          "crown",
          "sword",
          "shield",
          "soldier",
          "prince",
          "war",
          "battle",
          "knight",
          "armor",
          "tower",
          "wall",
          "flag",
          "throne",
          "scepter",
          "dragon",
          "hero",
          "legend",
          "coin",
          "treasure",
          "map",
          "compass",
          "torch",
          "arrow",
          "bow",
          "spear",
        ],
        themes: ["history"],
      },
      science: {
        words: [
          "plant",
          "animal",
          "earth",
          "sky",
          "star",
          "cloud",
          "rain",
          "wind",
          "fire",
          "ice",
          "sun",
          "moon",
          "tree",
          "flower",
          "leaf",
          "root",
          "seed",
          "fruit",
          "water",
          "air",
          "rock",
          "sand",
          "mountain",
          "volcano",
          "river",
          "sea",
          "island",
          "desert",
        ],
        themes: ["science"],
      },
    },
    normal: {
      food: {
        words: [
          "sushi",
          "pizza",
          "burger",
          "paella",
          "tacos",
          "pasta",
          "salad",
          "ice cream",
          "chocolate",
          "coffee",
          "tea",
          "juice",
          "soda",
          "beer",
          "wine",
          "whisky",
          "cocktail",
          "smoothie",
          "shake",
          "milkshake",
          "burrito",
          "quesadilla",
          "empanada",
          "croissant",
          "donut",
          "muffin",
          "brownie",
          "cookie",
          "tart",
          "flan",
        ],
        themes: ["food"],
      },
      animals: {
        words: [
          "elephant",
          "giraffe",
          "lion",
          "tiger",
          "bear",
          "monkey",
          "zebra",
          "hippopotamus",
          "crocodile",
          "rhinoceros",
          "leopard",
          "panther",
          "cheetah",
          "wolf",
          "fox",
          "deer",
          "moose",
          "buffalo",
          "bison",
          "antelope",
          "kangaroo",
          "koala",
          "panda",
          "gorilla",
          "chimpanzee",
          "orangutan",
          "lemur",
          "meerkat",
          "raccoon",
          "badger",
        ],
        themes: ["animals"],
      },
      entertainment: {
        words: [
          "actor",
          "comedy",
          "drama",
          "stage",
          "concert",
          "festival",
          "show",
          "videogame",
          "novel",
          "series",
          "documentary",
          "animation",
          "thriller",
          "action",
          "romance",
          "fantasy",
          "science fiction",
          "horror",
          "suspense",
          "musical",
          "opera",
          "ballet",
          "dance",
          "circus",
          "magic",
          "illusionism",
          "stand-up",
          "sketch",
          "improvisation",
          "karaoke",
        ],
        themes: ["entertainment"],
      },
      sports: {
        words: [
          "football",
          "basketball",
          "tennis",
          "swimming",
          "athletics",
          "cycling",
          "volleyball",
          "handball",
          "rugby",
          "golf",
          "baseball",
          "softball",
          "hockey",
          "skating",
          "skiing",
          "snowboarding",
          "surfing",
          "boxing",
          "wrestling",
          "judo",
          "karate",
          "taekwondo",
          "gymnastics",
          "weightlifting",
          "climbing",
          "rowing",
          "sailing",
          "diving",
          "polo",
          "cricket",
        ],
        themes: ["sports"],
      },
      geography: {
        words: [
          "mountain",
          "ocean",
          "continent",
          "desert",
          "jungle",
          "valley",
          "peninsula",
          "archipelago",
          "range",
          "plateau",
          "volcano",
          "crater",
          "glacier",
          "iceberg",
          "tundra",
          "savanna",
          "prairie",
          "steppe",
          "pampa",
          "plain",
          "delta",
          "estuary",
          "fjord",
          "bay",
          "gulf",
          "cape",
          "strait",
          "channel",
          "lagoon",
          "swamp",
        ],
        themes: ["geography"],
      },
      music: {
        words: [
          "guitar",
          "piano",
          "drums",
          "violin",
          "saxophone",
          "trumpet",
          "flute",
          "harp",
          "accordion",
          "bass",
          "clarinet",
          "oboe",
          "bassoon",
          "tuba",
          "horn",
          "trombone",
          "xylophone",
          "marimba",
          "timpani",
          "bongo",
          "conga",
          "cajón",
          "tambourine",
          "castanets",
          "harmonica",
          "ukulele",
          "banjo",
          "mandolin",
          "zither",
          "lute",
        ],
        themes: ["music"],
      },
      professions: {
        words: [
          "engineer",
          "architect",
          "lawyer",
          "journalist",
          "photographer",
          "electrician",
          "mechanic",
          "carpenter",
          "veterinarian",
          "dentist",
          "accountant",
          "economist",
          "administrator",
          "manager",
          "secretary",
          "receptionist",
          "librarian",
          "archivist",
          "translator",
          "interpreter",
          "designer",
          "illustrator",
          "animator",
          "programmer",
          "analyst",
          "consultant",
          "advisor",
          "coach",
          "therapist",
          "psychologist",
        ],
        themes: ["professions"],
      },
      transport: {
        words: [
          "bus",
          "helicopter",
          "yacht",
          "tram",
          "subway",
          "railway",
          "cruise",
          "boat",
          "van",
          "scooter",
          "limousine",
          "convertible",
          "van",
          "pickup",
          "jeep",
          "SUV",
          "sedan",
          "coupe",
          "minivan",
          "trailer",
          "trailer",
          "locomotive",
          "wagon",
          "gondola",
          "cable car",
          "funicular",
          "monorail",
          "bullet train",
          "ferry",
          "catamaran",
        ],
        themes: ["transport"],
      },
      history: {
        words: [
          "empire",
          "revolution",
          "conquest",
          "civilization",
          "dynasty",
          "colony",
          "independence",
          "treaty",
          "alliance",
          "republic",
          "democracy",
          "monarchy",
          "feudalism",
          "nobility",
          "bourgeoisie",
          "reform",
          "renaissance",
          "enlightenment",
          "industrialization",
          "globalization",
          "world war",
          "civil war",
          "French revolution",
          "industrial revolution",
          "discovery",
          "exploration",
          "colonization",
          "emancipation",
          "abolition",
          "suffrage",
        ],
        themes: ["history"],
      },
      science: {
        words: [
          "atom",
          "cell",
          "energy",
          "gravity",
          "magnetism",
          "electricity",
          "ecosystem",
          "evolution",
          "genetics",
          "vaccine",
          "molecule",
          "protein",
          "enzyme",
          "vitamin",
          "hormone",
          "bacteria",
          "virus",
          "antibody",
          "DNA",
          "RNA",
          "photosynthesis",
          "respiration",
          "digestion",
          "circulation",
          "neuron",
          "synapse",
          "chromosome",
          "gene",
          "mutation",
          "selection",
        ],
        themes: ["science"],
      },
    },
    hard: {
      food: {
        words: [
          "caviar",
          "truffles",
          "foie gras",
          "sashimi",
          "risotto",
          "carpaccio",
          "ceviche",
          "gazpacho",
          "bouillabaisse",
          "tempura",
          "ratatouille",
          "coq au vin",
          "cassoulet",
          "bouillabaisse",
          "ossobuco",
          "tiramisu",
          "panna cotta",
          "crème brûlée",
          "soufflé",
          "macaron",
          "croissant",
          "brioche",
          "baguette",
          "ciabatta",
          "focaccia",
          "prosciutto",
          "mortadella",
          "salami",
          "chorizo",
          "blood sausage",
        ],
        themes: ["food"],
      },
      animals: {
        words: [
          "platypus",
          "koala",
          "kangaroo",
          "lemur",
          "meerkat",
          "okapi",
          "tapir",
          "pangolin",
          "quetzal",
          "axolotl",
          "tarsier",
          "aye-aye",
          "fossa",
          "binturong",
          "numbat",
          "wombat",
          "kiwi",
          "cassowary",
          "rhea",
          "emu",
          "capybara",
          "otter",
          "mink",
          "marten",
          "weasel",
          "polecat",
          "ferret",
          "chinchilla",
          "degu",
          "marmot",
        ],
        themes: ["animals"],
      },
      entertainment: {
        words: [
          "symphony",
          "opera",
          "ballet",
          "performance",
          "installation",
          "monologue",
          "improvisation",
          "pantomime",
          "cabaret",
          "vaudeville",
          "soliloquy",
          "interior monologue",
          "flashback",
          "flashforward",
          "ellipsis",
          "metaphor",
          "allegory",
          "symbolism",
          "expressionism",
          "surrealism",
          "dadaism",
          "futurism",
          "minimalism",
          "conceptualism",
          "abstraction",
          "figurativism",
          "realism",
          "naturalism",
          "romanticism",
          "classicism",
        ],
        themes: ["entertainment"],
      },
      sports: {
        words: [
          "fencing",
          "water polo",
          "badminton",
          "skeleton",
          "curling",
          "pentathlon",
          "triathlon",
          "climbing",
          "rowing",
          "sailing",
          "bobsleigh",
          "luge",
          "biathlon",
          "heptathlon",
          "decathlon",
          "pole vault",
          "discus throw",
          "javelin throw",
          "hammer throw",
          "shot put",
          "race walking",
          "cross country",
          "trail running",
          "ultramarathon",
          "ironman",
          "duathlon",
          "aquathlon",
          "parkour",
          "freerunning",
          "slackline",
        ],
        themes: ["sports"],
      },
      geography: {
        words: [
          "glacier",
          "canyon",
          "geyser",
          "fjord",
          "steppe",
          "taiga",
          "tundra",
          "mangrove",
          "estuary",
          "atoll",
          "reef",
          "archipelago",
          "peninsula",
          "isthmus",
          "cape",
          "promontory",
          "plateau",
          "highland",
          "depression",
          "basin",
          "fault",
          "tectonic plate",
          "oceanic ridge",
          "oceanic trench",
          "continental slope",
          "continental shelf",
          "abyss",
          "chasm",
          "sinkhole",
          "karst",
        ],
        themes: ["geography"],
      },
      music: {
        words: [
          "cello",
          "oboe",
          "double bass",
          "harpsichord",
          "bassoon",
          "horn",
          "timpani",
          "harp",
          "accordion",
          "saxophone",
          "harpsichord",
          "virginal",
          "spinet",
          "psaltery",
          "dulcimer",
          "hurdy-gurdy",
          "bagpipe",
          "shawm",
          "sackbut",
          "cornet",
          "serpent",
          "ophicleide",
          "euphonium",
          "sousaphone",
          "flugelhorn",
          "mellophone",
          "Wagner tuba",
          "contrabassoon",
          "piccolo",
          "recorder",
        ],
        themes: ["music"],
      },
      professions: {
        words: [
          "neurosurgeon",
          "astronaut",
          "archaeologist",
          "paleontologist",
          "cartographer",
          "oceanographer",
          "sommelier",
          "taxidermist",
          "goldsmith",
          "watchmaker",
          "gemologist",
          "numismatist",
          "philatelist",
          "heraldist",
          "genealogist",
          "graphologist",
          "chiromancer",
          "astrologer",
          "fortune teller",
          "clairvoyant",
          "medium",
          "exorcist",
          "shaman",
          "druid",
          "alchemist",
          "necromancer",
          "sorcerer",
          "warlock",
          "wizard",
          "illusionist",
        ],
        themes: ["professions"],
      },
      transport: {
        words: [
          "airship",
          "cable car",
          "funicular",
          "seaplane",
          "hovercraft",
          "monorail",
          "icebreaker",
          "catamaran",
          "zeppelin",
          "sled",
          "gondola",
          "rickshaw",
          "tuk-tuk",
          "moped",
          "scooter",
          "auto rickshaw",
          "wagon",
          "stagecoach",
          "carriage",
          "berlin",
          "landau",
          "phaeton",
          "tilbury",
          "cabriolet",
          "coupe",
          "victoria",
          "break",
          "omnibus",
          "tartana",
          "cart",
        ],
        themes: ["transport"],
      },
      history: {
        words: [
          "feudalism",
          "renaissance",
          "enlightenment",
          "crusades",
          "inquisition",
          "armistice",
          "treaty",
          "monarchy",
          "senate",
          "republic",
          "oligarchy",
          "plutocracy",
          "aristocracy",
          "theocracy",
          "autocracy",
          "tyranny",
          "dictatorship",
          "totalitarianism",
          "fascism",
          "communism",
          "socialism",
          "capitalism",
          "liberalism",
          "conservatism",
          "anarchism",
          "nihilism",
          "existentialism",
          "pragmatism",
          "utilitarianism",
          "relativism",
        ],
        themes: ["history"],
      },
      science: {
        words: [
          "photosynthesis",
          "mitochondria",
          "electromagnet",
          "thermodynamics",
          "chromosome",
          "neutrino",
          "catalyst",
          "enzyme",
          "polymer",
          "isotope",
          "ribosome",
          "lysosome",
          "peroxisome",
          "endoplasmic reticulum",
          "Golgi apparatus",
          "cytoskeleton",
          "plasma membrane",
          "cell wall",
          "chloroplast",
          "vacuole",
          "nucleus",
          "nucleolus",
          "chromatin",
          "histone",
          "telomere",
          "centromere",
          "chromatid",
          "mitotic spindle",
          "cytokinesis",
          "meiosis",
        ],
        themes: ["science"],
      },
    },
    extreme: {
      food: {
        words: [
          "umami",
          "fermentation",
          "emulsion",
          "gelification",
          "osmosis",
          "caramelization",
          "molecular",
          "deconstruction",
          "spherification",
          "nitrogen",
          "sous-vide",
          "lyophilization",
          "texturization",
          "gelification",
          "foamification",
          "encapsulation",
          "cryogenics",
          "hydrocolloids",
          "emulsifiers",
          "stabilizers",
          "thickeners",
          "gelling agents",
          "acidulants",
          "antioxidants",
          "preservatives",
          "colorants",
          "flavorings",
          "enhancers",
          "sweeteners",
          "enzymes",
        ],
        themes: ["food"],
      },
      animals: {
        words: [
          "echidna",
          "narwhal",
          "axolotl",
          "manta ray",
          "jellyfish",
          "cephalopod",
          "cnidarian",
          "arthropod",
          "annelid",
          "mollusk",
          "platyhelminth",
          "nemertine",
          "nematode",
          "rotifer",
          "tardigrade",
          "onychophoran",
          "priapulid",
          "kinorhynch",
          "loriciferan",
          "gastrotrich",
          "cephalochordate",
          "tunicate",
          "lamprey",
          "hagfish",
          "chondrichthyan",
          "osteichthyan",
          "dipnoan",
          "actinopterygian",
          "sarcopterygian",
          "amphibian",
        ],
        themes: ["animals"],
      },
      entertainment: {
        words: [
          "cinematography",
          "scenography",
          "dramaturgy",
          "choreography",
          "direction",
          "production",
          "postproduction",
          "editing",
          "screenplay",
          "narrative",
          "montage",
          "lighting",
          "sound design",
          "musicalization",
          "setting",
          "characterization",
          "makeup",
          "costume",
          "props",
          "set dressing",
          "storyboard",
          "animatic",
          "previz",
          "VFX",
          "CGI",
          "motion capture",
          "rotoscoping",
          "compositing",
          "color grading",
          "mastering",
        ],
        themes: ["entertainment"],
      },
      sports: {
        words: [
          "weightlifting",
          "taekwondo",
          "jiu-jitsu",
          "kitesurfing",
          "paragliding",
          "mountaineering",
          "speleology",
          "parkour",
          "slackline",
          "freerunning",
          "wingsuit",
          "base jumping",
          "bungee jumping",
          "rappelling",
          "canyoneering",
          "canyoning",
          "rafting",
          "extreme kayaking",
          "snowkiting",
          "speedriding",
          "ski mountaineering",
          "telemark",
          "freestyle",
          "big air",
          "halfpipe",
          "slopestyle",
          "boardercross",
          "skicross",
          "moguls",
          "aerials",
        ],
        themes: ["sports"],
      },
      geography: {
        words: [
          "orogenesis",
          "tectonics",
          "geomorphology",
          "stratigraphy",
          "paleoclimatology",
          "hydrology",
          "topography",
          "cartography",
          "geodesy",
          "bathymetry",
          "petrology",
          "mineralogy",
          "crystallography",
          "sedimentology",
          "paleontology",
          "paleogeography",
          "paleoecology",
          "biostratigraphy",
          "chronostratigraphy",
          "magnetostratigraphy",
          "seismology",
          "volcanology",
          "geochemistry",
          "geophysics",
          "geomorphometry",
          "morphometry",
          "morphodynamics",
          "morphostructure",
          "morphoclimatic",
          "morphogenesis",
        ],
        themes: ["geography"],
      },
      music: {
        words: [
          "counterpoint",
          "harmony",
          "polyphony",
          "dodecaphony",
          "serialism",
          "tonality",
          "modality",
          "cadence",
          "modulation",
          "temperament",
          "dissonance",
          "consonance",
          "interval",
          "chord",
          "scale",
          "mode",
          "degree",
          "tonal function",
          "harmonic progression",
          "circle of fifths",
          "enharmonic",
          "chromaticism",
          "alteration",
          "flat",
          "sharp",
          "natural",
          "double flat",
          "double sharp",
          "transposition",
          "inversion",
        ],
        themes: ["music"],
      },
      professions: {
        words: [
          "epidemiologist",
          "radiologist",
          "endocrinologist",
          "nephrologist",
          "hematologist",
          "immunologist",
          "geneticist",
          "bioinformatician",
          "astrophysicist",
          "nanotechnologist",
          "neurobiologist",
          "neuroscientist",
          "neurophysiologist",
          "neuropsychologist",
          "neuropsychiatrist",
          "psychoneurologist",
          "biophysicist",
          "biochemist",
          "biomedical",
          "biotechnologist",
          "cryptographer",
          "cryptologist",
          "cryptanalyst",
          "steganographer",
          "digital forensics",
          "computer expert",
          "security auditor",
          "pentester",
          "ethical hacker",
          "reverse engineer",
        ],
        themes: ["professions"],
      },
      transport: {
        words: [
          "maglev",
          "hypersonic",
          "rocket",
          "shuttle",
          "propulsion",
          "vectorial",
          "spacecraft",
          "capsule",
          "satellite",
          "probe",
          "launcher",
          "lunar module",
          "rover",
          "orbiter",
          "lander",
          "superorbital",
          "suborbital",
          "geostationary orbit",
          "polar orbit",
          "elliptical orbit",
          "ion propulsion",
          "nuclear propulsion",
          "solar sail",
          "plasma engine",
          "ramjet",
          "scramjet",
          "pulsejet",
          "turbojet",
          "turbofan",
          "turboprop",
        ],
        themes: ["transport"],
      },
      history: {
        words: [
          "paleolithic",
          "neolithic",
          "mesozoic",
          "cenozoic",
          "hellenism",
          "romanization",
          "byzantine",
          "carolingian",
          "ottoman",
          "absolutism",
          "mercantilism",
          "physiocracy",
          "cameralism",
          "colonialism",
          "imperialism",
          "protectionism",
          "free trade",
          "bullionism",
          "chartism",
          "luddism",
          "fourierism",
          "owenism",
          "saint-simonism",
          "proudhonism",
          "bakuninism",
          "kropotkinism",
          "blanquism",
          "sorelianism",
          "syndicalism",
          "corporatism",
        ],
        themes: ["history"],
      },
      science: {
        words: [
          "antimatter",
          "quark",
          "boson",
          "entropy",
          "superconductor",
          "relativity",
          "quantum mechanics",
          "singularity",
          "black hole",
          "antiparticle",
          "fermion",
          "hadron",
          "lepton",
          "baryon",
          "meson",
          "gluon",
          "photon",
          "graviton",
          "neutrino",
          "muon",
          "tauon",
          "electron",
          "positron",
          "proton",
          "antiproton",
          "neutron",
          "antineutron",
          "deuteron",
          "triton",
          "alpha",
        ],
        themes: ["science"],
      },
    },
  },
};

// ========================================
// PALABRAS RELACIONADAS EXPANDIDO (250+ pares por idioma)
// ========================================

const RELATED_WORDS = {
  es: {
    // ===== COMIDA Y BEB IDAS (60 pares) =====
    // Alimentos básicos
    pan: "galleta",
    galleta: "bizcocho",
    bizcocho: "pastel",
    leche: "yogur",
    yogur: "queso",
    queso: "mantequilla",
    agua: "jugo",
    jugo: "refresco",
    refresco: "té",
    arroz: "pasta",
    pasta: "fideos",
    fideos: "tallarines",

    // Frutas
    manzana: "pera",
    pera: "durazno",
    durazno: "melocotón",
    naranja: "mandarina",
    mandarina: "limón",
    limón: "lima",
    uva: "cereza",
    cereza: "fresa",
    fresa: "frambuesa",
    plátano: "banana",
    banana: "plátano macho",

    // Carnes y pescados
    pollo: "pavo",
    pavo: "pato",
    pato: "ganso",
    carne: "bistec",
    bistec: "chuleta",
    chuleta: "costilla",
    pescado: "marisco",
    marisco: "camarón",
    camarón: "langosta",
    jamón: "salami",
    salami: "chorizo",
    chorizo: "salchicha",

    // Bebidas
    café: "té",
    té: "infusión",
    infusión: "mate",
    cerveza: "vino",
    vino: "champán",
    champán: "sidra",
    whisky: "ron",
    ron: "vodka",
    vodka: "tequila",

    // Comida internacional
    pizza: "hamburguesa",
    hamburguesa: "hot dog",
    "hot dog": "sándwich",
    sushi: "sashimi",
    sashimi: "tempura",
    tempura: "ramen",
    tacos: "burrito",
    burrito: "quesadilla",
    quesadilla: "enchilada",
    paella: "risotto",
    risotto: "arroz",
    "arroz con leche": "flan",

    // Postres
    helado: "paleta",
    paleta: "nieve",
    nieve: "sorbete",
    chocolate: "caramelo",
    caramelo: "dulce",
    dulce: "bombón",
    tarta: "pastel",
    pastel: "torta",
    torta: "bizcocho",

    // ===== ANIMALES (70 pares) =====
    // Domésticos
    perro: "lobo",
    lobo: "zorro",
    zorro: "coyote",
    gato: "tigre",
    tigre: "león",
    león: "leopardo",
    caballo: "cebra",
    cebra: "burro",
    burro: "mula",
    vaca: "búfalo",
    búfalo: "bisonte",
    bisonte: "toro",
    gallina: "gallo",
    gallo: "pollo",
    pollo: "pavo",

    // Salvajes grandes
    elefante: "mamut",
    mamut: "rinoceronte",
    rinoceronte: "hipopótamo",
    jirafa: "okapi",
    okapi: "antílope",
    antílope: "gacela",
    oso: "oso pardo",
    "oso pardo": "oso polar",
    "oso polar": "panda",
    mono: "chimpancé",
    chimpancé: "gorila",
    gorila: "orangután",

    // Aves
    águila: "halcón",
    halcón: "buitre",
    buitre: "cóndor",
    pájaro: "loro",
    loro: "guacamayo",
    guacamayo: "cacatúa",
    pato: "ganso",
    ganso: "cisne",
    cisne: "flamenco",
    paloma: "tórtola",
    tórtola: "gorrión",
    gorrión: "canario",

    // Reptiles y anfibios
    serpiente: "víbora",
    víbora: "cobra",
    cobra: "pitón",
    lagarto: "iguana",
    iguana: "camaleón",
    camaleón: "gecko",
    rana: "sapo",
    sapo: "salamandra",
    salamandra: "tritón",
    tortuga: "galápago",
    galápago: "tortuga marina",

    // Insectos y arácnidos
    abeja: "avispa",
    avispa: "avispón",
    avispón: "abejorro",
    mariposa: "polilla",
    polilla: "oruga",
    oruga: "larva",
    araña: "escorpión",
    escorpión: "alacrán",
    alacrán: "ciempiés",
    hormiga: "termita",
    termita: "abeja",
    mosca: "mosquito",

    // Marinos
    delfín: "ballena",
    ballena: "orca",
    orca: "cachalote",
    tiburón: "raya",
    raya: "mantarraya",
    mantarraya: "pez espada",
    pez: "sardina",
    sardina: "atún",
    atún: "salmón",
    pulpo: "calamar",
    calamar: "sepia",
    sepia: "nautilo",

    // ===== MÚSICA (50 pares) =====
    // Cuerdas
    guitarra: "piano",
    piano: "teclado",
    teclado: "órgano",
    violín: "viola",
    viola: "violonchelo",
    violonchelo: "contrabajo",
    arpa: "cítara",
    cítara: "laúd",
    laúd: "mandolina",
    ukelele: "banjo",
    banjo: "guitarra",
    contrabajo: "bajo eléctrico",

    // Viento
    flauta: "clarinete",
    clarinete: "oboe",
    oboe: "fagot",
    saxofón: "trompeta",
    trompeta: "trombón",
    trombón: "tuba",
    trompa: "corneta",
    corneta: "clarín",
    clarín: "bombardino",
    armónica: "acordeón",
    acordeón: "bandoneón",
    bandoneón: "concertina",

    // Percusión
    batería: "percusión",
    percusión: "tambor",
    tambor: "timbal",
    bongó: "conga",
    conga: "djembé",
    djembé: "cajón",
    xilófono: "marimba",
    marimba: "vibráfono",
    vibráfono: "glockenspiel",
    pandereta: "castañuelas",
    castañuelas: "maracas",
    maracas: "claves",
    campana: "gong",
    gong: "címbalos",
    címbalos: "platillos",

    // ===== DEPORTES (50 pares) =====
    // Balón
    fútbol: "rugby",
    rugby: "fútbol americano",
    "fútbol americano": "fútbol australiano",
    baloncesto: "balonmano",
    balonmano: "voleibol",
    voleibol: "vóley playa",
    tenis: "bádminton",
    bádminton: "squash",
    squash: "racquetball",
    béisbol: "softbol",
    softbol: "críquet",
    críquet: "polo",

    // Acuáticos
    natación: "buceo",
    buceo: "snorkel",
    snorkel: "apnea",
    surf: "bodyboard",
    bodyboard: "paddle surf",
    "paddle surf": "windsurf",
    waterpolo: "nado sincronizado",
    "nado sincronizado": "clavados",
    remo: "piragüismo",
    piragüismo: "kayak",
    kayak: "canoa",

    // Invierno
    esquí: "snowboard",
    snowboard: "esquí de fondo",
    "esquí de fondo": "biatlón",
    patinaje: "hockey",
    hockey: "curling",
    curling: "skeleton",
    bobsleigh: "luge",
    luge: "trineo",
    trineo: "mushing",

    // Combate
    boxeo: "lucha",
    lucha: "lucha libre",
    "lucha libre": "judo",
    judo: "karate",
    karate: "taekwondo",
    taekwondo: "kung fu",
    esgrima: "kendo",
    kendo: "esgrima histórica",
    "muay thai": "kickboxing",

    // Otros
    atletismo: "gimnasia",
    gimnasia: "gimnasia rítmica",
    "gimnasia rítmica": "acrobacia",
    ciclismo: "motociclismo",
    motociclismo: "automovilismo",
    automovilismo: "karting",
    golf: "minigolf",
    minigolf: "croquet",
    croquet: "petanca",

    // ===== PROFESIONES (40 pares) =====
    médico: "enfermero",
    enfermero: "paramédico",
    paramédico: "cirujano",
    profesor: "maestro",
    maestro: "tutor",
    tutor: "instructor",
    ingeniero: "arquitecto",
    arquitecto: "diseñador",
    diseñador: "dibujante",
    abogado: "juez",
    juez: "fiscal",
    fiscal: "notario",
    chef: "cocinero",
    cocinero: "pastelero",
    pastelero: "panadero",
    piloto: "azafata",
    azafata: "controlador",
    controlador: "mecánico de aviación",
    policía: "detective",
    detective: "investigador",
    investigador: "forense",
    bombero: "rescatista",
    rescatista: "socorrista",
    socorrista: "salvavidas",
    artista: "pintor",
    pintor: "escultor",
    escultor: "ceramista",
    músico: "cantante",
    cantante: "compositor",
    compositor: "productor",
    escritor: "periodista",
    periodista: "editor",
    editor: "corrector",
    fotógrafo: "camarógrafo",
    camarógrafo: "director",
    director: "productor de cine",
    actor: "actriz",
    actriz: "modelo",
    modelo: "presentador",
    carpintero: "ebanista",
    ebanista: "tallador",
    tallador: "artesano",

    // ===== TRANSPORTE (35 pares) =====
    coche: "camión",
    camión: "autobús",
    autobús: "minibús",
    bicicleta: "motocicleta",
    motocicleta: "scooter",
    scooter: "monopatín",
    avión: "helicóptero",
    helicóptero: "avioneta",
    avioneta: "planeador",
    barco: "yate",
    yate: "velero",
    velero: "catamarán",
    tren: "metro",
    metro: "tranvía",
    tranvía: "trolebús",
    taxi: "uber",
    uber: "colectivo",
    colectivo: "buseta",
    ambulancia: "patrulla",
    patrulla: "carro de bomberos",
    grúa: "montacargas",
    montacargas: "carretilla",
    carretilla: "elevador",
    "globo aerostático": "dirigible",
    dirigible: "zepelín",
    cohete: "transbordador",
    transbordador: "nave espacial",
    submarino: "batiscafo",
    batiscafo: "sumergible",

    // ===== GEOGRAFÍA (40 pares) =====
    montaña: "colina",
    colina: "cerro",
    cerro: "loma",
    río: "arroyo",
    arroyo: "riachuelo",
    riachuelo: "quebrada",
    lago: "laguna",
    laguna: "estanque",
    estanque: "charca",
    océano: "mar",
    mar: "golfo",
    golfo: "bahía",
    playa: "costa",
    costa: "orilla",
    orilla: "ribera",
    bosque: "selva",
    selva: "jungla",
    jungla: "floresta",
    desierto: "oasis",
    oasis: "sabana",
    sabana: "pradera",
    isla: "islote",
    islote: "atolón",
    atolón: "arrecife",
    volcán: "cráter",
    cráter: "caldera",
    caldera: "géiser",
    glaciar: "iceberg",
    iceberg: "témpano",
    témpano: "hielo",
    valle: "cañón",
    cañón: "desfiladero",
    desfiladero: "garganta",
    cueva: "caverna",
    caverna: "gruta",
    gruta: "sima",
    península: "cabo",
    cabo: "punta",
    punta: "promontorio",

    // ===== CIENCIA (35 pares) =====
    átomo: "molécula",
    molécula: "compuesto",
    compuesto: "elemento",
    célula: "bacteria",
    bacteria: "virus",
    virus: "microorganismo",
    planeta: "asteroide",
    asteroide: "cometa",
    cometa: "meteorito",
    estrella: "sol",
    sol: "astro",
    astro: "constelación",
    luna: "satélite",
    satélite: "luna artificial",
    órbita: "trayectoria",
    telescopio: "microscopio",
    microscopio: "lupa",
    lupa: "lente",
    ADN: "ARN",
    ARN: "gen",
    gen: "cromosoma",
    oxígeno: "hidrógeno",
    hidrógeno: "nitrógeno",
    nitrógeno: "carbono",
    electrón: "protón",
    protón: "neutrón",
    neutrón: "quark",
    energía: "fuerza",
    fuerza: "potencia",
    potencia: "trabajo",
    gravedad: "magnetismo",
    magnetismo: "electricidad",
    electricidad: "electromagnetismo",
    fotosíntesis: "respiración",
    respiración: "digestión",
    digestión: "metabolismo",

    // ===== CINE Y TV (30 pares) =====
    película: "serie",
    serie: "episodio",
    episodio: "capítulo",
    actor: "actriz",
    actriz: "protagonista",
    protagonista: "estrella",
    director: "productor",
    productor: "guionista",
    guionista: "escritor",
    comedia: "drama",
    drama: "thriller",
    thriller: "suspenso",
    animación: "documental",
    documental: "reportaje",
    reportaje: "noticiario",
    cine: "teatro",
    teatro: "escenario",
    escenario: "plató",
    pantalla: "proyector",
    proyector: "cine",
    televisión: "monitor",
    estreno: "premier",
    premier: "lanzamiento",
    lanzamiento: "debut",
    tráiler: "avance",
    avance: "teaser",
    teaser: "promocional",
    Oscar: "Emmy",
    Emmy: "Globo de Oro",
    "Globo de Oro": "premio",

    // ===== HISTORIA (25 pares) =====
    rey: "emperador",
    emperador: "monarca",
    monarca: "soberano",
    reina: "emperatriz",
    emperatriz: "princesa",
    princesa: "infanta",
    guerra: "batalla",
    batalla: "combate",
    combate: "conflicto",
    castillo: "fortaleza",
    fortaleza: "ciudadela",
    ciudadela: "alcázar",
    espada: "sable",
    sable: "florete",
    florete: "espadón",
    armadura: "cota",
    cota: "coraza",
    coraza: "peto",
    corona: "cetro",
    cetro: "trono",
    trono: "diadema",
    imperio: "reino",
    reino: "nación",
    nación: "estado",
    conquista: "invasión",
    invasión: "ocupación",
    ocupación: "colonización",
    revolución: "rebelión",
    rebelión: "levantamiento",
    levantamiento: "insurrección",
  },
  en: {
    // ===== FOOD & DRINKS (60 pairs) =====
    // Basic foods
    bread: "cookie",
    cookie: "biscuit",
    biscuit: "cake",
    milk: "yogurt",
    yogurt: "cheese",
    cheese: "butter",
    water: "juice",
    juice: "soda",
    soda: "tea",
    rice: "pasta",
    pasta: "noodles",
    noodles: "spaghetti",

    // Fruits
    apple: "pear",
    pear: "peach",
    peach: "apricot",
    orange: "tangerine",
    tangerine: "lemon",
    lemon: "lime",
    grape: "cherry",
    cherry: "strawberry",
    strawberry: "raspberry",
    banana: "plantain",
    plantain: "coconut",

    // Meats and fish
    chicken: "turkey",
    turkey: "duck",
    duck: "goose",
    meat: "steak",
    steak: "chop",
    chop: "rib",
    fish: "seafood",
    seafood: "shrimp",
    shrimp: "lobster",
    ham: "salami",
    salami: "sausage",
    sausage: "hotdog",

    // Beverages
    coffee: "tea",
    tea: "infusion",
    infusion: "herbal tea",
    beer: "wine",
    wine: "champagne",
    champagne: "cider",
    whisky: "rum",
    rum: "vodka",
    vodka: "tequila",

    // International food
    pizza: "burger",
    burger: "hot dog",
    "hot dog": "sandwich",
    sushi: "sashimi",
    sashimi: "tempura",
    tempura: "ramen",
    tacos: "burrito",
    burrito: "quesadilla",
    quesadilla: "enchilada",
    paella: "risotto",
    risotto: "rice",
    "rice pudding": "flan",

    // Desserts
    "ice cream": "popsicle",
    popsicle: "sorbet",
    sorbet: "gelato",
    chocolate: "candy",
    candy: "sweet",
    sweet: "bonbon",
    tart: "cake",
    cake: "pie",
    pie: "pastry",

    // ===== ANIMALS (70 pairs) =====
    // Domestic
    dog: "wolf",
    wolf: "fox",
    fox: "coyote",
    cat: "tiger",
    tiger: "lion",
    lion: "leopard",
    horse: "zebra",
    zebra: "donkey",
    donkey: "mule",
    cow: "buffalo",
    buffalo: "bison",
    bison: "bull",
    chicken: "rooster",
    rooster: "hen",
    hen: "turkey",

    // Large wild
    elephant: "mammoth",
    mammoth: "rhinoceros",
    rhinoceros: "hippopotamus",
    giraffe: "okapi",
    okapi: "antelope",
    antelope: "gazelle",
    bear: "brown bear",
    "brown bear": "polar bear",
    "polar bear": "panda",
    monkey: "chimpanzee",
    chimpanzee: "gorilla",
    gorilla: "orangutan",

    // Birds
    eagle: "hawk",
    hawk: "vulture",
    vulture: "condor",
    bird: "parrot",
    parrot: "macaw",
    macaw: "cockatoo",
    duck: "goose",
    goose: "swan",
    swan: "flamingo",
    pigeon: "dove",
    dove: "sparrow",
    sparrow: "canary",

    // Reptiles and amphibians
    snake: "viper",
    viper: "cobra",
    cobra: "python",
    lizard: "iguana",
    iguana: "chameleon",
    chameleon: "gecko",
    frog: "toad",
    toad: "salamander",
    salamander: "newt",
    turtle: "tortoise",
    tortoise: "sea turtle",

    // Insects and arachnids
    bee: "wasp",
    wasp: "hornet",
    hornet: "bumblebee",
    butterfly: "moth",
    moth: "caterpillar",
    caterpillar: "larva",
    spider: "scorpion",
    scorpion: "tarantula",
    tarantula: "centipede",
    ant: "termite",
    termite: "bee",
    fly: "mosquito",

    // Marine
    dolphin: "whale",
    whale: "orca",
    orca: "sperm whale",
    shark: "ray",
    ray: "manta ray",
    "manta ray": "swordfish",
    fish: "sardine",
    sardine: "tuna",
    tuna: "salmon",
    octopus: "squid",
    squid: "cuttlefish",
    cuttlefish: "nautilus",

    // ===== MUSIC (50 pairs) =====
    // Strings
    guitar: "piano",
    piano: "keyboard",
    keyboard: "organ",
    violin: "viola",
    viola: "cello",
    cello: "double bass",
    harp: "zither",
    zither: "lute",
    lute: "mandolin",
    ukulele: "banjo",
    banjo: "guitar",
    "double bass": "bass guitar",

    // Wind
    flute: "clarinet",
    clarinet: "oboe",
    oboe: "bassoon",
    saxophone: "trumpet",
    trumpet: "trombone",
    trombone: "tuba",
    horn: "cornet",
    cornet: "bugle",
    bugle: "euphonium",
    harmonica: "accordion",
    accordion: "concertina",
    concertina: "melodeon",

    // Percussion
    drums: "percussion",
    percussion: "drum",
    drum: "timpani",
    bongo: "conga",
    conga: "djembe",
    djembe: "cajón",
    xylophone: "marimba",
    marimba: "vibraphone",
    vibraphone: "glockenspiel",
    tambourine: "castanets",
    castanets: "maracas",
    maracas: "claves",
    bell: "gong",
    gong: "cymbals",
    cymbals: "crash",

    // ===== SPORTS (50 pairs) =====
    // Ball sports
    football: "rugby",
    rugby: "american football",
    "american football": "australian football",
    basketball: "handball",
    handball: "volleyball",
    volleyball: "beach volleyball",
    tennis: "badminton",
    badminton: "squash",
    squash: "racquetball",
    baseball: "softball",
    softball: "cricket",
    cricket: "polo",

    // Water sports
    swimming: "diving",
    diving: "snorkeling",
    snorkeling: "freediving",
    surfing: "bodyboarding",
    bodyboarding: "paddle boarding",
    "paddle boarding": "windsurfing",
    "water polo": "synchronized swimming",
    "synchronized swimming": "diving",
    rowing: "canoeing",
    canoeing: "kayaking",
    kayaking: "rafting",

    // Winter sports
    skiing: "snowboarding",
    snowboarding: "cross-country skiing",
    "cross-country skiing": "biathlon",
    skating: "hockey",
    hockey: "curling",
    curling: "skeleton",
    bobsleigh: "luge",
    luge: "sledding",
    sledding: "dog sledding",

    // Combat sports
    boxing: "wrestling",
    wrestling: "freestyle wrestling",
    "freestyle wrestling": "judo",
    judo: "karate",
    karate: "taekwondo",
    taekwondo: "kung fu",
    fencing: "kendo",
    kendo: "historical fencing",
    "muay thai": "kickboxing",

    // Others
    athletics: "gymnastics",
    gymnastics: "rhythmic gymnastics",
    "rhythmic gymnastics": "acrobatics",
    cycling: "motorcycling",
    motorcycling: "motor racing",
    "motor racing": "karting",
    golf: "mini golf",
    "mini golf": "croquet",
    croquet: "petanque",

    // ===== PROFESSIONS (40 pairs) =====
    doctor: "nurse",
    nurse: "paramedic",
    paramedic: "surgeon",
    teacher: "professor",
    professor: "tutor",
    tutor: "instructor",
    engineer: "architect",
    architect: "designer",
    designer: "draftsman",
    lawyer: "judge",
    judge: "prosecutor",
    prosecutor: "notary",
    chef: "cook",
    cook: "pastry chef",
    "pastry chef": "baker",
    pilot: "flight attendant",
    "flight attendant": "air traffic controller",
    "air traffic controller": "aircraft mechanic",
    police: "detective",
    detective: "investigator",
    investigator: "forensic scientist",
    firefighter: "rescuer",
    rescuer: "lifeguard",
    lifeguard: "coast guard",
    artist: "painter",
    painter: "sculptor",
    sculptor: "ceramist",
    musician: "singer",
    singer: "composer",
    composer: "producer",
    writer: "journalist",
    journalist: "editor",
    editor: "proofreader",
    photographer: "cameraman",
    cameraman: "director",
    director: "film producer",
    actor: "actress",
    actress: "model",
    model: "presenter",
    carpenter: "cabinetmaker",
    cabinetmaker: "woodcarver",
    woodcarver: "craftsman",

    // ===== TRANSPORT (35 pairs) =====
    car: "truck",
    truck: "bus",
    bus: "minibus",
    bicycle: "motorcycle",
    motorcycle: "scooter",
    scooter: "skateboard",
    airplane: "helicopter",
    helicopter: "light aircraft",
    "light aircraft": "glider",
    boat: "yacht",
    yacht: "sailboat",
    sailboat: "catamaran",
    train: "subway",
    subway: "tram",
    tram: "trolleybus",
    taxi: "uber",
    uber: "shuttle",
    shuttle: "van",
    ambulance: "police car",
    "police car": "fire truck",
    crane: "forklift",
    forklift: "cart",
    cart: "elevator",
    "hot air balloon": "airship",
    airship: "zeppelin",
    rocket: "shuttle",
    shuttle: "spacecraft",
    submarine: "bathyscaphe",
    bathyscaphe: "submersible",

    // ===== GEOGRAPHY (40 pairs) =====
    mountain: "hill",
    hill: "mound",
    mound: "knoll",
    river: "stream",
    stream: "creek",
    creek: "brook",
    lake: "lagoon",
    lagoon: "pond",
    pond: "pool",
    ocean: "sea",
    sea: "gulf",
    gulf: "bay",
    beach: "coast",
    coast: "shore",
    shore: "bank",
    forest: "jungle",
    jungle: "rainforest",
    rainforest: "woods",
    desert: "oasis",
    oasis: "savanna",
    savanna: "prairie",
    island: "islet",
    islet: "atoll",
    atoll: "reef",
    volcano: "crater",
    crater: "caldera",
    caldera: "geyser",
    glacier: "iceberg",
    iceberg: "ice floe",
    "ice floe": "ice",
    valley: "canyon",
    canyon: "gorge",
    gorge: "ravine",
    cave: "cavern",
    cavern: "grotto",
    grotto: "chasm",
    peninsula: "cape",
    cape: "point",
    point: "headland",

    // ===== SCIENCE (35 pairs) =====
    atom: "molecule",
    molecule: "compound",
    compound: "element",
    cell: "bacteria",
    bacteria: "virus",
    virus: "microorganism",
    planet: "asteroid",
    asteroid: "comet",
    comet: "meteorite",
    star: "sun",
    sun: "celestial body",
    "celestial body": "constellation",
    moon: "satellite",
    satellite: "artificial moon",
    orbit: "trajectory",
    telescope: "microscope",
    microscope: "magnifying glass",
    "magnifying glass": "lens",
    DNA: "RNA",
    RNA: "gene",
    gene: "chromosome",
    oxygen: "hydrogen",
    hydrogen: "nitrogen",
    nitrogen: "carbon",
    electron: "proton",
    proton: "neutron",
    neutron: "quark",
    energy: "force",
    force: "power",
    power: "work",
    gravity: "magnetism",
    magnetism: "electricity",
    electricity: "electromagnetism",
    photosynthesis: "respiration",
    respiration: "digestion",
    digestion: "metabolism",

    // ===== CINEMA & TV (30 pairs) =====
    movie: "series",
    series: "episode",
    episode: "chapter",
    actor: "actress",
    actress: "protagonist",
    protagonist: "star",
    director: "producer",
    producer: "screenwriter",
    screenwriter: "writer",
    comedy: "drama",
    drama: "thriller",
    thriller: "suspense",
    animation: "documentary",
    documentary: "report",
    report: "news",
    cinema: "theater",
    theater: "stage",
    stage: "set",
    screen: "projector",
    projector: "cinema",
    television: "monitor",
    premiere: "opening",
    opening: "launch",
    launch: "debut",
    trailer: "preview",
    preview: "teaser",
    teaser: "promo",
    Oscar: "Emmy",
    Emmy: "Golden Globe",
    "Golden Globe": "award",

    // ===== HISTORY (25 pairs) =====
    king: "emperor",
    emperor: "monarch",
    monarch: "sovereign",
    queen: "empress",
    empress: "princess",
    princess: "infanta",
    war: "battle",
    battle: "combat",
    combat: "conflict",
    castle: "fortress",
    fortress: "citadel",
    citadel: "stronghold",
    sword: "saber",
    saber: "foil",
    foil: "broadsword",
    armor: "mail",
    mail: "cuirass",
    cuirass: "breastplate",
    crown: "scepter",
    scepter: "throne",
    throne: "diadem",
    empire: "kingdom",
    kingdom: "nation",
    nation: "state",
    conquest: "invasion",
    invasion: "occupation",
    occupation: "colonization",
    revolution: "rebellion",
    rebellion: "uprising",
    uprising: "insurrection",
  },
};

// ========================================
// CLASE GAME STATE - Gestión del estado del juego
// ========================================

class GameState {
  constructor() {
    this.reset();
  }

  reset() {
    this.totalPlayers = 0;
    this.currentPlayer = 0;
    this.impostorIndices = [];
    this.normalWord = "";
    this.impostorWord = "impostor";
    this.relatedWord = "";
    this.theme = "";
    this.playerNames = [];
    this.difficulty = "normal";
    this.category = "food";
    this.relatedWordsMode = false;
    this.currentLanguage = "es";
    this.currentTheme = "dark";
  }

  selectImpostors(count) {
    const available = Array.from(
      { length: this.totalPlayers },
      (_, i) => i + 1
    );
    this.impostorIndices = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * available.length);
      this.impostorIndices.push(available[randomIndex]);
      available.splice(randomIndex, 1);
    }
  }

  isImpostor(playerIndex) {
    return this.impostorIndices.includes(playerIndex);
  }

  getCurrentPlayerName() {
    return this.playerNames[this.currentPlayer - 1];
  }

  getWordForCurrentPlayer() {
    return this.isImpostor(this.currentPlayer)
      ? this.impostorWord
      : this.normalWord;
  }
}

// ========================================
// MÓDULO DOM - Cache de elementos
// ========================================

const DOM = {
  // Language and theme
  langES: null,
  langEN: null,
  themeDark: null,
  themeLight: null,
  themeRetro: null,
  themeNeon: null,

  // Setup screen
  difficulty: null,
  category: null,
  relatedWords: null,
  numPlayers: null,
  numImpostors: null,
  playerNamesList: null,
  startButton: null,
  loadingMessage: null,
  setupScreen: null,

  // Player screen
  playerScreen: null,
  currentPlayerNum: null,
  displayTheme: null,
  revealBtn: null,
  wordContainer: null,
  displayWord: null,

  // Tutorial
  tutorialModal: null,

  // Particles
  particles: null,

  init() {
    // Language and theme
    this.langES = document.getElementById("langES");
    this.langEN = document.getElementById("langEN");
    this.themeDark = document.getElementById("themeDark");
    this.themeLight = document.getElementById("themeLight");
    this.themeRetro = document.getElementById("themeRetro");
    this.themeNeon = document.getElementById("themeNeon");

    // Setup screen
    this.difficulty = document.getElementById("difficulty");
    this.category = document.getElementById("category");
    this.relatedWords = document.getElementById("relatedWords");
    this.numPlayers = document.getElementById("numPlayers");
    this.numImpostors = document.getElementById("numImpostors");
    this.playerNamesList = document.getElementById("playerNamesList");
    this.startButton = document.getElementById("startButton");
    this.loadingMessage = document.getElementById("loadingMessage");
    this.setupScreen = document.getElementById("pantalla-inicio");

    // Player screen
    this.playerScreen = document.getElementById("playerScreen");
    this.currentPlayerNum = document.getElementById("currentPlayerNum");
    this.displayTheme = document.getElementById("displayTheme");
    this.revealBtn = document.getElementById("revealBtn");
    this.wordContainer = document.getElementById("wordContainer");
    this.displayWord = document.getElementById("displayWord");

    // Tutorial
    this.tutorialModal = document.getElementById("tutorialModal");

    // Particles
    this.particles = document.getElementById("particles");
  },
};

// ========================================
// MÓDULO WORD GENERATOR - Generación de palabras
// ========================================

const WordGenerator = {
  async generate(difficulty, category, language) {
    try {
      return await this.generateFromAPI(difficulty, category, language);
    } catch (error) {
      console.warn("API failed, using local bank:", error.message);
      return this.generateFromLocalBank(difficulty, category, language);
    }
  },

  async generateFromAPI(difficulty, category, language) {
    const prompt = this.createPrompt(difficulty, category, language);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: CONFIG.API_MODEL,
        max_tokens: CONFIG.API_MAX_TOKENS,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return this.parseResponse(data);
  },

  createPrompt(difficulty, category, language) {
    const languageMap = { es: "español", en: "English" };
    const difficultyDescriptions = {
      easy: "very simple and common words (like dog, cat, house)",
      normal: "common everyday words",
      hard: "abstract or specific words",
      extreme: "technical or very uncommon words",
    };
    const categoryDescriptions = {
      food: "food and drinks",
      animals: "animals",
      entertainment: "movies and TV",
      sports: "sports",
      geography: "countries and cities",
      music: "music",
      professions: "professions",
      transport: "transport",
      history: "history",
      science: "science",
    };

    const targetLanguage = languageMap[language];
    const diffDesc = difficultyDescriptions[difficulty];
    const catDesc = categoryDescriptions[category];
    const timestamp = Date.now();
    const randomSeed = Math.random();

    return `Generate a completely random and unique word in ${targetLanguage} (timestamp: ${timestamp}, seed: ${randomSeed}).

Requirements:
- Difficulty level: ${difficulty} - ${diffDesc}
- Category: ${category} - ${catDesc}
- Must be a noun
- Each time generate a DIFFERENT word
- Also generate the general theme/category it belongs to

Respond ONLY in JSON format with this exact structure, without any additional text or markdown:
{"palabra": "your_random_word_in_${targetLanguage}", "tema": "general_category_in_${targetLanguage}"}`;
  },

  parseResponse(data) {
    const text = data.content.find((item) => item.type === "text")?.text || "";
    const cleanText = text.replace(/```json|```/g, "").trim();
    const result = JSON.parse(cleanText);

    console.log("Palabra generada:", result.palabra, "- Tema:", result.tema);
    return { word: result.palabra, theme: result.tema };
  },

  generateFromLocalBank(difficulty, category, language) {
    console.log(
      `Using local bank: lang=${language}, difficulty=${difficulty}, category=${category}`
    );

    // Try specific category
    if (WORD_BANK[language]?.[difficulty]?.[category]) {
      const data = WORD_BANK[language][difficulty][category];
      const randomWord =
        data.words[Math.floor(Math.random() * data.words.length)];
      const randomTheme =
        data.themes[Math.floor(Math.random() * data.themes.length)];
      console.log(
        `✓ Word found in bank[${language}][${difficulty}][${category}]: ${randomWord}`
      );
      return { word: randomWord, theme: randomTheme };
    }

    // Fallback to food in same difficulty
    if (WORD_BANK[language]?.[difficulty]?.food) {
      const data = WORD_BANK[language][difficulty].food;
      const randomWord =
        data.words[Math.floor(Math.random() * data.words.length)];
      const randomTheme =
        data.themes[Math.floor(Math.random() * data.themes.length)];
      console.log(
        `⚠ Category not found. Using bank[${language}][${difficulty}][food]: ${randomWord}`
      );
      return { word: randomWord, theme: randomTheme };
    }

    // Fallback to normal difficulty food
    if (WORD_BANK[language]?.normal?.food) {
      const data = WORD_BANK[language].normal.food;
      const randomWord =
        data.words[Math.floor(Math.random() * data.words.length)];
      const randomTheme =
        data.themes[Math.floor(Math.random() * data.themes.length)];
      console.log(
        `⚠ Difficulty not found. Using bank[${language}][normal][food]: ${randomWord}`
      );
      return { word: randomWord, theme: randomTheme };
    }

    // Ultimate fallback
    const ultimateFallback = {
      es: { word: "guitarra", theme: "música" },
      en: { word: "guitar", theme: "music" },
    };

    console.log(`⚠ Using ultimate fallback`);
    return ultimateFallback[language] || ultimateFallback.es;
  },
};

// ========================================
// MÓDULO RELATED WORDS - Palabras relacionadas
// ========================================

const RelatedWordsModule = {
  get(originalWord, language, difficulty, category) {
    // Try dictionary first
    const relatedWord = RELATED_WORDS[language]?.[originalWord.toLowerCase()];
    if (relatedWord) {
      console.log(
        `✓ Related word from dictionary: ${originalWord} → ${relatedWord}`
      );
      return relatedWord;
    }

    // Try to get another word from same category
    const alternativeWord = this.getAlternativeFromCategory(
      originalWord,
      language,
      difficulty,
      category
    );
    if (alternativeWord) {
      console.log(
        `✓ Related word from same category: ${originalWord} → ${alternativeWord}`
      );
      return alternativeWord;
    }

    // Use category fallback
    const categoryFallback = this.getCategoryFallback(language, category);
    if (categoryFallback) {
      console.log(`⚠ Using category fallback: ${categoryFallback}`);
      return categoryFallback;
    }

    // Ultimate fallback
    const ultimateFallback = {
      es: "cosa diferente",
      en: "different thing",
    };

    console.log(`⚠ Using ultimate fallback`);
    return ultimateFallback[language] || "related word";
  },

  getAlternativeFromCategory(originalWord, language, difficulty, category) {
    const data = WORD_BANK[language]?.[difficulty]?.[category];
    if (!data) return null;

    const availableWords = data.words.filter(
      (w) => w.toLowerCase() !== originalWord.toLowerCase()
    );

    if (availableWords.length === 0) return null;

    return availableWords[Math.floor(Math.random() * availableWords.length)];
  },

  getCategoryFallback(language, category) {
    const fallbacks = {
      es: {
        food: ["plato", "bebida", "comida", "alimento", "ingrediente"],
        animals: ["criatura", "mascota", "animal salvaje", "especie", "fauna"],
        entertainment: [
          "espectáculo",
          "show",
          "función",
          "evento",
          "actuación",
        ],
        sports: ["competencia", "juego", "deporte", "actividad", "ejercicio"],
        geography: ["lugar", "ubicación", "territorio", "región", "zona"],
        music: ["instrumento", "sonido", "melodía", "ritmo", "canción"],
        professions: ["trabajo", "ocupación", "oficio", "carrera", "empleo"],
        transport: [
          "vehículo",
          "medio de transporte",
          "móvil",
          "transporte",
          "locomoción",
        ],
        history: [
          "época",
          "evento histórico",
          "periodo",
          "era",
          "acontecimiento",
        ],
        science: ["concepto", "elemento", "fenómeno", "teoría", "estudio"],
      },
      en: {
        food: ["dish", "drink", "meal", "ingredient", "food item"],
        animals: ["creature", "pet", "wild animal", "species", "fauna"],
        entertainment: ["show", "performance", "event", "spectacle", "act"],
        sports: ["competition", "game", "sport", "activity", "exercise"],
        geography: ["place", "location", "territory", "region", "area"],
        music: ["instrument", "sound", "melody", "rhythm", "song"],
        professions: ["job", "occupation", "career", "work", "employment"],
        transport: [
          "vehicle",
          "transportation",
          "mobile",
          "transport",
          "locomotion",
        ],
        history: ["era", "historical event", "period", "epoch", "occurrence"],
        science: ["concept", "element", "phenomenon", "theory", "study"],
      },
    };

    const categoryFallbacks = fallbacks[language]?.[category];
    if (!categoryFallbacks || categoryFallbacks.length === 0) return null;

    return categoryFallbacks[
      Math.floor(Math.random() * categoryFallbacks.length)
    ];
  },
};

// ========================================
// MÓDULO UI - Interfaz de usuario
// ========================================

const UI = {
  updateLanguage(language) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (TRANSLATIONS[language][key]) {
        element.textContent = TRANSLATIONS[language][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (TRANSLATIONS[language][key]) {
        element.placeholder = TRANSLATIONS[language][key];
      }
    });

    this.updateSelectOptions(language);

    if (DOM.numPlayers.value) {
      this.generatePlayerNames();
    }
  },

  updateSelectOptions(language) {
    const difficultyOptions = ["Easy", "Normal", "Hard", "Extreme"];
    const categoryOptions = [
      "Food",
      "Animals",
      "Entertainment",
      "Sports",
      "Geography",
      "Music",
      "Professions",
      "Transport",
      "History",
      "Science",
    ];

    difficultyOptions.forEach((opt, i) => {
      const key = `difficulty${opt}`;
      if (DOM.difficulty.options[i] && TRANSLATIONS[language][key]) {
        DOM.difficulty.options[i].text = TRANSLATIONS[language][key];
      }
    });

    categoryOptions.forEach((opt, i) => {
      const key = `category${opt}`;
      if (DOM.category.options[i] && TRANSLATIONS[language][key]) {
        DOM.category.options[i].text = TRANSLATIONS[language][key];
      }
    });
  },

  generatePlayerNames() {
    const numPlayers = parseInt(DOM.numPlayers.value);
    const language = gameState.currentLanguage;

    if (!numPlayers || numPlayers < CONFIG.MIN_PLAYERS) {
      DOM.playerNamesList.innerHTML = `<p style="color: var(--accent-primary); text-align: center;">
        ${TRANSLATIONS[language].minPlayersMessage}
      </p>`;
      return;
    }

    const currentNames = gameState.playerNames.slice(0, numPlayers);

    DOM.playerNamesList.innerHTML = "";
    for (let i = 1; i <= numPlayers; i++) {
      const div = document.createElement("div");
      div.className = "player-name-input";
      div.innerHTML = `
        <span>${TRANSLATIONS[language].playerLabel} ${i}:</span>
        <input type="text" id="playerName${i}" 
               placeholder="${TRANSLATIONS[language].nameLabel}" 
               value="${currentNames[i - 1] || ""}">
      `;
      DOM.playerNamesList.appendChild(div);
    }
  },

  showTutorial() {
    DOM.tutorialModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  },

  closeTutorial() {
    DOM.tutorialModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  },

  setLoadingState(isLoading) {
    DOM.startButton.disabled = isLoading;
    DOM.loadingMessage.classList.toggle("hidden", !isLoading);
  },

  showPlayerScreen() {
    const playerName = gameState.getCurrentPlayerName();
    DOM.currentPlayerNum.textContent = playerName;
    DOM.displayTheme.textContent = gameState.theme;
    DOM.wordContainer.classList.add("hidden");
    DOM.revealBtn.classList.remove("hidden");
  },

  revealWord() {
    const isImpostor = gameState.isImpostor(gameState.currentPlayer);
    const word = gameState.getWordForCurrentPlayer();

    DOM.displayWord.textContent = word;
    DOM.displayWord.classList.toggle("impostor", isImpostor);

    DOM.revealBtn.classList.add("hidden");
    DOM.wordContainer.classList.remove("hidden");

    // Scan effect animation
    const scanEffect = document.querySelector(".scan-effect");
    if (scanEffect) {
      scanEffect.style.animation = "none";
      setTimeout(() => {
        scanEffect.style.animation = "scanLine 2s ease-in-out";
      }, 10);
    }
  },

  createParticles() {
    DOM.particles.innerHTML = "";

    for (let i = 0; i < CONFIG.PARTICLES_COUNT; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = Math.random() * 10 + 5 + "s";
      particle.style.animationDelay = Math.random() * 5 + "s";
      DOM.particles.appendChild(particle);
    }
  },
};

// ========================================
// MÓDULO GAME - Lógica principal del juego
// ========================================

const Game = {
  async start() {
    const config = this.getConfiguration();

    if (!this.validateConfiguration(config)) return;

    const playerNames = this.collectPlayerNames(config.numPlayers);
    if (!playerNames) return;

    UI.setLoadingState(true);

    try {
      const wordData = await WordGenerator.generate(
        config.difficulty,
        config.category,
        gameState.currentLanguage
      );

      this.initializeGame(config, playerNames, wordData);
      this.startGameplay();
    } catch (error) {
      console.error("Error starting game:", error);
      alert("Error al iniciar el juego. Por favor intenta de nuevo.");
    } finally {
      UI.setLoadingState(false);
    }
  },

  getConfiguration() {
    return {
      numPlayers: parseInt(DOM.numPlayers.value),
      numImpostors: parseInt(DOM.numImpostors.value),
      difficulty: DOM.difficulty.value,
      category: DOM.category.value,
      relatedWordsMode: DOM.relatedWords.checked,
    };
  },

  validateConfiguration(config) {
    const lang = gameState.currentLanguage;

    if (!config.numPlayers || config.numPlayers < CONFIG.MIN_PLAYERS) {
      alert(TRANSLATIONS[lang].alertMinPlayers);
      return false;
    }

    if (!config.numImpostors || config.numImpostors < CONFIG.MIN_IMPOSTORS) {
      alert(TRANSLATIONS[lang].alertMinImpostors);
      return false;
    }

    if (config.numImpostors >= config.numPlayers) {
      alert(TRANSLATIONS[lang].alertImpostorsTooMany);
      return false;
    }

    return true;
  },

  collectPlayerNames(numPlayers) {
    const lang = gameState.currentLanguage;
    const names = [];

    for (let i = 1; i <= numPlayers; i++) {
      const nameInput = document.getElementById(`playerName${i}`);
      const name = nameInput?.value.trim();

      if (!name) {
        alert(`${TRANSLATIONS[lang].alertEnterName} ${i}`);
        return null;
      }

      names.push(name);
    }

    return names;
  },

  initializeGame(config, playerNames, wordData) {
    gameState.totalPlayers = config.numPlayers;
    gameState.playerNames = playerNames;
    gameState.normalWord = wordData.word;
    gameState.theme = wordData.theme;
    gameState.difficulty = config.difficulty;
    gameState.category = config.category;
    gameState.relatedWordsMode = config.relatedWordsMode;
    gameState.currentPlayer = 1;

    gameState.selectImpostors(config.numImpostors);

    if (config.relatedWordsMode) {
      gameState.impostorWord = RelatedWordsModule.get(
        wordData.word,
        gameState.currentLanguage,
        config.difficulty,
        config.category
      );
      gameState.relatedWord = gameState.impostorWord;
    } else {
      gameState.impostorWord = "impostor";
      gameState.relatedWord = "";
    }

    console.log("Game initialized:", {
      word: gameState.normalWord,
      impostorWord: gameState.impostorWord,
      theme: gameState.theme,
      impostors: gameState.impostorIndices,
    });
  },

  startGameplay() {
    DOM.setupScreen.classList.add("hidden");
    DOM.playerScreen.classList.remove("hidden");
    UI.showPlayerScreen();
  },

  revealWord() {
    UI.revealWord();
  },

  nextPlayer() {
    if (gameState.currentPlayer < gameState.totalPlayers) {
      gameState.currentPlayer++;
      UI.showPlayerScreen();
    } else {
      setTimeout(() => {
        this.resetGame();
      }, CONFIG.RESET_DELAY);
    }
  },

  resetGame() {
    DOM.playerScreen.classList.add("hidden");
    DOM.setupScreen.classList.remove("hidden");
    UI.generatePlayerNames();
  },

  resetAll() {
    gameState.playerNames = [];
    DOM.numPlayers.value = "";
    DOM.numImpostors.value = "1";
    DOM.difficulty.value = "normal";
    DOM.category.value = "food";
    DOM.relatedWords.checked = false;

    const lang = gameState.currentLanguage;
    DOM.playerNamesList.innerHTML = `<p style="color: var(--accent-primary); text-align: center;">
      ${TRANSLATIONS[lang].minPlayersMessage}
    </p>`;
  },

  changeLanguage(lang) {
    gameState.currentLanguage = lang;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    DOM[`lang${lang.toUpperCase()}`].classList.add("active");

    UI.updateLanguage(lang);
  },

  changeTheme(theme) {
    gameState.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);

    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    DOM[`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`].classList.add(
      "active"
    );

    UI.createParticles();
  },
};

// ========================================
// INICIALIZACIÓN
// ========================================

const gameState = new GameState();

window.onload = function () {
  // Initialize DOM cache
  DOM.init();

  // Initialize UI
  const lang = gameState.currentLanguage;
  DOM.playerNamesList.innerHTML = `<p style="color: var(--accent-primary); text-align: center;">
    ${TRANSLATIONS[lang].minPlayersMessage}
  </p>`;

  // Create particles
  UI.createParticles();

  // Update select options
  UI.updateSelectOptions(lang);

  // Show tutorial on first visit
  const firstTime = localStorage.getItem(CONFIG.STORAGE_KEY_TUTORIAL);
  if (!firstTime) {
    setTimeout(() => {
      UI.showTutorial();
      localStorage.setItem(CONFIG.STORAGE_KEY_TUTORIAL, "false");
    }, CONFIG.TUTORIAL_DELAY);
  }

  // Add keyboard event listeners
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      UI.closeTutorial();
    }
  });

  console.log("🎮 El Impostor v3.0 - Optimized Edition");
  console.log("✅ Word bank expanded: 25+ words per category");
  console.log("✅ Related words expanded: 250+ pairs per language");
  console.log("✅ Code optimized with modular architecture");
};
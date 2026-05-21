<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados | Tabú Kids</title>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="utils/style.css">
    <style>
        .ranking-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 20px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 4px solid #eee;
            width: 100%;
            transition: transform 0.3s;
        }
        .es-empate-ganador {
            background: linear-gradient(135deg, #e0f7fa 0%, #fff 100%);
            border: 3px solid var(--card-azul);
            transform: scale(1.02);
        }
        .es-unico-ganador {
            background: linear-gradient(135deg, #fff9e6 0%, #fff 100%);
            border: 3px solid #f1c40f;
            transform: scale(1.05);
        }
        .corona-icon { font-size: 1.5rem; margin-right: 10px; }
    </style>
</head>
<body>

    <div class="pantalla">
        <div class="panel-central">
            <h1 id="texto-final" class="titulo-menu">🏆 RESULTADOS</h1>
            
            <div id="podium" style="width: 100%; margin: 20px 0;">
                </div>

            <button class="btn-grande btn-azul" onclick="window.location.href='index.html'">
                VOLVER A JUGAR 🔄
            </button>
            <button class="btn-grande" style="margin-top: 10px; background: linear-gradient(to right, #ff6b6b, #ff4757); border: none; color: white; box-shadow: 0 5px 15px rgba(255,107,107,0.4);" onclick="window.location.href='../portadaNinos.html'">
                SALIR
            </button>
        </div>
    </div>

    <script>
        const datos = localStorage.getItem("ultimo_resultado_tabu_kids");
        
        if (datos) {
            const resultados = JSON.parse(datos);
            const equipos = resultados.todos; // Ya vienen ordenados por puntos de mayor a menor
            const contenedor = document.getElementById('podium');
            const titulo = document.getElementById('texto-final');

            // 1. Detectar si hay empate en la puntuación más alta
            const maxPuntos = equipos[0].score;
            const ganadores = equipos.filter(e => e.score === maxPuntos);
            const hayEmpate = ganadores.length > 1;

            if (hayEmpate) {
                titulo.innerText = "🤝 ¡HAY UN EMPATE!";
            }

            // 2. Generar la lista
            equipos.forEach((equipo, index) => {
                const esDeLosGanadores = equipo.score === maxPuntos;
                const div = document.createElement('div');
                
                // Aplicar clases según si es ganador único o empate
                let claseExtra = "";
                if (esDeLosGanadores) {
                    claseExtra = hayEmpate ? 'es-empate-ganador' : 'es-unico-ganador';
                }

                div.className = `ranking-item ${claseExtra}`;
                
                div.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <span class="corona-icon">${esDeLosGanadores ? '👑' : '⭐'}</span>
                        <span style="font-weight: bold; font-size: 1.2rem;">${equipo.name}</span>
                    </div>
                    <span class="puntos-badge" style="background: var(--card-azul); color: white; padding: 5px 15px; border-radius: 15px; font-weight: bold;">
                        ${equipo.score} pts
                    </span>
                `;
                contenedor.appendChild(div);
            });
        }
    </script>
</body>
</html>
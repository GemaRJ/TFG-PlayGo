// assets/js/login-animation.js

let scene, camera, renderer;
let robotGroup; 
let headGroup, bodyGroup;
let neckMesh; // Referencia para el cuello
let eyeL, eyeR;
let armL, armR;
let antennaPole, antennaBall;
let mouseX = 0, mouseY = 0;
let isPasswordFocus = false;

// Variables físicas
let antennaVelocity = 0;
let antennaAngle = 0;

function init() {
    const container = document.getElementById('canvas-container');

    // 1. ESCENA
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.02);
    
    // 2. CÁMARA (Un poco más lejos para ver la nueva altura)
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 14; 
    camera.position.y = 0; // Centrada

    // 3. RENDERIZADOR
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); 
    renderer.shadowMap.enabled = true; 
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    renderer.toneMapping = THREE.ACESFilmicToneMapping; 
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // 4. LUCES
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const backLight = new THREE.SpotLight(0x00d2ff, 2);
    backLight.position.set(-5, 5, -5);
    backLight.lookAt(0, 0, 0);
    scene.add(backLight);

    const fillLight = new THREE.PointLight(0xffaa00, 0.5);
    fillLight.position.set(0, -5, 5);
    scene.add(fillLight);

    // 5. MATERIALES
    const matPlasticWhite = new THREE.MeshPhysicalMaterial({
        color: 0xeeeeee,
        metalness: 0.1,
        roughness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
    });

    const matDarkMetal = new THREE.MeshStandardMaterial({
        color: 0x2a2a2a,
        metalness: 0.8,
        roughness: 0.4
    });
    
    // Material cromado para el cuello (para que resalte)
    const matChrome = new THREE.MeshPhysicalMaterial({
        color: 0xaaaaaa,
        metalness: 1.0,
        roughness: 0.2,
        clearcoat: 1.0
    });

    const matScreenGlass = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        metalness: 0.9,
        roughness: 0.05,
        clearcoat: 1.0
    });

    const matGlow = new THREE.MeshBasicMaterial({ color: 0x00ffff, toneMapped: false });

    // 6. CONSTRUCCIÓN
    robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // --- A. CUERPO (BAJADO MUCHO MÁS: Y = -2.2) ---
    bodyGroup = new THREE.Group();
    bodyGroup.position.y = -2.2; 

    const cylGeo = new THREE.CylinderGeometry(1.4, 1.4, 1.6, 64);
    const sphereTopGeo = new THREE.SphereGeometry(1.4, 64, 32, 0, Math.PI * 2, 0, Math.PI/2);
    
    const bodyMain = new THREE.Mesh(cylGeo, matPlasticWhite);
    bodyMain.castShadow = true;
    bodyMain.receiveShadow = true;
    
    const bodyDome = new THREE.Mesh(sphereTopGeo, matPlasticWhite);
    bodyDome.position.y = 0.8;
    
    const bodyBottom = new THREE.Mesh(sphereTopGeo, matDarkMetal); 
    bodyBottom.scale.y = 0.5; 
    bodyBottom.rotation.x = Math.PI;
    bodyBottom.position.y = -0.8;

    const coreRing = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.1, 16, 32), matDarkMetal);
    coreRing.position.set(0, 0, 1.38);
    const coreLight = new THREE.Mesh(new THREE.CircleGeometry(0.3, 32), matGlow);
    coreLight.position.set(0, 0, 1.40);

    bodyGroup.add(bodyMain, bodyDome, bodyBottom, coreRing, coreLight);
    robotGroup.add(bodyGroup);

    // --- B. CUELLO (LARGO Y CROMADO) ---
    // Ahora es un tubo independiente visible
    const neckGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.5, 32); // Altura 1.5 (Largo)
    neckMesh = new THREE.Mesh(neckGeo, matChrome);
    neckMesh.position.y = -0.5; // Centro geométrico entre cuerpo y cabeza
    neckMesh.castShadow = true;
    robotGroup.add(neckMesh);

    // Anillos decorativos en el cuello
    const ringGeo = new THREE.TorusGeometry(0.45, 0.05, 16, 32);
    const ring1 = new THREE.Mesh(ringGeo, matDarkMetal); ring1.position.y = 0.2;
    const ring2 = new THREE.Mesh(ringGeo, matDarkMetal); ring2.position.y = -0.2;
    neckMesh.add(ring1, ring2);

    // --- C. CABEZA (SUBIDA: Y = 1.3) ---
    headGroup = new THREE.Group();
    headGroup.position.y = 1.3; // Mucho aire entre cabeza y cuerpo

    const headGeo = new THREE.BoxGeometry(3.2, 2.3, 2.0);
    const headMesh = new THREE.Mesh(headGeo, matPlasticWhite);
    headMesh.castShadow = true;
    headMesh.receiveShadow = true;
    
    const screenGeo = new THREE.BoxGeometry(2.6, 1.7, 0.1);
    const screenMesh = new THREE.Mesh(screenGeo, matScreenGlass);
    screenMesh.position.z = 1.01;

    const eyeGeo = new THREE.PlaneGeometry(0.6, 0.7);
    eyeL = new THREE.Mesh(eyeGeo, matGlow);
    eyeL.position.set(-0.7, 0.1, 1.1);
    eyeR = new THREE.Mesh(eyeGeo, matGlow);
    eyeR.position.set(0.7, 0.1, 1.1);

    const antBaseGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.8);
    antennaPole = new THREE.Mesh(antBaseGeo, matDarkMetal);
    antennaPole.position.set(0, 1.55, 0); 
    antennaPole.geometry.translate(0, 0.4, 0); 
    
    antennaBall = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), matGlow);
    antennaBall.position.y = 0.8;
    antennaPole.add(antennaBall);

    headGroup.add(headMesh, screenMesh, eyeL, eyeR, antennaPole);
    robotGroup.add(headGroup);

    // --- D. BRAZOS ---
    const handGeo = new THREE.SphereGeometry(0.5, 32, 32);
    armL = new THREE.Group();
    const handLMesh = new THREE.Mesh(handGeo, matPlasticWhite);
    handLMesh.castShadow = true;
    armL.add(handLMesh);
    
    armR = new THREE.Group();
    const handRMesh = new THREE.Mesh(handGeo, matPlasticWhite);
    handRMesh.castShadow = true;
    armR.add(handRMesh);

    // Brazos más bajos acorde al nuevo cuerpo
    armL.position.set(-2.5, -1.5, 0.5);
    armR.position.set(2.5, -1.5, 0.5);

    robotGroup.add(armL, armR);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.002;

    // FLOTAR
    const floatY = Math.sin(time) * 0.15;
    robotGroup.position.y = floatY;

    // FÍSICA ANTENA
    let targetAngle = (mouseX * 2) * -0.5; 
    const force = (targetAngle - antennaAngle) * 0.1;
    antennaVelocity += force;
    antennaVelocity *= 0.92;
    antennaAngle += antennaVelocity;
    antennaPole.rotation.z = antennaAngle + (Math.sin(time * 3) * 0.05);

    if (isPasswordFocus) {
        // --- PASSWORD MODE ---
        bodyGroup.rotation.y = THREE.MathUtils.lerp(bodyGroup.rotation.y, 0, 0.1);
        
        // Cabeza mira abajo (vergüenza)
        headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, 0.4, 0.1);
        headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, 0, 0.1);
        neckMesh.rotation.x = headGroup.rotation.x * 0.5; // El cuello sigue un poco

        // Ojos finos
        eyeL.scale.y = THREE.MathUtils.lerp(eyeL.scale.y, 0.05, 0.2);
        eyeR.scale.y = THREE.MathUtils.lerp(eyeR.scale.y, 0.05, 0.2);

        // Manos tapan cara (Subidas en Y para alcanzar la cabeza nueva)
        moveObj(armL, -0.9, 1.4, 2.0); 
        moveObj(armR, 0.9, 1.4, 2.0); 
        armL.rotation.z = -0.5;
        armR.rotation.z = 0.5;

    } else {
        // --- NORMAL MODE ---
        eyeL.scale.y = THREE.MathUtils.lerp(eyeL.scale.y, 1.0, 0.2);
        eyeR.scale.y = THREE.MathUtils.lerp(eyeR.scale.y, 1.0, 0.2);

        const handBob = Math.cos(time * 2) * 0.1;
        moveObj(armL, -2.6, -1.8 + handBob, 0.5); // Manos en posición baja
        moveObj(armR, 2.6, -1.8 + handBob, 0.5);
        armL.rotation.z = 0;
        armR.rotation.z = 0;

        // --- CORRECCIÓN DE MIRADA ---
        // mouseY va de -1 (Arriba) a 1 (Abajo).
        // Rotación X Positiva = Mira Abajo. Rotación X Negativa = Mira Arriba.
        
        // Queremos: Mouse Arriba (-1) -> Robot Mira Arriba (Rotación Negativa)
        // Por tanto: Rotación = mouseY * factor (Sin signo negativo)
        
        const targetHeadRotY = mouseX * 0.8; 
        const targetHeadRotX = mouseY * 0.6; // CORREGIDO: Ratón Arriba = Mira Arriba

        headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, targetHeadRotY, 0.1);
        headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, targetHeadRotX, 0.1);

        // Cuerpo y Cuello siguen suavemente
        bodyGroup.rotation.y = THREE.MathUtils.lerp(bodyGroup.rotation.y, mouseX * 0.3, 0.05);
        bodyGroup.rotation.x = THREE.MathUtils.lerp(bodyGroup.rotation.x, mouseY * 0.1, 0.05);
        
        neckMesh.rotation.y = bodyGroup.rotation.y * 1.1;
        neckMesh.rotation.x = bodyGroup.rotation.x + (headGroup.rotation.x * 0.3);
    }

    renderer.render(scene, camera);
}

function moveObj(obj, x, y, z) {
    obj.position.x = THREE.MathUtils.lerp(obj.position.x, x, 0.1);
    obj.position.y = THREE.MathUtils.lerp(obj.position.y, y, 0.1);
    obj.position.z = THREE.MathUtils.lerp(obj.position.z, z, 0.1);
}

document.addEventListener('mousemove', (e) => {
    // Normalizamos: Arriba = -1, Abajo = 1, Izq = -1, Der = 1
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
});

const passField = document.getElementById('passField');
if(passField) {
    passField.addEventListener('focus', () => { isPasswordFocus = true; });
    passField.addEventListener('blur', () => { isPasswordFocus = false; });
}

window.addEventListener('resize', () => {
    const container = document.getElementById('canvas-container');
    if(container && camera && renderer) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
});

init();
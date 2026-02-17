// assets/js/registro-animation.js

let scene, camera, renderer;
let robotGroup; 
let headGroup, bodyGroup;
let neckMesh; 
let eyeL, eyeR;
let armL, armR;
let antennaPole, antennaBall;

// Variables de estado
let mouseX = 0, mouseY = 0;
let isPasswordFocus = false; 
let spinSuccess = 0;         
let antennaVelocity = 0;     
let antennaAngle = 0;

function init() {
    const container = document.getElementById('canvas-container');

    // 1. ESCENA (Con niebla oscura para profundidad)
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.02); 
    
    // 2. CÁMARA
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 14; 
    camera.position.y = 0;

    // 3. RENDERIZADOR (Misma calidad que el Login)
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); 
    renderer.shadowMap.enabled = true; 
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    renderer.toneMapping = THREE.ACESFilmicToneMapping; 
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // 4. LUCES (Copiadas del Login para el mismo brillo)
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

    // 5. MATERIALES (Mismos que el Login para coherencia visual)
    const matPlasticWhite = new THREE.MeshPhysicalMaterial({
        color: 0xeeeeee, metalness: 0.1, roughness: 0.2, clearcoat: 1.0, clearcoatRoughness: 0.1,
    });
    const matDarkMetal = new THREE.MeshStandardMaterial({
        color: 0x2a2a2a, metalness: 0.8, roughness: 0.4
    });
    const matChrome = new THREE.MeshPhysicalMaterial({ 
        color: 0xaaaaaa, metalness: 1.0, roughness: 0.2, clearcoat: 1.0
    });
    const matScreenGlass = new THREE.MeshPhysicalMaterial({
        color: 0x000000, metalness: 0.9, roughness: 0.05, clearcoat: 1.0
    });
    const matGlow = new THREE.MeshBasicMaterial({ color: 0x00ffff, toneMapped: false });

    // 6. CONSTRUCCIÓN
    robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // --- A. CUERPO ---
    bodyGroup = new THREE.Group();
    bodyGroup.position.y = -2.2; 

    const cylGeo = new THREE.CylinderGeometry(1.4, 1.4, 1.6, 64);
    const sphereTopGeo = new THREE.SphereGeometry(1.4, 64, 32, 0, Math.PI * 2, 0, Math.PI/2);
    
    const bodyMain = new THREE.Mesh(cylGeo, matPlasticWhite);
    bodyMain.castShadow = true; bodyMain.receiveShadow = true;
    
    const bodyDome = new THREE.Mesh(sphereTopGeo, matPlasticWhite);
    bodyDome.position.y = 0.8;
    
    const bodyBottom = new THREE.Mesh(sphereTopGeo, matDarkMetal); 
    bodyBottom.scale.y = 0.5; bodyBottom.rotation.x = Math.PI; bodyBottom.position.y = -0.8;

    const coreRing = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.1, 16, 32), matDarkMetal);
    coreRing.position.set(0, 0, 1.38);
    const coreLight = new THREE.Mesh(new THREE.CircleGeometry(0.3, 32), matGlow);
    coreLight.position.set(0, 0, 1.40);

    bodyGroup.add(bodyMain, bodyDome, bodyBottom, coreRing, coreLight);
    robotGroup.add(bodyGroup);

    // --- B. CUELLO ---
    const neckGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.5, 32);
    neckMesh = new THREE.Mesh(neckGeo, matChrome);
    neckMesh.position.y = -0.5; 
    neckMesh.castShadow = true;
    robotGroup.add(neckMesh);

    const ringGeo = new THREE.TorusGeometry(0.45, 0.05, 16, 32);
    const ring1 = new THREE.Mesh(ringGeo, matDarkMetal); ring1.position.y = 0.2;
    const ring2 = new THREE.Mesh(ringGeo, matDarkMetal); ring2.position.y = -0.2;
    neckMesh.add(ring1, ring2);

    // --- C. CABEZA ---
    headGroup = new THREE.Group();
    headGroup.position.y = 1.3; 

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.3, 2.0), matPlasticWhite);
    headMesh.castShadow = true; headMesh.receiveShadow = true;
    
    const screenMesh = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.7, 0.1), matScreenGlass);
    screenMesh.position.z = 1.01;

    const eyeGeo = new THREE.PlaneGeometry(0.6, 0.7);
    eyeL = new THREE.Mesh(eyeGeo, matGlow); eyeL.position.set(-0.7, 0.1, 1.1);
    eyeR = new THREE.Mesh(eyeGeo, matGlow); eyeR.position.set(0.7, 0.1, 1.1);

    antennaPole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.8), matDarkMetal);
    antennaPole.position.set(0, 1.55, 0); antennaPole.geometry.translate(0, 0.4, 0);
    antennaBall = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), matGlow);
    antennaBall.position.y = 0.8;
    antennaPole.add(antennaBall);

    headGroup.add(headMesh, screenMesh, eyeL, eyeR, antennaPole);
    robotGroup.add(headGroup);

    // --- D. BRAZOS ---
    const handGeo = new THREE.SphereGeometry(0.5, 32, 32);
    armL = new THREE.Group();
    armL.add(new THREE.Mesh(handGeo, matPlasticWhite));
    armR = new THREE.Group();
    armR.add(new THREE.Mesh(handGeo, matPlasticWhite));

    armL.position.set(-2.5, -1.5, 0.5);
    armR.position.set(2.5, -1.5, 0.5);
    robotGroup.add(armL, armR);

    // 7. EVENTOS DE INTERACCIÓN
    const passInput = document.querySelector('input[type="password"]');
    const otherInputs = document.querySelectorAll('input:not([type="password"]), select');

    if (passInput) {
        passInput.addEventListener('focus', () => { isPasswordFocus = true; });
        passInput.addEventListener('blur', () => { isPasswordFocus = false; });
    }

    otherInputs.forEach(input => {
        input.addEventListener('blur', (e) => { 
            if(e.target.value.length > 0) triggerSpin();
        });
    });

    animate();
}

function triggerSpin() {
    if (!isPasswordFocus) spinSuccess = Math.PI * 2; 
}

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.002;

    // FÍSICA ANTENA
    let targetAngle = (mouseX * 2) * -0.5; 
    const force = (targetAngle - antennaAngle) * 0.1;
    antennaVelocity += force;
    antennaVelocity *= 0.92;
    antennaAngle += antennaVelocity;
    antennaPole.rotation.z = antennaAngle + (Math.sin(time * 3) * 0.05);

    if (spinSuccess > 0) {
        // CELEBRACIÓN
        robotGroup.rotation.y += 0.15; 
        spinSuccess -= 0.15;
        moveObj(armL, -2.8, 1.5, 0); 
        moveObj(armR, 2.8, 1.5, 0);
        eyeL.scale.y = 1; eyeR.scale.y = 1;
        if(spinSuccess <= 0) { robotGroup.rotation.y = 0; spinSuccess = 0; }
    } 
    else if (isPasswordFocus) {
        // PASSWORD MODE (Tapar ojos)
        headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, 0.4, 0.1);
        neckMesh.rotation.x = headGroup.rotation.x * 0.5;
        eyeL.scale.y = THREE.MathUtils.lerp(eyeL.scale.y, 0.05, 0.2);
        eyeR.scale.y = THREE.MathUtils.lerp(eyeR.scale.y, 0.05, 0.2);
        moveObj(armL, -0.9, 1.4, 2.2); 
        moveObj(armR, 0.9, 1.4, 2.2); 
        armL.rotation.z = -0.5; armR.rotation.z = 0.5;
    } 
    else {
        // NORMAL MODE
        robotGroup.position.y = Math.sin(time) * 0.15;
        eyeL.scale.y = THREE.MathUtils.lerp(eyeL.scale.y, 1.0, 0.2);
        eyeR.scale.y = THREE.MathUtils.lerp(eyeR.scale.y, 1.0, 0.2);
        const handBob = Math.cos(time * 2) * 0.1;
        moveObj(armL, -2.6, -1.8 + handBob, 0.5);
        moveObj(armR, 2.6, -1.8 + handBob, 0.5);
        armL.rotation.z = 0; armR.rotation.z = 0;

        headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, mouseX * 0.8, 0.1);
        headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, mouseY * 0.6, 0.1);
        bodyGroup.rotation.y = THREE.MathUtils.lerp(bodyGroup.rotation.y, mouseX * 0.3, 0.05);
        neckMesh.rotation.y = bodyGroup.rotation.y * 1.1;
    }

    renderer.render(scene, camera);
}

function moveObj(obj, x, y, z) {
    obj.position.x = THREE.MathUtils.lerp(obj.position.x, x, 0.1);
    obj.position.y = THREE.MathUtils.lerp(obj.position.y, y, 0.1);
    obj.position.z = THREE.MathUtils.lerp(obj.position.z, z, 0.1);
}

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
});

window.addEventListener('resize', () => {
    const container = document.getElementById('canvas-container');
    if(container && camera && renderer) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
});

init();
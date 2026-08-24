// Contenedor de los brillos
const contenedor = document.getElementById("brillos");


// ========================================
// BRILLOS QUE PARPADEAN
// ========================================

for (let i = 0; i < 15; i++) {

    const brillo = document.createElement("div");

    brillo.classList.add("brillo", "parpadeo");

    // Posición aleatoria
    brillo.style.left = `${Math.random() * 100}%`;
    brillo.style.top = `${Math.random() * 100}%`;

    // Tamaño aleatorio
    const tamaño = 4 + Math.random() * 8;

    brillo.style.width = `${tamaño}px`;
    brillo.style.height = `${tamaño}px`;

    // Duración aleatoria
    brillo.style.animationDuration =
        `${1.5 + Math.random() * 2}s`;

    // Retraso aleatorio
    brillo.style.animationDelay =
        `${Math.random() * 3}s`;

    contenedor.appendChild(brillo);
}


// ========================================
// BRILLOS QUE CAEN
// ========================================

for (let i = 0; i < 20; i++) {

    const brillo = document.createElement("div");

    brillo.classList.add("brillo", "lluvia");

    // Posición horizontal aleatoria
    brillo.style.left = `${Math.random() * 100}%`;

    // Empezar en diferentes posiciones verticales
    brillo.style.top =
        `${-20 - Math.random() * 100}px`;

    // Tamaño aleatorio
    const tamaño = 3 + Math.random() * 6;

    brillo.style.width = `${tamaño}px`;
    brillo.style.height = `${tamaño}px`;

    // Velocidad aleatoria
    brillo.style.animationDuration =
        `${3 + Math.random() * 5}s`;

    // Retraso aleatorio
    brillo.style.animationDelay =
        `${Math.random() * 5}s`;

    contenedor.appendChild(brillo);
}
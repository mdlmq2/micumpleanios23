const contenedor = document.getElementById("brillos");

for (let i = 0; i < 15; i++) {

    const brillo = document.createElement("div");

    brillo.classList.add("brillo", "parpadeo");

    brillo.style.left = `${Math.random() * 100}%`;
    brillo.style.top = `${Math.random() * 100}%`;

    const tamaño = 4 + Math.random() * 8;

    brillo.style.width = `${tamaño}px`;
    brillo.style.height = `${tamaño}px`;

    brillo.style.animationDuration =
        `${1.5 + Math.random() * 2}s`;

    brillo.style.animationDelay =
        `${Math.random() * 3}s`;

    contenedor.appendChild(brillo);
}

for (let i = 0; i < 20; i++) {

    const brillo = document.createElement("div");

    brillo.classList.add("brillo", "lluvia");

    brillo.style.left = `${Math.random() * 100}%`;

    brillo.style.top =
        `${-20 - Math.random() * 100}px`;

    const tamaño = 3 + Math.random() * 6;

    brillo.style.width = `${tamaño}px`;
    brillo.style.height = `${tamaño}px`;

    brillo.style.animationDuration =
        `${3 + Math.random() * 5}s`;

    brillo.style.animationDelay =
        `${Math.random() * 5}s`;

    contenedor.appendChild(brillo);
}
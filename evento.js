const evento = {
    titulo: "Cumple de Marina",
    inicio: "20260828T220000",
    fin: "20260829T010000",
    lugar: "Hipólito Yrigoyen 463, Resistencia",
    descripcion: "¡Te espero para festejar! 🎉"
};

const url = new URL(
    "https://calendar.google.com/calendar/r/eventedit"
);

url.searchParams.set("action", "TEMPLATE");
url.searchParams.set("text", evento.titulo);
url.searchParams.set("dates", `${evento.inicio}/${evento.fin}`);
url.searchParams.set("details", evento.descripcion);
url.searchParams.set("location", evento.lugar);
url.searchParams.set("ctz", "America/Argentina/Buenos_Aires");

document.getElementById("createvent").href = url.toString();
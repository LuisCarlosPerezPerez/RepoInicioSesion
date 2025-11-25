async function main() {

    // Fecha y hora del sorteo
    // Modifica esta para ajustar la hora de el sorteo estan ordenados por año,mes,dia,hora,minutos,segundos
    const fechaSorteo = new Date("2025-11-26T12:20:00");
    // Hora actual
    const ahora = new Date();

    // Antes de tiempo → no hace nada
    if (ahora < fechaSorteo) {
        console.log("Todavía no es la fecha del sorteo.");
        return;
    }

    // Es el momento del sorteo
    console.log("¡Realizando sorteo!");

    // Obtener participantes
    const res = await fetch('/users');
    const participantes = await res.json();

    if (participantes.length === 0) {
        console.log("No hay participantes.");
        return;
    }

    // Seleccionar ganador
    const ganadorIndex = Math.floor(Math.random() * participantes.length);
    const ganador = participantes[ganadorIndex];

    // Guardamos ganador en MongoDB
    await fetch('/ganador', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ganador)
    });

    // Redirigir a la página de ganador
    window.location.href = "/Anuncio.html";
}

// Ejecutar cada segundo
setInterval(main, 1000);

async function reducido() {
    fetch('/users')
        .then(resultado => resultado.json())
        .then(datos => console.log(datos))
        .catch(error => console.log(error));
}
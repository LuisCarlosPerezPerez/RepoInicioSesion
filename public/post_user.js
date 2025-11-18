function postUser() {
    //funciona, manda los datos a mongodb
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const apellido = document.getElementById('apellido').value;
    const fechanac = document.getElementById('fechanac').value;
    const telefono = document.getElementById('telefono').value;

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            fechanac: fechanac,
        })
    })
        .then(response => response.json())
        .then(data =>  {

        const datosUsuario = { nombre, apellido, correo, telefono, fechanac };
            // cookie, dura solo 1 dia
        document.cookie = "usuario=" + encodeURIComponent(JSON.stringify(datosUsuario)) + "; max-age=86400; path=/";

        alert("Participación registrada. Cookie guardada.");
            // recarga la pagina una vez que se ha metido el usuario
        location.reload();
    })
    .catch(error => console.error('Error:', error));
}
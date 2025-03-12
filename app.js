let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validación: si el campo está vacío
    if (!nombreAmigo) {
        alert("Debes ingresar un nombre.");
        return;
    }

    // Validación: si el nombre ya existe en la lista
    if (amigo.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista. ¡No se permiten duplicados!");
        return;
    }

    // Agregar el nombre al array y actualizar la lista
    amigo.push(nombreAmigo);
    inputAmigo.value = ""; // Limpiar el campo de entrada
    inputAmigo.focus(); // Enfocar el campo de entrada para facilitar la siguiente entrada
    renderizarAmigos(); // Actualizar la lista visual
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de renderizar

    // Asignar el contenido HTML de la lista de amigos
    listaAmigos.innerHTML = amigo
        // Usar el método `map` para transformar cada nombre en un elemento <li>
        .map((nombre) => `<li>${nombre}</li>`)
        // Unir todos los elementos del array en un solo string usando `join`
        .join("");
}

function sortearAmigoPiedra() {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear 🤔🤔🤔 Si no tienes, inventalos");
        return;
    }

    // Seleccionar un nombre aleatorio del array
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El Amigo de Piedra es 👿👿👿👿 ${amigoSorteado} 😮😮😮😮
                        Paga con un corto de tequila al secoooo 🥂!!!!!`;

    // Limpiar la lista de amigos después del sorteo
    amigo = []; // Vaciar el array de amigos
    renderizarAmigos(); // Actualizar la lista visual
}

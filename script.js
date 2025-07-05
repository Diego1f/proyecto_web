// Arreglo para almacenar respuestas
let votos = [];

// Función para validar formulario
function validarFormulario(nombre, correo, baterista) {
  if (!nombre || !correo || !baterista) {
    return "Completa todos los campos.";
  }
  if (!correo.includes("@") || !correo.includes(".")) {
    return "Correo inválido.";
  }
  return ""; 
}

// Función para agregar voto
function agregarVoto(nombre, baterista) {
  votos.push({ nombre, baterista });
}

// Función para mostrar resultados en el DOM
function mostrarVotos() {
  const divResultados = document.getElementById("resultados");
  divResultados.innerHTML = "<h3>Votaciones registradas:</h3>";

  votos.forEach((voto, index) => {
    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${voto.nombre} votó por ${voto.baterista}`;
    divResultados.appendChild(p);
  });
}
console.log(resultados)

// Evento al enviar formulario
document.getElementById("formFavorito").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const baterista = document.getElementById("baterista").value;

  const mensaje = validarFormulario(nombre, correo, baterista);
  const mensajeError = document.getElementById("mensajeError");

  if (mensaje) {
    mensajeError.textContent = mensaje;
    return;
  }

  mensajeError.textContent = "";
  agregarVoto(nombre, baterista);
  mostrarVotos();
  this.reset();
});
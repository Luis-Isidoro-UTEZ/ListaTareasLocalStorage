const btnNombre = document.querySelector('.btnGuardar');
const saludo = document.querySelector('.saludo');
const nombre = document.querySelector('.nombre');

// Cargar la información del localStorage
const textoGuardado = localStorage.getItem("texto");
if (textoGuardado != "") {
    saludo.textContent = `Guardado: ${textoGuardado}`;
}

btnNombre.addEventListener('click', ()=> {
    const texto = nombre.value

    if (texto != "") {
        localStorage.setItem('texto', texto); // clave-valor
        saludo.textContent = `Guardado: ${texto}`;
    }
});
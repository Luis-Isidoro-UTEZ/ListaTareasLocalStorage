const btnGuardar = document.querySelector('.btnGuardar');
const inputTarea = document.querySelector('.tarea');
const contenedorTareas = document.getElementById('tareas');

// Cargar tareas desde localStorage (se guardan como "t1,t2,t3")
const tareasGuardadas = localStorage.getItem('tareas');
if (tareasGuardadas && tareasGuardadas !== '') {
  const lista = tareasGuardadas.split(',');
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].trim() !== '') crearTarea(lista[i]);
  }
}

function crearTarea(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  div.className = 'tarea-item';

  div.addEventListener('click', function () {
    if (this.className.indexOf('completada') === -1) {
      this.className = this.className + ' completada';
    } else {
      this.className = this.className.replace(' completada', '');
    }
    guardarTareas();
  });

  contenedorTareas.appendChild(div);
}

function guardarTareas() {
  const items = contenedorTareas.getElementsByClassName('tarea-item');
  const arr = [];
  for (let i = 0; i < items.length; i++) {
    arr.push(items[i].textContent);
  }
  const cadena = arr.join(','); // guardar como "t1,t2,t3"
  localStorage.setItem('tareas', cadena);
  console.log('Tareas guardadas:', cadena);
}

btnGuardar.addEventListener('click', function () {
  const texto = inputTarea.value.trim();
  if (texto === '') {
    alert('Escribe una tarea antes de guardar.');
    return;
  }
  crearTarea(texto);
  guardarTareas();
  inputTarea.value = '';
  inputTarea.focus();
});

inputTarea.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') btnGuardar.click();
});

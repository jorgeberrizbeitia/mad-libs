function activarMadLibs() {

  console.log("haciendo click en el boton")

  // 1. buscar todos los valores que ha escrito el usuario
  let nombre = document.querySelector('#nombre-input').value
  console.log(nombre)
  
  let lugar = document.querySelector('#lugar-input').value
  let animal = document.querySelector('#animal-input').value
  let objeto = document.querySelector('#objeto-input').value
  let verbo1 = document.querySelector('#verbo1-input').value
  let profesion = document.querySelector('#profesión-input').value
  let comida = document.querySelector('#comida-input').value
  let verbo2 = document.querySelector('#verbo2-input').value

  // 2. ocultar el formulario
  document.querySelector("#formulario").style.display = "none";

  // 3. mostrar el texto
  document.querySelector("#historia").style.display = "block";

  // 4. insertar todo lo que escribió el usuario en cada span
  document.querySelector("#nombre").innerText = nombre
  document.querySelector("#lugar").innerText = lugar
  document.querySelector("#animal").innerText = animal
  document.querySelector("#objeto").innerText = objeto
  document.querySelector("#verbo1").innerText = verbo1
  document.querySelector("#profesion").innerText = profesion
  document.querySelector("#comida").innerText = comida
  document.querySelector("#verbo2").innerText = verbo2

}
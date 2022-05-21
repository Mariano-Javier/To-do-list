let input = document.querySelector(".input");
let agregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class Item {
  constructor(nuevatarea) {
    this.crearDiv(nuevatarea);
  }

  crearDiv(nuevaTarea) {
    //crear input de texto
    let inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;

    //crear div contenedor
    let inputDiv = document.createElement("div");
    inputDiv.classList.add("item");

    //crear boton editar
    let botonEditar = document.createElement("button");
    botonEditar.classList.add("boton-editar");
    botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";

    //crear boton remover
    let botonRemover = document.createElement("button");
    botonRemover.classList.add("boton-remover");
    botonRemover.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

    inputDiv.appendChild(inputItem);
    inputDiv.appendChild(botonEditar);
    inputDiv.appendChild(botonRemover);

    container.appendChild(inputDiv);

    botonEditar.addEventListener("click", function () {
      if (inputItem.disabled == true) {
        inputItem.disabled = false;
        botonEditar.innerHTML = "<i class='fa-solid fa-lock-open'></i>";
      } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
      }
    });

    botonRemover.addEventListener("click", function () {
      inputDiv.remove();
    });
  }
}


function chequearInput() {
  if (input.value != "") {
    new Item(input.value);
    input.value = "";
  } else {
    alert("Ingrese una tarea primero");
  }
}

agregar.addEventListener("click", chequearInput);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        chequearInput()
    }
});

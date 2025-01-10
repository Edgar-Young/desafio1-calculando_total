precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const cantidad = document.querySelector(".cantidad");
const valorTotal = document.querySelector(".valor-total");
const menosBtn = document.querySelector(".menos");
const masBtn = document.querySelector(".mas");

let cantidadInicial = 0;

// Función para actualizar el total
const actTotal = () => {
  const total = precio * cantidadInicial;
  valorTotal.textContent = total;
};

// Función para actualizar la cantidad mostrada
const actCantidad = () => {
  cantidad.textContent = cantidadInicial;
  actTotal();
};

// Event listener para aumentar o disminuir cantidad
masBtn.addEventListener("click", () => {
  cantidadInicial++;
  actCantidad();
});

menosBtn.addEventListener("click", () => {
  cantidadInicial--;
  actCantidad();
});

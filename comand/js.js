const btnOpenOffCanvas = document.getElementById("btn-open-offcanvas");
const OffCanvas = document.querySelector(".offcanvas");
const btnCloseOffCanvas = document.getElementById("btnCloseOffCanvas");

// console.log(OffCanvas);

btnOpenOffCanvas.addEventListener("click", (evento) => {
  OffCanvas.classList.add("open");
  OffCanvas.classList.remove("close");
});
btnCloseOffCanvas.addEventListener("click", (evento) => {
  OffCanvas.classList.remove("open");
  OffCanvas.classList.add("close");
});

const openOffCanva = document.querySelector(".btn_offcanvas");
const offcanva = document.querySelector(".offcanvas");
const bodyResponsivo = document.querySelector("body");
const menuCabeca = document.querySelector(".primeira_ul");

function abrirOffcanva() {
  offcanva.classList.add("open");
}

openOffCanva.addEventListener("click", abrirOffcanva);

const openOffCanva = document.querySelector(".btn_offcanvas");
const offcanva = document.querySelector(".offcanvas");

function abrirOffcanva() {
  offcanva.classList.add("open");
}

openOffCanva.addEventListener("click", abrirOffcanva);

const openOffCanva = document.querySelector(".btn_offcanvas");
const offcanva = document.querySelector(".offcanvas");
const closeOffCanva = document.querySelector(".btn_close");

function abrirOffcanva() {
  offcanva.classList.add("open");
  offcanva.classList.remove("close"); // Remove a classe "close" ao abrir
}

function fecharOffCanva() {
  offcanva.classList.add("close");
  offcanva.classList.remove("open"); // Remove a classe "open" ao fechar
}

openOffCanva.addEventListener("click", abrirOffcanva);
closeOffCanva.addEventListener("click", fecharOffCanva);

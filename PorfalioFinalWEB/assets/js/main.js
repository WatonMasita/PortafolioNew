
//mensaje al dar click al descargar mi curriculum
document.addEventListener("DOMContentLoaded", () => {
  const botonCV = document.getElementById("cvButton");

  if (botonCV) {
    botonCV.addEventListener("click", () => {
      alert("Gracias por descargar mi currículum.");
    });
  } else {
    console.log("Botón de CV no encontrado");
  }
});
//mensaje bienvenida
const mensaje = document.getElementById('mensaje-bienvenida');
mensaje.style.opacity = 0;
mensaje.style.transition = 'opacity 1s';

setTimeout(() => {
  mensaje.style.opacity = 1;
}, 500);

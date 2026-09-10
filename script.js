// Tarjeta de regalo interactiva — lógica muy simple, sin dependencias.

document.addEventListener("DOMContentLoaded", () => {
  const introCard = document.getElementById("intro-card");
  const giftScene = document.getElementById("gift-scene");
  const btnVerRegalo = document.getElementById("btn-ver-regalo");
  const btnAgain = document.getElementById("btn-again");
  const envelopeFlap = document.getElementById("envelope-flap");
  const waxSeal = document.getElementById("wax-seal");
  const tickets = document.getElementById("tickets");
  const hint = document.getElementById("hint");

  // Paso 1: mostrar el sobre al presionar "Ver tu regalo"
  btnVerRegalo.addEventListener("click", () => {
    introCard.hidden = true;
    giftScene.hidden = false;
  });

  // Paso 2: al tocar el sello, el sobre se abre y salen los boletos
  waxSeal.addEventListener("click", () => {
    waxSeal.disabled = true;
    envelopeFlap.classList.add("open");
    hint.textContent = "¡Disfruta tu regalo! 🎶";

    // pequeño retraso para que la solapa empiece a abrirse antes
    // de que los boletos comiencen a salir
    setTimeout(() => {
      tickets.classList.add("out");
      btnAgain.hidden = false;
    }, 250);
  });

  // Botón opcional para reiniciar la animación
  btnAgain.addEventListener("click", () => {
    tickets.classList.remove("out");
    envelopeFlap.classList.remove("open");
    waxSeal.disabled = false;
    btnAgain.hidden = true;
    hint.textContent = "Toca el sello para abrir el sobre";
  });
});

// Tarjeta de regalo interactiva — lógica simple, sin dependencias.

document.addEventListener("DOMContentLoaded", () => {
  const cardClosed = document.getElementById("card-closed");
  const cover = document.getElementById("cover");

  const cardOpen = document.getElementById("card-open");
  const spread = document.getElementById("spread");
  const btnAbrirRegalo = document.getElementById("btn-abrir-regalo");

  const giftScene = document.getElementById("gift-scene");
  const envelopeFlap = document.getElementById("envelope-flap");
  const waxSeal = document.getElementById("wax-seal");
  const tickets = document.getElementById("tickets");
  const btnAgain = document.getElementById("btn-again");

  // Paso 1: tocar la tarjeta cerrada → se "voltea" la portada y aparece
  // la tarjeta abierta (las dos medias hojas)
  cover.addEventListener("click", () => {
    cover.classList.add("flip");
    setTimeout(() => {
      cardClosed.hidden = true;
      cardOpen.hidden = false;
      requestAnimationFrame(() => spread.classList.add("show"));
    }, 500);
  });

  // Paso 2: botón "Abrir regalo" → aparece el sobre
  btnAbrirRegalo.addEventListener("click", () => {
    cardOpen.hidden = true;
    giftScene.hidden = false;
  });

  // Paso 3: tocar el sello → el sobre se abre y salen los boletos
  waxSeal.addEventListener("click", () => {
    waxSeal.disabled = true;
    envelopeFlap.classList.add("open");
    giftScene.classList.add("opened");

    setTimeout(() => {
      tickets.classList.add("out");
      btnAgain.hidden = false;
    }, 250);
  });

  // Botón para reiniciar toda la experiencia desde la tarjeta cerrada
  btnAgain.addEventListener("click", () => {
    tickets.classList.remove("out");
    envelopeFlap.classList.remove("open");
    waxSeal.disabled = false;
    btnAgain.hidden = true;
    giftScene.classList.remove("opened");

    spread.classList.remove("show");
    cover.classList.remove("flip");

    giftScene.hidden = true;
    cardOpen.hidden = true;
    cardClosed.hidden = false;
  });
});

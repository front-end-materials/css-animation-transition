const menu = document.getElementById("menu");

const slideout = () => {
  menu.style="transform: translateX(0)";
}
const slidein = () => {
  menu.style="transform: translateX(-8em)";
}

menu.addEventListener("ontouchstart", slideout)
menu.addEventListener("ontouchend", slidein)

// ontouchstart ontouchend
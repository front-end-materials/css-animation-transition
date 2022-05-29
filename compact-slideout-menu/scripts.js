const menu = document.getElementById("menu");

const slideout = () => {
  if (menu.style="transform: translateX(0)") {
    menu.style="transform: translateX(-8em)";
  };
}
// const slidein = () => {
//   menu.style="transform: translateX(-8em)";
// }

menu.addEventListener("onclick", slideout)
// menu.addEventListener("ontouchend", slidein)

// ontouchstart ontouchend
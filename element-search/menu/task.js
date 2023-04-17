const linkMenu = Array.from(document.querySelectorAll(".menu__link"));
const subMenu = Array.from(document.querySelectorAll(".menu_sub"));

linkMenu.forEach((link) => {
  link.onclick = () => {
    if (link.parentElement.querySelector(".menu_sub") !== null) {
      link.parentElement.querySelector(".menu_sub").classList.toggle("menu_active");
      return false;
    }    
  };
});
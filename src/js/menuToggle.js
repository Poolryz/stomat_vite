export default function menuToggle () {
  const burger = document.querySelector ('.burger');
  const nav = document.querySelector ('.nav');
  let addClassBurger = () => {
    burger.classList.toggle ('burger_action');
  };
  let addClassNav = () => {
    nav.classList.toggle ('nav_action');
  };
  burger.addEventListener ('click', () => {
    addClassBurger ();
    addClassNav ();
  });
}

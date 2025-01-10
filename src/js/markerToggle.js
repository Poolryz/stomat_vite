export default function markerToggle () {
  const details = document.querySelectorAll ('.services__details');
  const markers = document.querySelectorAll ('.services__marker');

  for (let i = 0; i < details.length; i++) {
    if (details[i].open) {
      details[i].children[0].children[0].classList.add (
        'services__marker_action'
      );
    }
  }
  let toggleClass = e => {
    if (e.target.nodeName === "path") {
      e.target.parentElement.classList.toggle('services__marker_action')
    } else if (e.target.nodeName === "svg"){
      e.target.classList.toggle('services__marker_action')
    } else if(e.target.nodeName ==="SUMMARY"){
      e.target.children[0].classList.toggle('services__marker_action')
    }

   
    
    // e.target.children[0].classList.toggle ('services__marker_action');
  };
  for (let i = 0; i < details.length; i++) {
    details[i].addEventListener ('click', toggleClass);
  }
}

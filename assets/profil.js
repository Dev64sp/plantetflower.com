import "./styles/profil.css";

var onglets = document.querySelectorAll(".onglets");
var contenu = document.querySelectorAll(".contenus");
var index = 0;

onglets.forEach(function (onglet) {
  onglet.addEventListener("click", function () {
    
    if (onglet.classList.contains('active')) {
      return;
    } else {
      onglet.classList.add('active');
    }

    index = onglet.getAttribute('data-anim');

    for (let i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute('data-anim') != index) {
        onglets[i].classList.remove('active');
      }
    }

    for (let j = 0; j < contenu.length; j++) {
      if (contenu[j].getAttribute('data-anim') == index) {
        contenu[j].classList.add('active-contenu');
        contenu[j].classList.remove('no-active');
      } else {
        contenu[j].classList.remove('active-contenu');
        contenu[j].classList.add('no-active');
      }
    }
  });
}); 

var texte = document.getElementById("texte");
var result = document.getElementById("result");

texte.addEventListener("click", function (e) {
  e.preventDefault();
  result.innerHTML =
    "Pour pouvoir créer une annonce vous devez vérifiez votre adresse mail envoyée lors de votre incription";
});

let confirmPopup = document.getElementsByClassName("confirm-popup")[0];
let deleteBtn = document.getElementsByClassName("delete-btn");
let cancelBtn = document.getElementsByClassName("cancel-btn")[0];
let confirmBtn = document.getElementsByClassName("confirm-btn")[0];
for(let i = 0; i < deleteBtn.length; i++)
{
  deleteBtn[i].addEventListener("click", () => {
    annonceId = parseInt(deleteBtn[i].classList[deleteBtn[i].classList.length - 1]);
    let url = "{{ path('delete_annonce' , {'id': 'annonce.id'})}}";
    url = url.replace("annonce.id", annonceId);
    confirmPopup.style.visibility = "visible";
    confirmBtn.href = url;
    cancelBtn.style.pointerEvents = "auto";
    cancelBtn.style.cursor = "pointer";
    confirmBtn.style.pointerEvents = "auto";
    confirmBtn.style.cursor = "pointer";
  });
}

cancelBtn.addEventListener("click", () => {
  console.log(confirmBtn.href);
  confirmPopup.style.visibility = "hidden";	
  cancelBtn.style.pointerEvents = "none";
  cancelBtn.style.cursor = "default";
  confirmBtn.style.pointerEvents = "none";
  confirmBtn.style.cursor = "default";
});
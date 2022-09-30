import "./styles/payment.css";


/*{# Script Première question #}
 * Quand l'utilisateur clique sur "myBtn", execution de myFunction*/

document.getElementById("myImageId").src = "/img/chevron-down.png";

document.getElementById("myBtn").onclick = function () {
  myFunction();
}; // se charge d'afficher le contenu de myDropdown //


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

  if (document.getElementById("myDropdown").className == "dropdown-content show") {
    document.getElementById("myImageId").src = "/img/chevron-up.png";
    document.getElementById("myImageId").className = "chevron-up";
  } else if (document.getElementById("myDropdown").className == "dropdown-content") {
    document.getElementById("myImageId").src = "/img/chevron-down.png";
    document.getElementById("myImageId").className = "chevron-down";
  }
}

var onglets = Array.from(document.querySelectorAll(".input"));
var contenu = Array.from(document.querySelectorAll(".contenu-widget"));
var indexContent = 1;
var indexBar = 0;

function tabsAnimation(e) {
  var el = e.target;
  contenu[indexContent].classList.remove("active-contenu");
  onglets[indexBar].classList.remove("active");
  indexBar = onglets.indexOf(el);

  if (indexBar === 0) {
    indexContent = 1;
  } else if (indexBar === 1) {
    indexContent = 0;
  }

  contenu[indexContent].classList.add("active-contenu");
  onglets[indexBar].classList.add("active");
}

onglets.forEach(function (onglet) {
  onglet.addEventListener("click", tabsAnimation);
}); //calcul total

var poids = document.getElementById("poids");
var mondial = document.getElementById("mode");
var annoncePrice = document.getElementById("annoncePrice");
var result = document.getElementById("result");
var remiseMainPropre = document.getElementById("remise");
var buy = document.getElementById("buy");
var input = document.querySelector(".input");
mondial.addEventListener("click", total);
remiseMainPropre.addEventListener("click", checked);

function total() {
  var fees;

  var _final;

  if (poids.innerHTML === "0g - 500g") {
    fees = 4.4;
  } else if (poids.innerHTML === "500g - 1kg") {
    fees = 4.9;
  } else if (poids.innerHTML === "1kg - 2kg") {
    fees = 6.4;
  } else if (poids.innerHTML === "2kg - 3kg") {
    fees = 6.6;
  }

  var total = 0.12*fees + fees + parseFloat(annoncePrice.innerHTML);
  var modPrice = total%1;
  var preFinal;
  if(modPrice > 0 && modPrice <0.5){
    preFinal = Math.round(total) + 0.5;
    
  }else if(modPrice >= 0.5 && modPrice <1 ){
    preFinal = Math.round(total);
  }
  var finalPrice = preFinal;
  result.innerHTML = "Total " + finalPrice.toString().replace(".", ",") + "€";
  remiseMainPropre.removeAttribute("checked");
  mondial.setAttribute("checked", true);
  buy.innerHTML = "Payer " + finalPrice.toString().replace(".", ",") + "€";
}

function checked() {
  result.innerHTML = "Total " + annoncePrice.innerHTML.toString().replace(".", ",");
  buy.innerHTML = "Payer " + annoncePrice.innerHTML.toString().replace(".", ",");
  remiseMainPropre.setAttribute("checked", true);
  mondial.removeAttribute("checked");
}
/* Widget + variables */


$(document).ready(function () {
  var checked = $('#remise')[0];
  var widget = $('#mode')[0];
  $('.villeExpedition').css('display', 'block');
  $(widget).change(function () {
    if (this.checked) {
      $('#remise').removeClass('active');
      $('#mode').addClass('active');
      $('.contenu-widget').addClass('active-contenu');
      $('.villeExpedition').css('display', 'none');
      $('.contenu-widget').css('display', 'block');
    } else if (checked.checked) {
      $('#remise').addClass('active');
      $('#mode').removeClass('active');
      $('.contenu-widget').removeClass('active-contenu');
      $('.villeExpedition').css('display', 'block');
      $('.contenu-widget').css('display', 'none');
    }
  });
  $(checked).change(function () {
    if (this.checked) {
      $('#remise').addClass('active');
      $('#mode').removeClass('active');
      $('.contenu-widget').removeClass('active-contenu');
      $('.villeExpedition').css('display', 'block');
      $('.contenu-widget').css('display', 'none');
    } else if (checked.checked) {
      $('#remise').removeClass('active');
      $('#mode').addClass('active');
      $('.contenu-widget').addClass('active-contenu');
      $('.villeExpedition').css('display', 'none');
      $('.contenu-widget').css('display', 'block');
    }
  });
  /* Charge le widget dans la DIV d'id "Zone_Widget" avec les paramètres indiqués
   * et renverra le Point Relais sélectionné par l'utilisateur dans le champs d'ID "Retour_Widget"  */

  $("#Zone_Widget").MR_ParcelShopPicker({
    Target: "#Retour_Widget",
    // Selecteur JQuery de l'élément dans lequel sera renvoyé l'ID du Point Relais sélectionné (généralement un champ input hidden)   #}
    Brand: "BDTEST13",
    // Votre code client Mondial Relay
    Country: "FR",
    OnParcelShopSelected: function OnParcelShopSelected(data) {
      document.getElementById("parcelshopAddress").value = data.Adresse1;
      console.log(document.getElementById("parcelshopAddress").value);
      document.getElementById("parcelshopId").value = data.ID;
      console.log(document.getElementById("parcelshopId").value);
    },
    // Code ISO 2 lettres du pays utilisé pour la recherche
    NbResults: 8,
    ShowResultsOnMap: false,
    Responsive: true,
    CSS: true
  });
});

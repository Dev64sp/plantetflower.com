import "./styles/createAnnonce.css";

 // Script permettant de calculer le prix définitif de façon dynamique

 var first = document.getElementById("first");
 var result = document.getElementById("result");
 var message = document.getElementById("message");
 var submit = document.getElementById("submit");
 first.addEventListener("input", sum);
 
 function sum() {
  var tempPrice = parseFloat(first.value) + + parseFloat(first.value)*0.12 +0.7;
  console.log("Prix avant arrondi   "+tempPrice);
  var modPrice = tempPrice%1;
  var preFinal;
  if(modPrice > 0 && modPrice <0.5){
    preFinal = Math.round(tempPrice) + 0.5;
    
  }else if(modPrice >= 0.5 && modPrice <1 ){
    preFinal = Math.round(tempPrice);
  }
  
  var finalPrice = preFinal;
  console.log("Prix après arrondi   "+ finalPrice);
  console.log("Reste   " + modPrice);

  if (first.value > 0) {
    result.innerHTML = finalPrice + "€";
     message.innerHTML = "";
     submit.removeAttribute("disabled");
   } else {
     result.innerHTML = "0 €";
   }
 
   if (first.value >= 100) {
     result.innerHTML = "0 €";
     message.innerHTML = "Nous ne prenons pas en compte votre annonce au-delà de 100€, veuillez nous excuser";
     submit.setAttribute("disabled", true);
   }
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
       document.getElementById("create_annonce_expAddress").value = data.Adresse1;
       document.getElementById("create_annonce_ville").value = data.Ville;
       document.getElementById("create_annonce_expZipCode").value = data.CP;
       document.getElementById("create_annonce_expRelId").value = data.ID;
     },
     // Code ISO 2 lettres du pays utilisé pour la recherche
     NbResults: 8,
     ShowResultsOnMap: false,
     Responsive: true,
     CSS: true
   });
 }); // page createAnnonce
 
 /**
 * @params {File[]} files Array of files to add to the FileList
 * @return {FileList}
 */
 
 function FileListItems(files) {
   var b = new ClipboardEvent("").clipboardData || new DataTransfer();
 
   for (var i = 0, len = files.length; i < len; i++) {
     b.items.add(files[i]);
   }
 
   return b.files;
 }
 
 var inpFile = document.getElementById("get-file");
 var previews = document.getElementsByClassName("previmage");
 var imagesSetCount = 0;
 var imagesSet = [];
 inpFile.addEventListener("change", function () {
   if (imagesSetCount >= 3) {
     for (var i = 0; i < previews.length; i++) {
       previews[i].src = "";
       previews[i].style.display = "none";
       imagesSet = [];
       imagesSetCount = 0;
       inpFile.files = null;
     }
   }
 
   var images = this.files;
   var imageUrls = [];
 
   var _loop = function _loop(_i) {
     if (images[_i] && imagesSetCount < 3) {
       var reader = new FileReader();
       reader.addEventListener("load", function () {
         previews[imagesSetCount].setAttribute('src', this.result);
         imageUrls.push(this.result);
         previews[imagesSetCount].style.display = "flex";
         imagesSetCount++;
         imagesSet.push(images[_i]);
         inpFile.files = new FileListItems(imagesSet);
       });
       reader.readAsDataURL(images[_i]);
     }
   };
 
   for (var _i = 0; _i < images.length; _i++) {
     _loop(_i);
   }
 });
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
 }); // page editAnnonce
 
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
 var previews = document.getElementsByClassName("previmageEdit");
 var imagesSetCount = 0;
 var imagesSet = []; // page editAnnonce
 
 var toDataURL = function toDataURL(url) {
   return fetch(url).then(function (response) {
     return response.blob();
   }).then(function (blob) {
     return new Promise(function (resolve, reject) {
       var reader = new FileReader();
 
       reader.onloadend = function () {
         return resolve(reader.result);
       };
 
       reader.onerror = reject;
       reader.readAsDataURL(blob);
     });
   });
 };
 
 function dataURLtoFile(dataurl, filename) {
   var arr = dataurl.split(','),
       mime = arr[0].match(/:(.*?);/)[1],
       bstr = atob(arr[1]),
       n = bstr.length,
       u8arr = new Uint8Array(n);
 
   while (n--) {
     u8arr[n] = bstr.charCodeAt(n);
   }
 
   return new File([u8arr], filename, {
     type: mime
   });
 }
 
 var imagesToEdit = ["{{ images.0.name }}", "{{ images.1.name }}", "{{ images.2.name }}"];
 var fileArr = [];
 
 for (var i = 0; i < imagesToEdit.length; i++) {
   console.log("image added");
   var url = "/uploads/annonces/".concat(imagesToEdit[i]);
   toDataURL(url).then(function (dataUrl) {
     var fileData = dataURLtoFile(dataUrl, "imageName.jpg");
     fileArr.push(fileData);
     inpFile.files = new FileListItems(fileArr);
   });
 }
 
 var imagesSetCountEdit = document.getElementsByClassName("previmageEdit").length;
 console.log(imagesSetCountEdit);
 inpFile.addEventListener("change", function () {
   if (imagesSetCountEdit >= 3) {
     for (var _i = 0; _i < previews.length; _i++) {
       previews[_i].src = "";
       previews[_i].style.display = "none";
       imagesSet = [];
       imagesSetCountEdit = 0;
       inpFile.files = null;
     }
   }
 
   var images = this.files;
   var imageUrls = [];
 
   var _loop = function _loop(_i2) {
     if (images[_i2] && imagesSetCountEdit < 3) {
       var reader = new FileReader();
       reader.addEventListener("load", function () {
         previews[imagesSetCountEdit].setAttribute('src', this.result);
         imageUrls.push(this.result);
         previews[imagesSetCountEdit].style.display = "flex";
         imagesSetCountEdit++;
         imagesSet.push(images[_i2]);
         inpFile.files = new FileListItems(imagesSet);
         console.log(imagesSet);
       });
       reader.readAsDataURL(images[_i2]);
     }
   };
 
   for (var _i2 = 0; _i2 < images.length; _i2++) {
     _loop(_i2);
   }
 });
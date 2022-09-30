import "./styles/cgu.css";

// Script Première question
// Quand l'utilisateur clique sur "myBtn", execution de myFunction
document.getElementById("myImageId").src = "/img/chevron-down.png";
document.getElementById("myBtn").onclick = function () {
  myFunction();
};

/* se charge d'afficher le contenu de myDropdown */
// Script question Préambule
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  if (
    document.getElementById("myDropdown").className == "dropdown-content show"
  ) {
    document.getElementById("myImageId").src = "/img/chevron-up.png";
    document.getElementById("myImageId").className = "chevron-up";
  } else if (
    document.getElementById("myDropdown").className == "dropdown-content"
  ) {
    document.getElementById("myImageId").src = "/img/chevron-down.png";
    document.getElementById("myImageId").className = "chevron-down";
  }
}

// Script question Fonctionnement du site
document.getElementById("myImageId2").src = "/img/chevron-down.png";
document.getElementById("myBtn2").onclick = function () {
  myFunction2();
};
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  if (
    document.getElementById("myDropdown2").className == "dropdown-content show"
  ) {
    document.getElementById("myImageId2").src = "/img/chevron-up.png";
    document.getElementById("myImageId2").className = "chevron-up";
  } else if (
    document.getElementById("myDropdown2").className == "dropdown-content"
  ) {
    document.getElementById("myImageId2").src = "/img/chevron-down.png";
    document.getElementById("myImageId2").className = "chevron-down";
  }
}

// Script question Achat
document.getElementById("myImageId3").src = "/img/chevron-down.png";
document.getElementById("myBtn3").onclick = function () {
  myFunction3();
};
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  if (
    document.getElementById("myDropdown3").className == "dropdown-content show"
  ) {
    document.getElementById("myImageId3").src = "/img/chevron-up.png";
    document.getElementById("myImageId3").className = "chevron-up";
  } else if (
    document.getElementById("myDropdown3").className == "dropdown-content"
  ) {
    document.getElementById("myImageId3").src = "/img/chevron-down.png";
    document.getElementById("myImageId3").className = "chevron-down";
  }
}

// Script question Propriété intellectuelle
document.getElementById("myImageId4").src = "/img/chevron-down.png";
document.getElementById("myBtn4").onclick = function () {
  myFunction4();
};
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
  if (
    document.getElementById("myDropdown4").className == "dropdown-content show"
  ) {
    document.getElementById("myImageId4").src = "/img/chevron-up.png";
    document.getElementById("myImageId4").className = "chevron-up";
  } else if (
    document.getElementById("myDropdown4").className == "dropdown-content"
  ) {
    document.getElementById("myImageId4").src = "/img/chevron-down.png";
    document.getElementById("myImageId4").className = "chevron-down";
  }
}

// Script question Divers
document.getElementById("myImageId5").src = "/img/chevron-down.png";
document.getElementById("myBtn5").onclick = function () {
  myFunction5();
};
function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
  if (
    document.getElementById("myDropdown5").className == "dropdown-content show"
  ) {
    document.getElementById("myImageId5").src = "/img/chevron-up.png";
    document.getElementById("myImageId5").className = "chevron-up";
  } else if (
    document.getElementById("myDropdown5").className == "dropdown-content"
  ) {
    document.getElementById("myImageId5").src = "/img/chevron-down.png";
    document.getElementById("myImageId5").className = "chevron-down";
  }
}

// Script question MangoPay
document.getElementById("myImageId6").src = "/img/chevron-down.png";
document.getElementById("myBtn6").onclick = function () {
  myFunction6();
};
function myFunction6() {
  document.getElementById("myDropdown6").classList.toggle("show");
  if (
    document.getElementById("myDropdown6").className == "dropdown-content show"
  ) {
    document.getElementById("myImageId6").src = "/img/chevron-up.png";
    document.getElementById("myImageId6").className = "chevron-up";
  } else if (
    document.getElementById("myDropdown6").className == "dropdown-content"
  ) {
    document.getElementById("myImageId6").src = "/img/chevron-down.png";
    document.getElementById("myImageId6").className = "chevron-down";
  }
}

// Script question Mondial Relay
document.getElementById("myImageId7").src = "/img/chevron-down.png";
document.getElementById("myBtn7").onclick = function () {
  myFunction7();
};
function myFunction7() {
  document.getElementById("myDropdown7").classList.toggle("show");
  if (
    document.getElementById("myDropdown7").className == "dropdown-content show"
  ) {
    document.getElementById("myImageId7").src = "/img/chevron-up.png";
    document.getElementById("myImageId7").className = "chevron-up";
  } else if (
    document.getElementById("myDropdown7").className == "dropdown-content"
  ) {
    document.getElementById("myImageId7").src = "/img/chevron-down.png";
    document.getElementById("myImageId7").className = "chevron-down";
  }
}

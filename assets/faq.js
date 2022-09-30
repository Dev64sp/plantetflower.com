import "./styles/faq.css";

// Script Première question
// Quand l'utilisateur clique sur "myBtn", execution de myFunction
document.getElementById("myImageId").src = "/img/chevron-down.png";
document.getElementById("myBtn").onclick = function () {
  myFunction();
};

/* se charge d'afficher le contenu de myDropdown */
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

// Script Deuxième question
document.getElementById("myImageId2").src = "/img/chevron-down.png";
document.getElementById("myBtn2").onclick = function () {
  myFunction3();
};
function myFunction3() {
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

// Script Troisième question
document.getElementById("myImageId3").src = "/img/chevron-down.png";
document.getElementById("myBtn3").onclick = function () {
  myFunction2();
};
function myFunction2() {
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

// Script Quatrième question
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

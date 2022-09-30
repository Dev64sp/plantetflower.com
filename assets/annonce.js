import "./styles/annonce.css";

const toggleList = document.getElementById("toggle-list");
const listAnnonce = document.getElementById("list-annonce");
const gray = document.getElementById("gray");
toggleList.addEventListener("click", () => {
  if (listAnnonce.className === "col list-annonce active") {
    listAnnonce.className = "col list-annonce inactive";
    gray.className = "bg-gray-inactive row";
  } else {
    listAnnonce.className = "col list-annonce active";
    gray.className = "bg-gray-active row";
  }
});
const images = document.querySelectorAll('image');
const contenu = document.querySelectorAll('contenu');
let index = 0;
images.forEach(image => {
  image.addEventListener('click', () => {
    if(image.classList.contains('active')) {
      return;
    } else {
      image.classList.add('active');
    }
//OK
    index = image.getAttribute('data-anim');
    console.log("index :", index);
    for(i = 0; i < image.length; i++) {
      if(image[i].getAttribute('data-anim') != index) {
        image[i].classList.remove('active');
      }
    }
    for(j = 0; j < contenu.length; j++) {
      if(contenu[j].getAttribute('data-anim') == index) {
        contenu[j].classList.add('activeContenu');
      } else {
        contenu[j].classList.remove('activeContenu');
      }
    }
  })
  
});

        /* gestion des images annonces */
        
  let miniImage =  document.getElementsByClassName("mini-image");
  let grandImage = document.getElementById("grand-image");
  let confirmPopup = document.getElementsByClassName("confirm-popup")[0];
  let deleteBtn = document.getElementsByClassName("delete-btn")[0];
  let cancelBtn = document.getElementsByClassName("cancel-btn")[0];
  let confirmBtn = document.getElementsByClassName("confirm-btn")[0];

  for(let i = 0; i < miniImage.length; i++)
  {
    miniImage[i].addEventListener("click", () => {
      console.log(grandImage.src);
      console.log(miniImage[i].src);
      grandImage.src = miniImage[i].src;
      console.log(grandImage.src);
    });
  }

  deleteBtn.addEventListener("click", () => {
    confirmPopup.style.visibility = "visible";
    cancelBtn.style.pointerEvents = "auto";
    cancelBtn.style.cursor = "pointer";
    confirmBtn.style.pointerEvents = "auto";
    confirmBtn.style.cursor = "pointer";
  });
  cancelBtn.addEventListener("click", () => {	
    confirmPopup.style.visibility = "hidden";	
    cancelBtn.style.pointerEvents = "none";
    cancelBtn.style.cursor = "default";
    confirmBtn.style.pointerEvents = "none";
    confirmBtn.style.cursor = "default";
  });

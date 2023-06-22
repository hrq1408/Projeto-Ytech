let arrowIconLeft = `<svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>`;

let slides = document.querySelectorAll('.slide-ana div');
let slideSayisi = slides.length;

let prev = document.getElementById('prev');
let next = document.getElementById('next');
prev.innerHTML = arrowIconLeft;
next.innerHTML = arrowIconLeft;
next.querySelector('svg').style.transform = 'rotate(180deg)';

slides.forEach((element, index) => {
  element.style.transform = `translateX(${100 * index}%)`;
});

let loop = 0 + 1000 * slideSayisi;

function goNext() {
  loop++;
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - loop % slideSayisi)}%)`;
  });
}

function goPrev() {
  loop--;
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - loop % slideSayisi)}%)`;
  });
}

next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);
document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') {
    goNext();
  } else if (e.code === 'ArrowLeft') {
    goPrev();
  }
});

// wait for the entire page to finish loading
window.addEventListener('load', () => {
  // setTimeout to simulate the delay from a real page load
  setTimeout(lazyLoad, 1000);
});

function lazyLoad() {
  let card_images = document.querySelectorAll('.card-image');

  card_images.forEach((card_image) => {
    let image_url = card_image.getAttribute('data-image-full');
    let content_image = card_image.querySelector('img');

    content_image.src = image_url;

    content_image.addEventListener('load', () => {
      card_image.style.backgroundImage = `url(${image_url})`;
      card_image.classList.add('is-loaded');
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("myForm");
  let submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Formulário válido. Enviando...");
      form.reset();
    }
  });

  function validateForm() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let phone = document.getElementById("phoneInput").value;
    let message = document.getElementById("messageInput").value;

    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Please fill in all fields on the form.");
      return false;
    }

    return true;
  }
});

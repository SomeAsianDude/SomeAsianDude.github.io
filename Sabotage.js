// console.log("dead");
// const form = document.getElementsByClassName("form");
// console.log(form);

// form.addEventListener("submit", getcreditinfo);

// const checkbox = document.querySelector("#agree");
// const button = document.querySelector("#submitButton");

// function getcreditinfo(e) {
//   e.preventDefault();
//   if (document.getElementById("agree").checked == false) {
//     alert("By signing up, you must accept our terms and conditions!");
//     return false;
//   }

//   const number = document.querySelector("#number");
//   if (number.value.length != 16) {
//     alert("Your credit card number must be exactly 16 digits");
//     return false;
//   }
//   const date = document.querySelector("#date");
//   const number1 = document.querySelector("#number1");
//   const words = document.querySelector("#words");

//   console.log(number.value);
//   console.log(date.value);
//   console.log(number1.value);
//   console.log(words.value);
// }

var imgIndex = 1;
showImages(imgIndex);

function changeImage(n) {
  showImages((imgIndex += n));
}

function showImages(n) {
  var images = document.getElementsByClassName("mySlide");
  if (n > images.length) {
    imgIndex = 1;
  }

  if (n < 1) {
    imgIndex = images.length;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[imgIndex - 1].style.display = "block";
}

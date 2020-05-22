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

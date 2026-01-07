let imgIndex = 0;
const imgElement = document.getElementById("sliderImg");

function changeImage() {
  imgElement.src = galleryImages[imgIndex];
}

document.getElementById("forwardBtn").onclick = () => {
  imgIndex++;
  if (imgIndex >= galleryImages.length) imgIndex = 0;
  changeImage();
};

document.getElementById("backBtn").onclick = () => {
  imgIndex--;
  if (imgIndex < 0) imgIndex = galleryImages.length - 1;
  changeImage();
};

/* AUTO PLAY */
setInterval(() => {
  imgIndex = (imgIndex + 1) % galleryImages.length;
  changeImage();
}, 3500);

/* jQuery EFFECTS */
$(function () {

  $("#goGallery").click(function () {
    $("html, body").animate({
      scrollTop: $("#gallery").offset().top
    }, 700);
  });

  $("#contactToggle").click(function () {
    $(".contact-box").slideToggle();
  });

});

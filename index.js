function displayImage(image,caption) {
    var lightbox = document.querySelector(".lightbox");

    var lightboxImage = document.getElementById("lightbox-image");
    var lightboxCaption = document.querySelector(".lightbox-caption");
   
    lightbox.style.display = "block";
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    var caption = image.nextElementSibling.getAttribute("data-caption");

    lightboxCaption.textContent=caption
}

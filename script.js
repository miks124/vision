const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".lightbox-trigger").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

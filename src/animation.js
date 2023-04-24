const backText = document.querySelector(".back-text");
const socialIcons = document.querySelectorAll(".social-icons-wrapper .tooltip");
const originalBackText = backText.innerText;
let timeout;

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    clearTimeout(timeout); // flips image over after timeout
    backText.innerText = icon.getAttribute("data-tooltip"); //applies tooltip to back of image
  });

  icon.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      backText.innerText = originalBackText; //applies original text to back of image
    }, 600); // delays the change of text
  });
});

const menu = document.querySelector("#menu");
const bottomNav = document.querySelector("#bottomNav");

function toggleMenu() {

    bottomNav.classList.toggle("hidden");
}

function resize() {
    if (window.innerWidth > 500) {
        bottomNav.classList.remove("hidden");
    } else {
        bottomNav.classList.add("hidden");
    }
}

function viewer(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
    
    const clickedElement = event.target;
    const imageParts = clickedElement.src.split("-");
    const newImage = `${imageParts[0]}-full.jpeg`;
    document.body.insertAdjacentHTML("afterbegin", viewer(newImage, clickedElement.alt));
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", viewHandler);
});


menu.addEventListener("click", toggleMenu);
window.addEventListener("resize", resize);
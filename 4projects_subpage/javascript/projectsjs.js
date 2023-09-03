// event listener for the carousel buttons
document.addEventListener("DOMContentLoaded", function () {
    // get all the buttons variable
    const buttons = document.querySelectorAll("[data-carousel-button]");

    // iterate through the buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // get the offset and the container variavles
            const offset = button.dataset.carouselButton === "next" ? -1 : 1;
            const container = button.closest("[data-carousel]");
            const slides = container.querySelector('[data-slides]');

            // get the active slide and the new index
            const activeSlide = container.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            // remove the active attribute from the active slide and add it to the new slide
            activeSlide.removeAttribute("data-active");
            slides.children[newIndex].setAttribute("data-active", "true");

        });
    });
});

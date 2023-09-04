document.addEventListener("DOMContentLoaded", function () {
    const flexbox1_item1 = document.querySelector(".flexbox-item-1");
    const flexbox1_item2 = document.querySelector(".flexbox-item-2");
    const flexbox1_item3 = document.querySelector(".flexbox-item-3");

    const flexbox2_item1 = document.querySelector(".flexbox2-item-1");
    const flexbox2_item2 = document.querySelector(".flexbox2-item-2");
    const flexbox2_item3 = document.querySelector(".flexbox2-item-3");

    flexbox1_item1.addEventListener("mouseenter", function () {
        flexbox1_item2.style.opacity = "0.1";
        flexbox1_item3.style.opacity = "0.1";
        flexbox2_item1.style.opacity = "0.1";
        flexbox2_item2.style.opacity = "0.1";
        flexbox2_item3.style.opacity = "0.1";
    });

    flexbox1_item1.addEventListener("mouseleave", function () {
        flexbox1_item2.style.opacity = "1";
        flexbox1_item3.style.opacity = "1";
        flexbox2_item1.style.opacity = "1";
        flexbox2_item2.style.opacity = "1";
        flexbox2_item3.style.opacity = "1";
    });

    flexbox1_item2.addEventListener("mouseenter", function () {
        flexbox1_item1.style.opacity = "0.1";
        flexbox1_item3.style.opacity = "0.1";
        flexbox2_item1.style.opacity = "0.1";
        flexbox2_item2.style.opacity = "0.1";
        flexbox2_item3.style.opacity = "0.1";
    });

    flexbox1_item2.addEventListener("mouseleave", function () {
        flexbox1_item1.style.opacity = "1";
        flexbox1_item3.style.opacity = "1";
        flexbox2_item1.style.opacity = "1";
        flexbox2_item2.style.opacity = "1";
        flexbox2_item3.style.opacity = "1";
    });

    flexbox1_item3.addEventListener("mouseenter", function () {
        flexbox1_item2.style.opacity = "0.1";
        flexbox1_item1.style.opacity = "0.1";
        flexbox2_item1.style.opacity = "0.1";
        flexbox2_item2.style.opacity = "0.1";
        flexbox2_item3.style.opacity = "0.1";
    });

    flexbox1_item3.addEventListener("mouseleave", function () {
        flexbox1_item2.style.opacity = "1";
        flexbox1_item1.style.opacity = "1";
        flexbox2_item1.style.opacity = "1";
        flexbox2_item2.style.opacity = "1";
        flexbox2_item3.style.opacity = "1";
    });

    flexbox2_item1.addEventListener("mouseenter", function () {
        flexbox1_item1.style.opacity = "0.1";
        flexbox1_item2.style.opacity = "0.1";
        flexbox1_item3.style.opacity = "0.1";
        flexbox2_item2.style.opacity = "0.1";
        flexbox2_item3.style.opacity = "0.1";
    });

    flexbox2_item1.addEventListener("mouseleave", function () {
        flexbox1_item1.style.opacity = "1";
        flexbox1_item2.style.opacity = "1";
        flexbox1_item3.style.opacity = "1";
        flexbox2_item2.style.opacity = "1";
        flexbox2_item3.style.opacity = "1";
    });

    flexbox2_item2.addEventListener("mouseenter", function () {
        flexbox1_item1.style.opacity = "0.1";
        flexbox1_item2.style.opacity = "0.1";
        flexbox1_item3.style.opacity = "0.1";
        flexbox2_item1.style.opacity = "0.1";
        flexbox2_item3.style.opacity = "0.1";
    });

    flexbox2_item2.addEventListener("mouseleave", function () {
        flexbox1_item1.style.opacity = "1";
        flexbox1_item2.style.opacity = "1";
        flexbox1_item3.style.opacity = "1";
        flexbox2_item1.style.opacity = "1";
        flexbox2_item3.style.opacity = "1";
    });

    flexbox2_item3.addEventListener("mouseenter", function () {
        flexbox1_item1.style.opacity = "0.1";
        flexbox1_item2.style.opacity = "0.1";
        flexbox1_item3.style.opacity = "0.1";
        flexbox2_item1.style.opacity = "0.1";
        flexbox2_item2.style.opacity = "0.1";
    });

    flexbox2_item3.addEventListener("mouseleave", function () {
        flexbox1_item1.style.opacity = "1";
        flexbox1_item2.style.opacity = "1";
        flexbox1_item3.style.opacity = "1";
        flexbox2_item1.style.opacity = "1";
        flexbox2_item2.style.opacity = "1";
    });
});
alert('page under construction');
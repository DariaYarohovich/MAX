"use strict";

// sideBar submenus
+(() => {
    const parentMenuItems = document.querySelectorAll('.navigation__item_parent');

    for (let i = 0; i < parentMenuItems.length; i++) {

        let parentMenuItem = parentMenuItems[i];
        parentMenuItem.addEventListener("click", () => {
            parentMenuItem.classList.toggle("navigation__item_active-parent");

            let subMenu = parentMenuItem.querySelector(".navigation__list_second");
            if (subMenu.style.maxHeight) {
                subMenu.style.maxHeight = null;
            } else {
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        });
    }
})();

// videos 
+(() => {
    const videoBlocksCaps = document.querySelectorAll(".video-block__cap");

    for (let i = 0; i < videoBlocksCaps.length; i++) {
        let videoBlockCap = videoBlocksCaps[i];

        videoBlockCap.addEventListener("click", () => {
            videoBlockCap.style = "display: none";

            const video = videoBlockCap.previousElementSibling;
            video.setAttribute("controls", "");
            video.play();
            video.volume = 0.5;
        });
    }
})();

// collapse block
+(() => {
    const collapseBtn = document.querySelector(".collapse-btn");
    const collapseArea = document.querySelector(".collapse-area");

    collapseBtn.addEventListener("click", () => {
        if (collapseArea.style.maxHeight) {
            collapseArea.style.maxHeight = null;
        } else {
            collapseArea.style.maxHeight = collapseArea.scrollHeight + "px";
        }
    });
})();

$( function() {
    $( "#video-tabs" ).tabs();
} );

// Slider
var videoSlider = new Swiper ('.swiper-container', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 5
})


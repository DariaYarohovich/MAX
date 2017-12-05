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
    const videoBlocks = document.getElementsByTagName("video");

    for (let i = 0; i < videoBlocksCaps.length; i++) {
        const videoBlockCap = videoBlocksCaps[i];
        const video = videoBlockCap.previousElementSibling;

        videoBlockCap.addEventListener("click", () => {
            videoBlockCap.style = "display: none";
            video.play();
        });

        video.addEventListener("click", () => {
            video.pause();
            videoBlockCap.style = "display: block";
        });
    }
})();

// collapse block
+(() => {
    const collapseBtns = document.querySelectorAll(".collapse-btn");
    const collapseAreas = document.querySelectorAll(".collapse-area");

    if (collapseBtns && collapseAreas) {
       for (let i = 0; i < collapseBtns.length; i++) {
           const collapseBtn = collapseBtns[i];
           const collapseArea = collapseAreas[i];

           collapseBtn.addEventListener("click", () => {
            if (collapseArea.style.maxHeight) {
                collapseArea.style.maxHeight = null;
                collapseBtn.innerText = "+ Show more"
            } else {
                collapseArea.style.maxHeight = collapseArea.scrollHeight + "px";
                collapseBtn.innerText = "- Show less"
            }
        });
       }
    }
})();

// Slider
+(() => {
    if (document.querySelector('.swiper-container')) {
        const videoSlider = new Swiper ('.swiper-container', {
            
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 5
            })
    }
})();

// Syllabus video blocks hightlight
+(() => {
    const syllabusBlocks = document.querySelectorAll(".syllabus__item");

    for (let i = 0; i < syllabusBlocks.length; i++) {
        const block = syllabusBlocks[i];

        block.addEventListener("click", (e) => {

            if (e.target.classList.contains("video-block__cap")) {
                syllabusBlocks.forEach((item) => {
                    if  (item.classList.contains("syllabus__item_active")) {
                        item.classList.remove("syllabus__item_active");
                    }
                });

                block.classList.add("syllabus__item_active");
            }
        });
    }
})();

//to make all mobile footers are dark
+(() => {
    const toDimmer = () => {
        const footer = document.querySelector(".footer");
        if (document.documentElement.clientWidth < 768) {
            footer.classList.add("footer_dark");
        } else {
            if (footer.classList.contains("footer_dark")) {
                footer.classList.remove("footer_dark");
            }
        }
    }

    toDimmer();
    window.addEventListener("resize", () => toDimmer());
})();

// mobile menu
+(() => {
    const openBtn = document.querySelector(".header__mobile-menu");
    const mobileMenu = document.querySelector(".navigation-mobile");

    if (openBtn && mobileMenu) {
        openBtn.addEventListener("click", () => {
            mobileMenu.style = "left: 0";
        });

        const closeBtn = document.querySelector(".navigation-mobile__close");
        closeBtn.addEventListener("click", () => {
            mobileMenu.style = "left: -320px";
        });
    }
})();

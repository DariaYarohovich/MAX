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

// videos html5
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

           collapseBtn.addEventListener("click", (e) => {
            if (collapseArea.style.maxHeight) {
                collapseArea.style.maxHeight = null;

                if (e.target.innerText === "- Training Videos") {
                    e.target.innerText = "+ Training Videos"
                }
                
            } else {
                collapseArea.style.maxHeight = collapseArea.scrollHeight + "px";
                
                if (e.target.innerText === "+ Training Videos") {
                    e.target.innerText = "- Training Videos"
                }
            }
        });
       }
    }
})();

// Slider
+(() => {
    const sliderElem = document.querySelector('.video-slider');

    if (sliderElem) {
        const videoSlider = new Swiper ('.swiper-container', {
            
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 5,
                breakpoints: {
                    1439: {
                      slidesPerView: 4
                    },
                    1023: {
                        slidesPerView: 3
                    },
                    767: {
                        slidesPerView: 2,
                        initialSlide: 1
                    }
                },
                centeredSlides: true,
                initialSlide: 2,
                loop: true
            })

        sliderElem.addEventListener("mouseover", () => {
            videoSlider.slides[videoSlider.activeIndex].classList.remove('swiper-slide-active');
        });

        sliderElem.addEventListener("mouseout", () => {
            videoSlider.slides[videoSlider.activeIndex].classList.add('swiper-slide-active');
        });
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
        if (document.documentElement.clientWidth < 1200) {
            footer.classList.add("footer_dark-mobile");
        } else {
            if (footer.classList.contains("footer_dark-mobile")) {
                footer.classList.remove("footer_dark-mobile");
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
    const overlay = document.querySelector(".navigation-mobile__overlay");
    const body = document.querySelector("body");
    const closeBtn = document.querySelector(".navigation-mobile__close");

    if (openBtn && mobileMenu && overlay && closeBtn) {
        const closeSideBar = () => {
            mobileMenu.classList.remove("navigation-mobile_opened");
            overlay.classList.remove("navigation-mobile__overlay_opened");
            body.style = null;
        }

        openBtn.addEventListener("click", () => {
            mobileMenu.classList.add("navigation-mobile_opened");
            overlay.classList.add("navigation-mobile__overlay_opened");
            body.style = "overflow: hidden";
        });

        closeBtn.addEventListener("click", closeSideBar);
        overlay.addEventListener("click", closeSideBar);
    }
})();

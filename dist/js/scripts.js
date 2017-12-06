"use strict";

// sideBar submenus

+function () {
    var parentMenuItems = document.querySelectorAll('.navigation__item_parent');

    var _loop = function _loop(i) {

        var parentMenuItem = parentMenuItems[i];
        parentMenuItem.addEventListener("click", function () {
            parentMenuItem.classList.toggle("navigation__item_active-parent");

            var subMenu = parentMenuItem.querySelector(".navigation__list_second");
            if (subMenu.style.maxHeight) {
                subMenu.style.maxHeight = null;
            } else {
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        });
    };

    for (var i = 0; i < parentMenuItems.length; i++) {
        _loop(i);
    }
}();

// videos
+function () {
    var videoBlocksCaps = document.querySelectorAll(".video-block__cap");
    var videoBlocks = document.getElementsByTagName("video");

    var _loop2 = function _loop2(i) {
        var videoBlockCap = videoBlocksCaps[i];
        var video = videoBlockCap.previousElementSibling;

        videoBlockCap.addEventListener("click", function () {
            videoBlockCap.style = "display: none";
            video.play();
        });

        video.addEventListener("click", function () {
            video.pause();
            videoBlockCap.style = "display: block";
        });
    };

    for (var i = 0; i < videoBlocksCaps.length; i++) {
        _loop2(i);
    }
}();

// collapse block
+function () {
    var collapseBtns = document.querySelectorAll(".collapse-btn");
    var collapseAreas = document.querySelectorAll(".collapse-area");

    if (collapseBtns && collapseAreas) {
        var _loop3 = function _loop3(i) {
            var collapseBtn = collapseBtns[i];
            var collapseArea = collapseAreas[i];

            collapseBtn.addEventListener("click", function () {
                if (collapseArea.style.maxHeight) {
                    collapseArea.style.maxHeight = null;
                    collapseBtn.innerText = "+ Show more";
                } else {
                    collapseArea.style.maxHeight = collapseArea.scrollHeight + "px";
                    collapseBtn.innerText = "- Show less";
                }
            });
        };

        for (var i = 0; i < collapseBtns.length; i++) {
            _loop3(i);
        }
    }
}();

// Slider
+function () {
    if (document.querySelector('.swiper-container')) {
        var videoSlider = new Swiper('.swiper-container', {
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
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
            initialSlide: 2
        });
    }
}();

// Syllabus video blocks hightlight
+function () {
    var syllabusBlocks = document.querySelectorAll(".syllabus__item");

    var _loop4 = function _loop4(i) {
        var block = syllabusBlocks[i];

        block.addEventListener("click", function (e) {

            if (e.target.classList.contains("video-block__cap")) {
                syllabusBlocks.forEach(function (item) {
                    if (item.classList.contains("syllabus__item_active")) {
                        item.classList.remove("syllabus__item_active");
                    }
                });

                block.classList.add("syllabus__item_active");
            }
        });
    };

    for (var i = 0; i < syllabusBlocks.length; i++) {
        _loop4(i);
    }
}();

//to make all mobile footers are dark
+function () {
    var toDimmer = function toDimmer() {
        var footer = document.querySelector(".footer");
        if (document.documentElement.clientWidth < 768) {
            footer.classList.add("footer_dark");
        } else {
            if (footer.classList.contains("footer_dark")) {
                footer.classList.remove("footer_dark");
            }
        }
    };

    toDimmer();
    window.addEventListener("resize", function () {
        return toDimmer();
    });
}();

// mobile menu
+function () {
    var openBtn = document.querySelector(".header__mobile-menu");
    var mobileMenu = document.querySelector(".navigation-mobile");

    if (openBtn && mobileMenu) {
        openBtn.addEventListener("click", function () {
            mobileMenu.style = "left: 0";
        });

        var closeBtn = document.querySelector(".navigation-mobile__close");
        closeBtn.addEventListener("click", function () {
            mobileMenu.style = "left: -320px";
        });
    }
}();
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

// videos html5
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

            collapseBtn.addEventListener("click", function (e) {
                var target = e.target;

                if (collapseArea.style.maxHeight) {
                    collapseArea.style.maxHeight = null;

                    if (target.innerText.indexOf('- Show less') !== -1) {
                        target.innerText = "+ Show more";
                    }

                    if (target.innerText.indexOf('- Training Videos') !== -1) {
                        target.innerText = "+ Training Videos";
                    }
                } else {
                    collapseArea.style.maxHeight = collapseArea.scrollHeight + "px";

                    if (target.innerText.indexOf('+ Show more') !== -1) {
                        target.innerText = "- Show less";
                    }

                    if (target.innerText.indexOf('+ Training Videos') !== -1) {
                        target.innerText = "- Training Videos";
                    }
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
    var sliderElem = document.querySelector('.video-slider');

    if (sliderElem) {
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
            initialSlide: 2,
            loop: true
        });

        sliderElem.addEventListener("mouseover", function () {
            videoSlider.slides[videoSlider.activeIndex].classList.remove('swiper-slide-active');
        });

        sliderElem.addEventListener("mouseout", function () {
            videoSlider.slides[videoSlider.activeIndex].classList.add('swiper-slide-active');
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
        if (document.documentElement.clientWidth < 1200) {
            footer.classList.add("footer_dark-mobile");
        } else {
            if (footer.classList.contains("footer_dark-mobile")) {
                footer.classList.remove("footer_dark-mobile");
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
    var overlay = document.querySelector(".navigation-mobile__overlay");
    var body = document.querySelector("body");
    var closeBtn = document.querySelector(".navigation-mobile__close");

    if (openBtn && mobileMenu && overlay && closeBtn) {
        var closeSideBar = function closeSideBar() {
            mobileMenu.classList.remove("navigation-mobile_opened");
            overlay.classList.remove("navigation-mobile__overlay_opened");
            body.style = null;
        };

        openBtn.addEventListener("click", function () {
            mobileMenu.classList.add("navigation-mobile_opened");
            overlay.classList.add("navigation-mobile__overlay_opened");
            body.style = "overflow: hidden";
        });

        closeBtn.addEventListener("click", closeSideBar);
        overlay.addEventListener("click", closeSideBar);
    }
}();

// accordion
$(document).ready(function () {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });
});

//text truncate
jQuery(document).ready(function ($) {

    if ($(document).width() < 768) {
        $(".review__text").dotdotdot({});
    }
});

// tabs vertical 
$(function () {
    $('.tabs-vertical nav a').on('click', function () {
        show_content($(this).index());
    });

    show_content(0);

    function show_content(index) {
        // Make the content visible
        $('.tabs-vertical .tabs-vertical__content.visible').removeClass('visible');
        $('.tabs-vertical .tabs-vertical__content:nth-of-type(' + (index + 1) + ')').addClass('visible');

        // Set the tab to selected
        $('.tabs-vertical nav a.selected').removeClass('selected');
        $('.tabs-vertical nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
    }
});

// min popup
$(function () {
    $('#open-min-popup').click(function () {
        event.preventDefault();
        $('#overlay').fadeIn(400);
        $('#popup').fadeIn(400);
    });

    $('#overlay').click(function () {
        $('#overlay').fadeOut(500);
        $('#popup').fadeOut(500);
    });

    $('#close-min-popup').click(function () {
        $('#overlay').fadeOut(500);
        $('#popup').fadeOut(500);
    });

    $(".popup__select").click(function () {
        event.stopImmediatePropagation();
    });
});
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
            let target = e.target;

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

// accordion
$(document).ready(function() {
    function close_accordion_section() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
  
    $('.accordion-section-title').click(function(e) {
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

 // tabs vertical 
 $(function() {
    $('.tabs-vertical nav a').on('click', function() {
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

  $(function() {
    // min popup
    $('#open-min-popup').click( function() {
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

    $(".popup__select").click( function() {
        event.stopImmediatePropagation();
    });

    // big popup
    $('#open-big-popup').click( function() {
        event.preventDefault();
        $('#overlay-blur').fadeIn(400);
        $('#popup-expired').fadeIn(400);
    });

    $('#overlay-blur').click(function () {
        $('#overlay-blur').fadeOut(500);
        $('#popup-expired').fadeOut(500);
    });

    $('#close-big-popup').click(function () {
        $('#overlay-blur').fadeOut(500);
        $('#popup-expired').fadeOut(500);
    });

    //price switcher 
    $('.switch-btn-mountly').click( function($event) {
        var planWrap = $($event.target).closest('.plan');

        $(planWrap).find('.switch-btn-mountly').addClass('plan__switch-btn_active');
        $(planWrap).find('.switch-btn-annually').removeClass('plan__switch-btn_active');
        $(planWrap).find('.plan__item_year').fadeOut(0);
        $(planWrap).find('.plan__item_month').fadeIn(400);
    });

    $('.switch-btn-annually').click( function($event) {
        var planWrap = $($event.target).closest('.plan');

        $(planWrap).find('.switch-btn-annually').addClass('plan__switch-btn_active');
        $(planWrap).find('.switch-btn-mountly ').removeClass('plan__switch-btn_active');
        $(planWrap).find('.plan__item_month').fadeOut(0);
        $(planWrap).find('.plan__item_year').fadeIn(400);
    });
  });

  // footer accordion 

$(document).ready(function() {
    function close_accordion_section() {
      $('.footer-links__column .footer-links__main-link').removeClass('active');
      $('.footer-links__column .footer-links__aux-links-area').slideUp(300).removeClass('open');
    }
  
    $('.footer-links__main-link').click(function(e) {
      // Grab current anchor value
      var currentAttrValue = $(this).attr('href');
  
      if ($(e.target).is('.active')) {
        close_accordion_section();
      } else {
        close_accordion_section();
  
        // Add active class to section title
        $(this).addClass('active');
        // Open up the hidden content panel
        $('.footer-links__column ' + currentAttrValue).slideDown(300).addClass('open');
      }
      e.preventDefault();
    });
});
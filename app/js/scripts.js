"use strict";

// sideBar submenus
+(() => {
    const parentMenuItems = document.querySelectorAll('.navigation__item_parent');

    for (let i = 0; i < parentMenuItems.length; i++) {
        parentMenuItems[i].addEventListener("click", () => {

            let parentMenuItem = parentMenuItems[i];
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

$( function() {
    $( "#video-tabs" ).tabs();
} );

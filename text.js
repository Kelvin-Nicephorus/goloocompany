const menu = document.getElementById("menu")
const openIcon = document.getElementById("openIcon")
const closeIcon = document.getElementById("closeIcon");

function toggleMenu() {
    menu.style.display = "block"
    openIcon.style.display = "none"
    closeIcon.style.display = "block"
}

   function closeMenu() {
    menu.style.display = "none"
    openIcon.style.display = "block"
    closeIcon.style.display = "none"
   }
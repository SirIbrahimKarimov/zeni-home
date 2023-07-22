const menu = document.getElementById("menu")
const openBtn = document.getElementById("openMenu")
const closeBtn = document.getElementById("closeMenu")
openBtn.addEventListener("click", () => {
    menu.classList.remove("hide")
    menu.classList.add("offcanvas")

})
closeBtn.addEventListener("click", () => {
    menu.classList.add("hide")
    menu.classList.remove("offcanvas")
})
let body = document.body
let navbar = document.querySelector("nav")
window.onscroll = function() {
    if(body.scrollTop > 90 || document.documentElement.scrollTop > 90){
        navbar.classList.add("navOnScroll")
    } else{
        navbar.classList.remove("navOnScroll")
    }
};
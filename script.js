function myFunction(x) {
    x.classList.toggle("change")
}


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (screenTop = currentScrollPos) {
        document.querySelector("header").style.backgroundColor = "rgba(0,0,0,1)";
    } else {
        document.querySelector("header").style.backgroundColor = "rgba(0,0,0,0)"
    }
    prevScrollpos = currentScrollPos;
}


document.querySelector(".burger-menu").addEventListener("click", () => {
    document.querySelector(".menu-overlay").classList.toggle("menu-transition");
    document.querySelector("header").style.backgroundColor = "black";
})

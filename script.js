
/* Lånt kode fra W3Schools til vores burgermenu */
function myFunction(x) {
    x.classList.toggle("change")
}


/* En function som gør at når man scroller ned på vores side bliver vores header sort
når man så scroller op igen og rammer toppen bliver den transparent igen*/
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

/* Eventlistner som sætter en class på vores mobilmenu og gør vores header sort */
document.querySelector(".burger-menu").addEventListener("click", () => { 
    document.querySelector(".menu-overlay").classList.toggle("menu-transition");
    document.querySelector("header").style.backgroundColor = "black";
})

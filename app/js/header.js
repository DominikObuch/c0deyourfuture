window.addEventListener("scroll", () =>{
    if(window.scrollY >= 50){
        document.getElementsByClassName("header")[0].classList.add("header__scrolled")
    }
    else{
        document.getElementsByClassName("header")[0].classList.remove("header__scrolled")
   
    }
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
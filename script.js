
let button = document.getElementById("scrollup");

function scrollUp(){
    const scroll = document.getElementById('scrollup');
    if (this.scrollY >= 460){
        button.classList.remove('d-none');
    }else{
        button.classList.add('d-none');
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

button.addEventListener("click", backToTop)
window.addEventListener('scroll', scrollUp);
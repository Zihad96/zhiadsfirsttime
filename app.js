let zihad= document.querySelector(".zihad");

function fahmid() {
    zihad.classList.remove("zihad");
    zihad.classList.add("baby");
}

function hira(){
    zihad.classList.remove("baby");
    zihad.classList.add("zihad");
}

zihad.addEventListener("mouseenter", fahmid);
zihad.addEventListener("mouseleave", hira);
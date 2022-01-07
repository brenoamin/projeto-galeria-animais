const hamburguer = document.querySelector(".inicio img")
const hideClass = document.querySelectorAll(".side-bar h2")
const galeria = document.querySelectorAll("img.gallery")
const imagemModal = document.querySelector(".modal img")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".x-modal img")
const prevPic = document.querySelector(".previous-image img")
const nextPic = document.querySelector(".next-image img")
const heart = document.querySelectorAll("img.like-heart")
const imagemModalDbl = document.querySelector("img.imagem-modal-dbl")


hideClass.forEach(item => hamburguer.addEventListener("click", function () {
    item.classList.toggle("hide")
    if (hamburguer.getAttribute("src") == "assets/open-menu.svg") {
        hamburguer.setAttribute("src", "assets/closed-menu.svg")
    }
    else {
        hamburguer.setAttribute("src", "assets/open-menu.svg")
    }
}))

galeria.forEach(foto => foto.addEventListener("click", function (event) {
    imagemModal.src = event.target.src;
    modal.style.display = "flex"
    closeModal.style.display = "flex"
    closeModal.style.visibility = "visible";
    abas()
}))

modal.addEventListener("click", function () {
    modal.style.display = "none"
    closeModal.style.display = "none"
    prevPic.style.visibility = "hidden"
    nextPic.style.visibility = "hidden"
})
imagemModal.addEventListener("click", function (event) {
    event.stopPropagation()
})
closeModal.addEventListener("click", function () {
    modal.style.display = "none"
    closeModal.style.display = "none"
    prevPic.style.visibility = "hidden"
    nextPic.style.visibility = "hidden"
})

prevPic.addEventListener("click", function () {
    const indice = [...galeria].findIndex(item => item.src === imagemModal.src)
    imagemModal.src = galeria[indice - 1].src;
    abas()
})
nextPic.addEventListener("click", function () {
    const indice = [...galeria].findIndex(item => item.src === imagemModal.src)
    imagemModal.src = galeria[indice + 1].src;
    abas()
})

document.addEventListener("keydown", function (event) {
    if (closeModal.style.display !== "none") {
        if (event.key === "ArrowLeft") {
            const indice = [...galeria].findIndex(item => item.src === imagemModal.src)
            imagemModal.src = galeria[indice - 1].src;
            abas()
        }
        else if (event.key === "ArrowRight") {
            const indice = [...galeria].findIndex(item => item.src === imagemModal.src)
            imagemModal.src = galeria[indice + 1].src;
            abas()
        }
        else if (event.key === "Escape") {
            modal.style.display = "none"
            closeModal.style.display = "none"
            prevPic.style.visibility = "hidden"
            nextPic.style.visibility = "hidden"
        }
    }
})
function abas() {
    if (imagemModal.src == galeria[0].src) {
        prevPic.style.visibility = "hidden"
        nextPic.style.visibility = "visible"
    }
    else if (imagemModal.src == galeria[galeria.length - 1].src) {
        prevPic.style.visibility = "visible"
        nextPic.style.visibility = "hidden"
    }
    else {
        prevPic.style.visibility = "visible"
        nextPic.style.visibility = "visible"
    }
}

imagemModalDbl.addEventListener("dblclick", function (event) {
    const imagemClicada = event.target;
    const indice = [...galeria].findIndex(item => item.src === imagemClicada.src)
    if (heart[indice].classList.contains("heart-visible")) {
        heart[indice].classList.remove("heart-visible")
    }
    else {
        heart[indice].classList.add("heart-visible")
    }
})

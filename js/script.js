let wrapper = document.querySelector(".wrapper")
let modal_bg = document.querySelector(".modal_bg")
let modal = document.querySelector(".modal")
let closes = document.querySelectorAll(".close")
let cart = []
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(json => reload(json))

function reload(arr) {
    for (let item of arr) {
        let photo = document.createElement("div")

        photo.classList.add("photo")
        photo.style.backgroundImage = `url(${item.thumbnailUrl})`

        wrapper.append(photo)

        photo.onclick = () => {
            modal.innerHTML = ""
            cart.push(item.id)
            for (let id of cart) {
                if (item.id === id) {
                    let selected = document.createElement("div")
                    selected.classList.add("photo")
                    selected.classList.add("animate")
                    selected.style.backgroundImage = `url(${item.thumbnailUrl})`
                    cart = cart.filter(id => id !== item.id)
                    modal.append(selected)
                    console.log(cart);
                }
            }
            modal_bg.style.display = "block"
            modal.style.display = "block"
            setTimeout(() => {
                modal_bg.style.opacity = "1"
                modal.style.opacity = "1"
                modal.style.scale = "1"
            }, 300);
        }
    }
    console.log(arr);
}
console.log(cart);
closes.forEach(clos => {
    clos.onclick = () => {
        modal_bg.style.opacity = "0"
        modal.style.opacity = "0"
        modal.style.scale = "0"
        setTimeout(() => {
            modal_bg.style.display = "none"
            modal.style.display = "none"
        }, 300);
    }
})
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
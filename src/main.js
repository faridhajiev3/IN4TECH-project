const faBars = document.querySelector(".fa-bars")
const mainWor = document.querySelector(".wor")
const wor = document.querySelector(".wor-nav")

// wor.style.display = "none"

const handleChange = () => {
    wor.classList.toggle("addnav")
    // if (wor.style.display === "none") {
    //     wor.style.display = "block" 
    // } else {
    //     wor.style.display = "none" 
    // }
}

faBars.addEventListener("click", handleChange)
// menu-toggle
// document.querySelector("#menu-toggle").addEventListener("click", ()=>{
//     document.querySelector("#nav-menu").classList.toggle("nav-active");
// })

// darkmode 
const toggle = document.querySelector("#toggle-btn");
const icon = document.querySelector("#toggle_icon");
// setting toggle
document.querySelector("#setting-toggle").addEventListener("click", () => {
    document.querySelector(".setting-box").classList.toggle("setting-box-active");
});
let images = Array.from(document.querySelectorAll(".setting-box img"));
images.map((image) => {
    image.addEventListener("click", () => {
        images.forEach((img) => {
            img.style.opacity = "1";
        })
        document.querySelector(".landing-image").src = image.src;
        image.style.opacity = "0.4";
    })
})
toggle.addEventListener("click", darkmodeToggle);
let darkmode = localStorage.getItem("darkmode");
// darkmode check
if (darkmode === "enabled") {
    darkmodeOn();
}

function darkmodeToggle() {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode === "enabled") {
        darkmodeOff();
    } else {
        darkmodeOn();
    }
}

function darkmodeOn() {
    document.body.classList.add("dark");
    document.querySelector(".para").classList.add("dark");
    darkmode = true;
    localStorage.setItem("darkmode", "enabled")
    icon.className = "bx bx-moon"
}
function darkmodeOff() {
    document.body.classList.remove("dark");
    document.querySelector(".para").classList.remove("dark");
    darkmode = false;
    localStorage.setItem("darkmode", null)
    icon.className = "bx bx-sun"
}
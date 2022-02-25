// menu-toggle
// document.querySelector("#menu-toggle").addEventListener("click", ()=>{
//     document.querySelector("#nav-menu").classList.toggle("nav-active");
// })
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 500){
        document.querySelector("header").style.backgroundColor = "rgb(236, 224, 224)";
        document.querySelector(".scroll-top").style.bottom = "20px";
    }else {
        document.querySelector("header").style.backgroundColor = "rgb(238, 58, 58)";
        document.querySelector(".scroll-top").style.bottom = "-100px";
    }
});

document.querySelector(".scroll-top").addEventListener("click", ()=>{
    window.scroll({top: 0, behavior: "smooth"});
});
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
// fetch movie
const url = {
    apiKey : "api_key=4cbd0f46dda1e5e694f1db2ad6f0ff3f",
    baseURL : "https://api.themoviedb.org/3/discover/movie?"
}
const popularURL = url.baseURL+"sort_by=popularity.desc&"+url.apiKey;
const imgURL = "https://image.tmdb.org/t/p/w500/";
const searchURL = "https://api.themoviedb.org/3/search/movie?"+url.apiKey;
function fetchMovie(path){
    fetch(path)
    .then(res => res.json())
    .then(data => showMovie(data)) 
}
fetchMovie(popularURL);
function showMovie(data){
    let res = data.results;
    document.querySelector(".movie-container").innerHTML = "";
    res.forEach(movie =>{
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <div class="img-box">
                <img src="${imgURL+movie.poster_path}" alt="">
            </div>
            <div class="details">
                <h3>${movie.original_title}</h3>
                <span>${movie.vote_average.toFixed(1)}</span>
            </div>
            <div class="overview">
                <h5>Overview</h5>
                <p>${movie.overview}</p>
                <p>
                    Released at <strong>${movie.release_date}</strong>
                </p>
            </div> 
        `;
        document.querySelector(".movie-container").appendChild(div);
    })
}
// search movie
document.querySelector("#search").addEventListener("keypress",event =>{
    if(event.keyCode === 13){
        let val = event.target.value;
        if(val){
            fetchMovie(searchURL+"&query="+val)
        }else {
            fetchMovie(popularURL);
        }
    }
})
 
// load 
window.addEventListener("load",()=>{
    document.querySelector(".loader").style.display = "none";
} )
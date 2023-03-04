const searchButton = document.querySelector(".search-icon-button");
const input = document.getElementById("search");
searchButton.addEventListener("click", expand);

function expand(){
    input.classList.toggle("close");
}
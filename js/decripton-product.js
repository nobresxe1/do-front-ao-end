const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star")

$stars.forEach(function($star) {
    $star.addEventListener("click", handleClick)
})
$heart.addEventListener("click", handleClick);


function handleClick() {
    this.classList.toggle("-active");
}
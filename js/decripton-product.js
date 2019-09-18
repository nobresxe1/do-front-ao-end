const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelector(".star")



$heart.addEventListener("click", handleClickHeart);
$firstStar.addEventListener("click", handleClickFirstStar);

function handleClickHeart() {
    // if ($heart.classList.contains("-active")) {
    //     $heart.classList.remove("-active")
    // } else {
    //     $heart.classList.add("-active")
    // }
    $heart.classList.toggle("-active")
}

function handleClickFirstStar() {
    $firstStar.classList.toggle(" -active");
}
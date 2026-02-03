
const buttons = document.querySelectorAll(".filter-buttons button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

const cardContainer = document.getElementById("cardContainer");

function slideLeft() {
    cardContainer.scrollBy({ left: -320, behavior: "smooth" });
}

function slideRight() {
    cardContainer.scrollBy({ left: 320, behavior: "smooth" });
}

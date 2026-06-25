let currentIndex = 0;

function currentSlide(index) {

    const cards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');

    cards.forEach(card => {
        card.style.display = "none";
    });

    cards[index].style.display = "block";

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    dots[index].classList.add('active');
}

window.onload = function () {
    currentSlide(0);
};

function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;

    alert(`Thank you ${name}! Your message has been sent successfully.`);

    document.getElementById('contactForm').reset();
}

function showPlantDetails(name, details) {
    alert("Plant Name: " + name + "\n\nDetails: " + details);
}
const images = [
    "images/plant1.jpeg",
    "images/plant2.jpeg",
    "images/plant3.jpeg"
];

let index = 0;

setInterval(() => {
    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("heroImage").src = images[index];
}, 3000);
let randomInt = Math.floor(Math.random() * 10);

const userInput = document.getElementById("userInput");
const mainP = document.getElementById("mainP");
const submit = document.getElementById("submit");

submit.addEventListener("click", check)

function check() {
    const userValue = Number(userInput.value); // Преобразуем значение в число

    if (userValue > randomInt) {
        mainP.textContent = "Too high value, try again!";
    } else if (userValue < randomInt) {
        mainP.textContent = "Too low value, try again!";
    } else {
        mainP.textContent = "You got it!";
    }
}
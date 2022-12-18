const main = document.querySelector(".main-container")
const thank = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rbtn = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () =>{
    thank.classList.remove("hidden")
    main.style.display ="none"

})

rateAgain.addEventListener("click", () =>{
    thank.classList.add("hidden")
    main.style.display ="block"

})

rbtn.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
    
});
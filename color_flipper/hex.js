const hex = [1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E","F"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    // get random number between 0 and 3
    let hexColor = "#";
    for (let i = 0; i<6; i ++){
        hexColor += hex[getRandomNumbers()];
    }

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})


function getRandomNumbers(){
    return Math.floor(Math.random() * hex.length)
}


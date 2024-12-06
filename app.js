let button = document.getElementById("click-here");
let text1 = document.getElementById("p1")


function clickToChangeText(){
    text1.textContent ="i have changed things"
    }
button.addEventListener("click", clickToChangeText)

console.log(button)
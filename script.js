const adviceID = document.getElementById("adviceID");
const advice = document.getElementById("advice");
function rollDice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        adviceID.innerHTML=data.slip.id;
        advice.innerHTML="“"+data.slip.advice+"”";
    })
}
rollDice();
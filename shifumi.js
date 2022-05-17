const choices = ["paper","rock","scissors"];

const player1 = choices[Math.floor(Math.random() * choices.length)];
const player2 = choices[Math.floor(Math.random() * choices.length)];

const duel = (p1,p2) => {

let result;


        if(p1 === "paper") {
            if(p2 === "paper") {result = "tie"};
            if(p2 === "scissors") {result = "p2 won"};
            if(p2 === "rock") {result = "p1 won"}
        }


        if(p1 === "scissors") {
            if(p2 === "paper") {result = "p1 won"};
            if(p2 === "scissors") {result = "tie"};
            if(p2 === "rock") {result = "p2 won"}
        }

        if(p1 === "rock") {
            if(p2 === "paper") {result = "p2 won"};
            if(p2 === "scissors") {result = "p1 won"};
            if(p2 === "rock") {result = "tie"}
        }
        
        return result;
}




console.log( player1, ' ' , player2 , " : ", duel(player1,player2))

module.exports = duel;
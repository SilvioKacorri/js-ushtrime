let cards = ["Q","K","A","J","10","2","3","4","5","6","7","8","9"];

let dealerHand = document.getElementById("dealer-hand");
let playerHand = document.getElementById("player-hand");

// setTimeout(() => {
//     alert()
// }, 1000);

// setTimeout(() => {

// }, 3000 )

function randomCard(){
    return cards[Math.floor( Math.random() * cards.length) ];
};

let dealerCards = [];
let playerCards = [];

for (i = 0 ; i < 2; i++){
    dealerCards.push(randomCard());
    let tempInt = randomCard();
    playerCards.push(tempInt);
}
console.log(playerCards);
console.log(dealerCards);

function changeDealerCards(){
    dealerHand.innerHTML = '';
    for(let i in dealerCards) {
        let img = document.createElement("img");
        img.src = `${dealerCards[i]}_spades.png`;
        img.classList.add("cards")
        dealerHand.append(img);
    }
}
function changePlayerCards(){
    playerHand.innerHTML = '';
    for (let i in playerCards){
        let img = document.createElement("img");
        img.src = `${playerCards[i]}_spades.png`;
        img.classList.add("cards");
        playerHand.append(img);
    }
}

changeDealerCards();
changePlayerCards();

function evaluateCards(card){
    for (let i in cards){
        if (card == "A"){
            return 11;
        }
        if (card == "J"){
            return 10;
        }
        if (card == "Q"){
            return 10;
        }
        if (card== "K"){
            return 10;
        }
        if (!isNaN(card)) {
            return parseInt(card);
        }
    }
};




let player1Display = document.getElementById("player-hand-number");
function calculatePlayer1Hand(){
    let count = 0;
    let tempInt;
    for (let i in playerCards){
        console.log(evaluateCards(playerCards[i]));
        count = parseInt(count + evaluateCards(playerCards[i]));
    }
    if (count >= 12) {
        if (playerCards.includes("A")) {
            console.log("1")
        }
    }
    player1Display.textContent = count;
};

function hit(){
    playerCards.push(randomCard());    
    console.log(playerCards);
    changePlayerCards();
    calculatePlayer1Hand();
}

calculatePlayer1Hand();


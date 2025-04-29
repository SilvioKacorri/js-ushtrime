let cards = ["Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9"];

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


function dealHand() {
    for (i = 0 ; i < 2; i++){
        dealerCards.push(randomCard());
        let tempInt = randomCard();
        playerCards.push(tempInt);
    }
}

dealHand();

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

// function changeChards(user){
//     user.innerHTML = '';
//     for (let i in user){
//         let img = document.createElement("img");    nuk mund ta ndryshoj parametrin si funksion , sepse DOM
//         img.src = `${user[i]}_spades.png`;
//         img.classList.add("cards");
//         user.append(img);
//     }
// }

changeDealerCards();
changePlayerCards();

let flagA = true;

function evaluateCards(card){
    for (let i in cards){
        if (card == "A" && flagA == true){
            return 11;
        }
        if (card == "A" && flagA == false){
            return 1;
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

function evaluateHandCount(cards){
    let count = 0;
    for (let card in cards){
        count = parseInt(count + evaluateCards(cards[card]));
    }
    if (count > 21 && cards.includes("A")) {
        count = 0;
        flagA = false;
        for (let card2 in cards){
            count = parseInt(count + evaluateCards(cards[card2]));
        }
        return count;
    }
    return count;
};

// letrat llogariten sapo fillon loja 
let storePlayerCount = 0;
let playerBust = false;
let dealerBust = false;

let player1Display = document.getElementById("player-hand-number"); 
player1Display.textContent = evaluateHandCount(playerCards);
storePlayerCount = player1Display.textContent;

function resetGame() {
    if (storePlayerCount >= 21 || playerBust || dealerBust) {
        playerCards = [];
        dealerCards = [];
        dealHand();
        changeDealerCards();
        changePlayerCards();
        player1Display.textContent = evaluateHandCount(playerCards);
    }
}


if (storePlayerCount == 21){
    setTimeout ( () => 
    alert("blackjack") , 800)
}

function hit(user){
    user.push(randomCard());
    let count = evaluateHandCount(user);
    
}


function hit(){
    playerCards.push(randomCard());    
    console.log(playerCards);
    let count = evaluateHandCount (playerCards);
    changePlayerCards();
    player1Display.textContent = count;
    storePlayerCount = count;
    if ( count > 21 ) { 
        playerBust = true;
        setTimeout( () => alert("BUST") , 100 ) 
    }
    resetGame();   
}

function hitDealer(){
    dealerCards.push(randomCard());
    changeDealerCards();
    resetGame();
}


let dealerDisplay = document.getElementById("dealer-hand-number");

function dealerTurn() {
    let count = evaluateHandCount(dealerCards);

    console.log(storePlayerCount);

    if (count < 16 || count < storePlayerCount){
        hitDealer();
        dealerDisplay.textContent = count;

        setTimeout(dealerTurn, 500);
    }
    else {
        dealerDisplay.textContent = count;
    }
}

function stand() {
    let count = evaluateHandCount(dealerCards);
    dealerDisplay.textContent = count;

    dealerTurn();
}



// calculatePlayer1Hand();


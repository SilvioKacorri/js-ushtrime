let cards = ["Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9","Q","K","A","J","10","2","3","4","5","6","7","8","9"];

let dealerHand = document.getElementById("dealer-hand");
let playerHand = document.getElementById("player-hand");

// setTimeout(() => {
//     alert()
// }, 1000);

// setTimeout(() => {

// }, 3000 )

function randomCard(){
    return cards[Math.floor( Math.random() * cards.length ) ];
};


let dealerBust = false;
let playerBust = false;
let blackjack = false;

let betAmout = 0;
let gameCount = 0;
let winCount = 0;
let balance = 0;


const statsDisplay = document.getElementById("stats-container");
let balanceDisplay = document.createElement("p");
let betDisplay = document.createElement("p");
let winCountDisplay = document.createElement("p");
let gameCountDisplay = document.createElement("p");
let betNumber = document.getElementById("bet-input");

statsDisplay.append(betDisplay, winCountDisplay, gameCountDisplay);


function calculateBalance(betAmout){
    balance = balance - betAmout;

    if (dealerBust){
        balance = balance + betAmout*2;
    }
    if (blackjack){
        balance = balance + betAmout*2.5;
    }
}

function declareBalance(){
    // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  // Create alert box
  const alertBox = document.createElement('div');
  alertBox.className = 'custom-alert';

  const msg = document.createElement('p');
  msg.textContent = "How much would you like to deposit:";

  const input = document.createElement('input');
  input.type = 'number';
  input.style.marginTop = '10px';

  const button = document.createElement('button');
  button.textContent = 'OK';
  button.style.marginTop = '10px';

  button.onclick = () => {
    const value = Number(input.value);
    document.body.removeChild(alertBox);
    document.body.removeChild(overlay);
    if(value <= 0){
        declareBalance();
    }
    balance = value
};

alertBox.appendChild(msg);
alertBox.appendChild(input);
alertBox.appendChild(document.createElement('br'));
alertBox.appendChild(button);

document.body.appendChild(overlay);
document.body.appendChild(alertBox);

}


const winPopUpContainer = document.createElement("div");
function winPopUp(){
    const tempDiv = document.createElement("div");
    const tempDiv2 = document.createElement("div");

    const text1 = document.createElement("p")
    const text2 = document.createElement("p")
    const text3 = document.createElement("p")

    text1.textContent = "You Win"
    text2.textContent = "Reward"
    text3.textContent = "300 LEK"

    tempDiv.append(text1);
    tempDiv2.append(text2);
    tempDiv2.append(text3);

    winPopUpContainer.classList.add("win-pop-up");
    winPopUpContainer.append(tempDiv);
    winPopUpContainer.append(tempDiv2);

    document.body.append(winPopUpContainer); 
}
function removeWinPopUp(){
    winPopUpContainer.innerHTML = '';
    winPopUpContainer.remove();
}

const losePopUpContainer = document.createElement("div");
function losePopUp(){
    const tempDiv = document.createElement("div");
    const tempDiv2 = document.createElement("div");

    const text1 = document.createElement("p")
    const text2 = document.createElement("p")
    const text3 = document.createElement("p")

    text1.textContent = "You Lose"
    text2.textContent = "Your bet was"
    text3.textContent = "300 LEK"

    tempDiv.append(text1);
    tempDiv2.append(text2);
    tempDiv2.append(text3);

    losePopUpContainer.classList.add("lose-pop-up");
    losePopUpContainer.append(tempDiv);
    losePopUpContainer.append(tempDiv2);

    document.body.append(losePopUpContainer); 
}
function removeLosePopUp(){
    losePopUpContainer.innerHTML = '';
    losePopUpContainer.remove();
}
const drawPopUpContainer = document.createElement("div");
function drawPopUp(){
    const tempDiv = document.createElement("div");
    const tempDiv2 = document.createElement("div");

    const text1 = document.createElement("p")
    const text2 = document.createElement("p")
    const text3 = document.createElement("p")

    text1.textContent = "Count is equal , Push"
    text2.textContent = "Your bet was"
    text3.textContent = "300 LEK"

    tempDiv.append(text1);
    tempDiv2.append(text2);
    tempDiv2.append(text3);

    drawPopUpContainer.classList.add("draw-pop-up");
    drawPopUpContainer.append(tempDiv);
    drawPopUpContainer.append(tempDiv2);

    document.body.append(drawPopUpContainer);  
}
function removeDrawPopUp(){
    drawPopUpContainer.innerHTML = '';
    drawPopUpContainer.remove();
}

let dealerCards = [];
let playerCards = [];

function dealHand() {
    for (i = 0 ; i < 2; i++){
        dealerCards.push(randomCard());
        let tempInt = randomCard();        //2 randomCards te ndyshme ( 2 thirrje funksioni te ndryshme )
        playerCards.push(tempInt);
    }
}

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
function startingHandDealer(){
    dealerHand.innerHTML = '';

    let img = document.createElement("img");
    img.src = `${dealerCards[0]}_spades.png`;
    img.classList.add("cards");
    dealerHand.append(img);

    let img2 = document.createElement("img");
    img2.src = 'back_card.jpg';
    img2.classList.add("cards");
    dealerHand.append(img2);
}

function blankCards(){
    playerHand.innerHTML = '';
    dealerHand.innerHTML = '';

    for (let i = 0; i < 2; i++) {
        let playerCard = document.createElement("img");
        playerCard.src = 'back_card.jpg';
        playerCard.classList.add("cards");
        playerHand.append(playerCard);

        let dealerCard = document.createElement("img");
        dealerCard.src = 'back_card.jpg';
        dealerCard.classList.add("cards");
        dealerHand.append(dealerCard);
    }
}

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

function clearTable(){

    playerCards = [];
    dealerCards = [];

    blankCards();

    count = 0;

    
    playerBust = false;
    dealerBust = false;
    blackjack = false; 
}

function resetGameCheck() {
    if(playerBust){
        winCount--;
        setTimeout(() => {
            losePopUp();
            clearTable(); 
        }, 1000);

        setTimeout(() => {
            removeLosePopUp();
        }, 2000);    
    }

    if(dealerBust){
        winCount++;
        setTimeout(() => {
            winPopUp();
            clearTable(); 
        
        }, 1000);

        setTimeout(() => {
            removeWinPopUp();
        }, 2000);
    }

    if(blackjack){
        winCount++;
        setTimeout(() => {
            winPopUp();
            clearTable();
        }, 1000);

        setTimeout(() => {
            removeWinPopUp();
        }, 200);
    }
      
}

// letrat llogariten sapo fillon loja 
// dealHand();
// startingHandDealer();
// changePlayerCards();

if (evaluateHandCount(playerCards) == 21){
    blackjack = true;
    resetGameCheck();
}

console.log(dealerCards);

let storePlayerCount = 0;
let storeDealerCount = 0;


function hit(){

    const button = document.getElementById("hit");
    button.disabled = true;

    playerCards.push(randomCard());    
    let count = evaluateHandCount (playerCards);
    changePlayerCards();
    player1Display.textContent = count;
    storePlayerCount = count;
    
    if(count > 21){
        playerBust = true;
    }
    resetGameCheck();

    setTimeout(() => {
        button.disabled = false; // Re-enable after 1 second
      }, 1000);

}

function hitDealer(){
    dealerCards.push(randomCard());
    changeDealerCards();
}


let dealerDisplay = document.getElementById("dealer-hand-number");
let player1Display = document.getElementById("player-hand-number");

function dealerTurn() {
    storeDealerCount = evaluateHandCount(dealerCards);
    
    if (storeDealerCount <= 16){
        hitDealer();
        storeDealerCount = evaluateCards(dealerCards);
        setTimeout( () => dealerTurn() , 500);
    }
    else {
        dealerDisplay.textContent = storeDealerCount;
    }
    if (storeDealerCount >= 21){
        dealerBust = true;
    }
}

function stand() {

    const button = document.getElementById("stand");
    button.disabled = true;
    
    console.log(dealerCards);

    changeDealerCards();
    storeDealerCount = evaluateHandCount(dealerCards);
    dealerDisplay.textContent = storeDealerCount;
    
    console.log(dealerCards);

    dealerTurn();

    resetGameCheck();
}

function deal(){
    gameCount++;

    dealHand();
    startingHandDealer();
    changePlayerCards();

    storePlayerCount = evaluateHandCount(playerCards);
    storeDealerCount = evaluateHandCount(dealerCards);

    player1Display.textContent = storePlayerCount;

    balanceDisplay.textContent = balance;
    

    betAmout = parseInt(betNumber.value);
    betDisplay.textContent = `Bet Amount : ${betAmout}`;
    winCountDisplay.textContent = `Win Count : ${winCount}`;
    gameCountDisplay.textContent = `Hands played : ${gameCount}`;

}







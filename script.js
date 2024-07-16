window.onload = function() {
    const suits = ['♥', '♦', '♣', '♠'];
    const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    const topSuitElement = document.getElementById('top-suit');
    const bottomSuitElement = document.getElementById('bottom-suit');
    const cardNumberElement = document.getElementById('card-number');

    topSuitElement.innerHTML = randomSuit;
    bottomSuitElement.innerHTML = randomSuit;
    cardNumberElement.innerHTML = randomNumber;

    if(randomSuit === '♥' || randomSuit === '♦') {
        topSuitElement.style.color = 'red';
        bottomSuitElement.style.color = 'red';
        cardNumberElement.style.color = 'red';
    } else {
        topSuitElement.style.color = 'black';
        bottomSuitElement.style.color = 'black';
        cardNumberElement.style.color = 'black';
    }
}

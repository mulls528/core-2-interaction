const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', () => {
    const randomWord = generateRandomWord();
    const wordElement = document.createElement('div');
    wordElement.textContent = randomWord;
    wordElement.classList.add('word');
    positionWordRandomly(wordElement);
    document.body.appendChild(wordElement);
});

function generateRandomWord() {
    const words = ['?', '!', '.', ';', ':', '"', ',', '-']; 
    return words[Math.floor(Math.random() * words.length)]; 
}

function positionWordRandomly(wordElement) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    wordElement.style.left = x + 'px';
    wordElement.style.top = y + 'px';
}

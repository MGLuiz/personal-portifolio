// Header Scroll
const header = document.querySelector('.header') 
window.addEventListener('scroll', () => {
        header.classList.toggle('scrollHeader', window.scrollY > 160);
})

// Typing Effect

const dynamicText = document.querySelector('.animatedTypingLabel .label span');
const words = ['Java.', 'React.', 'Javascript.', 'PHP.', 'SQL.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingEffect = () => {
    let currentWord = words[wordIndex];
    let currentChar = currentWord.substring(0, charIndex);

    dynamicText.textContent = currentChar;
    if(!isDeleting && charIndex < currentWord.length){
        // If True, type next char
        charIndex++;
        setTimeout(typingEffect, 200);
    }else if(isDeleting && charIndex > 0){
        // If True, remove the previous char
        charIndex--;
        setTimeout(typingEffect, 100);
    }else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length:wordIndex
        setTimeout(typingEffect, 1200)
    }
}

typingEffect();
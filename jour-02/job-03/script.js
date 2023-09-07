const paragraph = document.querySelector('#text-displayer');
let input = document.querySelector('#input-text');
const boldBtn = document.querySelector('#turn-text-bold');
const italicBtn = document.querySelector('#turn-text-italic');
const clearBtn = document.querySelector('#clear-text');

function myDisplayText() {
    paragraph.textContent = input.value;
}

function myTurnBold() {
    paragraph.style.fontWeight = 'bold';
}

function myTurnItalic() {
    paragraph.style.fontStyle = 'italic';
}

function myClearText() {
    paragraph.style.fontWeight = 'normal';
    paragraph.style.fontStyle = 'normal';
}

input.addEventListener('keyup', myDisplayText);

boldBtn.addEventListener('click', myTurnBold);

italicBtn.addEventListener('click', myTurnItalic);

clearBtn.addEventListener('click', myClearText);

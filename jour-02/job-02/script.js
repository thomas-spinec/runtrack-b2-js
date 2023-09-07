const btn = document.querySelector("#add-count-btn");
let countP = document.querySelector("#count-displayer");
let count = 0;
function myAddCount() {
    count++;
    countP.textContent = count;
}

btn.addEventListener("click", myAddCount);
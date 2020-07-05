let nBtn = document.querySelector('.normal-btn');
let aBtn = document.querySelector('.angry-btn');
let hBtn = document.querySelector('.happy-btn');
let smiley = document.querySelector('.smiley')

function click(btn,add,remove1,remove2) {
    btn.onclick = function() {
        smiley.classList.add(add);
        smiley.classList.remove(remove1);
        smiley.classList.remove(remove2);
    }
}

click(nBtn,"normal","happy","angry");
click(aBtn,"angry","happy","normal");
click(hBtn,"happy","normal","angry");
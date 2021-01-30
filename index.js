import {makeDraggable, elemFromString} from "./utils.js";



let textContainer = document.getElementById('textContainer');
let textEntry = document.getElementById('textEntry');

let renderButton = document.getElementById('renderTextButton');
renderButton.onclick = () => {
    textContainer.innerHTML = '';

    let wordsAndSpaces = Array.from(textEntry.value.matchAll(/[^\s]+|\s+/g)).map(m => m[0])

    let wordSpans = wordsAndSpaces.map((w, i) => {
        if(w.match(/\s+/)) return w;
        else return `<span class="ib">${w} </span>`;
    });
    textContainer.innerHTML = wordSpans.join('');
    let spans = document.getElementsByTagName('span');
    for(let s of spans){
        makeDraggable(s, document);
    }
};
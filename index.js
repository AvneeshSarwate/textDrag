import {makeDraggable, elemFromString} from "./utils.js";



let textContainer = document.getElementById('textContainer');
let textEntry = document.getElementById('textEntry');

let renderButton = document.getElementById('renderTextButton');
renderButton.onclick = () => {
    textContainer.innerHTML = '';
    let wordSpans = textEntry.value.split(" ")
                    .map(w => elemFromString(`<span class="ib">${w} </span>`));
    wordSpans.forEach(s => makeDraggable(s, document));
    wordSpans.forEach(s => textContainer.appendChild(s));

};
//from - https://www.kirupa.com/html5/drag.htm
function makeDraggable(dragItem, container) {

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        console.log('dragstart', dragItem);

        // if (e.target === dragItem) {
        //     active = true;
        // }

        active = true;
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
        console.log("dragend");
    }

    function drag(e) {
        if (active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            // setTranslate(currentX, currentY, dragItem);
            dragItem.style.transform = `translate(${currentX}px, ${currentY}px)`;
            console.log("drag", currentX, currentY);
        }
    }

    // function setTranslate(xPos, yPos, el) {
    //     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }
}


//from - https://stackoverflow.com/a/494348
function elemFromString(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
  }

export {
    makeDraggable,
    elemFromString
}
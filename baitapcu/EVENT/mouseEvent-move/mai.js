

const box = document.createElement("div")
//console.log(circle)


document.addEventListener("click", function (event) {
 box.classList.add("box")  
    let x = event.offsetX;
    let y = event.offsetY;
    box.style.top =`${y-50}px`
    box.style.left =`${x-50}px`

 document.body.appendChild(box) 
})
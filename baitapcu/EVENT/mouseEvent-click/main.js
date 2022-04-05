//function sayhi() {
//  alert('xin chào các con vợ')
//}

//const btn2 = document.getElementById("btn2")

//btn2.onclick = function () {
//  alert('xin chào các em vợ')
//}

// const btn3 = document.getElementById("btn3")

//btn3.addEventListener("click", function(){
// alert('xin chào các bạn 3')
//});



function randomColor() {
  let arr = ["green", "blue", "black", "red"];
  let index = [Math.floor(Math.random() * arr.length)];
  return arr[index];
}

const btn4 = document.getElementById("btn4");
console.log(btn4);

btn4.addEventListener("click", function () {
    let color = randomColor();
  document.body.style.backgroundColor = color;
});

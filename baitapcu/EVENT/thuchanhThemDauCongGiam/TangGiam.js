//Giá trị mặc định của counter ban đầu = 0

//Bấm vào Cộng tăng counter lên 1

//Bấm vào Trừ giảm counter đi 1

//Nếu counter > 0 có màu green
//Nếu counter = 0 có màu #333333
//Nếu counter < 0 có màu red


const counter = document.querySelector('#counter');
const btnAdd = document.querySelector(".nextBtn");
//console.log(btnAdd);
const btnMinus = document.querySelector(".prevBtn");
 counter.innerText = 0;
 
btnAdd.addEventListener('click', function () {
 counter.innerText = + counter.innerText + 1;
 changecolor();
});


btnMinus.addEventListener('click', function () {
    counter.innerText = + counter.innerText - 1;
    changecolor();
   });

   //function change color
   function changecolor() {
       if(+ counter.innerText > 0) {
           counter.style.color = "red";
       }
       else if (+ counter.innerText == 0) {
        counter.style.color = "black";
       }
       else {
        counter.style.color = "blue";
       }
    }
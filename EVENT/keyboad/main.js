// nhấn phím enter thì xuất hiện 1 hình trogn tại 
//trisbaats kì trong trang wed





document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        console.log("Bạn thật đẹp trai!");
    } else {
        console.log("Bấm phím Enter đi, có điều bất ngờ đó!")
    }
});
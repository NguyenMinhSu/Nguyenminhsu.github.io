const box = document.querySelector(".box");

document.addEventListener("keydown", function (event) {
  //lấy ra giá tri toplefft cả hình tròn

  let top = box.offsetTop;

  let left = box.offsetLeft;
  // ấn mũi tên lên

  if (event.keyCode == 38) {
    box.style.top = `${top - 20}px`;
  }
  if (event.keyCode == 40) {
    box.style.top = `${top + 20}px`;
  }
  if (event.keyCode == 39) {
    box.style.left = `${left + 20}px`;
  }
  if (event.keyCode == 37) {
    box.style.left = `${left - 20}px`;
  }
});

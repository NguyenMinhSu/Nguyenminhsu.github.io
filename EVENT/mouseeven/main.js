document.addEventListener("click", function (event) {
  //tạo hình tròn và gán thẻ div có lass box

  let box = document.createElement("div");
  box.classList.add("box");

  let x = event.offsetX;
  let y = event.offsetY;

  box.style.top = `${y-10}px`;
  box.style.left = `${x-10}px`;
  document.body.appendChild(box);
});

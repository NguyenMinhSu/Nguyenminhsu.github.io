const ulEl = document.querySelector('.list');
const input = document.createElement('input');
input.placeholder= "Nhập gì đi đừng sợ..."
document.body.appendChild(input);
//console.log(value)
const btnAdd = document.createElement('button');
document.body.appendChild(btnAdd).innerText= "Add";
btnAdd.addEventListener('click', function() {
    let value = input.value;
    console.log(value);
    if(value =='') {
        alert("input rỗng thì add cái nịt à?");
        return
    }

    const newIterm = document.createElement('li');
    newIterm.innerText = value;
    ulEl.appendChild(newIterm);
    input.value = '';

})
const btnRemove = document.createElement('button');
document.body.appendChild(btnRemove).innerText="Xóa thằng cuối"

btnRemove.addEventListener('click', function() {
    
    let lastLi = document.querySelector('.list li:last-Child');
    ulEl.removeChild(lastLi);
})

const btnHide = document.createElement('button');
btnHide.innerText="Hide";
ulEl.insertAdjacentElement("beforebegin",btnHide);

btnHide.addEventListener('click', function(){
    ulEl.classList.toggle('hide');
    if(ulEl.classList.contains('hide')) {
        btnHide.innerText = "Show";
    }
    else {
        btnHide.innerText = "Hide";
    }
})


//đổi màu vàng ho các chữu có độ dìa lớn hơn 8 kí tự

const para = document.querySelector("p");
const content = para.innerText
  .split(" ")
  .map((ele) =>
    ele.length >= 8 ? `<span  style="color:red">${ele}</span>` : ele
  )
  .join(" ");

para.innerHTML = content;

//console.log(content);

const link = document.createElement("a");

link.innerText = "facebook";
link.href =
  "https://www.alibaba.com/?src=sem_ggl&from=sem_ggl&cmpgn=9922923046&adgrp=97780319022&fditm=&tgt=kwd-14739453&locintrst=&locphyscl=9047177&mtchtyp=e&ntwrk=g&device=c&dvcmdl=&creative=432272607736&plcmnt=&plcmntcat=&p1=&p2=&aceid=&position=&localKeyword=alibaba&gclid=Cj0KCQiAxoiQBhCRARIsAPsvo-ycJtVRFSKwdzOFiappdhlqMhKnAskajR3RwoHwiNvS1BZjObLabBcaAixfEALw_wcB";

document.body.appendChild(link);

// đếm số từ có trong doạn văn
 const wordCount = para.innerText.split(' ').length;

 const wordCountEle = document.createElement('div');
 wordCountEle.innerText = `${wordCount} word`;

 wordCountEle.innerText = `${wordCount} word`;
 para.insertAdjacentElement("beforebegin",wordCountEle)


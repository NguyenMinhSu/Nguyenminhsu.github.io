const user = [{username: "bob",password: "123"}];

const btn = document.querySelector("#btn-login");
//console.log(btn)
const uname = document.querySelector("#username");
const pass = document.querySelector("#password");

btn.addEventListener("click", function () {
  let userId = uname.value;
  let userpass = pass.value;
  if (userId == "") {
    alert("không đc để tên trống bạn ê");
  } else if (userpass == "") {
    alert("quên nhập pass bạn ê");
  } else {
    result = "Tài khoản hoặc mật khẩu không đúng!";
    for (let i = 0; i < user.length; i++) {
       if (
          userId=== user[i]["username"] &&
          userpass===user[i]["password"]) 
          {
           result = "đăng nhập thành công";
          }
    }
    alert(result);
    }
    
    });

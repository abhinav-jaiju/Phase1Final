// const email = document.getElementById("mail");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// const addImg = document.getElementById("inputGroupFileAddon04");

// addImg.addEventListener("input")
// var check = () =>{
// password();
// reader();
// }
// var password = () =>{
// const pswd = document.getElementById("password");
// const cpswd = document.getElementById("Cpassword");
// // const dd = document.getElementById("confirm");
//     //  dd[1].classList.add("d-none")
//  if ((pswd.value == cpswd.value)&&(pswd.value ==='')&&(cpswd.value ==='') ){
//         return true;
//     }else{
//         // dd[1].classList.remove("d-none")
//         alert("Enter Same Password")
//     }
    
// }

check = () =>{
    reader()
    validPhn()
}

reader=()=>{

    nameObj=document.getElementsByName('name');
    emailObj=document.getElementsByName('email');
    phoneObj=document.getElementsByName('phone');
    passObj=document.getElementsByName('password');
    cpassObj=document.getElementsByName('confPass');
    addressObj = document.getElementsByName('address');
    hobby1Obj = document.getElementsByName('hobby1');
    hobby2Obj = document.getElementsByName('hobby2');
    hobby3Obj = document.getElementsByName('hobby3');
    genre1Obj = document.getElementsByName('genre1');
    genre2Obj = document.getElementsByName('genre2');
    genre3Obj = document.getElementsByName('genre3');

   nameObj[1].classList.add('d-none');
   emailObj[1].classList.add('d-none');
   phoneObj[1].classList.add('d-none');
   passObj[1].classList.add('d-none');
   cpassObj[1].classList.add('d-none');
   addressObj[1].classList.add('d-none');
   hobby1Obj[1].classList.add('d-none');
   hobby2Obj[1].classList.add('d-none');
   hobby3Obj[1].classList.add('d-none');
   genre1Obj[1].classList.add('d-none');
   genre2Obj[1].classList.add('d-none');
   genre3Obj[1].classList.add('d-none');
  
    if(nameObj[0].value==''){nameObj[1].classList.remove('d-none');}
    if(emailObj[0].value==''){emailObj[1].classList.remove('d-none');}
    if(phoneObj[0].value==''){phoneObj[1].classList.remove('d-none');}
    if(passObj[0].value==''){passObj[1].classList.remove('d-none');}
    if(cpassObj[0].value==''){cpassObj[1].classList.remove('d-none');}
    if(addressObj[0].value==''){addressObj[1].classList.remove('d-none');}
    if(hobby1Obj[0].value==''){hobby1Obj[1].classList.remove('d-none');}
    if(hobby2Obj[0].value==''){hobby2Obj[1].classList.remove('d-none');}
    if(hobby3Obj[0].value==''){hobby3Obj[1].classList.remove('d-none');}
    if(genre1Obj[0].value==''){genre1Obj[1].classList.remove('d-none');}
    if(genre2Obj[0].value==''){genre2Obj[1].classList.remove('d-none');}
    if(genre3Obj[0].value==''){genre3Obj[1].classList.remove('d-none');}

    // password();
}


// var password = () =>{
// const pswd = document.getElementById("password");
// const cpswd = document.getElementById("Cpassword");
// // const dd = document.getElementById("confirm");
//     //  dd[1].classList.add("d-none")
//  if ((pswd.value == cpswd.value)&&(pswd.value ==='')&&(cpswd.value ==='') ){
//         return true;
//     }else{
//         // dd[1].classList.remove("d-none")
//         alert("Enter Same Password")
//     }
    
// }

function validPhn(tagNPhoneNumber) {

    let ph = /^[0-9]{10}$/g;
    let p = document.getElementById(PhoneNumber).value;
    let result = ph.test(p);
    console.log(result);
    document.getElementById(PhoneNumber).classList.remove('invalid');
    if(!result)
      document.getElementById(PhoneNumber).classList.add('invalid');
}
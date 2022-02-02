
var user={}

// function validate(){
//     let fname = document.getElementById("firstName").value;
//     let lname = document.getElementById("lastName").value;
//     let mail = document.getElementById("email").value;
//     let phone = document.getElementById("phoneNumber").value;
//     let aadhar = document.getElementById("adhaarNumber").value;

//     //phone nuber validation
//     // var phoneregex = [6-9]{1}[0-9]{9}
// }


function myfun(){

    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("phoneNumber").value;
    let aadhar = document.getElementById("adhaarNumber").value;
// console.log(typeof phone,phone)
user= {"Aadhaar_number": parseInt(aadhar),"Last_name":lname,"Mobile_number":parseInt(phone),"Email_Id":mail,"First_name":fname};
// console.log(user)
fetch('https://d1aeq6e5ug.execute-api.ap-south-1.amazonaws.com/post_it/userinfo/',{
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
      },
  
    body : JSON.stringify(user)
})
.then(function(response){
    return response
})
.then(function(data){
    console.log('post request response data',data)
})
}


  
 


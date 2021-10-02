//  let a = `<div> welcome ${"anubhav "} ${ " singh"} </div>`
//  let empty = document.getElementById("empty_divId")
//  empty.innerHTML=a
let arr = [];
function button () {
    console.log("hghjhjf")
    let first_Name = document.getElementById("fname").value
    let last_Name = document.getElementById("lname").value
    console.log(first_Name)
    console.log(last_Name) 
    data = {
        firstName:first_Name,
        lastName:last_Name,
    }
    let validate = require (data);
    if(validate == true) {
        arr.push(data)
        let greeting_card = document.getElementById("greeting")
        greeting_card.innerHTML=""
        for(let i = 0 ; i < arr.length ; i++) {
            let card = `<div id = "message"> welome ${arr[i].firstName} ${arr[i].lastName}</div>`
            greeting_card.innerHTML+=card
        }
        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
    }
  
}

function require (object) {
    let flag = true;
    if(object.firstName == "") {
        document.getElementById("first_").innerHTML=" Required the first Name"
        flag = false;
    }
    if(object.lastName == "") {
        document.getElementById("lname_").innerHTML="Please enter the last Name"
        flag = false;
    }
    return flag;
    
}
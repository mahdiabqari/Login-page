//let tepm = [1,10,20,50,248,"mahdi"];
//let test;
//tepm.push("sag");
//tepm.unshift("noob");
//tepm.pop();

//tepm.splice(3,0,1111)
//let x = tepm.filter((number) => number<100);

//let y = tepm.map((number)=>{
//    return `<li>${number}</li>`
//});

//console.log(y); 

let password = "panzeraezakmi";
let email = "mahdiabqari@gmail.com";

let valuepass = document.getElementById("pass");
let valueem = document.getElementById("gmail");


function mahdi(){
    if(valuepass.value === password && valueem.value === email){
        let x = document.getElementById("add");
        x.innerText = "Wellcome!";
        setInterval(()=> alert("Be cerful Im watching you yet :|") , 5000, 1)
    }

    else if(valuepass.value === "" && valueem.value === email){
        let a = document.getElementById("add");
        a.innerText = "Please write your password."
    }

    else if(valuepass.value === password && valueem.value === ""){
        let b = document.getElementById("add");
        b.innerText = "Please write your Email addres."
    }

    else if(valuepass.value !== email && valuepass.value === password){
        let z = document.getElementById("add");
        z.innerText = "your Email is not found!"
    }

    else if(valuepass.value !== password && valueem.value === email){
        let y = document.getElementById("add");
        y.innerText = "your Password is not correct!"
    }

    else if(valuepass.value === "" && valueem.value === ""){
        let b = document.getElementById("add");
        b.innerText = "your form is none :/"
    }

    else{
        let q = document.getElementById("add");
        q.innerText = "You dont have any accont."
    }
}





// fill in javascript code here
document.querySelector("form").addEventListener("submit", myFun);

function myFun() {
    event.preventDefault();

    var name = document.querySelector("#name").value;

    var id = document.querySelector("#employeeID").value;

    var dept = document.querySelector("#department").value;

    var exp = document.querySelector("#exp").value;

    var em = document.querySelector("#email").value;

    var mobile = document.querySelector("#mbl").value;

    console.log(name,id,dept,exp,em,mobile);

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = name;

    var td2 = document.createElement("td");
    td2.innerText = id;

    var td3 = document.createElement("td");
    td3.innerText = dept;

    var td4 = document.createElement("td");
    td4.innerText = exp;

    var td5 = document.createElement("td");
    td5.innerText = em;

    var td6 = document.createElement("td");
    td6.innerText = mobile;

    var td7 = document.createElement("td")
    if(exp>5){
        td7.innerText = "Senior"
    } else if(exp == 2 || exp == 3 || exp ==4 || exp==5){
        td7.innerText = "Junior"
    }else{
        td7.innerText = "Fresher"
    }

    var td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.style.backgroundColor = "red"
    td8.addEventListener("click", deleteRow);

    tr.append(td1, td2, td3, td4, td5, td6,td7,td8 );
    document.querySelector("tbody").append(tr);
}

function deleteRow() {
    event.target.parentNode.remove();

    event.target.parentNode.innerHTML = "";
}
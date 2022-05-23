// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes


const masukan = document.getElementById("tambah");
const add = document.getElementById("enter");
const uls = document.querySelector("ul");

add.addEventListener("click", function(){
    if(masukan.value.length > 0){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(masukan.value));
        uls.appendChild(li);
        masukan.value = "";
    }
    else{
        alert("KOSONG");
    }
})

masukan.addEventListener("keypress", function(event){
    if(masukan.value.length > 0 && event.keyCode === 13){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(masukan.value));
        uls.appendChild(li);
        masukan.value = "";
    }
    else if(masukan.value.length === 0 && event.keyCode === 13){
        alert("KOSONG");
    }
})
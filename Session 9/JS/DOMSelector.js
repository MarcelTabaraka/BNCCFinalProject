// let angka = prompt("Please provide the number");
// alert(Number(angka));

// let umur = prompt("Umurmu berapa?");

// if (Number(umur) < 17) alert("Kamu belum bisa buat KTP");
// else if (Number(umur) > 16) alert("Silahkan buat KTP");

// batas
document.getElementsByTagName("li");
document.getElementById("contohById");
document.getElementsByClassName("contohByClassName");
// batas
document.querySelector("h1");
document.querySelector("li");
document.querySelectorAll("li");
// batas
document.querySelector("h1").style.background = "purple";
document.querySelector("h1").className = "card"
// batas
document.querySelector("li").classList.add("kelar");
document.querySelectorAll("li").classList.add("kelar");

document.querySelectorAll("li")[3];
document.querySelectorAll("li")[3].parentElement;
document.querySelectorAll("li")[3].parentElement.parentElement;
document.querySelectorAll("li")[3].parentElement.children;

const palingPenting = document.querySelectorAll("li")[3];
// bonus
document.querySelector("h1").innerText = "Cepat"
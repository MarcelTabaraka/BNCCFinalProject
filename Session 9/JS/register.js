const togglePassword = document.querySelector("#togglePassword");
const passwords = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    // this.classList.toggle("fa-eye");
});


let form = document.getElementById('form');
let nameForm = document.getElementById('name');
let password = document.getElementById('password');

// function (e) {}
form.addEventListener('submit', e => {
    //e sendiri adalah object Javascript buat event
    //jadi kita bisa interaksi dengan event itu dengan object e ini
    //maksudnya object itu kayak sesuatu yang memiliki banyak methods dan function
    //misal kayak mobil itu anggep dia object, dan mobil itu punya methods kayak jalan, ngerem, dll
    //e ini salah satu methodsnya ada preventDefault
    //yang ngestop si event, misal dalam kasus ini kita mau submit form
    //kalau misal si data ini ga tervalidasi
    //maka akan dilakukan preventDefault
    if (!validateData()) {
        e.preventDefault();
    }
    else {
        alert("You are successfully registered");
    }
});

function validateData() {
    let nameValue = nameForm.value;
    let passwordValue = password.value;
    let flag = 1;

    if (nameValue === '') {
        invalidMsg(nameForm, 'Name cannot be blank');
        flag = 0;
    }
    else {
        validMsg(nameForm);
    }

    if (passwordValue === '') {
        invalidMsg(password, 'Password cannot be blank');
        flag = 0;
    }
    else if (!isPassword(passwordValue)) {
        invalidMsg(password, 'Invalid password format');
        flag = 0;
    }
    else {
        validMsg(password);
    }

    return flag;
}

//validasi password
function isPassword(password) {
    let len = password.length;

    //lebih dari 8 karakter
    if (len < 8) {
        return false;
    }

    //setidaknya 1 alphabet
    let flag = 0;
    for (let i = 0; i < len; i++) {
        if (password[i].toLowerCase() !== password[i].toUpperCase()) {
            flag = 1;
            break;
        }
    }

    if (flag == 0) {
        return false;
    }

    //setidaknya 1 kapital
    let flag2 = 0;
    for (let i = 0; i < len; i++) {
        if (password[i] === password[i].toUpperCase() && password[i].toLowerCase() !== password[i].toUpperCase()) {
            flag2 = 1;
            break;
        }
    }

    if (flag2 == 0) {
        return false;
    }

    //setidaknya 1 angka
    let flag3 = 0;
    for (let i = 0; i < len; i++) {
        if (!isNaN(password[i])) {
            flag3 = 1;
            break;
        }
    }

    if (!flag3) {
        return false;
    }

    return true;
}

function invalidMsg(input, message) {
    let container = input.parentElement;
    let msg = container.querySelector('h5');
    msg.style.display = 'block';
    container.className = 'regis-data invalid';
    msg.innerText = message;
}

function validMsg(input) {
    let container = input.parentElement;
    container.className = 'regis-data valid';
    let msg = container.querySelector('h5');
    msg.style.display = 'none';
}

function changeFontColor() {
    let x = document.getElementById("name");
    x.style.color = "#BCB4D7";
}
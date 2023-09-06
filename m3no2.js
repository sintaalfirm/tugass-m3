var passw = document.getElementById("passw");
var klik = document.getElementById("klik");

klik.addEventListener("click", validate);
function validate() {
    if (passw.value == "sss") {
        alert("inputan anda tervalidasi benar");
    } else {
        alert("password salah");
    }};

// Nama : Sinta Alfi Royanul M
// NIM : 21/482524/TK/53299
// Kelas : Praktikum SIG berbasis Web 
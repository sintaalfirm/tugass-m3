var nama = document.getElementById("nama");
var umur = document.getElementById("umur");
var tombol = document.getElementById("tombol");

var pBaru = null;

tombol.addEventListener("click", validate);

function validate() {
    if (nama.value == "") {
        alert("isikan nama!!");
        return;
    }

    if (umur.value == "") {
        alert("isikan umur!!");
        return;
    }

    var umurValue = Number(umur.value);
    var pesan = "";

    if (umurValue < 1) {
        pesan = "Anda Game Over";
    } else if (umurValue < 6) {
        pesan = "Anda masih bayi";
    } else if (umurValue < 16) {
        pesan = "Anda masih anak-anak";
    } else if (umurValue < 31) {
        pesan = "Anda masih remaja";
    } else if (umurValue < 61) {
        pesan = "Anda sudah dewasa";
    } else {
        pesan = "Anda sudah tua";
    }

    if (pBaru != null) {
        pBaru.remove();
    }

    var p = document.createElement("p");
    p.textContent = pesan;
    document.body.appendChild(p);

    pBaru = p;
}
// Nama : Sinta Alfi Royanul M
// NIM : 21/482524/TK/53299
// Kelas : Praktikum SIG berbasis Web 
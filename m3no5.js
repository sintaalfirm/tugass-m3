function cekFibonacci(angka) {
    if (angka < 0) {
        return false;
    }

    if (angka == 0 || angka == 1) {
        return true;
    }

    let angkaSebelumnya = 0;
    let angkaSekarang = 1;
    for (let i = 2; i <= angka; i++) {
        let angkaBerikutnya = angkaSebelumnya + angkaSekarang;
        if (angka == angkaBerikutnya) {
            return true;
        }
        angkaSebelumnya = angkaSekarang;
        angkaSekarang = angkaBerikutnya;
    }
    return false;
}

function bilanganFibonacci(angka) {
    let hasil = [];
    let angkaSebelumnya = 0;
    let angkaSekarang = 1;
    for (let i = 0; i < angka; i++) {
        hasil.push(angkaSebelumnya);
        let angkaBerikutnya = angkaSebelumnya + angkaSekarang;
        angkaSebelumnya = angkaSekarang;
        angkaSekarang = angkaBerikutnya;
    }
    return hasil;
}

let hasil;

function handleSubmit() {
    let angka = document.getElementById("angka").value;
    if (angka == "") {
        alert("Masukkan angka terlebih dahulu");
        return;
    }
    if (angka < 0) {
        alert("Angka harus positif");
        return;
    }

    let hasilElement = document.getElementById("hasil");
    while (hasilElement.firstChild) {
        hasilElement.removeChild(hasilElement.firstChild);
    }

    let paragraf = document.createElement("p");
    hasilElement.appendChild(paragraf);
    hasil = paragraf;
    paragraf.innerHTML = `Bilangan Fibonacci dari ${angka} adalah ${bilanganFibonacci(angka).join(", ")}`;

}

document.getElementById("submit").addEventListener("click", handleSubmit);

// Nama : Sinta Alfi Royanul M
// NIM : 21/482524/TK/53299
// Kelas : Praktikum SIG berbasis Web 
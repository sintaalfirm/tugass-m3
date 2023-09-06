document.addEventListener("DOMContentLoaded", function() {
    function faktorial(angka) {
        if (angka < 0) {
            return "Angka yang dimasukkan harus positif";
        } else if (angka == 0) {
            return 1;
        } else {
            return (angka * faktorial(angka -1));
        }
    }

    document.querySelector("#HitungButton").addEventListener("click", function() {
        var angka = document.querySelector("#angka").value;
        var hasil = faktorial(angka);
        var hasilDiv = document.querySelector("#hasilFaktorial");
        if (typeof hasil === "number") {
            hasilDiv.innerHTML = "<p>Angka faktorial dari " + angka + " adalah: " + hasil + " </p>";
        } else {
            hasilDiv.innerHTML = hasil;
        }
    });
});

// Nama : Sinta Alfi Royanul M
// NIM : 21/482524/TK/53299
// Kelas : Praktikum SIG berbasis Web 
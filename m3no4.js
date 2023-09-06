function apakahPrima(angka) {
    if (angka < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i == 0) {
        return false;
      }
    }
  
    return true;
  }

let hasil = null;

function handleSubmit() {
    let angka = document.getElementById("angka").value;

    let bilanganPrima = [];
  
    for (let i = 1; i <= angka; i++) {
      if (apakahPrima(i)) {
        bilanganPrima.push(i);
      }
    }

    if (hasil) {
        hasil.remove();
    }
  
    hasil = document.createElement("p");
    hasil.innerHTML = `Bilangan prima sebelum ${angka} adalah ${bilanganPrima.join(", ")}`;
    document.body.appendChild(hasil);
  }
  

  document.getElementById("submit").addEventListener("click", handleSubmit);
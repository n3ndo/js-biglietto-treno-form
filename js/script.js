let km;
let eta;
let name;
let biglietto_treno;
const button = document.querySelector('.btn');

button.addEventListener("click", function(){
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;
    let name = document.getElementById("name").value;
    console.log(km);
    console.log(eta);
    if (eta < 18) {
        biglietto_treno = (km * 0.21) - ((km * 0.21) * 0.2);
    } else if (eta > 65) {
        biglietto_treno = (km * 0.21) - ((km * 0.21) * 0.4);
    } else {
        biglietto_treno = km * 0.21;
    }
    biglietto_treno = biglietto_treno.toFixed(2);
    document.getElementById("test").innerHTML = `NOME PASSEGGERO: ${name} <br> PREZZO: ${biglietto_treno}€`;
})


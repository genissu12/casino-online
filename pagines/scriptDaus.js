
var tirarDauBtn = document.getElementById('tirar-dau');
var jugadorResultat = document.getElementById('jugador-resultat');
var bancaResultat = document.getElementById('banca-resultat');
var guanyador = document.getElementById('guanyador');


function tirarDau() {
    return Math.floor(Math.random() * 6) + 1;
}


tirarDauBtn.addEventListener('click', function() {
    
    var resultatJugador = tirarDau();
    var resultatBanca = tirarDau();

    jugadorResultat.textContent = 'Jugador: ' + resultatJugador;
    bancaResultat.textContent = 'Banca: ' + resultatBanca;

    if (resultatJugador > resultatBanca) {
        guanyador.textContent = "Has guanyat!";
        guanyador.style.color = "green";
    } else if (resultatJugador < resultatBanca) {
        guanyador.textContent = "La banca ha guanyat!";
        guanyador.style.color = "red";
    } else {
        guanyador.textContent = "Empat!";
        guanyador.style.color = "blue";
    }
});
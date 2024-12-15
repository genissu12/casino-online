// Selecció d'elements del DOM
var tirarDauBtn = document.getElementById('tirar-dau');
var jugadorResultat = document.getElementById('jugador-resultat');
var bancaResultat = document.getElementById('banca-resultat');
var guanyador = document.getElementById('guanyador');

// Funció per generar un número aleatori entre 1 i 6
function tirarDau() {
    return Math.floor(Math.random() * 6) + 1;
}

// Lògica del joc
tirarDauBtn.addEventListener('click', function() {
    // Generar resultats per al jugador i la banca
    var resultatJugador = tirarDau();
    var resultatBanca = tirarDau();

    // Mostrar els resultats
    jugadorResultat.textContent = 'Jugador: ' + resultatJugador;
    bancaResultat.textContent = 'Banca: ' + resultatBanca;

    // Determinar el guanyador
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
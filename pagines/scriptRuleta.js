// Variables per emmagatzemar l'aposta seleccionada
var aposta = null;

// Llistes de números vermells i negres
var numerosVermells = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var numerosNegres = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

// Assignar les accions als botons de les apostes
document.getElementById('aposta-vermell').addEventListener('click', function() {
    aposta = 'vermell';
    document.getElementById('resultat').textContent = 'Has apostat a Vermell';
});

document.getElementById('aposta-negre').addEventListener('click', function() {
    aposta = 'negre';
    document.getElementById('resultat').textContent = 'Has apostat a Negre';
});

document.getElementById('aposta-verd').addEventListener('click', function() {
    aposta = 'verd';
    document.getElementById('resultat').textContent = 'Has apostat a Verd';
});

// Funció per generar un resultat aleatori de la ruleta
function girarRuleta() {
    var resultatRuleta = Math.floor(Math.random() * 37); // Número aleatori entre 0 i 36
    var colorResultat = '';

    // Si el número és 0, és verd
    if (resultatRuleta === 0) {
        colorResultat = 'verd';
    }
    // Si el número està a la llista de vermells, el color és vermell
    else if (numerosVermells.includes(resultatRuleta)) {
        colorResultat = 'vermell';
    }
    // Si el número està a la llista de negres, el color és negre
    else if (numerosNegres.includes(resultatRuleta)) {
        colorResultat = 'negre';
    }

    // Comprovar si l'aposta és guanyadora
    var missatge = 'El número guanyador és ' + resultatRuleta + ' (' + colorResultat + '). ';
    if (aposta === colorResultat) {
        missatge += 'Enhorabona, has guanyat!';
    } else {
        missatge += 'Ho sento, has perdut!';
    }

    // Mostrar el resultat
    document.getElementById('resultat').textContent = missatge;
}

// Afegir l'esdeveniment al botó de girar
document.getElementById('girar-btn').addEventListener('click', girarRuleta);

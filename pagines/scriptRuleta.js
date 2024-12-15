
var aposta = null;


var numerosVermells = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var numerosNegres = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];


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


function girarRuleta() {
    var resultatRuleta = Math.floor(Math.random() * 37); 
    var colorResultat = '';

    
    if (resultatRuleta === 0) {
        colorResultat = 'verd';
    }
    
    else if (numerosVermells.includes(resultatRuleta)) {
        colorResultat = 'vermell';
    }
    
    else if (numerosNegres.includes(resultatRuleta)) {
        colorResultat = 'negre';
    }

    // Falta cambiar color misatge 
    var missatge = 'El número guanyador és ' + resultatRuleta + ' (' + colorResultat + '). ';
    if (aposta === colorResultat) {
        missatge += 'Enhorabona, has guanyat!';
    } else {
        missatge += 'Ho sento, has perdut!';
    }

  
    document.getElementById('resultat').textContent = missatge;
}


document.getElementById('girar-btn').addEventListener('click', girarRuleta);

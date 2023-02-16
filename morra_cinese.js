var nome = window.prompt("Inserisci il tuo nome: ");

document.getElementById("titolo").innerHTML = "Benvenuto " + nome;

let sceltaU;

function Carta(){
    sceltaU = "carta";
}

function Forbici(){
    sceltaU = "forbici";
}

function Sasso(){
    sceltaU = "sasso";
}
function verdetto(){
    document.getElementById("carta").style.display = 'none';
    document.getElementById("gioco").style.display = 'none';
    document.getElementById("forbici").style.display = 'none';
    document.getElementById("sasso").style.display = 'none';
    document.getElementById("pulsante").style.display = 'none';
    let sceltaC;
    let sceltaCasuale = Math.floor(Math.random()*3);
    
    switch(sceltaCasuale){
            case 0:
            opzioneCasuale = "sasso";
            break;
            
            case 1:
            opzioneCasuale = "carta";
            break;
            
            case 2:
            opzioneCasuale = "forbice";
            break;
    }
    if(sceltaU === sceltaC){
       document.getElementById("titolo").innerHTML = "Pareggio.";
       document.getElementById("informazioni").innerHTML = "tu hai scelto " + sceltaU + " il computer ha scelto " + sceltaC;
    }
    else if(sceltaU =="carta" && sceltaC =="sasso)||(sceltaU =="forbici" && sceltaC =="carta")||(sceltaU =="sasso" && sceltaC =="forbici"){
    document.getElementById("titolo").innerHTML = "Hai vinto!";
    document.getElementById("informazioni").innerHTML = "tu hai scelto " + sceltaU + " il computer ha scelto " + sceltaC;
    }
    else{
    document.getElementById("titolo").innerHTML = "hai perso.";
    document.getElementById("informazioni").innerHTML = "tu hai scelto " + sceltaU + " il computer ha scelto " + sceltaC;
    }
}

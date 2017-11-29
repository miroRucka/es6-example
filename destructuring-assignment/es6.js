var pole = [ 1, 2, 3 ]
var [ a, , b ] = pole;

//potom budem mat a==1, b==3

var { meno, priezvisko, vek:v , adresa:{ulica:ulica}} = {meno:'Miroslav', priezvisko:'Rucka',vek:18, adresa:{ulica:'Pekná',mesto:'Žilina'}};

//potom budem mat meno=='Miroslav' ... v==18, ulica=='Pekná'


//funguje to aj vo funkciach
function  osoba({ meno: n, vek: v }) {
    console.log(n, v)
}

osoba({meno:'Miroslav', vek:18})
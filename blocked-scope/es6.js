//co by sa stalo v tomto pripade keby sme pouzili var, aky by bol vysledok, 
//co urcovalo v es5 scope?

function vypocitajHodnotu (vip) {
  var vysledok = 0
  if (vip) {
    let vysledok = 1
  }
  {
    let vysledok = 100
  }  
  return vysledok;
}

console.log(vypocitajHodnotu(true)) //vysledok bude 0
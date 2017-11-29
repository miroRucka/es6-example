//co by sa stalo v tomto pripade keby sme pouzili var, aky by bol vysledok, 
//co urcovalo v es5 scope?

function calculateTotalAmount (vip) {
  var amount = 0
  if (vip) {
    let amount = 1
  }
  {
    let amount = 100
    {
      let amount = 1000
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true)) //vysledok bude 0
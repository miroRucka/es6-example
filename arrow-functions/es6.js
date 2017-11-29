//pouziva sa najme pri iteratoroch, reduce map funkciach

var sum = (a,b) => {
   return a+b;
};

['Miroslav','Rucka',18].forEach(v=>console.log(v + "_sufix"))


//este jedna dobra vec, ze pri pouziti => namiesto function this ukazuje tam kde by ukazovalo this mimo funkcie
$('.btn').click((event) =>{
  this.sendData()
})

/** old es5 code
var _this = this
$('.btn').click(function(event){
  _this.sendData()
})
*/
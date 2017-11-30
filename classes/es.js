class Clovek {
  
  constructor(meno, priezvisko, vek = 18){
    this.meno = meno;
    this.priezvisko = priezvisko;
    this.vek = vek;
  }
  
  getInfo() {
    console.log(`tato instancia > ${this.meno}, ${this.priezvisko}, ${this.vek}`);
  }
  
}
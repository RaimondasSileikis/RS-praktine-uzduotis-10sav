function rand(min, max) {         
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

/*
Sukurti klasęVaisius, kuris turi:savybędydisrand 5 - 25;savybęidrand 1000000 - 9999999savybęprakastasfalseSukurti metodąprakasti(),
 kuris savybe prakastaskeistų į true.SukurtiklasęKrepšys,kurituristatinęsavybevaisiai,kuriyra masyvas.KlasėjeKrepšyssukurkitestatinįmetodąpripildyti(),
 kurissavybęvaisiaiužpildytų20-timiVaisiusobjektųirišrūšiuotųjuospagalvaisiausdydįnuodidžiausioikimažiausio.KlasėjeKrepšyssukurtistatinįmetodąisimti(),
 kurisišvaisiaimasyvoišimtų(ištrintųišmasyvo)pirmą(didžiausią)vaisiųirjįgrąžintų.Išėmustarkimkelisvaisiusirvėlpaleidusmetodąpapildyti(),
 jisturipadarytitaikąsakometodopavadinimas-papildytiikipilno(20elementų),oneperrašytivisusvaisiusišnaujo(taigalimastebėtipagalvaisių id).
 Išorėje(globale)sukurtikintamąjįgrauztukaikurisyraMaptipoobjektas.Iškrepšelioišimtivaisiaituribūtipridedamiįšįobjektą.KaipraiktusnaudotiVaisiusobjektoidsavybę.
 Priešpatalpinantvaisiųįgrauztukaiobjektą,vaisiusturibūti“prakąstas”,Vaisiusobjekte paleidžiantprakasti()metodą.
*/

class Vaisius {

constructor(){
  this.dydis = this.rand(5, 25);
  this.id = this.rand(1000000, 9999999);
  this.prakastas = false;
}

prakasti(){
this.prakastas = true;
}
rand(min, max) {         
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

}
const vaisius1 = new Vaisius();
vaisius1.prakasti()
console.log(vaisius1);

class Krepsys{

  static vaisiai = [];

  static pripildyti(){
for (let i = 0; i < 20; i++) {
 this.vaisiai.push(new Vaisius)
}
this.vaisiai.sort((a, b) => a.dydis + b.dydis)
  }
  static isimtiVaisiai = [];
  static pirmasVaisius;
  static isimti(){
    this.pirmasVaisius = this.vaisiai.shift()
    this.isimtiVaisiai.push(this.pirmasVaisius);
  }

static papildyti(){
  if (this.vaisiai.length < 20) {
    for (let i = 0; i < (21 - this.vaisiai.length); i++) {
      this.vaisiai.push(new Vaisius)
    }
    this.vaisiai.sort((a, b) => a.dydis + b.dydis)
  }
}
static prakastasVaisius;
static prakasti(){
  for (let i = 0; i < this.isimtiVaisiai.length; i++) {
    if (this.isimtiVaisiai.prakastas != 'false') {
    this.prakastasVaisius = this.isimtiVaisiai[i]
    grauztukai.push(this.prakastasVaisius)
    }
    
  }
}
constructor(){

}

}
Krepsys.pripildyti()
Krepsys.isimti()
Krepsys.isimti()
Krepsys.papildyti()
console.log(Krepsys.vaisiai);
console.log(Krepsys.isimtiVaisiai);

const grauztukai = new Map();
console.log(grauztukai);

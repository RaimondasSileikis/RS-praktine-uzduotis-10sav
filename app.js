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


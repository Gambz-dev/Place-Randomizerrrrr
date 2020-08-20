let names = ["Laura",
            "Julien",
            "Clément",
            "Angeline",
            "Justine",
            "Yao",
            "Benoît",
            "Mathieu",
            "Cherif",
            "Joachim",
            "Zackary",
            "Gladys",
            "Zohra",
            "Jérome",
            "Alvyn",
            "Quentin"],
    places = document.querySelectorAll(".place");


function shuffle(tableau) {
  var l = tableau.length,
      tmp;

  
  while (l--) {
    //On détermine un nombre random basé sur la longueur de names (soit 16)//
      let r = Math.floor(Math.random() * tableau.length);
    //On stocke la réponse choisie au hasard dans une variable temporaire //
      tmp = tableau [r];
    //On dit que R, en fait c'est L, donc que le nombre random prend la place de l'index//
      tableau [r] = tableau [l];
    //On dit que L c'est tmp DONC que L c'est R en fait. Donc si R = L et que L = R alors c'est mélangé//
      tableau [l] = tmp;
    }

  return tableau;
} 


function dispatchNames (tableau) {
  shuffle(tableau);
  let i = 0,
      j = names.length;
  
  for (; i < j; i++) {
    places[i].innerHTML = names[i];
  }
}
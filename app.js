// console.log(Math.round(Math.random()*15)+1);

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
            "Quentin"];


// let random = Math.round(Math.random() * names.length);
// console.log(names[random]);

// let L = names.length;
// let R = (Math.round(Math.random()*16));




for(let i = 0; i < names.length; i++){
    const r = Math.floor(Math.random() * names.length);
    let place = document.getElementById(`place-${i}`)
    // const temp = names[i];


    console.log(`Je vais placer la personne à l'index ${r} sur la div ${i+1}`);


    console.log(names);
    names.splice(r, 1);

    // names[i] = names[r];
    // names[r] = temp;

  }


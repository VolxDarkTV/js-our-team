// creo l'Array con le info del team
const ourTeam = [
    // Barnett
    {
        'nome' : 'Wayne',
        'cognome' : 'Barnett',
        'role' : 'Founder & CEO',
        'image' : 'img/wayne'

    },
    // Caroll
    {
        'nome' : 'Angela',
        'cognome' : 'Caroll',
        'role' : 'Chief Editor',
        'image' : 'immagine da sostituire'

    },
    // Gordon
    {
        'nome' : 'Walter',
        'cognome' : 'Gordon',
        'role' : 'Office Manager',
        'image' : 'immagine da sostituire'

    },
    // Lopez
    {
        'nome' : 'Angela',
        'cognome' : 'Lopez',
        'role' : 'Social Media Manager',
        'image' : 'immagine da sostituire'

    },
    // Estrada
    {
        'nome' : 'Scott',
        'cognome' : 'Estrada',
        'role' : 'Developer',
        'image' : 'immagine da sostituire'

    },
    // Ramos
    {
        'nome' : 'Barbara',
        'cognome' : 'Ramos',
        'role' : 'Graphic Designer',
        'image' : 'immagine da sostituire'

    },
]

// for (i = 0; i < ourTeam.length; i++){
//     let objIesimo = ourTeam[i];
//     // console.log(objIesimo);
//     for(let key in objIesimo){
//         console.log(key, objIesimo[key]);
//         let contenitore = document.getElementById('info');
//         contenitore.append(`${' ' + key}: ${objIesimo[key]}`)
//     }
// }

// Per ogni oggetto dell'array deve creare un div


const infoCont = document.getElementById('info');
for (let i = 0; i < ourTeam.length; i++){
    infoCont.innerHTML += `<div class="stringhe">${ourTeam[i].nome} ${ourTeam[i].role} ${ourTeam[i].image}</div>`;
}







// let crea = createBox('div', 'box', [i]);
// for(i = 0; i < ourTeam.length; i++){

// }

// // FUNCTIONS
// function createBox(tipoElemento, classe, insertData){
//     // Creo un elemento div
//     const mioElemnt = document.createElement(tipoElemento);
//     mioElemnt.classList.add(classe);
//     // Aggiungo un parametro alla funzione per aggiungere gli elementi
//     const addData = document.createTextNode(insertData);
//     mioElemnt.appendChild(addData);
    
//     return mioElemnt;
// }
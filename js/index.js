// creo l'Array con le info del team
const ourTeam = [
    // Barnett
    {
        'nome' : 'Wayne',
        'cognome' : 'Barnett',
        'role' : 'Founder & CEO',
        'image' : 'immagine da sostituire'

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

for (i = 0; i < ourTeam.length; i++){
    let objIesimo = ourTeam[i];
    // console.log(objIesimo);
    for(let key in objIesimo){
        console.log(key, objIesimo[key]);
    }
}
// Envoie une requête GET à l'URL de l'api pour récupérer des données
fetch("chocolatier.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON 
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    addProducts(data);
  });

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addProducts(data) {
  // Affiche les données dans la console du navigateur
  console.log(data);


  // Lecture du tableau Réalisation 
    let real=""
    data.realisations.forEach(element => {
      // Affectation des clés sur les balises HTML
        real += `<div class="card"> <h3>${element.nom}</h3> <img src="${element.image}" alt=""> <p>${element.description}</p> </div>`
    });
    console.log(real)

    // Lecture du tableau Témoignage
    let temoi=""
    data.temoignages.forEach(element => {
      // Affectation des clés sur les balises HTML
        temoi += `<div class="card2"> <h2 class="prenom">${element.prenom}</p> <h3 class="type">${element.typePrestation}</h3> <p class="com">${element.commentaire}</p> <p class="not">${avis(element.note)}</p> </div>`
      
    });
    console.log(temoi)
    let list=""
    data.listeBenefficesClients.forEach(element => {
       list=data.listeBenefficesClients
    });
    console.log(list)

    // Affectation de la section hero
    document.querySelector("#slog").innerHTML +=`
    <h2>${data.nomCommercial}</h2> <br> <br>
    <p>${data.texteBouton}</p> <br>
    <p>${data.phraseAccroche}</p>  <br>
    <p>${data.listeBenefficesClients}</p>
   `

   // Partie Réalisation 
    document.querySelector("#content").innerHTML += real
    //Partie Témoignage 
    document.querySelector("#content2").innerHTML += temoi

}

function avis(note){

  let chaine =""
 
  // Met la note sur 5
  for(let i=1; i<=note; i++){
      chaine+="★"
  }
  // Met la note du client 
  for(let j=0; j<5-note;j++){
      chaine+="☆"
  }
  return chaine
}
  /* Adresse du chocolatier 
  var map = L.map('map').setView([45.439695, 4.3871779], 13);

  var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([45.439695, 4.3871779], 13).addTo(map)
      .bindPopup('')
      .openPopup();*/
 









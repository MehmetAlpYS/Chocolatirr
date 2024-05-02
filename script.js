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
        real += `<div class="card"> <h3>${element.nom}</h3> <img src="${element.image}" alt=""> <p>${element.description}</p> <a href="https://www.lechocolat-alainducasse.com/fr/coffret-decouverte-45-pieces">
        <p class="command"> Commandez Maintenant </p> </a> </div>`
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
/*
let header = document.querySelector("header")

window.addEventListener("scroll",()=>{
  console.log("j'ai scrollé")
  if(window.scrollY > ban.clientHeight - 100){
      header.classList.add("headerColored")
  }else{
      header.classList.remove("headerColored")
  }
})*/

var map = L.map('map').setView([48.48221, 2.07531], 13);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
}).addTo(map);

L.marker([48.48221, 2.07531, 13]).addTo(map)
    .bindPopup('Chocolatier de Willy Wonka')
    .openPopup();


    function openForm() {
      document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    } 
  /* Adresse du chocolatier 
 var map = L.map('map').setView([45.439695, 4.3871779], 13);

  L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
  }).addTo(map);
  
  L.marker([45.439695, 4.3871779], 13).addTo(map)
      .bindPopup('Chocolatier')
      .openPopup();
      */
  
      /**
 ** POPUP by Stratis BAKAS
 */
 

  










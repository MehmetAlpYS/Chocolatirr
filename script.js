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


    let real=""
    data.realisations.forEach(element => {
        real += `<div class="card"> <h3>${element.nom}</h3> <img src="${element.image}" alt=""> <p>${element.description}</p> </div>`
    });
    console.log(real)

    let temoi=""
    data.temoignages.forEach(element => {
        temoi += `<div class="card2"> <p>${element.prenom}</p> <p>${element.typePrestation}</p> <p>${element.commentaire}</p>`
    });
    console.log(temoi)
    let list=""
    data.listeBenefficesClients.forEach(element => {
       list=data.listeBenefficesClients
    });
    console.log(list)


    document.querySelector("#content").innerHTML += real

   // document.querySelector("#content2").innerHTML += temoi

   document.querySelector("#slog").innerHTML +=`
    <h2>${data.nomCommercial}</h2> <br> <br>
    <p>${data.texteBouton}</p> <br>
    <p>${data.phraseAccroche}</p>  <br>
    <p>${data.listeBenefficesClients}</p>
   `

  
}






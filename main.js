// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('product.json');
const pieces = await reponse.json();

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".all__product");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("p");
        nomElement.innerText = article.name;
        const prixElement = document.createElement("p");
        prixElement.innerText = `${article.price} €`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.avalible ? "En stock" : "Rupture de stock";
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image à pieceElement (la balise article)
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
    
     }
}

genererPieces(pieces);

//sort product by price 
const selectElement = document.getElementById('trierParPrice');
    // Add event listener to the select element
    selectElement.addEventListener('change', function(event) {
      // Get the selected option
      const selectedOption = event.target.value;
      // Perform an action based on the selected option
      const piecesOrdonnees1 = Array.from(pieces)
      // You can add your own logic here based on the selected option
        if (selectedOption==1) {
            piecesOrdonnees1.sort(function (a, b) {
                return a.price - b.price;
            })
            document.querySelector(".all__product").innerHTML = "";
            genererPieces(piecesOrdonnees1);
        }
        if (selectedOption==2) {
            piecesOrdonnees1.sort(function (a, b) {
                return b.price - a.price;
            });
            document.querySelector(".all__product").innerHTML = "";
            genererPieces(piecesOrdonnees1);
        }
    });
 
//categorie filter 
const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change',function(event){
        const selectedCategory =event.target.value;
        if (selectedCategory==1) {
            const categoryAccessoir =pieces.filter(function(piece){
                return piece.categorie==='accessoir';
            })
               // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
                document.querySelector(".all__product").innerHTML = "";
                genererPieces(categoryAccessoir);
        } 
        if (selectedCategory==2) {
            const categoryVaisselle =pieces.filter(function(piece){
                return piece.categorie==='vaisselle';
            })
               // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
                document.querySelector(".all__product").innerHTML = "";
                genererPieces(categoryVaisselle);
        } 
        if (selectedCategory==3) {
            const categoryVase =pieces.filter(function(piece){
                return piece.categorie==='vase';
            })
               // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
                document.querySelector(".all__product").innerHTML = "";
                genererPieces(categoryVase);
        } 
      
    })
  const avalibleFilter = document.querySelector(".button__avalible");
  avalibleFilter.addEventListener('click',function(){
   const avalibleProduct= pieces.filter(function(piece){
    return piece.avalible;
   })
   document.querySelector(".all__product").innerHTML="";
   genererPieces(avalibleProduct);
  })

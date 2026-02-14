//Declaration et initialisation de nos variables
let recipeListes = document.getElementById("recipeListes");

const URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff`;

//La fonction du traitement des donnees
function displayRecipes(recipes) {
	recipeListes.textContent = "";
	recipes.forEach((recipe) => {
		//creons nos items pour pouvoir leur ajouter a notre listes d'items.
		let itemsListe = document.createElement("li");
		itemsListe.classList.add("recipe-items");

		let itemsImg = document.createElement("img");
		itemsImg.src = recipe.image;
		itemsImg.alt = "recipe image";

		let itemsTitle = document.createElement("h2");
		itemsTitle.textContent = recipe.title;

		let recipeIngredients = document.createElement("p");
		recipeIngredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;

		recipeLink = document.createElement("a");
		recipeLink.href = recipe.sourceUrl;
		recipeLink.textContent = "View Recipe";
	});
}

//La fonction de recuperation des donnees a travers l'API
async function getRecipe() {
	const requete = await fetch(URL, {
		method: "GET",
	});

	if (!requete.ok) {
		alert("un probleme est survenu");
	} else {
		let data = await requete.json();
		return data;
	}
}
getRecipe();

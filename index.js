//Declaration et initialisation de nos variables
let recipe = document.getElementById("recipe");

const URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=275d58779ccf4e22af03e792e8819fff`;

async function getRecipe() {
	const requete = await fetch(URL, {
		method: "GET",
	});
	if (!requete.ok) {
		alert("un probleme est survenu");
	} else {
		let data = await requete.json();
		console.log(data);
		console.log(data.recipes.image);
	}
}

getRecipe();

import recipes from "./recipes.mjs";

function createRandomNum(num) { 
    return Math.floor(Math.random() * num);
}

function getListItem(list) {
    const listLength = list.length;
    const randomNum = createRandomNum(listLength);
    return list[randomNum];

}

console.log(getListItem(recipes))

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML

    return tags.map(tag => `<li>${tag}</li>`).join('');

}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = '';
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i  < 5; i++) {
        if (i < rating) {
            html += '<span class="icon-star">⭐</span>';
        }  else {
            html += '<span class="icon-star-empty">☆</span>';
        }
    }
	return html
}

function recipeTemplate(recipes) {
	return `
	<img src="${recipes.image}" alt="image of apple crisp on a plate" />
    <div id="recipe_details">
	    <ul class="recipe__tags">${tagsTemplate(recipes.tags)}</ul>
	    <h2><a href="${recipes.url}">${recipes.name}</a></h2>
	    <p class="recipe__ratings">
	        <span class="rating" role="img" aria-label="${recipes.rating} out of 5 stars"> ${ratingTemplate(recipes.rating)}</span>
	    </p>
	    <p class="recipe__description">${recipes.description}</p>
    </div>

`;
}

function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const element = document.querySelector('article.recipe');
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    // Set the HTML strings as the innerHTML of our output element
    element.innerHTML = recipesHTML;
}

function init() {
    // get a random recipe
    const recipe = getListItem(recipes);
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

init();

const recipe = getListItem(recipes);
console.log(recipeTemplate(recipe))




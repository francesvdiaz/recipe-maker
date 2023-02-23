function Recipe(name, ingredients, cookingTime, instructions) {
  this.name = name;
  this.ingredients = ingredients;
  this.cookingTime = cookingTime;
  this.instructions = instructions;
}

const recipeForm = document.getElementById("recipe-form");

const recipeFormSubmission = recipeForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const recipeName = document.getElementById("recipe-name").value;
  const recipeIngredients = document.getElementById("recipe-ingredients").value;
  const recipeInstructions = document.getElementById("recipe-instructions").value;
  const recipeCookingTime = document.getElementById("recipe-cookingTime").value;

  const recipe = new Recipe(recipeName,recipeIngredients,recipeInstructions,recipeCookingTime);

  console.log(recipe);
});

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",recipeFormSubmission);
}); 

function Recipe(name, ingredients, cookingTime, instructions) {
  this.name = name;
  this.ingredients = ingredients;
  this.cookingTime = cookingTime;
  this.instructions = instructions;
}

//This will add the Recipe properties to a new object and oberve its new qualities
Recipe.prototype.createRecipe = function() {
  const recipeName = document.getElementById("recipe-name").value;
  const recipeIngredients = document.getElementById("recipe-ingredients").value;
  const recipeInstructions = document.getElementById("recipe-instructions").value;
  const recipeCookingTime = document.getElementById("recipe-cookingTime").value;

  const recipe = new Recipe(recipeName,recipeIngredients,recipeInstructions,recipeCookingTime);

  console.log(recipe);
};

Recipe.prototype.submitForm = function(event) {
  event.preventDefault();
  this.createRecipe();
};


document.addEventListener('DOMContentLoaded', function(event) {
  const recipeForm = document.getElementById("recipe-form");
  recipeForm.addEventListener("submit",Recipe.prototype.submitForm.bind(new Recipe()));
});

function MakeRecipeCard(recipeList) {
    recipeList.forEach(function(recipe) 
    {
        let container = document.querySelector("#recipes")
        container.innerHTML += `<div class="recipe-card">
        <figure>
            <img src=${recipe.recipeImg} alt="${recipe.recipeName}" loading=lazy width=220 height=250>
        </figure>
        <h3>${recipe.recipeName}<h3>
        <a href="${recipe.cookingSteps}" target="_blank"><button class="cooking-steps">Full Recipe</button><a/>
    </div>`
    })
} 
MakeRecipeCard(recipes)


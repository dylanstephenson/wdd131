const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// menu navigation button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
})
const visitCount = document.querySelector("#visit-num")
let visitNum = GetVisitNum()

if (document.title === "Dylan's Recipe Retreat || Home Page") {
    visitNum++
    DisplayVisitNum(visitNum)
    SetVisitNum()
}
function GetVisitNum() {
    return JSON.parse(this.localStorage.getItem("numVisits"))
  }

  function DisplayVisitNum(visits) {
    visitCount.innerHTML = visits;
  }

function SetVisitNum() {
    this.localStorage.setItem("numVisits", JSON.stringify(visitNum))
}

// Array for storing recipes. Ended up having a lot of issues trying to make a button to display and hide the list of ingredients, so I'm not using it anymore.
const recipes = [
    {
        recipeName: "Ground Turkey Fried Rice",
        recipeImg: "images/fried-rice.webp",
        cookingSteps: "https://www.delish.com/cooking/recipe-ideas/a54467/how-to-make-pork-fried-rice-recipe/"
    },
    {
        recipeName: "Pecan Chicken Strips and Dip",
        recipeImg: "images/chicken-tenders.webp",
        cookingSteps: "https://www.godairyfree.org/recipes/baked-pecan-crusted-chicken-strips"
    },
    {
        recipeName: "Instant Pot Jambalaya",
        recipeImg: "images/jumbalaya.webp",
        cookingSteps: "https://tastesbetterfromscratch.com/instant-pot-chicken-and-sausage-jambalaya/"
    },
    {
        recipeName: "Chicken Hummus Wraps",
        recipeImg: "images/chicken-wraps.webp",
        cookingSteps: "https://www.ethanchlebowski.com/cooking-techniques-recipes/chicken-hummus-wrap"
    },
    {
        recipeName: "Lemon Chicken and Orzo",
        recipeImg: "images/chicken-orzo.webp",
        cookingSteps: "https://www.tasteofhome.com/recipes/lemon-chicken-with-orzo/"
    },
    {
        recipeName: "Turkey Meatball Coconut Curry",
        recipeImg: "images/meatball-curry.webp",
        cookingSteps: "https://rachlmansfield.com/healthy-thai-turkey-meatballs-in-coconut-curry/#jump-to-recipe"
    },
    {
        recipeName: "Bibimbap",
        recipeImg: "images/bibimbap.webp",
        cookingSteps: "https://www.maangchi.com/recipe/bibimbap"
    },
    {
        recipeName: "Chicken Kale Bake",
        recipeImg: "images/kale-bake.webp",
        cookingSteps: "https://www.twopeasandtheirpod.com/sheet-pan-pasta-bake/#wprm-recipe-container-38912"
    },
    {
        recipeName: "Flautas",
        recipeImg: "images/flautas.webp",
        cookingSteps: "https://docs.google.com/document/d/17LPp2n9TFXlBjKL4yhdPlJPA4FuEouea4pX6V1WRmig/edit?usp=sharing"
    },
    {
        recipeName: "Bagels",
        recipeImg: "images/bagels.webp",
        cookingSteps: "https://www.sophisticatedgourmet.com/2009/10/new-york-style-bagel-recipe/"
    },
    {
        recipeName: "BBQ Chicken Tacos",
        recipeImg: "images/bbq-tacos.webp",
        cookingSteps: "https://www.twopeasandtheirpod.com/baked-bbq-chicken-tacos/#wprm-recipe-container-60298"
    },
    {
        recipeName: "Instant Pot Risotto",
        recipeImg: "images/risotto.webp",
        cookingSteps: "https://40aprons.com/instant-pot-chicken-and-rice/#wprm-recipe-container-29497"
    }
]

function DisplayRandomRecipes(recipeList) {
    for (var i = 0; i < 4; i++) {
        let randomRecipe = recipeList[Math.floor(Math.random() * recipeList.length)]
        let box = document.querySelector(".recipe-box")
        box.innerHTML +=`<div class="random-card">
            <figure>
                <img src=${randomRecipe.recipeImg} alt="${randomRecipe.recipeName}" loading=lazy width = 150 height=180>
            </figure>
            <h3>${randomRecipe.recipeName}</h3>
            <a href="${randomRecipe.cookingSteps}" target="_blank"><button class="full-recipe">Full Recipe</button><a/>
        </div>`
    }
}
DisplayRandomRecipes(recipes)


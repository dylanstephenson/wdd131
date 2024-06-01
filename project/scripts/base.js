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
        ingredients: 
            `<li>2 Tbsp Olive or Coconut Oil</li>
            <li>3 large eggs beaten</li>
            <li>1/2 onion chopped</li> 
            <li>1 carrot peeled and shredded</li>
            <li>1/2lb Ground Turkey (preferred over pork)</li>
            <li>Sea salt</li>
            <li>black pepper</li>
            <li>1 Tbsp fresh ginger grated</li>
            <li>2 tsp minced garlic</li>
            <li>4 cups cooked rice (jasmine preferred</li>
            <li>2 Tbsp coconut aminos (preferred over soy sauce)</li>
            <li>1 Tbsp of hoisin sauce plus more for taste</li>
            <li>3 scallions finely chopped</li>
            <li>1 tsp sesame oil</li>`
            ,
        cookingSteps: "https://www.delish.com/cooking/recipe-ideas/a54467/how-to-make-pork-fried-rice-recipe/"
    },
    {
        recipeName: "Pecan Chicken Strips and Dip",
        recipeImg: "images/chicken-tenders.webp",
        ingredients: 
            `<li>2 cups raw pecan pieces</li>
            <li>1 cup panko breadcrumbs</li>
            <li>1 tsp garlic powder</li>
            <li>1 tsp + 1/2 tsp salt divided</li>
            <li>1/4 tsp cayenne pepper</li>
            <li>1 cup all purpose flour</li>
            <li>black pepper to taste</li>
            <li>3 large eggs</li>
            <li>1 1/2-2 lbs chicken breast</li>
            <li>1 cup Mayonaise</li>
            <li>1/4 cup milk</li>
            <li>1 tsp lemon juice</li>
            <li>1 tsp parsley</li>
            <li>1 tsp onion powder</li>
            <li>1 tsp garlic powder</li>
            <li>1 tsp dried dill</li>
            <li>1/2 tsp salt</li>`
        ,
        cookingSteps: "https://www.godairyfree.org/recipes/baked-pecan-crusted-chicken-strips"
    },
    {
        recipeName: "Instant Pot Jambalaya",
        recipeImg: "images/jumbalaya.webp",
        ingredients: 
            `<li>2 Tbsp oil, divided</li>
            <li>12oz andouille sausages cut in slices</li>
            <li>1 boneless skinless chicken breast</li>
            <li>1 yellow onion</li>
            <li>1 green bell pepper</li>
            <li>3 green onions</li>
            <li>3 ribs celery *OPTIONAL*</li>
            <li>3 cloves garlic</li>
            <li>2 tsp cajun seasoning</li>
            <li>1 tsp dried basil</li>
            <li>1/4 tsp dried thyme</li>
            <li>1/2 tsp granulated sugar</li>
            <li>1 1/2 cups white rice</li>
            <li>14.5oz can diced tomatoes, drained</li>
            <li>1 3/4 cups chicken broth</li>
            <li>1/2 tsp salt</li>`
        ,
        cookingSteps: "https://tastesbetterfromscratch.com/instant-pot-chicken-and-sausage-jambalaya/"
    },
    {
        recipeName: "Chicken Hummus Wraps",
        recipeImg: "images/chicken-wraps.webp",
        ingredients: 
            `<li>1/2 cup grilled chicken</li>
            <li>1 lavash flatbread</li>
            <li>1 tbsp hummus</li>
            <li>pepperoncinis, thinly sliced</li>
            <li>lettuce, thinly sliced</li>
            <li>cherry tomatoes cut in half</li>
            <li>1 tsp Lemony Sauce *ingredients below*</li>
            <li>1.5 Tbsp mayo</li>
            <li>1.5 Tbsp sour cream</li>
            <li>juice from 1/4 lemon</li>
            <li>sprinkle of thyme (instead of Za'aatar</li>
            <li>sprinkle of red pepper flakes</li>`
        ,
        cookingSteps: "https://www.ethanchlebowski.com/cooking-techniques-recipes/chicken-hummus-wrap"
    },
    {
        recipeName: "Lemon Chicken and Orzo",
        recipeImg: "images/chicken-orzo.webp",
        ingredients: 
            `<li>1/3 cup flour</li>
            <li>1 tsp garlic poweder</li>
            <li>1lb chicken breast</li>
            <li>3/4 tsp salt divided</li>
            <li>1/2 tsp pepper</li>
            <li>2 Tbsp olive oil</li>
            <li>14.5oz can chicken broth</li>
            <li>1 1/4 cup uncooked pasta</li>
            <li>2 cups shredded spinach</li>
            <li>1 cup grape tomatoes</li>
            <li>3 Tbsp lemon juice</li>
            <li>2 Tbsp minced fresh basil</li>`
        ,
        cookingSteps: "https://www.tasteofhome.com/recipes/lemon-chicken-with-orzo/"
    },
    {
        recipeName: "Turkey Meatball Coconut Curry",
        recipeImg: "images/meatball-curry.webp",
        ingredients: 
            `<li>1lb ground turkey</li>
            <li>1 egg</li>
            <li>1 cup panko breadcrumbs</li>
            <li>2 cloves garlic</li>
            <li>1 tsp ground ginger</li>
            <li>1.5 + 1 Tbsp coconut aminos, divided</li>
            <li>1 + 2 Tbsp red curry paste divided</li>
            <li>sea salt and black pepper to taste</li>
            <li>1 red bell pepper sliced</li>
            <li>1 small onion, diced</li>
            <li>13.5oz can coconut milk (coconut cream preferred)</li>
            <li>cilantro for garnish</li>`
        ,
        cookingSteps: "https://rachlmansfield.com/healthy-thai-turkey-meatballs-in-coconut-curry/#jump-to-recipe"
    },
    {
        recipeName: "Bibimbap",
        recipeImg: "images/bibimbap.webp",
        ingredients: 
            `<li>5 cups cooked rice</li>
            <li>12oz beansprouts, boiled</li>
            <li>8oz spinach blanched</li>
            <li>1 large carrot, cut thin like matchsticks</li>
            <li>1 large red bell pepper</li>
            <li>1 zucchini</li>
            <li>1 english cucumber</li>
            <li>3-4 green onions, chopped</li>
            <li>1/2lb ground beef, pork, or turkey</li>
            <li>4 eggs</li>
            <li>salt to taste</li>
            <li>vegatable, canola, olive, or coconut oil</li>
            <li>toasted sesame oil</li>
            <li>1 Tbsp garlic</li>
            <li>1.5 Tbsp soy sauce</li>
            <li>honey</li>
            <li>Gochujang (Korean hot pepper paste)</li>
            <li>*OPTIONAL* fernbrake(gosari) fresh or soaked from 1/2oz dried gosari</li>
            <li>*OPTIONAL* 1oz dried bellflower roots soaked in cold water 18-24hrs</li>`
        ,
        cookingSteps: "https://www.maangchi.com/recipe/bibimbap"
    },
    {
        recipeName: "Chicken Kale Bake",
        recipeImg: "images/kale-bake.webp",
        ingredients: 
            `<li>salt",
            <li>12oz penne pasta</li>
            <li>1 cup panko breadcrumbs</li>
            <li>1 cup grated parmesan, divided</li>
            <li>4 Tbsp olive oil</li>
            <li>1/2 tsp garlic powder</li>
            <li>1/4 tsp italian seasoning</li>
            <li>3/4 tsp black pepper</li>
            <li>1 bunch kale, ribs and stems removed</li>
            <li>1 pint cherry tomatoes, halved</li>
            <li>1 cup sour cream</li>
            <li>1 Tbsp dijon mustard</li>
            <li>4 cups shredded rotisserie chicken</li>
            <li>1 1/2 cups shredded mozarella cheese</li>`
        ,
        cookingSteps: "https://www.twopeasandtheirpod.com/sheet-pan-pasta-bake/#wprm-recipe-container-38912"
    },
    {
        recipeName: "Flautas",
        recipeImg: "images/flautas.webp",
        ingredients: 
            `<li>6 flour tortillas, 6 inch</li>
            <li>1 cup finely shredded pepper jack</li>
            <li>3/4 cup cooked chicken</li>
            <li>3/4 tsp cumin</li>
            <li>1/3 cup salsa</li>
            <li>4 tsp oil</li>
            <li>guacamole</li>
            <li>sour cream</li>`
        ,
        cookingSteps: "https://docs.google.com/document/d/17LPp2n9TFXlBjKL4yhdPlJPA4FuEouea4pX6V1WRmig/edit?usp=sharing"
    },
    {
        recipeName: "Bagels",
        recipeImg: "images/bagels.webp",
        ingredients: 
            `<li>2 tsp active dry yeast</li>
            <li>4 1/2 tsp granulated sugar</li>
            <li>1 1/4 cups of water (amount may change depending on location)</li>
            <li>3 1/2 cups of bread flour or high gluten flour</li>
            <li>1 1/2 tsp salt</li>`
        ,
        cookingSteps: "https://www.sophisticatedgourmet.com/2009/10/new-york-style-bagel-recipe/"
    },
    {
        recipeName: "BBQ Chicken Tacos",
        recipeImg: "images/bbq-tacos.webp",
        ingredients: 
            `<li>12 hard shell taco shells</li>
            <li>1 Tbsp olive oil</li>
            <li>1/3 cup chopped red onion</li>
            <li>1 clove minced garlic</li>
            <li>3 cups shredded cooked chicken</li>
            <li>1/2 cup bbq sauce</li>
            <li>2 cups mexican cheese</li>
            <li>1 Tbsp cilantro</li>
            <li>finely shredded purple cabbage</li>
            <li>corn salsa</li>
            <li>avocado</li>`
        ,
        cookingSteps: "https://www.twopeasandtheirpod.com/baked-bbq-chicken-tacos/#wprm-recipe-container-60298"
    },
    {
        recipeName: "Instant Pot Risotto",
        recipeImg: "images/risotto.webp",
        ingredients: 
            `<li>1 1/2lb chicken breast</li>
            <li>1 medium onion, chopped</li>
            <li>4 Tbsp butter</li>
            <li>3 cloves garlic, minced</li>
            <li>3-4 cups chicken broth</li>
            <li>1 1/2 Tbsp lemon juice</li>
            <li>1 1/2 cups white rice</li>
            <li>1 cup grated parmesan</li>
            <li>1 1/2 tsp salt</li>
            <li>1/4 tsp black pepper</li>`
        ,
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


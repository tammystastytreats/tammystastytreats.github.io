function get_random()
{
var ranNum= Math.floor(Math.random()*29);
return ranNum;
}

function getaRecipe()
{
var whichRecipe=get_random();

var recipe=new Array(29)
recipe[0]= "https://kreloc.github.io/recipes/all-recipes/breakfast-burritos/";
recipe[1]= "https://kreloc.github.io/recipes/all-recipes/broccoli-salad/";
recipe[2]= "https://kreloc.github.io/recipes/all-recipes/chicken-enchiladas/";
recipe[3]= "https://kreloc.github.io/recipes/all-recipes/enchilada-sauce-mix/";
recipe[4]= "https://kreloc.github.io/recipes/all-recipes/fajita-mix/";
recipe[5]= "https://kreloc.github.io/recipes/all-recipes/fajitas/";
recipe[6]= "https://kreloc.github.io/recipes/all-recipes/italian-seasoning/";
recipe[7]= "https://kreloc.github.io/recipes/all-recipes/kalua-pork/";
recipe[8]= "https://kreloc.github.io/recipes/all-recipes/lasagna/";
recipe[9]= "https://kreloc.github.io/recipes/all-recipes/mac-cheese/";
recipe[10]= "https://kreloc.github.io/recipes/all-recipes/manicotti/";
recipe[11]= "https://kreloc.github.io/recipes/all-recipes/meatloaf/";
recipe[12]= "https://kreloc.github.io/recipes/all-recipes/mushroom-rice/";
recipe[13]= "https://kreloc.github.io/recipes/all-recipes/potato-salad/";
recipe[14]= "https://kreloc.github.io/recipes/all-recipes/pulled-pork/";
recipe[15]= "https://kreloc.github.io/recipes/all-recipes/ranch-mix/";
recipe[16]= "https://kreloc.github.io/recipes/all-recipes/red-beans-with-hammock/";
recipe[17]= "https://kreloc.github.io/recipes/all-recipes/ribs/";
recipe[18]= "https://kreloc.github.io/recipes/all-recipes/roasted-chicken-veggies/";
recipe[19]= "https://kreloc.github.io/recipes/all-recipes/roasted-veggies/";
recipe[20]= "https://kreloc.github.io/recipes/all-recipes/salmon-chowder/";
recipe[21]= "https://kreloc.github.io/recipes/all-recipes/salmon-dip/";
recipe[22]= "https://kreloc.github.io/recipes/all-recipes/salsa-fresca/";
recipe[23]= "https://kreloc.github.io/recipes/all-recipes/spaghetti/";
recipe[24]= "https://kreloc.github.io/recipes/all-recipes/taco-dip/";
recipe[25]= "https://kreloc.github.io/recipes/all-recipes/taco-mix/";
recipe[26]= "https://kreloc.github.io/recipes/all-recipes/taco-mix/";
recipe[27]= "https://kreloc.github.io/recipes/all-recipes/white-bean-chicken-chili/";
recipe[28]= "https://kreloc.github.io/recipes/all-recipes/wing-dip/";

location.href = recipe[whichRecipe];

}
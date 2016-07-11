function get_random()
{
var ranNum= Math.floor(Math.random()*29);
return ranNum;
}

function getaRecipe()
{
var whichRecipe=get_random();

var recipe=new Array(29)
recipe[0]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/breakfast-burritos/";
recipe[1]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/broccoli-salad/";
recipe[2]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/chicken-enchiladas/";
recipe[3]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/enchilada-sauce-mix/";
recipe[4]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/fajita-mix/";
recipe[5]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/fajitas/";
recipe[6]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/italian-seasoning/";
recipe[7]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/kalua-pork/";
recipe[8]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/lasagna/";
recipe[9]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/mac-cheese/";
recipe[10]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/manicotti/";
recipe[11]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/meatloaf/";
recipe[12]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/mushroom-rice/";
recipe[13]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/potato-salad/";
recipe[14]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/pulled-pork/";
recipe[15]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/ranch-mix/";
recipe[16]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/red-beans-with-hammock/";
recipe[17]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/ribs/";
recipe[18]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/roasted-chicken-veggies/";
recipe[19]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/roasted-veggies/";
recipe[20]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/salmon-chowder/";
recipe[21]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/salmon-dip/";
recipe[22]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/salsa-fresca/";
recipe[23]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/spaghetti/";
recipe[24]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/taco-dip/";
recipe[25]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/taco-mix/";
recipe[26]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/taco-mix/";
recipe[27]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/white-bean-chicken-chili/";
recipe[28]= "http://tammystastytreats.iblogger.org/recipes/all-recipes/wing-dip/";

location.href = recipe[whichRecipe];

}
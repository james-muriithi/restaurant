const getclickedId = (clicked_button) =>{
document.getElementById("ingedientheader").innerHTML = clicked_button;
var BoliedMeat = ["Meat cuts","Water","salt","Onions"];
var ChapatiMeat = ["Wheat flour","salt","Beef cuts","onions","tomatoes","oil","seasoning"];
var Boiledchicken = ["Organic","free range","Onions","Fresh herbs(rosemary, thyme, oregano)","seasoning"];
var EggsandUgali = ["Properly milled maize flour","water","Eggs","oil","onions","tomatoes","capsicum"];
var Friedchicken = ["Chicken cuts","Wheat flour","Salt","onions","cayenne pepper","Garlic and onion powder","Cooking oil"];
var Kienyeji = ["Any kienyeji(leafs)"];
var Meatwetfry = ["Beefcuts","Oil","onions","tomatoes","capsicum","salt"];
var Meatroasted = ["Olive oil","Good beef cuts","Seasoning (salt, fresh herbs)"];
var targets = document.getElementById("ingredientslistings");

    document.getElementById("ingredientcard").style.display = "block";
    if(clicked_button == "boiledmeat"){
        BoliedMeat.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }else if(clicked_button == "chapatimeat"){
        ChapatiMeat.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }else if(clicked_button == "chickenboiled"){
        Boiledchicken.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }else if(clicked_button == "eggsugali"){
        EggsandUgali.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }else if(clicked_button == "friedchicken"){
        Friedchicken.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }else if(clicked_button == "kienyejimboga"){
        Kienyeji.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }else if(clicked_button == "meatwetfry"){
        Meatwetfry.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }else{
        Meatroasted.forEach(ingredient =>{
            var listing = document.createElement("LI");
            listing.innerText = ingredient;
            document.getElementById("ingredientslistings").appendChild(listing);
        });
    }
}
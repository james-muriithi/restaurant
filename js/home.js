const getclickedId = (clicked_button) =>{
    document.getElementById("ingredientcard").style.display = "block";
    // var clikedid = clicked_button;
    document.getElementById("ingedientheader").innerHTML = clicked_button;
}
const closebtn = () => {
    document.getElementById("ingredientcard").style.display = "none";
}
const ordernow = (clikedids) =>{
    document.getElementById("foorcatcard").style.display = "block";
    // var clikedid = clicked_button;
    document.getElementById("orderedItem").value = clikedids;
    // alert(clikedids);
}
const closebtns = () => {
    document.getElementById("foorcatcard").style.display = "none";
}
const getorders = () =>{
    var items = document.getElementById("orderedItem").value;
    var Locations = document.getElementById("Locations").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var Email = document.getElementById("Email").value.trim();
    var quantity = parseInt(document.getElementById("Quantity").value.trim());
    if(Locations == "" || phone == "" || Email == "" || quantity == "" || items == ""){
       alert("Please fill all required fields");
       return false;
    }else{
        var price = 0;
        if(items == "chapati-meats"){
            price = 650;
        }else if(items == "boiled-meats"){
            price = 450;
        }else if(items == "chicken-boileds"){
            price = 550;
        }else if(items == "eggs-ugali"){
            price = 220;
        }else if(items == "fried-chicken"){
            price = 730;
        }else if(items == "kienyeji-mboga"){
            price = 330;
        }else if(items == "meat-wet-fry"){
            price = 490;
        }else{
            price = 460;
        }
        alert("TOTAL PRICE: " + parseInt(price * quantity + parseInt(200)));
        var items = document.getElementById("orderedItem").value = "";
        var Locations = document.getElementById("Locations").value = "";
        var phone = document.getElementById("phone").value = "";
        var Email = document.getElementById("Email").value = "";
        var quantity = document.getElementById("Quantity").value = "";
        return false;
    }
}
const getnavlists = () =>{
    document.getElementById("navlists").style.display = "block";
}
var deliceous = ["mouth-watering", "appetizing", "tasty", "flavoursome", "flavourful", "delectable", "toothsome", "inviting"];
    var i = 0;
    var time = 3000;
const deliceoussyn = () =>{
    document.getElementById("deliceous").innerHTML = deliceous[i];
    if(i < deliceous.length - 1){
        i++;
    }else{
        i = 0;
    }

setTimeout("deliceoussyn()",time);
}
window.onload = deliceoussyn;


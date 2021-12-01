const getclickedId = (clicked_button) =>{
    document.getElementById("ingredientcard").style.display = "block";
    // var clikedid = clicked_button;
    document.getElementById("ingedientheader").innerHTML = clicked_button;
}
const closebtn = () => {
    document.getElementById("ingredientcard").style.display = "none";
}
const ordernow = (clikedids) =>{
    var items = clikedids;
    var price = 0;
    if(items == "chapati-meats"){
        price = 650;
        var itemset = localStorage.setItem("Item1",clikedids);
        toastr.success(clikedids, "Added to cart");   
    }else if(items == "boiled-meats"){
        price = 450;
        var itemset = localStorage.setItem("Item2",clikedids);
            toastr.success(clikedids, "Added to cart");   
    }else if(items == "chicken-boileds"){
        price = 550;
        var itemset = localStorage.setItem("Item3",clikedids);
           toastr.success(clikedids, "Added to cart");    
    }else if(items == "eggs-ugali"){
        price = 220;
        var itemset = localStorage.setItem("Item4",clikedids);
            toastr.success(clikedids, "Added to cart");   
    }else if(items == "fried-chicken"){
        price = 730;
        var itemset = localStorage.setItem("Item5",clikedids);
           toastr.success(clikedids, "Added to cart");    
    }else if(items == "kienyeji-mboga"){
        price = 330;
        var itemset = localStorage.setItem("Item6",clikedids);
           toastr.success(clikedids, "Added to cart");    
    }else if(items == "meat-wet-fry"){
        price = 490;
        var itemset = localStorage.setItem("Item7",clikedids);
           toastr.success(clikedids, "Added to cart");    
    }else{
        price = 460;
        var itemset = localStorage.setItem("Item8",clikedids);
       toastr.success(clikedids, "Added to cart");
    }
    // document.getElementById("orderedItem").value = clikedids;
}
const closebtns = () => {
    document.getElementById("foorcatcard").style.display = "none";
}
// cart items
    //    end of cart items
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


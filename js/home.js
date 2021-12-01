const getclickedId = (clicked_button) =>{
    document.getElementById("ingredientcard").style.display = "block";
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
        var setPrice = localStorage.setItem("ItemPrice1",price);
        toastr.success(clikedids, "Added to cart");  
        window.location.reload(); 
    }else if(items == "boiled-meats"){
        price = 450;
        var itemset = localStorage.setItem("Item2",clikedids);
        var setPrice = localStorage.setItem("ItemPrice2",price);
            toastr.success(clikedids, "Added to cart");
            window.location.reload();   
    }else if(items == "chicken-boileds"){
        price = 550;
        var itemset = localStorage.setItem("Item3",clikedids);
        var setPrice = localStorage.setItem("ItemPrice3",price);
           toastr.success(clikedids, "Added to cart"); 
           window.location.reload();   
    }else if(items == "eggs-ugali"){
        price = 220;
        var itemset = localStorage.setItem("Item4",clikedids);
        var setPrice = localStorage.setItem("ItemPrice4",price);
            toastr.success(clikedids, "Added to cart");  
            window.location.reload(); 
    }else if(items == "fried-chicken"){
        price = 730;
        var itemset = localStorage.setItem("Item5",clikedids);
        var setPrice = localStorage.setItem("ItemPrice5",price);
           toastr.success(clikedids, "Added to cart");  
           window.location.reload();  
    }else if(items == "kienyeji-mboga"){
        price = 330;
        var itemset = localStorage.setItem("Item6",clikedids);
        var setPrice = localStorage.setItem("ItemPrice6",price);
           toastr.success(clikedids, "Added to cart"); 
           window.location.reload();   
    }else if(items == "meat-wet-fry"){
        price = 490;
        var itemset = localStorage.setItem("Item7",clikedids);
        var setPrice = localStorage.setItem("ItemPrice7",price);
           toastr.success(clikedids, "Added to cart");  
           window.location.reload();  
    }else{
        price = 460;
        var itemset = localStorage.setItem("Item8",clikedids);
        var setPrice = localStorage.setItem("ItemPrice8",price);
       toastr.success(clikedids, "Added to cart");
       window.location.reload();
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


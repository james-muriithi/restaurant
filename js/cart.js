
// var AllItems = [];
// AllItems[0] = localStorage.getItem("Item1");
// AllItems[1] = localStorage.getItem("Item2");
// AllItems[2] = localStorage.getItem("Item3");
// AllItems[3] = localStorage.getItem("Item4");
// AllItems[4] = localStorage.getItem("Item5");
// AllItems[5] = localStorage.getItem("Item6");
// AllItems[6] = localStorage.getItem("Item7");
// AllItems[7] = localStorage.getItem("Item8");
// var NewItems = AllItems.filter((v) => v);
//     for(var q = 0; q < NewItems.length; q++){
//         var itmen = document.createElement("LI");
//         itmen.innerHTML = NewItems[q];
//         var buttondelete = document.createElement("INPUT");
//         buttondelete.setAttribute("type","submit");
//         buttondelete.setAttribute("id",NewItems[q]);
//         buttondelete.setAttribute("onclick","deleteItems(this.id)");
//         buttondelete.setAttribute("value","Delete");
//         buttondelete.setAttribute("class","btn btn-danger");
//         document.getElementById("deleteItems").appendChild(itmen);
//         itmen.appendChild(buttondelete);
//     }
//     const deleteItems = (dleteid) =>{
//     var str = dleteid;
//     var newStr = str.replace(/-/g, "");
//         if(newStr == "boiledmeats"){
//         localStorage.removeItem("Item2");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }else if(newStr == "chickenboileds"){
//         localStorage.removeItem("Item3");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }else if(newStr == "chapatimeats"){
//         localStorage.removeItem("Item1");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }else if(newStr == "eggsugali"){
//         localStorage.removeItem("Item4");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }else if(newStr == "friedchicken"){
//         localStorage.removeItem("Item5");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }else if(newStr == "kienyejimboga"){
//         localStorage.removeItem("Item6");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }else if(newStr == "meatwetfry"){
//         localStorage.removeItem("Item7");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }else{
//         localStorage.removeItem("Item8");
//             toastr.success("Removed"+ " " + newStr);
//         window.location.reload(); 
//         }
//     }
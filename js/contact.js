$(document).ready(function(){
    $('#send').click(function(event){
     event.preventDefault();
    var name = $('#name').val();
     var email = $('#email').val();
     var message = $('#msg').val();
     if (!name || !email || !message){
         alert("Please ensure you have filled all entries in the form")
     } else{
         alert('Thank you for contacting Buddies Restaurant. Your message has been received')
     }
     });
});
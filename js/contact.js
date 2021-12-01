$(document).ready(function(){
    $('#send').click(function(event){
     event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#msg').val();
    if (!name || !email || !message){
        alert("Please ensure you have filled all entries in the form")
                return false;
    } else{
        alert('Thank you ' + name + ' for contacting Buddies Restaurant. Your message has been received')
            return true;
    }
    });
});

// $(document).ready(function(){
//     $('#myform').submit(function(){
//         var name = $('#name').val();
//         var email = $('#email').val();
//         var message = $('#msg').val();
//         var myForm = $('#myform')[0];
//     if (!name || !email || !message){
//         alert("Please ensure you have filled all entries in the form");
//         return false;
//     } else {
//         myForm.method = 'post';
//         myForm.action = 'https://gmail.us20.list-manage.com/subscribe/post?u=2b2d3fbd4efd7e257c20e1c50&amp;id=51173c216e"  target="_blank"'
//         alert('Thank you ' + name + ' for contacting Buddies Restaurant. Your message has been received');
//         return true;
//     }
//     });
    
// });

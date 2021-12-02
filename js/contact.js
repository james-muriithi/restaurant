$(document).ready(function(){
    $('#send').click(function(e){
     e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#msg').val();
    if (!name || !email || !message){
        toastr.error('Please ensure you have filled all entries in the form', 'Error!');
            return false;
    } else{
        $("#myform")[0].reset();
        toastr.success('Thank you ' + name + ' for contacting Buddies Restaurant. Your message has been received', 'Success!')
            return true;
    }
    });
});




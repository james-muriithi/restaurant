$(function() {

    // set min value of date to now
    var d = new Date();
    var m = moment(d).format();

    $('#date').attr('min', m.split("+")[0])

    $('.reservation-form').on('submit', function(e) {
        e.preventDefault();

        if (validateForm($(this))) {
            const noOfPeople = $('#chairs').val();
            const date = $('#date').val();

            const message = `Your space has been reserved for ${noOfPeople} people on ${date}`;
            alert(message);
        }


    })
});

function validateForm(form) {
    const formInputs = form.find('input');

    let formIsValid = true;

    formInputs.each(function() {
        if (!$(this).val()) {
            formIsValid = false;
            $(this).addClass('is-invalid');
        }
    });

    return formIsValid;
}

function removeFormErrors(form) {
    const formInputs = form.find('input');

    formInputs.on('keydown', function() {
        $(this).removeClass('is-invalid');
    })
}

removeFormErrors($('.reservation-form'));
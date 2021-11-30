$(function() {

    // set min value of date to now
    const date = new Date();
    var mmoment = moment(date).format();

    $('#date').attr('min', mmoment.split("+")[0])

    $('.reservation-form').on('submit', function(e) {
        e.preventDefault();

        if (validateForm($(this))) {
            const noOfPeople = $('#chairs').val();
            let reserveDate = moment(new Date($('#date').val())).format("dddd, MMMM Do YYYY, HH:mm");

            const message = `Your space has been reserved for ${noOfPeople} people on ${reserveDate}`;
            toastr.success(message, 'Reservation Successful');

            $(this)[0].reset();

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
        if ($(this).hasClass("is-invalid")) {
            $(this).removeClass("is-invalid");
        }
    })
}

removeFormErrors($('.reservation-form'));
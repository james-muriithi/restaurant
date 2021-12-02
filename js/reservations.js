$(function() {

    // set min value of date to now
    const date = new Date();
    var mmoment = moment(date).format();

    $('#date').attr('min', mmoment.split("+")[0])

    $('.reservation-form').on('submit', function(e) {
        e.preventDefault();

        if (validateForm($(this))) {
            const noOfPeople = $('#chairs').val();
            const fullName = $('#full_name').val();
            const email = $('#email').val();
            let reserveDate = moment(new Date($('#date').val())).format("dddd, MMMM Do YYYY, HH:mm");

            const message = `Your space has been reserved for ${noOfPeople} people on ${reserveDate}`;
            toastr.success(message, 'Reservation Successful');
            const emailMessage = `Hello ${fullName},\r\nYour space has been reserved for ${noOfPeople} people on ${reserveDate}.\r\nThank your for dining with us.`

            sendEmail(email, emailMessage);

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

function sendEmail(email, message) {
    const endpointUrl = "https://app.indexfand.com/api/SendEmail/";
    // const message = "hello there";
    // const email = "muriithijames556@gmail.com";
    const subject = "Successful Reservation";
    const from = "Buddies Restaurant";

    fetch(endpointUrl, {
            body: JSON.stringify({ message, to: email, from, subject }),
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => console.log(res))
        .catch(err => console.log(err))
}

function sendSms() {
    const endpointUrl = "https://app.indexfand.com/api/SendSms/";
    const message = "hello there";
    const phone = "254746792699";
    fetch(endpointUrl, {
            body: JSON.stringify({ message, phone }),
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => console.log(res))
        .catch(err => console.log(err))
}

removeFormErrors($('.reservation-form'));
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
            const phone = $('#phone').val();
            const reservationDate = $('#date').val();

            let reserveDate = moment(new Date(reservationDate)).format("dddd, MMMM Do YYYY, HH:mm");

            const message = `Your space has been reserved for ${noOfPeople} people on ${reserveDate}`;

            const emailMessage = `Hello ${fullName},\r\nYour space has been reserved for ${noOfPeople} people on ${reserveDate}.\r\nThank your for dining with us.`

            // sendEmail(email, emailMessage);

            const reservationData = {
                full_name: fullName,
                email,
                people: noOfPeople,
                phone,
                date: moment(reservationDate).format("Y-MM-DD HH:mm:ss")
            }
            showSubmitingStatus()

            submitReservation(reservationData)
                .then(() => {
                    toastr.success(message, 'Reservation Successful');
                    showSubmitingStatus(false);
                })
                .catch(() => {
                    toastr.error("There was an error submitting your reservation", 'Ooops');
                    showSubmitingStatus(false);
                })

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

function submitReservation(reservationData) {
    const endpointUrl = "http://localhost:8000/api/v1/reservations/";

    return fetch(endpointUrl, {
        body: JSON.stringify(reservationData),
        method: 'POST',
        // mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            return res.body;
        }
        throw new Error("an error occured")
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


function showSubmitingStatus(loading = true) {
    let buttonText = loading ? "Booking..." : "Book";
    $(".btn--primary").text(buttonText).prop('disabled', loading);
}

removeFormErrors($('.reservation-form'));
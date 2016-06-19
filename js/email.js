$(document).ready(function () {

    $('.submit').click(function () {

        var data = {},
            contactName = $('#contactName').val(),
            contactMessage = $('#contactMessage').val(),
            contactEmail = $('#contactEmail').val();

        if (Validate(contactName) && Validate(contactMessage) && Validate(contactEmail)) {

            data.contactName = contactName;
            data.contactEmail = contactEmail;
            data.contactMessage = contactMessage;

            jQuery.ajax({
                type: "POST",
                url: "../php/email.php",
                data: data,
                success: function (data) {
                    document.getElementById("contactForm").reset();
                },
            });
        }
    });

    var Validate = function (input) {
        return (input !== null && input !== '');
    };
});

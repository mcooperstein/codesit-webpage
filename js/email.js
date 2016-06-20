$(document).ready(function () {

    $('.submit').click(function () {

        var data = {},
            contactName = $('#contactName').val(),
            contactMessage = $('#contactMessage').val(),
            contactEmail = $('#contactEmail').val(),
            //added contactPhone variable and data
            contactPhone = $('#contactPhone').val();

        if (Validate(contactName) && Validate(contactMessage) && Validate(contactEmail) && Validate(contactPhone)) {

            data.contactName = contactName;
            data.contactEmail = contactEmail;
            data.contactMessage = contactMessage;
            data.contactPhone = contactPhone;

            jQuery.ajax({
                type: "POST",
                url: "././mail/email.php",
                data: data,
                success: function (data) {
                    document.getElementById("contactForm").reset();
                }
            });
        }
    });

    var Validate = function (input) {
        return (input !== null && input !== '');
    };
});

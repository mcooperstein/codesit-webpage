// Validates the contact form and submits it using Formspree.

$("#contactForm").validate({
    submitHandler: function (form) {
        $.ajax({
            url: "//formspree.io/kcooperstein22@gmail.com",
            method: "POST",
            data: {
                name: $(form).find("input[name='name']").val(),
                email: $(form).find("input[name='email']").val(),
                phone: $(form).find("input[name='phone']").val(),
                message: $(form).find("textarea[name='message']").val()
            },
            dataType: "json",
            success: function () {
                $("#submit-success").fadeIn();
                $("#contactForm").fadeOut();
            },
            error: function () {
                $("#submit-errors").fadeIn();
                $("#contactForm").fadeOut();
            }
        });
    }
});

$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Letters only please"); 
$().ready(function() {
    // validate the comment form when it is submitted
    $("#form").validate({
        rules: {
            name: {
             required: true,
             minlength: 3,
             lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            number: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name should at least 3 character long",
                lettersonly: "Please enter character only."
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            number: {
                required: "Please enter your phone number",
                minlength: "Phone number should contain 10 digits."
            } 
        }
    });

});

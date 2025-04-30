const form = document.getElementById("contactForm");

// add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // form validation
    if (name && email && message) {
        alert("Thank you " + name + " ! your message has been received");
        
        //prepare email parameters for EmailJS
        const emailParams = {
            from_name : name,
            from_email : email,
            message: message,
        };

         emailjs
            .send('service_bqz3w4w', 'template_bzhhtcs', emailParams) // Replace with your actual EmailJS service/template IDs
            .then(
                function(response) {
                    alert("Email sent successfully! Thank you, " + name + ".");
                    //Reset the form after successful submission
                    document.getElementById('name').value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";                    
                },
                function(error) {
                    alert("Oops! Something went wrong. Please try again.");
                    console.error("EmailJS error:", error);
                }
            );
    } else {
        alert("Please fill in all the fields");
    }  
});

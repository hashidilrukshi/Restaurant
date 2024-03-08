document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        var isValid = validateForm();
        
        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateForm() {
        // Implement your form validation logic here
        // Example: Check if fields are not empty

        var isValid = true;

        var inputFields = document.querySelectorAll(".inputBox input");

        inputFields.forEach(function(field) {
            if (field.value.trim() === "") {
                isValid = false;
            }
        });

        if (!isValid) {
            alert("Please fill in all fields");
        }

        return isValid;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        var fullname = document.querySelector('input[name="fullname"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var message = document.querySelector('textarea').value;

        if (fullname === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            e.preventDefault(); // Prevent form submission
        }
    });
});
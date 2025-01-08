document.addEventListener('DOMContentLoaded', function() {
    // Now the DOM is loaded, so it's safe to add event listeners
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        validateForm(event);
    });
});

function validateForm(event) {
    let isValid = true;
    clearErrors();

    const fullname = document.querySelector("#fullname");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const phno = document.querySelector("#phno");
    const pwd = document.querySelector("#pwd");
    const confpwd = document.querySelector("#confirmpwd");
    var getSelectedValue = document.querySelector(   
        'input[name="gender"]:checked');   
    if(!validateUsername(username.value)){
        isValid = false;
        showError(username, 'Username incorrect');
    }

    if (!validateFullname(fullname.value)) {
        isValid = false;
        showError(fullname, 'Fullname incorrect');
    }

    if (!validateEmail(email.value)) {
        isValid = false;
        showError(email, 'Invalid email format.');
    }

    if (!isValidPhoneNumber(phno.value)) {
        isValid = false;
        showError(phno, 'Enter a valid 10-digit phone number.');
    }

    // if (pwd.value.length < 8) {
    //     isValid = false;
    //     showError(pwd, 'Password must be <= 8 characters.');
    // }

    if (pwd.value !== confpwd.value) {
        isValid = false;
        showError(pwd, "Passwords and confirm pwd don't match.");
    }
    
    if (getSelectedValue == null) {   
        isValid = false;
        showError(document.querySelector('input[name="gender"]'), 'You have not selected any gender');
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
    return window.location.href='note.html';
}

function validateFullname(fullname) {
    const regex = /^[A-Za-z]+/;
    return regex.test(fullname);
}

function validateUsername(username) {
    const user = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;
    return user.test(username);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

function showError(field, message) {
    let errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerText = message;
    errorDiv.style.color="red";
    // if (isGenderError) {
    //     // Use absolute positioning for the gender error message
    //     errorDiv.style.position = "absolute";
    //     errorDiv.style.top = "30px"; // Adjust this as needed
    //     errorDiv.style.left = "0";
    // }
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
}

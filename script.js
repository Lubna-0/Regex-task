function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^.{8,}$/;
    var phoneRegex = /^(011|012|015|010)\d{8}$/;
    
    var isEmailValid = emailRegex.test(email);
    var isPasswordValid = passwordRegex.test(password);
    var isPhoneValid = phoneRegex.test(phone);
    
    var result = document.getElementById("result");
    if (isEmailValid && isPasswordValid && isPhoneValid) {
        result.textContent = "Valid";
        result.className = "valid";
    } else {
        result.textContent = "Not Valid";
        result.className = "invalid";
    }
}

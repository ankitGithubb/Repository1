let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});



// Add an event listener to the login form submit button
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values from the form
    var email = document.getElementById('L-email').value;
    var password = document.getElementById('password').value;
    
    // Perform form validation
    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    else if(email==="as@gmail.com" && password==="as77")
    {
    //  alert('Hii Ankit...');
     window.location.href = "page2.html";   
    }
    else{
        alert("Please Enter Valid Username or Password...");
    }

    // alert('Login submitted:\nEmail: ' + email + '\nPassword: ' + password);
});

// Add an event listener to the signup form submit button
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('emailS').value;
    var password = document.getElementById('passwordS').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    
   
   if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all fields');
       return;
   }
    // alert('Signup submitted:\nFirst Name: ' + name + '\nEmail: ' + email + '\nPassword: ' + password + '\nConfirm Password'+ confirmPassword);
});


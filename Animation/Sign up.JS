var topBar = document.getElementById('top-bar');

// Function to handle mouse movement
function handleMouseMove(event) {
  // Check if the mouse is near the top of the page
  if (event.clientY < 100) { // Adjust the threshold as needed
    topBar.style.top = '10px'; // Slide the top bar down
  } else {
    topBar.style.top = '-150px'; // Slide the top bar back up
  }
}

// Listen for mouse movement events
document.addEventListener('mousemove', handleMouseMove);


document.getElementById('signup-btn').addEventListener('click', function() {
  // Get the user input (e.g., username, email, password)
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate user input (you can add more validation logic as needed)
  if (username && email && password) {
      // Perform account creation (you can make an API call to your server here)
      // For demonstration purposes, we'll just log the user input
      console.log('Account created successfully!');
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      // Optionally, you can redirect the user to another page or display a success message
      // window.location.href = 'success.html'; // Redirect to success page
      // alert('Account created successfully!'); // Show success message
  } else {
      alert('Please fill in all fields.'); // Display error message if any field is empty
  }
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // You can add your login logic here
    // For example, check username and password and redirect if they are correct
});


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


function handleAuthorizationAppleID(authorization) {
  console.log('Authorization: ', authorization);
  // You can send this authorization information to your server for authentication
}


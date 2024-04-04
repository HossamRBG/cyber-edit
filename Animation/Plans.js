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


function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementsByClassName("content")[0];
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      content.style.marginLeft = "0";
  } else {
      sidebar.style.width = "250px";
      content.style.marginLeft = "250px";
  }
}

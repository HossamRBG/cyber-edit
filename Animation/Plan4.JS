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

  
window.onload = function() {
    var textElement = document.getElementById("text");
    var colorTransitionInterval = 10; // Duration of color transition in milliseconds
    var shineTransitionInterval = 5; // Duration of shine transition in milliseconds
    var r = 0, g = 0, b = 0; // Initial RGB values for black color
    var increasing = true; // Flag to control if RGB values are increasing or decreasing

    // Function to transition text color between black and white
    function transitionTextColor() {
        if (increasing) {
            if (r < 255 || g < 255 || b < 255) {
                r = Math.min(r + 1, 255);
                g = Math.min(g + 1, 255);
                b = Math.min(b + 1, 255);
            } else {
                increasing = false;
            }
        } else {
            if (r > 0 || g > 0 || b > 0) {
                r = Math.max(r - 1, 0);
                g = Math.max(g - 1, 0);
                b = Math.max(b - 1, 0);
            } else {
                increasing = true;
            }
        }

        var color = "rgb(" + r + "," + g + "," + b + ")";
        textElement.style.color = color;

        setTimeout(transitionTextColor, colorTransitionInterval);
    }

    // Function to create shine effect
    function shineEffect() {
        var shineElement = document.createElement("span");
        shineElement.className = "shine";
        textElement.appendChild(shineElement);

        var shinePosition = -textElement.offsetWidth; // Initial position of shine

        function moveShine() {
            shinePosition += 1; // Adjust the speed of the shine

            if (shinePosition > textElement.offsetWidth) {
                shinePosition = -textElement.offsetWidth;
            }

            shineElement.style.left = shinePosition + "px";

            requestAnimationFrame(moveShine);
        }

        moveShine();
    }

    // Call the functions
    transitionTextColor();
    shineEffect();
};

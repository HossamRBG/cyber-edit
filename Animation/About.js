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

  
const video = document.getElementById('bg-video2');
const videoSources = [
    'Videos/DOORS TEASER TRAILER.mp4',
    'Videos/Usain Bolt 9.58 100m New World Record Berlin [HQ].mp4'
];
let currentVideoIndex = 0;

function loadNextVideo() {
    currentVideoIndex = 1; // Set the index to 1 (second video)
    video.classList.add('fade-out'); // Add fade-out class to fade out the current video
    setTimeout(() => {
        video.src = videoSources[currentVideoIndex]; // Change video source
        video.classList.remove('fade-out'); // Remove fade-out class
        video.play(); // Play the new video
    }, 1000); // Adjust the duration of fade-out transition as needed
}

function loadPrevVideo() {
    currentVideoIndex = 0; // Set the index to 0 (first video)
    video.classList.add('fade-out'); // Add fade-out class to fade out the current video
    setTimeout(() => {
        video.src = videoSources[currentVideoIndex]; // Change video source
        video.classList.remove('fade-out'); // Remove fade-out class
        video.play(); // Play the new video
    }, 1000); // Adjust the duration of fade-out transition as needed
}

document.getElementById('next-video').addEventListener('click', loadNextVideo);
document.getElementById('prev-video').addEventListener('click', loadPrevVideo);

// Load the first video initially
video.src = videoSources[currentVideoIndex];
video.play();


var lastScrollTop = 0;
var fadeText = document.getElementById("fadeText");

// Function to handle scroll event
function handleScroll() {
    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down, fade out the text
        fadeText.style.opacity = "0";
    } else {
        // Scrolling up, fade in the text
        fadeText.style.opacity = "1";
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);

var scrollImage = document.getElementsByClassName('image');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    scrollImage.classList.add('scroll-down');
  } else {
    // Scrolling up
    scrollImage.classList.remove('scroll-down');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});


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


var image1 = document.querySelector('.Editing-3');
var image2 = document.querySelector('.Premiere-Pro');
var threshold1 = 500; // Threshold for image 1
var threshold2 = 900; // Threshold for image 2

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition >= threshold1) {
    // Increase size for image 1
    image1.style.transform = 'scale(1.05)'; // Adjust scale factor as needed
  } else {
    // Reset size for image 1
    image1.style.transform = 'scale(1)';
  }

  if (scrollPosition >= threshold2) {
    // Increase size for image 2
    image2.style.transform = 'scale(1.1)'; // Adjust scale factor as needed
  } else {
    // Reset size for image 2
    image2.style.transform = 'scale(1)';
  }
});


function fadeTextOnScroll() {
  var texts = document.querySelectorAll('.features-text');
  var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      texts.forEach(function(text) {
        if (isElementInViewport(text)) {
          text.style.opacity = '1';
        }
      });
    } else {
      // Scrolling up
      texts.forEach(function(text) {
        if (isElementInViewport(text)) {
          text.style.opacity = '0';
        }
      });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  });
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Call the function to apply the fading effect
fadeTextOnScroll();


var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var plans = document.querySelectorAll('.plan');
    var windowHeight = window.innerHeight;
    var currentScroll = window.scrollY;

    plans.forEach(function(plan) {
        var planTop = plan.getBoundingClientRect().top;
        if (planTop > 500) {
            plan.style.opacity = '1';
            plan.classList.remove('reverse');
        }
    });

    if (currentScroll > lastScrollTop) {
        plans.forEach(function(plan) {
            if (!plan.classList.contains('reverse')) {
                plan.classList.add('reverse');
            }
        });
    } else {
        plans.forEach(function(plan) {
            if (plan.classList.contains('reverse')) {
                plan.classList.remove('reverse');
            }
        });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


var scrollText = document.getElementById('scrollText');
var isScrolled = 0;

// Function to fade in the text when entering the page
function fadeInText() {
  scrollText.style.opacity = '1';
}

// Function to fade out the text when scrolling down
function fadeOutText() {
  scrollText.style.opacity = '0';
}

// Function to handle scroll events
function handleScroll() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition < 1) {
    // If scrolled down, fade in the text
    fadeInText();
  } else {
    // If at the top, fade in the text
    fadeOutText();
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

// Add event listener for scroll events
window.addEventListener('load', fadeInText);
window.addEventListener('scroll', handleScroll);


// Get the text element
var text = document.querySelector('.Text-send');

// Function to handle scroll event
window.addEventListener('scroll', function() {
  // Get the bottom offset of the text element relative to the viewport
  var textBottom = text.getBoundingClientRect().bottom;

  // Determine scroll direction based on text position
  var threshold = 200; // Adjust this threshold as needed
  if (textBottom > window.innerHeight - threshold) {
    // Text is close to the bottom of the viewport, fade in
    text.style.opacity = '1';
  } else {
    // Text is above or far below the viewport, fade out
    text.style.opacity = '0';
  }
});


// Get the image element
var image = document.querySelector('.sendanywhere');

// Function to handle scroll event
window.addEventListener('scroll', function() {
  // Get the bottom offset of the image element relative to the viewport
  var imageBottom = image.getBoundingClientRect().bottom;

  // Determine scroll direction based on image position
  var scrollDirection;
  if (imageBottom > window.innerHeight) {
    scrollDirection = 'up';
  } else {
    scrollDirection = 'down';
  }

  // Adjust image size based on scroll direction
  var imageSize = scrollDirection === 'down' ? '600px' : '300px'; // Increase size when scrolling down, decrease when scrolling up
  image.style.width = imageSize;
});


var topBar = document.getElementById('top-bar');

// Function to handle mouse movement
function handleMouseMove(event) {
  // Check if the mouse is near the top of the page
  if (event.clientY < 100) { // Adjust the threshold as needed
    topBar.style.top = '10'; // Slide the top bar down
  } else {
    topBar.style.top = '-150px'; // Slide the top bar back up
  }
}

// Listen for mouse movement events
document.addEventListener('mousemove', handleMouseMove);

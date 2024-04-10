window.onload = function() {
    // Check if the splash screen has been shown
    if (!sessionStorage.getItem('splashScreenShown')) {
        // Display the splash screen
        var splashScreen = document.getElementById('splash-screen');
        splashScreen.style.display = 'flex';

        // Ensure the image is loaded before displaying the splash screen
        var img = splashScreen.querySelector('img');
        if (img.complete) {
            showSplashScreen(splashScreen);
        } else {
            img.onload = function() {
                showSplashScreen(splashScreen);
            };
        }
    } else {
        // If the splash screen has been shown, hide it immediately
        document.getElementById('splash-screen').style.display = 'none';
    }
};

function showSplashScreen(splashScreen) {
    setTimeout(function() {
        splashScreen.style.display = 'none';
    }, 3000);

    // Set the flag in sessionStorage
    sessionStorage.setItem('splashScreenShown', 'true');
}

document.getElementById("sidebarBtn").addEventListener("click", function() {
    document.getElementById("mySidebar").style.width = "250px";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("mySidebar").style.width = "0";
});

window.addEventListener("resize", function() {
    if (window.innerWidth >= 1299) {
        document.getElementById("mySidebar").style.width = "0";
    }
});

document.getElementById("myImage").addEventListener("click", function() {
    var imgSrc = this.src;
    var win = window.open();
    win.document.write('<img src="' + imgSrc + '" alt="Image preview">');
});

var totalSeconds = 10 * 24 * 60 * 60; 
var timer = document.getElementById('timer');

var countdown = setInterval(function() {
    totalSeconds--;

    var days = Math.floor(totalSeconds / (24 * 60 * 60));
    var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    var seconds = Math.floor(totalSeconds % 60);

    timer.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;

    if (totalSeconds <= 0) {
        clearInterval(countdown);
        timer.textContent = "Time's up!";
    }
}, 1000);
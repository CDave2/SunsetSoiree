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
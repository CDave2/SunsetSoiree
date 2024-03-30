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
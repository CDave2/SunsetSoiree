window.onload = function() {
    var modal = document.getElementById("myModal");
    var imgs = document.querySelectorAll(".img-container img"); 
    var imgsProfile = document.querySelectorAll(".collection-image img"); 
    var modalImg = document.getElementById("img01");

    imgs.forEach(function(img) {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    imgsProfile.forEach(function(img) {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }

    document.getElementById('menu-button').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        if (menu.classList.contains('menu-visible')) {
            menu.classList.remove('menu-visible');
        } else {
            menu.classList.add('menu-visible');
        }
    });

}
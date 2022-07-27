const checker = document.querySelector('.carousel-item');
    
document.addEventListener("mouseover", function () {
    checker.classList.add('pause');
});

document.addEventListener('mouseout', function(){
    checker.classList.remove('pause');
});

$(document).ready(function () {
    $('.carousel').carousel();
    var itl = setInterval(function () {
        if (checker.classList.contains('pause')) {
            clearInterval(interval);
        } else {
            $('.carousel').carousel('next');
        }
    }, 2500);
});
window.addEventListener('DOMContentLoaded', function(){
    var currentPos = pageYOffset;
    var nav = document.getElementById('nav');
    setNav();
    window.addEventListener('scroll', function(){
        setNav();
    })
    function setNav(){
        currentPos = pageYOffset;
        if(currentPos > 10){
            nav.classList.add('nav_sticky');
        }
        else{
            nav.classList.remove('nav_sticky');
        }
    }
})

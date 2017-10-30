window.addEventListener('DOMContentLoaded', function(){
    var elements = document.querySelectorAll('.fade-in');
    showElements();
    window.addEventListener('scroll', showElements);

    function showElements(){
        if(elements.length > 0){
            currentTop = pageYOffset;
            viewHeight = document.documentElement.clientHeight;
            breakPoint = pageYOffset + viewHeight - 50;
            elements.forEach(function(el){
                var elPosition = el.offsetTop;
                if(breakPoint >= elPosition){
                    el.classList.add('fade-in_done');
                    el.classList.remove('fade-in');
                    elements = document.querySelectorAll('.fade-in');
                }
            })
        }
        else{
            window.removeEventListener('scroll', showElements);
        }
    }


})

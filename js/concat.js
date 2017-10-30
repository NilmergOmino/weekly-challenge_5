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

//  scrollowanie odbywa się w sposób easy-in-out
//  var speed = 2; --> szybkość scrollowania (0-1000), gdzie 0 to przesuwanie co 1px, a 1000 to natychmiastowe przeniesienie
//  upto = target.offsetTop; --> jeżeli chcesz by obraz przesunął się ponad/poniżej kotwicy, dodaj/odejmij tu stosowną wartość (ilość pikseli). Np. by przyklejane menu nie przykryło celu to możesz odjąć wysokość menu)
//  percentStart = 0; --> początkowa zmiana, im ta zmienna jest większa, tym większy jest pierwszy przeskok, niska wartość daje łagodniejszy start

window.addEventListener('DOMContentLoaded', function(){
    var target, upto, speed, percentStart, step;
    var running = false;
    var navElements = document.getElementsByClassName("scroll-link"),
        navElementsAmount = navElements.length;
    for(var i=0;i< navElementsAmount; i++){
        var navElement = navElements[i];
        navElement.addEventListener('click', function(event){
            var clickedElement = event.target.className == "link-image" ? event.target.parentNode : event.target,
                pageHeight = document.documentElement.scrollHeight,
                viewHeight = document.documentElement.clientHeight;
            target = document.getElementById(clickedElement.hash.slice(1));
            upto = target.offsetTop;
            speed = 2.5;
            percentStart = 0;
            if(upto + viewHeight >= pageHeight) upto = pageHeight - viewHeight;
            history.pushState(null,null,clickedElement.hash);
            if (!running) scroll();
            event.preventDefault();
        }, false)
    }
    var scroll = function(){
        running = true;
        var from = pageYOffset,
            step = Math.abs(Math.floor((upto - from)*percentStart/1000));
        percentStart += speed;
        if (step < 1) step = 1;
        if (from < upto) {
            window.scrollBy(0, step);
            window.requestAnimationFrame(scroll);
        }
        else if(from > upto) {
            window.scrollBy(0, -step);
            window.requestAnimationFrame(scroll);
        }
        else running = false;
    }
})

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

window.addEventListener('DOMContentLoaded', function(){

    var buttonCite = document.getElementsByClassName('button-cite'),
        citeBlock = document.getElementsByClassName('cite-block'),
        buttonCiteAmount = buttonCite.length;
    var timecheck = false;

    for(var i=0; i<buttonCiteAmount; i++){
        buttonCite[i].addEventListener('click', function(event){
            timecheck = true;
            toggleButton(event.target);
        }, false);
    }
    function autoToggle(){
        var numb = document.querySelectorAll('.button-cite[aria-pressed="true"]')[0].innerHTML-1;
        numb++;
        numb = numb>3 ? 0 : numb;
        if(timecheck == false) {
            toggleButton(buttonCite[numb]);
        }
        else timecheck = false;
        setTimeout(autoToggle, 12000);
    }
    setTimeout(autoToggle, 12000);
    function toggleButton(element) {
        var activeButton = document.querySelectorAll('.button-cite[aria-pressed="true"]');
        var citeBlockActive = document.querySelectorAll('.cite-block_active');
        if (element.getAttribute("aria-pressed") === "false") {
            element.setAttribute("aria-pressed", "true");
            element.setAttribute("aria-expanded", "true");
            activeButton[0].setAttribute("aria-pressed", "false");
            activeButton[0].setAttribute("aria-expanded", "false");
            for (var j = 0; j < buttonCite.length; j++) {
                if (buttonCite[j] === element ){
                    var citeElement = citeBlock[j];
                    citeBlockActive[0].classList.add('cite-block_fade-out');
                    function show(){
                        citeElement.classList.add('cite-block_active');
                        citeBlockActive[0].classList.remove('cite-block_active');
                        citeBlockActive[0].classList.remove('cite-block_fade-out');
                    }
                    setTimeout(show, 300);
                }
            }
        }
    }

})

window.addEventListener('DOMContentLoaded', function(){
    var buttonMenu = document.getElementById('toggle-menu');
    var menu = document.getElementById('menu');
    buttonMenu.addEventListener('click', function(){
        if(buttonMenu.className == "toggle-menu_expanded"){
            menu.classList.toggle('nav__list_active');
            buttonMenu.classList.toggle('toggle-menu_expanded');
        }
        else{
            menu.classList.toggle('nav__list_active');
            buttonMenu.classList.toggle('toggle-menu_expanded');
        }
    })
})

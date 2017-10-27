//  scrollowanie odbywa się w sposób easy-in-out
//  var speed = 2; --> szybkość scrollowania (0-1000), gdzie 0 to przesuwanie co 1px, a 1000 to natychmiastowe przeniesienie
//  upto = target.offsetTop; --> jeżeli chcesz by obraz przesunął się ponad/poniżej kotwicy, dodaj/odejmij tu stosowną wartość (ilość pikseli). Np. by przyklejane menu nie przykryło celu to możesz odjąć wysokość menu)
//  percentStart = 0; --> początkowa zmiana, im ta zmienna jest większa, tym większy jest pierwszy przeskok, niska wartość daje łagodniejszy start

window.addEventListener('DOMContentLoaded', function(){
    var navElements = document.getElementsByClassName("scroll-link"),
        navElementsAmount = navElements.length;
        // speed = 2.5,
        // percentStart = 0;
    for(var i=0;i< navElementsAmount; i++){
        var navElement = navElements[i];
        navElement.addEventListener('click', function(event){
            var clickedElement = event.target.className == "link-image" ? event.target.parentNode : event.target,
                target = document.getElementById(clickedElement.hash.slice(1));
                upto = target.offsetTop;
                pageHeight = document.documentElement.scrollHeight;
                viewHeight = document.documentElement.clientHeight;
                speed = 2.5;
                percentStart = 0;
            if(upto + viewHeight >= pageHeight) upto = pageHeight - viewHeight;
            history.pushState(null,null,clickedElement.hash);
            var scroll = function(){
                var from = pageYOffset,
                    step = Math.round((upto - from)*percentStart/1000),
                    step = Math.abs(step);
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
            }
            window.requestAnimationFrame(scroll);
            event.preventDefault();
        }, false)
    }
})

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
        console.log(timecheck);
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

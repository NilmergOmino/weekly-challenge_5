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

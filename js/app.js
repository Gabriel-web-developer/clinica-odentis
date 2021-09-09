
function validar (){

    alert("Te recomendamos que te comuniques con nosotros a través del Whatsapp ya que nuestro sistema de correo esta en mantenimiento")
    return false;
}
    
    /*--------------------------------Jquery-------------------------*/
    
    // menu nav
    const menubtn = document.querySelector(".menu-btn");
    var menu = document.querySelector('.menu');
    let menuopen = false;

    menubtn.addEventListener("click", ()=> {
        if(!menuopen) {
            menubtn.classList.add("open");
            menu.classList.add('abrir');
            menuopen = true;
        }else {
            menubtn.classList.remove("open");
            menu.classList.remove('abrir');
            menuopen = false;
        }
    });

    // menu desplegable
    
    $('.submenu').click(function(){
        $(this).children(".sub__menu").slideToggle(); 
    });
    

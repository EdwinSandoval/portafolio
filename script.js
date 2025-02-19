let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    console.log("La función efectoHabilidades() se ejecutó")
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        var habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("angular");
        habilidades[6].classList.add("react");
        habilidades[7].classList.add("microservicios");
        habilidades[8].classList.add("microsoft");


        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("proyect");

    }
    
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
    console.log(efectoHabilidades());
    
} 
var prop = {
    element: document.getElementsByClassName('container')[0],
    imagen: null,
    imgSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    mainContainer: null,
    imgContainer: null,
    cerrar: null,
    animacion: 'fade'
}

var met = {
    inicio: function(){
        prop.element.addEventListener('click', met.capturaImagen);
    },
    capturaImagen: function(){
        prop.imagen = this;
        met.lightbox(prop.imagen);
    },
    lightbox: function(imagen){
        prop.imgSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2); //url("ruta") -> ruta
        prop.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'main-container');
        prop.mainContainer = document.getElementById('main-container');

        prop.mainContainer.style.width = '100%';
        prop.mainContainer.style.height = '100%';
        prop.mainContainer.style.position = 'fixed';
        prop.mainContainer.style.zIndex = '10';
        prop.mainContainer.style.background = 'rgba(0,0,0,.8)';
        prop.mainContainer.style.top = '0';
        prop.mainContainer.style.left = '0';

        prop.mainContainer.appendChild(document.createElement('DIV')).setAttribute('id', 'img-container');   
        prop.imgContainer = document.getElementById('img-container');

        prop.imgContainer.style.height = '100%';

        prop.imgContainer.appendChild(document.createElement('IMG')).setAttribute('src', prop.imgSrc);

        prop.imgContainer.getElementsByTagName('img')[0].setAttribute('class', 'imagen');

        if (prop.animacion == 'fade') {
            prop.imgContainer.style.opacity = '0';
            setTimeout(function(){
                prop.imgContainer.style.opacity = '1';
            }, 50);
        }

        prop.imgContainer.innerHTML += '<span id="cerrar">X</span>';
        prop.cerrar = document.getElementById('cerrar');

        prop.cerrar.addEventListener('click', met.cerrarLightbox);
    },
    cerrarLightbox: function(){
        prop.cuerpoDom.removeChild(prop.mainContainer);
    }
}

met.inicio();
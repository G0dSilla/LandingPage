
//Funciones para el slide

let btnPrevious = document.getElementById("btn-previous");
let btnNext = document.getElementById("btn-next");
let vtnModal = document.getElementById("modal")
let indiceSlide = 1;

//Funcion para mover el slide
const moverSlide = (num) => {
    activarSlide(indiceSlide+=num);
};

//Eventos de botones
btnPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    moverSlide(-1);
});

btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    moverSlide(1);
});

//Funcion para activar el slide
const activarSlide = (num) => {
    let i;
    let slides = document.getElementsByClassName('slide');
    let circles = document.getElementsByClassName('circle');
    
    if(num > slides.length){
        indiceSlide = 1;
    }
    if(num < 1){
        indiceSlide = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(' circle-active', '');
    }

    slides[indiceSlide-1].style.display = "block";
    circles[indiceSlide-1].className += ' circle-active';
};

setInterval(()=>{
    activarSlide(indiceSlide+=1)
},4000);

//Almacenar valores del formulario
let formContact = document.getElementById('form-contact');

//Funcion para modificar la modal
const valoresModal = (name,lastname,phone,email) => {
    let modalName = document.getElementById("modal-name");
    let modalLastname = document.getElementById("modal-lastname");
    let modalPhone = document.getElementById("modal-phone");
    let modalEmail = document.getElementById("modal-email");

    modalName.innerHTML = name;
    modalLastname.innerHTML = lastname;
    modalPhone.innerHTML = phone;
    modalEmail.innerHTML = email;
}

//Evento al momento de enviar el formulario
formContact.addEventListener('submit', (e) => {
    e.preventDefault()
    let formName = document.getElementById('formName').value;
    let formLastname = document.getElementById('formLastname').value;
    let formEmail = document.getElementById('formEmail').value;
    let formPhone = document.getElementById('formPhone').value;
    let formAge = document.getElementById('formAge').value;
    console.log(`${formName} ${formLastname} ${formEmail} ${formPhone} ${formAge}`);
    valoresModal(formName, formLastname, formPhone, formEmail);
    vtnModal.classList.add('modal-show');
    formContact.reset()
});


//Evento para cerrar la ventana
btnCloseModal = document.getElementById('modal-btn-close');

btnCloseModal.addEventListener('click', () => {
    vtnModal.classList.remove('modal-show');
});


//Carousel

// Variables
let carouselPrevious = document.getElementById('btn-carousel-previous');
let carouselNext = document.getElementById('btn-carousel-next');

let indiceCarousel = 1;

//Funcion para mover el carousel
const moverCarousel = (num) => {
    activarCarousel(indiceCarousel+=num);
};


//Eventos click
carouselPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    moverCarousel(-1);
});

carouselNext.addEventListener('click', (e) => {
    e.preventDefault();
    moverCarousel(1);
});

const activarCarousel = (num) => {
    let i;
    let carouselSlides = document.getElementsByClassName('carousel-slide');
    let carouselLines = document.getElementsByClassName('line');

    if(num > carouselSlides.length){
        indiceCarousel = 1;
    };
    if(num < 1){
        indiceCarousel = carouselSlides.length;
    };
    for(i = 0; i < carouselSlides.length; i++) {
        carouselSlides[i].style.display = 'none';
    };
    for(i = 0; i < carouselLines.length; i++) {
        carouselLines[i].className = carouselLines[i].className.replace(' line-active', '');
    };
    carouselSlides[indiceCarousel-1].style.display = "block";
    carouselLines[indiceCarousel-1].className += ' line-active';
}

setInterval(()=>{
    activarCarousel(indiceCarousel+=1);
},3000);


//Consumir API
fetch("https://mindicador.cl/api")
    .then((response) => {return response.json();})
    .then((data) => {
        mostrarUf(data);
    });


//Funcion para modificar le DOM
const mostrarUf = (data) => {
    let diaUf = document.getElementById("diaUf");
    let valorUf = document.getElementById("valorUf");
    let fechaApi = data.uf.fecha;
    let newFecha = fechaApi.substring(0,10);
    valorUf.innerHTML = data.uf.valor ;
    diaUf.innerHTML = newFecha;
};

//Reloj Con la hora actual
setInterval(()=>{
    let horaActual = moment().format("hh:mm:ss");
    let spanHora = document.getElementById("horaActual");
    spanHora.innerHTML = horaActual;
}, 1000);



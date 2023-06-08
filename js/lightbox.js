const imagenes = document.querySelectorAll('.img-galeria')
const imagLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light')
const hamburguer1 = document.querySelector('.hamburguer');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
       /* console.log(imagen.getAttribute('src'))*/
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagLight){
        contenedorLight.classList.toggle('show')
        imagLight.classList.toggle('showImage')
        hamburguer1.style.opacity ='1'
    }
})

const aparecerImagen = (imagen)=>{
    imagLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagLight.classList.toggle('showImage')
    hamburguer1.style.opacity ='0'
}
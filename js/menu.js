const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread")/*ayuda a quitar y poner dicha funcion toggle */
})

window.addEventListener('click', e=>{
    /*console.log(e.target)*/
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer){
         menu.classList.toggle("spread") 
            /*menu debe tener la clase spread darle click a alcgo diferente al menu y al hamburguer va a realizar lo siguiente*/
      } 
})
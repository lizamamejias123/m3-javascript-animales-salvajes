import {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila,
} from './class/sonidosAnimales.js';
import "./imagenes.js"
console.log(Leon)
let animales = [];
document.getElementById('btnRegistrar').addEventListener('click', () => {
    let nombre = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let anos = document.getElementById('preview').innerHTML;
    let comentarios = document.getElementById('comentarios').value;


    if ((nombre == '') || (edad == '') || (anos == '') || (comentarios == '')) {
        alert('Debe ingresas todos los datos requeridos para la comparación')
    } else {
        let nuevoAnimal;
        if (nombre === 'Leon') {
            nuevoAnimal = new Leon(nombre, edad, anos, comentarios, 'rugir')
        } else if (nombre === 'Lobo') {
            nuevoAnimal = new Lobo(nombre, edad, anos, comentarios, 'aullar')
        } else if (nombre === 'Oso') {
            nuevoAnimal = new Oso(nombre, edad, anos, comentarios, 'grunir')
        } else if (nombre === 'Serpiente') {
            nuevoAnimal = new Serpiente(nombre, edad, anos, comentarios, 'sisear')
        } else if (nombre === 'Aguila') {
            nuevoAnimal = new Aguila(nombre, edad, anos, comentarios, 'chillar')
        }
        animales.push(nuevoAnimal);
        reloadTable();

        document.getElementById('animal').value = 0;
        document.getElementById('edad').value = 0;
        document.getElementById('preview').innerHTML = '';
        document.getElementById('comentarios').value = '';
    }
});
const reloadTable = () => {
    const animalesTemplate = document.getElementById('Animales');
    animalesTemplate.innerHTML = '';
    animales.forEach((elemento) => {
        let sonido;
        if(elemento.getSonido() === 'rugir'){
            sonido = elemento.Rugir();
        } 
        else if (elemento.getSonido() === 'aullar'){
            sonido = elemento.Aullar();
        }
        else if (elemento.getSonido() === 'grunir'){
            sonido = elemento.Grunir();
        }
        else if (elemento.getSonido() === 'sisear'){
            sonido = elemento.Sisear();
        }
        else if (elemento.getSonido() === 'chillar'){
            sonido = elemento.Chillar();
        }
        animalesTemplate.innerHTML += `  
            <div class='card m-1' width="220px">
                ${elemento.getImg()}
                <div class='card-body'>
                    <h4 class='cart-title'>${elemento.getNombre()}</h4>
                    <hr class='w-50 mx-auto'>
                    <h6 class='card-text'>Edad: ${elemento.getEdad()}</h6>
                    <h6 class='card-text'>Comentarios: ${elemento.getComentarios()}</h6>
                    ${sonido}
                </div>
            </div>

                            `;
    })
}
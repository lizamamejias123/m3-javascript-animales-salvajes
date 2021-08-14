import Animales from "./consulta.js"

document.getElementById("animal").addEventListener("change", async () => {
    const {
        animales
    } = await Animales.getData();
    const nombreAnimal = document.getElementById("animal").value;
    if (nombreAnimal == "") {
        document.getElementById("preview").innerHTML = ""
        return false
    }
    animales.forEach(element => {
        if (element.name == nombreAnimal) {
            document.getElementById("preview").innerHTML = `<img height='220px' width='220px' class="m-auto" src='assets/imgs/${element.imagen}'>`
        }
    })
});
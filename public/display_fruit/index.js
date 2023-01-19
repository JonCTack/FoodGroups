
const getData = async () => {
    let data = await fetch('/fruits');
    data.json().then((parsed) => {
    parsed.forEach((object) => {
        let pTag = document.createElement('p');
        pTag.textContent = object.name;
        if(object.readyToEat == true){
            pTag.style.color = "green"
        } else {
            pTag.style.color = "red"
        }

        containerElement.appendChild(pTag)
    })});
}
getData()

let containerElement = document.getElementById('contain')

let addButton = document.getElementById('add')
addButton.addEventListener('click', () => {
    window.location.href = "../"
    console.log('clicked')
})

let displayFruitButton = document.getElementById('display-fruit')
displayFruitButton.addEventListener('click', () => {
    window.location.href = "../display_fruit"
})

let displayVegButton = document.getElementById('display-veg')
displayVegButton.addEventListener('click', () => {
    window.location.href = "../display_veg"
})
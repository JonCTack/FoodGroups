
const getData = async (search = undefined) => {

    let data = await fetch(`/veggies/${search}`);
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
const urlParams = new URL(window.location.toLocaleString())
veggieName = urlParams.pathname.substring(urlParams.pathname.lastIndexOf('/')+1)


getData(veggieName)

let containerElement = document.getElementById('contain')


let searchButton = document.getElementById('search-sub')

searchButton.addEventListener('click', () => {
    let nameString = document.getElementById('name-i').value.toLowerCase();
    window.location.href = `./${nameString}`
})

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
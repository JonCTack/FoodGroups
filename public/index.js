

let sendFruitButton = document.getElementById('send-fruit')
let sendVegButton = document.getElementById('send-veg')
sendFruitButton.addEventListener('click', async () =>{
    let nameString = document.getElementById('name-i').value.toLowerCase();
    let colorString = document.getElementById('color-i').value.toLowerCase();
    let ageNum = +document.getElementById('age-i').value;
    let eatBool = document.getElementById('can-eat').value === "true" ? true : false;
    const fruit = {
        nameString,
        colorString,
        ageNum,
        eatBool
    }
    let response = await fetch('/create_fruit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fruit),
    })
    let uploadStatusTag = document.getElementById('upload-status');
    console.log(response.status);
    if (response.status === 200) {
        console.log(response);
        console.log("upload complete!!!");
        uploadStatusTag.textContent = "Upload Completed";
        uploadStatusTag.style.color = "green";
    } else {
        console.log(response);
        console.log("upload failed");
        console.log;
        uploadStatusTag.textContent = "Upload Failed";
        uploadStatusTag.style.color = "red";
    }
})

sendVegButton.addEventListener('click', async () =>{
    let nameString = document.getElementById('name-i').value.toLowerCase();
    let colorString = document.getElementById('color-i').value.toLowerCase();
    let ageNum = +document.getElementById('age-i').value;
    let eatBool = document.getElementById('can-eat').value === "true" ? true : false;
    const veg = {
        nameString,
        colorString,
        ageNum,
        eatBool
    }
    let response = await fetch('/create_veggie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(veg),
    })
    let uploadStatusTag = document.getElementById('upload-status');
    console.log(response.status);
    if (response.status === 200) {
        console.log(response);
        console.log("upload complete!!!");
        uploadStatusTag.textContent = "Upload Completed";
        uploadStatusTag.style.color = "green";
    } else {
        console.log(response);
        console.log("upload failed");
        console.log;
        uploadStatusTag.textContent = "Upload Failed";
        uploadStatusTag.style.color = "red";
    }
})

let deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', async () => {
    let response = await fetch('/delete_nameless_data', {
        method: 'DELETE'})
        parsed = await response.json()
        console.log(parsed)
})

let displayFruitButton = document.getElementById('display-fruit')
displayFruitButton.addEventListener('click', () => {
    window.location.href = "./display_fruit"
})

let displayVegButton = document.getElementById('display-veg')
displayVegButton.addEventListener('click', () => {
    window.location.href = "./display_veg"
})
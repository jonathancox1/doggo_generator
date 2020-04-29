// get the dropDown id
const dropDown = document.querySelector('#dogBreeds')

// get the dog button
const generate = document.querySelector("#generateDog")


// get the dog breeds from API to create breed selection list
$.get('https://dog.ceo/api/breeds/list')
    .then(function (data) {
        data.message.forEach(element => {
            const option = document.createElement('option');
            option.setAttribute('value', element)
            option.textContent = element;
            dropDown.appendChild(option);
        });
    });

// create the dropDown options from the above get request
dropDown.addEventListener('change', function () {
    $.get(`https://dog.ceo/api/breed/${this.value}/images/random`)
        .then(function (data) {
            const img = document.createElement('img');
            img.setAttribute('src', data.message);
            img.setAttribute('width', '300px')
            placeDog.innerHTML = ""; // to clear div before appending the dog image
            placeDog.appendChild(img);
        })
})

// event listener
generate.addEventListener('click', function (e) {
    // generate.textContent = 'Fetching a rando Doggo...'
    $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        const img = document.createElement('img');
        img.setAttribute('src', data.message);
        img.setAttribute('width', '500px')
        console.log(img);
        placeDog.innerHTML = ""; // to clear div before appending the dog image
        placeDog.appendChild(img);
        generate.textContent = "Request a rando Doggo";
    })
});

// // insert spinner
// function insertSpinner() {
//     return `<div class="spinner-border" role="status">`
// }




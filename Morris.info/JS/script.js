// setTimeout(function(){
//     location.reload();
// }, 3000);
const cl = console.log;
// data for foreach statement to dynamiclly add skills
const imageData = [
    {
        "name": "HTML5",
        "image": "Images/html-5.png"
    },
    {
        "name": "CSS3",
        "image": "Images/css.png"
    },
    {
        "name": "Javascript",
        "image": "Images/js.png"
    },
    {
        "name": "JSON",
        "image": "Images/json-file.png"
    },
    {
        "name": "GraphQL",
        "image": "Images/graphql.png"
    },
    {
        "name": "Agile",
        "image": "Images/agile.png"
    }
];
var iconContainer = document.querySelector('.icon-wrapper');

const imageString = [];

function displayImageDataArray(object) {
    // loops through each object in the array
    object.forEach(objects => {
        // .image gets image and .name gets the name
        let html = '<div class="icon-word-container">' +
            '<img src="' + objects.image + '" class="skills-images" id="" alt="' + objects.name + '">' +
            '<p>' + objects.name + '</p>' +
            '</div>';

        iconContainer.innerHTML += html;
    });
}

displayImageDataArray(imageData);
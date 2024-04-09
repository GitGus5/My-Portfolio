'use strict';

// var increment = 0;
// data for foreach statement to dynamiclly add skills
const skillData = [
    {
        "name": "HTML5",
        "image": "Images/html-5.png",
        "description": "Test",
    },
    {
        "name": "CSS3",
        "image": "Images/css.png",
        "description": "Test TWo",
    },
    {
        "name": "Javascript",
        "image": "Images/js.png",
        "description": "Test Three",
    },
    {
        "name": "JSON",
        "image": "Images/json-file.png",
        "description": "Test Four",
    },
    {
        "name": "GraphQL",
        "image": "Images/graphql.png",
        "description": "Test Five",
    },
    {
        "name": "Agile",
        "image": "Images/agile.png",
        "description": "Test Six",
    }
];
// const imageString = [];
function generateUniqueId(index) {
    //unique ID
    return `item-${index}`;
  }
// put, pull, GET, post REST verbel MOST 
function handleClick(e) {
    //searches up the DOM tree 
    const clickedElement = e.target.closest('.icon-word-container');
    // If the target is not .icon-word-container return
    if (!clickedElement){
        return;
   }
    // assigns object
   const objectId = clickedElement.id;
    // Arrow function
    const object = skillData.find((obj, index) => {
        const expectedId = generateUniqueId(index);
        return expectedId === objectId;
    });
        if (object) {
            alert(object.description);
        } else {
            console.log('No matching object found.');
        }
}

function displaySkillDataArray() {
    let iconContainer = document.querySelector('.icon-wrapper');

    skillData.forEach((object, index) => {
        const descriptionDiv = document.createElement("div");
        descriptionDiv.id = generateUniqueId(index);
        descriptionDiv.textContent = object.description;
        console.log(descriptionDiv.textContent)

        let html = `<div id="${generateUniqueId(index)}" class="icon-word-container" onClick="">
            <img src="${object.image}" class="skills-images" id="" alt="${object.name}">
            <p>${object.name}</p>
            </div>`;
        // iconContainer.innerHTML += html;
        

        iconContainer.insertAdjacentHTML('beforeend', html);
    });
    iconContainer.addEventListener("click", handleClick);
}




displaySkillDataArray(skillData);
// https://stackoverflow.com/questions/36776441/making-an-element-visible-and-hide-upon-click

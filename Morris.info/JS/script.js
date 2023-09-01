// setTimeout(function(){
//     location.reload();
// }, 3000);

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


let string = JSON.stringify(imageData);
let parsedString = JSON.parse(string)

console.log();
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  parsedString["image", [i]]
}

var object = {};
var count = '';
var querySelector = document.querySelector;
querySelector = ['qs', 'QS', 'Qs', 'qS'];

function populateSkillsImages() {
  count = 0;
  var html = qs(".icon-wrapper").innerHTML;
  var imageParse = parsedString.image;
  var valueImage = imageParse.value;
  for (let i = 0; i < imageParse.length; i++) {
    var element = imageParse[i];
    
    html += '<div class="icon-word-container">' +
    '<!-- https://www.flaticon.com/free-icon/html-5_919827 -->' +
    '<img src=" '+ imageParse[i] + ' " id="" alt="html" width="155" height="155">' +
    '<p>HTML5</p>' +
    '</div>';
  };
}
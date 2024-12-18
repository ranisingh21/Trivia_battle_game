let submitButton = document.getElementById('button');
let firstname  = document.getElementById('fname');
let lastnamename  = document.getElementById('lname');
const myHeading = document.getElementById('my-heading');
const categoryElement = document.getElementById("category");
let form = document.getElementById('category-form');

// const categoryElement = document.getElementById("category");


// let form = document.getElementById('category-form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     fetch("https://the-trivia-api.com/api/questions?limit=40&categories=" + categoryElement.value)
//         .then(response => response.json())
//         .then(data => {
//             let easyQuestions  =[]
//             let mediumQuestions  = []
//             let hardQuestions  = []
//             for (let i = 0; i < data.length; i++) {
//                 let easyQuestions = []
//                 for (let j in data[i]) {
//                     if (data[i][j] === "easy") {
//                         // let questionEasy = data[i].question;
//                         // for (let i = 0; i < 2; i++) {
//                             // console.log(data[i].question)
//                         //   }
//                         console.log(questionEasy, "easy");
//                         // easyQuestions .push(questionEasy)
                        

//                     }
//                     if (data[i][j]==="medium"){
//                         let questionEasy =data[i].question
//                         console.log(questionEasy,"medium")
//                     }
//                     if (data[i][j]==="hard"){
//                         let questionEasy =data[i].question
//                         console.log(questionEasy,"hard")
//                     }
//                 }
//             }
//         })
        // .catch(error => {
        //     console.error("Error fetching data:", error);
        // });
// });
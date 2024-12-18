
let submitButton = document.getElementById("button");
let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let displayFname = document.getElementById("displayFname");
let displayLname = document.getElementById("displayLname");
let myHeading = document.getElementById('my-heading');
let categoryElement = document.getElementById("category").value;
let input = document.getElementById('Input');
let flable = document.getElementById('fhide');
let slable = document.getElementById('lhide');

let form = document.getElementById('category-form');
submitButton.addEventListener('click', function () {
  myHeading.textContent = 'Welcome Trivia Battle Game';
  displayFname.innerHTML = firstname.value;
  displayLname.innerHTML = lastname.value;
  fname.style.display = 'none'
  lname.style.display = 'none'
  flable.style.display = 'none'
  slable.style.display = 'none'
  submitButton.style.display = 'none'
  document.querySelector(".hidden").classList.remove("hidden");
});


form.addEventListener('submit', function (event) {
  myHeading.style.display = 'none'
  form.style.display = 'none'
  displayFname.style.display = 'none'
  displayLname.style.display = 'none'
  let diff = ["easy","medium","hard"]
  for (let i = 0; i < diff.length; i++) {  
    event.preventDefault();
    fetch(`https://the-trivia-api.com/v2/questions?limit=2&categories=${categoryElement}&difficulties=${diff[i]}`)
    
      .then(response => response.json())
      .then(data => {
        // console.log(data,"rani")
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].difficulty, "=", data[i].question.text, "rani")
        }
      })

      .catch(error => {
        console.error("shoing error", error);
      });
  }
});



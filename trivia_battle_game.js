document.addEventListener('DOMContentLoaded', function () {
    let submitButton = document.getElementById("button");
    let firstname = document.getElementById("fname");
    let lastname = document.getElementById("lname");
    let displayFname = document.getElementById("displayFname");
    let displayLname = document.getElementById("displayLname");
    const myHeading = document.getElementById('my-heading');
    const categoryElement = document.getElementById("category");
    let form = document.getElementById('category-form');

    submitButton.addEventListener('click', function () {
        myHeading.textContent = 'Welcome Trivia Battle Game';
        displayFname.textContent = firstname.value;
        displayLname.textContent = lastname.value;
        document.querySelector(".hidden").classList.remove("hidden");
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        fetch(`https://the-trivia-api.com/api/questions?limit=40&categories=${categoryElement.value}`)
            .then(response => response.json())
            .then(data => {
                let easyQuestions = [];
                let mediumQuestions = [];
                let hardQuestions = [];

                data.forEach(question => {
                    switch (question.difficulty) {
                        case "easy":
                            easyQuestions.push(question);
                            break;
                        case "medium":
                            mediumQuestions.push(question);
                            break;
                        case "hard":
                            hardQuestions.push(question);
                            break;
                    }
                });

                console.log("Easy Questions:", easyQuestions);
                console.log("Medium Questions:", mediumQuestions);
                console.log("Hard Questions:", hardQuestions);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });
});

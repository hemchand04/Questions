window.onload = function () {
    // Correct answers array (this corresponds to the correct option values)
    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'c',
        q6: 'a',
        q7: 'c',
        q8: 'c',
        q9: 'a',
        q10: 'a'
    };

    document.getElementById('questionForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        let score = 0;
        let totalQuestions = 10; // Change if more questions are added

        // Loop through each question and check answers
        for (let question in correctAnswers) {
            let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }

        // Confirmation before submission
        let confirmSubmit = confirm(`You answered ${score} out of ${totalQuestions} questions correctly. Are you sure you want to submit?`);

        if (confirmSubmit) {
            alert("Thank you for submitting the quiz!");
            // Perform actual form submission or other actions here
        } else {
            alert("You can review your answers.");
        }
    });
};

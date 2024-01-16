function calcGrade() {
    let correctQuestions = document.assignmentGrade.correctQuestions;
    let totalQuestions = document.assignmentGrade.totalQuestions;
    let correctQuestionsInt = parseFloat(correctQuestions.value);
    let totalQuestionsInt = parseFloat(totalQuestions.value);
    let resultDiv = document.getElementById("result")

    if (correctQuestions.value === "") {
        alert("Please enter the amount of correct questions");
        correctQuestions.focus();
        return false;
    }
    else if (totalQuestions.value === "") {
        alert("Please enter the amount of total questions");
        totalQuestions.focus();
        return false;
    }
    else if (isNaN(correctQuestions.value)) {
        alert("Please enter a numeric value into the correct questions text box.");
        correctQuestions.focus();
        return false;
    }
    else if (isNaN(totalQuestions.value)) {
        alert("Please enter a numeric value into the total questions text box.");
        totalQuestions.focus();
        return false;
    }
    else {
        resultDiv.innerHTML = "Your assignment grade is: " + ((correctQuestionsInt / totalQuestionsInt) * 100).toFixed(2);
        resultDiv.style.display = "block";
        return false;
    }
}
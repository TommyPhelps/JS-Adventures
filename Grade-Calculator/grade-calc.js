function calcGrade() {
    let correctQuestions = document.assignmentGrade.correctQuestions
    let totalQuestions = document.assignmentGrade.totalQuestions

    if (correctQuestions.value === "") {
        alert("Please enter the amount of correct questions");
        correctQuestions.focus();
        return false;
    }
    if (totalQuestions.value === "") {
        alert("Please enter the amount of total questions");
        totalQuestions.focus();
        return false;
    }
    if (isNaN(correctQuestions.value)) {
        alert("Please enter a numeric value into the correct questions text box.");
        correctQuestions.focus();
        return false;
    }
    if (isNaN(totalQuestions.value)) {
        alert("Please enter a numeric value into the correct questions text box.");
        totalQuestions.focus();
        return false;
    }
}
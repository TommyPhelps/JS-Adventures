function calcGrade() {
    let correctQuestions = document.assignmentGrade.correctQuestions
    let assignmentGrade = document.assignmentGrade.totalQuestions

    if (correctQuestions.value === "") {
        alert("Please enter the amount of correct questions");
        document.assignmentGrade.correctQuestions.focus();
        return false;
    }
    if (assignmentGrade.value === "") {
        alert("Please enter the amount of total questions");
        document.assignmentGrade.totalQuestions.focus();
        return false;
    }
}
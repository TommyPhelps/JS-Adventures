function calcGrade() {
    let correctQuestions = document.assignmentGrade.correctQuestions
    let assignmentGrade = document.assignmentGrade.totalQuestions

    if (document.assignmentGrade.correctQuestions.value === "") {
        alert("Please enter the amount of correct questions");
        document.assignmentGrade.correctQuestions.focus();
        return false;
    }
    if (document.assignmentGrade.totalQuestions.value === "") {
        alert("Please enter the amount of total questions");
        document.assignmentGrade.totalQuestions.focus();
        return false;
    }
}
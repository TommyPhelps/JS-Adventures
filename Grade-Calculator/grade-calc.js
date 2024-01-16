function calcGrade() {
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
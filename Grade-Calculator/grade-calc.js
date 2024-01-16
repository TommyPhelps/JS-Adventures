function calcGrade() {
    if (document.assignmentGrade.correctQuestions.value === "") {
        alert("Please enter the amount of correct questions");
        document.correctQuestions.focus();
    }
    if (document.assignmentGrade.totalQuestions.value === "") {
        alert("Please enter the amount of total questions");
        document.totalQuestions.focus();
    }
}
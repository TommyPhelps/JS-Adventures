function calcGrade() {
    if (document.correctQuestions.value == "") {
        alert("Please enter the amount of correct questions");
        document.correctQuestions.focus();
    }
    if (document.totalQuestions.value == "") {
        alert("Please enter the amount of total questions");
        document.totalQuestions.focus();
    }
}
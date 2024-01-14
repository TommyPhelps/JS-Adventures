function validate() {
    if (document.nameForm.fName.value === "") {
        alert("Please provide your first name!");
        document.nameForm.fName.focus();
        return false;
    }
    if (document.nameForm.lName.value === "") {
        alert("Please provide your last name!");
        document.nameForm.lName.focus();
        return false;
    }
    return true;
}
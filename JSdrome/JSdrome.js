function checkPalindrome() { 
    var input = document.getElementById("palindromeInput").value.toLowerCase();
    var reversedInput = input.split("").reverse().join("");

    if (input == reversedInput) {
        var isPolindrome = true;
    } else {
        var isPolindrome = false;
    }

    const htmlIsPolindrome = document.getElementById("isPolindrome");
    htmlIsPolindrome.innerText = isPolindrome;
};
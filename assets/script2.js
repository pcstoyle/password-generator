function getLength() {
    console.log("getting length")
    var passwordLength = prompt("How long would you like your passworkd to be? (between 8 and 128 characters)", "10");
    console.log(passwordLength)
    if (passwordLength <= 128 && passwordLength >= 8) {
        return passwordLength
    }
}

function getCriteria() {
    console.log("getting criteria")
    var characters = []
    var alphaLower = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "1234567890".split("")
    var specialCharacters = "!@#$%^&*()".split("");
    var alphaUpper = alphaLower.toUpperCase().split("")
    alphaLower = alphaLower.split("")
    var wantsUpper = confirm("Would you like your passworkd to contain uppercase letters?");
    var wantsLower = confirm("Would you like your passworkd to contain lowercase letters?");
    var wantsNumbers = confirm("Would you like your passworkd to contain numbers?");
    var wantsSpecialCharacters = confirm("Would you like your passworkd to contain special characters?");

    if (wantsUpper === true) {
        characters = characters.concat(alphaLower)
    } if (wantsLower === true) {
        characters = characters.concat(alphaUpper)
    } if (wantsSpecialCharacters === true) {
        characters = characters.concat(specialCharacters)
    } if (wantsNumbers === true) {
        characters = characters.concat(numeric)
    } else (alert("Please select at least one criteria"))
    return characters
}

function generatePassword() {
    var passwordLength = getLength()
    if (passwordLength === undefined) {
        return
    }
    var characterBase = getCriteria()
    console.log(characterBase)
    var password = ""


    for (let i = 0; i < passwordLength; i++) {
        var random = characterBase[Math.floor(Math.random() * characterBase.length)]
        console.log(random);
        password = random + password;
    }
    return password
}

var button = document.querySelector("#generate");
button.addEventListener('click', writePassword);


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

var translateButton = document.querySelector("#translate-button");


var translateInput = document.querySelector("#translate-input");

var translateOutput = document.querySelector("#translate-output");

var severURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text)
{
    return serverURL + "?" + "text" +text
}

function errorHandler(error)
{
    console.log("Error! Try again later");
}

function clickHandler()
{
    var inputText=translateInput.value;

    fetch(getTranslationURL(inputText))
    .then(Response=> Response.json())
    .then(json=> console.log(json.contents.translated))
    .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler)
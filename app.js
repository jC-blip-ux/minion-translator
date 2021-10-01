var btnTranslator = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputToUser = document.querySelector("#output");

// var serverURL = "https://lesssonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    const inputText = txtInput.value;

    //    calling server for processing

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputToUser.innerText = translatedText;
        })
        .catch(errorEventHandler)
};

function errorEventHandler(error) {
    alert("Something is wrong with the server.. Kindly co-operate.")
}

btnTranslator.addEventListener("click", clickHandler); //on click function is executed
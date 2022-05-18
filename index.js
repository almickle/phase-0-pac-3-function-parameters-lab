let name = "Aki"
let language = "Ember.js"

function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

let firstName = "Gracie"
function introductionWithLanguageOptional(firstName, language = "JavaScript") {
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`
}
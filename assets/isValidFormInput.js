export function isValidFormInput(objData, objValidator) {
    for (let i in objValidator) {
        objData[i].trim(" ").length < 1
            ? objValidator[i] = "field is required"
            : objValidator[i] = ""
    }
}
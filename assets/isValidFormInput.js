export function  isValidFormInput(objData, objValidator) {
    for (let i in objValidator) {
        objData[i].length < 1
            ? objValidator[i] = "field is required"
            : objValidator[i] = ""
    }
}
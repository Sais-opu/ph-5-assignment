// common function
// For input field
function getInputFieldValueById(id) {
    const addM = parseFloat(document.getElementById(id).value);
    return addM;
}
// for text field
function getTextFieldValueById(id) {
    const addText = parseFloat(document.getElementById(id).innerText);
    return addText;
}
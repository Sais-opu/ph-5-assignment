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

// for hide
function showSectionById(id) {
    document.getElementById('show-cart').classList.add('hidden');
    document.getElementById('container').classList.add('hidden');
    // for show 
    document.getElementById(id).classList.remove('hidden');
    
    
}

// for button
function colorChange(current, old) {
    document.getElementById(old).classList.remove('bg-[#B4F461]');
    document.getElementById(old).classList.add('bg-white');
    document.getElementById(current).classList.remove('bg-white');
    document.getElementById(current).classList.add('bg-[#B4F461]');
    
}
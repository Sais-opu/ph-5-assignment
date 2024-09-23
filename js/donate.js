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
//<div id=" limit" class="font-bold px-2">5500</div>
/** For noakhali
 * donate-nok = donate button 
 * input-1 - input form
 * nok-money - coin
 * 
 */
document.getElementById('donate-nok').addEventListener('click', function () {
    const input_1 = getInputFieldValueById('input-1');
    const cash = getTextFieldValueById('limit');
    if (input_1>0 ) {
        const nokMoney = getTextFieldValueById('nok-money');
        const total = input_1 + nokMoney;
        document.getElementById('nok-money').innerText = total;
        const newCash = cash - input_1;
        if (newCash >= 0) {
            document.getElementById('limit').innerText = newCash;
        }
        else {
            alert('Not enough Money')
        }
    }
    else {
        alert('ki korla');
    }
});


//<div id=" limit" class="font-bold px-2">5500</div>
/** For noakhali
 * donate-nok = donate button 
 * input-1 - input form
 * nok-money - coin
 * 
 */
document.getElementById('donate-nok').addEventListener('click', function (event) {
    event.preventDefault();
    const input_1 = getInputFieldValueById('input-1');
    const cash = getTextFieldValueById('limit');
    if(isNaN(input_1)){
        alert('Failed to cash out.');
        return;
    }
    if (input_1>0 ) {
        const nokMoney = getTextFieldValueById('nok-money');
        const total = input_1 + nokMoney;
        document.getElementById('nok-money').innerText = total;
        const newCash = cash - input_1;
        // history
        const p = document.createElement('p');
        p.innerText = `${total}Taka is Donated for famine-2024 at Feni, Bangladesh \n ${time}`;
        // console.log(p)
        document.getElementById('container').appendChild(p);

        if (newCash >= 0) {
            document.getElementById('limit').innerText = newCash;
        }
        else {
            alert('Not enough Money.')
        }
    }
    else {
        alert('Negative number not acceptable');
    }
});

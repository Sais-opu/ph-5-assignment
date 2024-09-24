
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
        p.innerText = `${total} Taka is Donated for famine-2024 at Noakhali, Bangladesh \n ${time}`;
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
/** For feni
 * donate-feni = donate button 
 * input-2 - input form
 * feni-money - coin
 * 
 */
document.getElementById('donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const input_2 = getInputFieldValueById('input-2');
    const cash = getTextFieldValueById('limit');
    if(isNaN(input_2)){
        alert('Failed to cash out.');
        return;
    }
    if (input_2>0 ) {
        const fenMoney = getTextFieldValueById('feni-money');
        const total = input_2 + fenMoney;
        document.getElementById('feni-money').innerText = total;
        const newCash = cash - input_2;
        // history
        const p = document.createElement('p');
        p.innerText = `${total} Taka is Donated for famine-2024 at Feni, Bangladesh \n ${time}`;
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
/** For Movement
 * donate-mov = donate button 
 * input-3 - input form
 * mov-money - coin
 * 
 */
document.getElementById('donate-mov').addEventListener('click', function (event) {
    event.preventDefault();
    const input_3 = getInputFieldValueById('input-3');
    const cash = getTextFieldValueById('limit');
    if(isNaN(input_3)){
        alert('Failed to cash out.');
        return;
    }
    if (input_3>0 ) {
        const movMoney = getTextFieldValueById('mov-money');
        const total = input_3 + movMoney;
        document.getElementById('mov-money').innerText = total;
        const newCash = cash - input_3;
        // history
        const p = document.createElement('p');
        p.innerText = `${total} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh \n ${time}`;
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

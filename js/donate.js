

/** For noakhali
 * donate-nok = donate button 
 * input-1 - input form
 * nok-money - coin
 * 
 */
document.getElementById('donate-nok').addEventListener('click', function () {
    
    const input_1 = getInputFieldValueById('input-1'); 
    const cash = getTextFieldValueById('limit'); 
    if (isNaN(input_1) || input_1 <= 0) {
        alert('Failed to Donate. Please enter a positive number.');
        return;
    }
    if (cash >= input_1) {
        const nokMoney = getTextFieldValueById('nok-money');
        const total = input_1 + nokMoney;
        document.getElementById('nok-money').innerText = total;
        const newCash = cash - input_1;
        // History entry
        const div = document.createElement('div');
        div.classList.add('my-4', 'p-4', 'border', 'rounded-lg', 'shadow', 'bg-white');
        const p = document.createElement('p');
        const currentDate = new Date();
        const time = currentDate.toString();
        p.innerHTML = `<p><strong>${input_1} Taka is Donated for famine-2024 at Noakhali, Bangladesh</strong> <br> Date: ${time}</p>`;
        div.appendChild(p);
        document.getElementById('container').appendChild(div);
        if (newCash >= 0) {
            document.getElementById('limit').innerText = newCash;
        } 
        document.getElementById('my_modal_1').showModal();
        document.getElementById('input-1').value = '';
    } else {
        alert('Not enough Money.');
    }
    document.getElementById('input-1').value = '';
});

/** For feni
 * donate-feni = donate button 
 * input-2 - input form
 * feni-money - coin
 * 
 */
document.getElementById('donate-feni').addEventListener('click', function () {

    const input_2 = getInputFieldValueById('input-2');
    const cash = getTextFieldValueById('limit');
    if (isNaN(input_2) || input_2 <= 0) {
        alert('Failed to cash out. Please enter a positive number.');
        return;
    }
    if (cash >= input_2) {
        const fenMoney = getTextFieldValueById('feni-money');
        const total = input_2 + fenMoney;
        document.getElementById('feni-money').innerText = total;
        const newCash = cash - input_2;
        // Adding the donation history
        const div = document.createElement('div');
        div.classList.add('my-4', 'p-4', 'border', 'rounded-lg', 'shadow', 'bg-white');
        const p = document.createElement('p');
        const currentDate = new Date();
        const time = currentDate.toString();
        p.innerHTML = `<p><strong>${input_2} Taka is Donated for famine-2024 at Feni, Bangladesh</strong> <br> Date: ${time}</p>`;
        div.appendChild(p);
        document.getElementById('container').appendChild(div);
        document.getElementById('limit').innerText = newCash;
        document.getElementById('my_modal_1').showModal();
    } else {
        alert('Not enough Money.');
    }
    document.getElementById('input-2').value = '';
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
    if (isNaN(input_3) || input_3 <= 0) {
        alert('Failed to cash out. Please enter a positive number.');
        return;
    }

    if (cash >= input_3) {
        const movMoney = getTextFieldValueById('mov-money'); 
        const total = input_3 + movMoney;
        document.getElementById('mov-money').innerText = total;
        const newCash = cash - input_3;
        const div = document.createElement('div');
        div.classList.add('my-4', 'p-8', 'border', 'rounded-lg', 'shadow', 'bg-white');
        const p = document.createElement('p');
        const currentDate = new Date();
        const time = currentDate.toString();
        p.innerHTML = `<p><strong>${input_3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</strong> <br> Date: ${time}</p>`;
        div.appendChild(p);
        document.getElementById('container').appendChild(div);
        document.getElementById('limit').innerText = newCash;
        // Show the modal dialog
        document.getElementById('my_modal_1').showModal();
    } else {
        alert('Not enough Money.');
    }
    document.getElementById('input-3').value = '';
});






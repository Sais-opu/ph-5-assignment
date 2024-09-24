
//<div id=" limit" class="font-bold px-2">5500</div>
/** For noakhali
 * donate-nok = donate button 
 * input-1 - input form
 * nok-money - coin
 * 
 */
document.getElementById('donate-nok').addEventListener('click', function (event) { 
    // Ensure your logic here is correct
    const input_1 = getInputFieldValueById('input-1'); // Make sure this function exists and works correctly
    const cash = getTextFieldValueById('limit'); // Ensure this function is defined properly
    
    if (isNaN(input_1) || input_1<0) {
        alert('Failed to cash out.');
        return;
    }
    
    else {
        const nokMoney = getTextFieldValueById('nok-money');
        const total = input_1 + nokMoney;
        document.getElementById('nok-money').innerText = total;
        const newCash = cash - input_1;

        const p = document.createElement('p');
        const currentDate = new Date();
        const time = currentDate.toString();// Ensure time is defined
        p.innerText = `${total} Taka is Donated for famine-2024 at Noakhali, Bangladesh \n ${time}`;
        document.getElementById('container').appendChild(p);

        if (newCash >= 0) {
            document.getElementById('limit').innerText = newCash;
        } else {
            alert('Not enough Money.');
        }

        // Show the modal only if the donation is successful
        document.getElementById('my_modal_1').showModal();
    } 
});
/** For feni
 * donate-feni = donate button 
 * input-2 - input form
 * feni-money - coin
 * 
 */
document.getElementById('donate-feni').addEventListener('click', function (event) {
    
    const input_2 = getInputFieldValueById('input-2');
    const cash = getTextFieldValueById('limit');
    if (isNaN(input_2) || input_2<0) {
        alert('Failed to cash out.');
        return;
    }
    else {
        const fenMoney = getTextFieldValueById('feni-money');
        const total = input_2 + fenMoney;
        document.getElementById('feni-money').innerText = total;
        const newCash = cash - input_2;
        // Adding the donation history
        const p = document.createElement('p');
        const currentDate = new Date();
        const time = currentDate.toString(); // Ensuring 'time' is defined
        p.innerText = `${total} Taka is Donated for famine-2024 at Feni, Bangladesh \n ${time}`;
        document.getElementById('container').appendChild(p);
        if (newCash >= 0) {
            document.getElementById('limit').innerText = newCash;
        } else {
            alert('Not enough Money.');
            return; // Exit function if not enough money
        }
        // Display the modal after a successful donation
        document.getElementById('my_modal_1').showModal();
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
    if (isNaN(input_3) || input_3<0) {
        alert('Failed to cash out.');
        return;
    }
    else{
        const movMoney = getTextFieldValueById('mov-money'); // Ensure this function exists
        const total = input_3 + movMoney;
        document.getElementById('mov-money').innerText = total;
        const newCash = cash - input_3;
        // Adding the donation history
        const p = document.createElement('p');
        const currentDate = new Date();
        const time = currentDate.toString(); // Make sure 'time' is defined properly
        p.innerText = `${total} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh \n ${time}`;
        document.getElementById('container').appendChild(p);
        if (newCash >= 0) {
            document.getElementById('limit').innerText = newCash;
        } else {
            alert('Not enough Money.');
            return; // Exit the function if there is not enough money
        }

        // Show the modal after a successful donation
        document.getElementById('my_modal_1').showModal();
    } 
});


document.getElementById('donate').addEventListener('click', function () {
    const input_1 = getFieldValueById('input-1')
    
    for (let char = 0; char < input_1.length;char++) {
        let each = input_1[char];
        if (each >= typeof each === "number" && each < 0) {
            
            console.log(each);
        }
        
        
    }
    console.log('false');
    
});

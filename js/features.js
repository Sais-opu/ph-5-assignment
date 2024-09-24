// For showing call from function Donation click

document.getElementById('btn-donation').addEventListener('click', function () {
    colorChange('btn-donation', 'btn-history');
    
    showSectionById('show-cart');
})
// For showing call from function history click
document.getElementById('btn-history').addEventListener('click', function () {
    // button
    colorChange('btn-history', 'btn-donation');
    
    showSectionById('container');
})


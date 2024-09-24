// For showing call from function Donation click
document.getElementById('btn-donation').addEventListener('click', function () {
    
    showSectionById('show-cart');
})
// For showing call from function history click
document.getElementById('btn-history').addEventListener('click', function () {
    // button
    showSectionById('btn-donation');
    showSectionById('btn-history');
    showSectionById('container');
})

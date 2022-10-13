const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    // splits letters into an array
    .split('')
    // turn into an array of letters
    .map((letter, idx) => `<span>${letter}</span>`)
    .join('')

});
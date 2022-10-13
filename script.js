const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    // splits letters into an array
    .split('')
    // turn into an array of letters and set an inline style for transition delay multiplying based on the index of the current letter.
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')

});
//

const arrCities = ['Atlanta', 'Alma-Ata', 'Alchevsk', 'Kharkov'];

let field = document.querySelector('#field');
let message = document.querySelector('#message');

field.addEventListener('input', function () {
    const letter = field.value.trim()

    //const re = RegExp(`(?:^|\\s)([${letter[letter.length-1]}][a-z]*)`, 'gi');

    const word = arrCities.filter(el => el.toLowerCase()[0] === letter.slice(letter.length -1))
    message.innerHTML = word[0]
})
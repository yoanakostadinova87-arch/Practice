//start from '   broken STREET light   ' and print it trimmed, in lower case, in upper case, capitalized (Broken street light), whether it mentions "light", and with "street" replaced by "road"

//start from '   broken STREET light   '
const text = '   broken STREET light   ';
const textTrimmed = text.trim();

// print it trimmed
console.log(textTrimmed);

//print it in lower case
console.log(textTrimmed.toLowerCase());

//print it in upper case
console.log(textTrimmed.toUpperCase());

// print it capitalized
var newText = textTrimmed.toLowerCase();
var firstLetter = newText.slice(0, 1).toUpperCase();
var restOfString = newText.slice(1);
const capitalizedText = firstLetter + restOfString;
console.log(capitalizedText);

// check if it mentions "light"
console.log(textTrimmed.toLowerCase().includes('light'));

// replace "street" with "road" and print it
let textArray = textTrimmed.split(' ');
textArray[1] = 'road'.toUpperCase();
console.log(textArray.join(' '));



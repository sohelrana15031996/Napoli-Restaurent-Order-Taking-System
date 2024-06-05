const num = 1;

let isActive = num > 5;

const printHi = () => console.log('Big.');
const printBye = () => console.log('Small.');

// !isActive ? printHi() : printBye();

isActive && printHi();
isActive || printBye();
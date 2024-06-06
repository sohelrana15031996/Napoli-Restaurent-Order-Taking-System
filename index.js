const number = [12, 45, 56, 87];
const nameofDaughter = ['anabia', 'ariba', 'abrar']
const newNum = [...number, ...nameofDaughter];
const withoutAnElement = nameofDaughter.filter(nam => !nam.includes('n'));
// console.log(newNum);
// console.log(withoutAnElement);
const parentOfAnabia = ['Sohel', 'Nasrin'];
const [father, mother] = parentOfAnabia;
const daughter = {
  name: 'anabia',
  age: 4,
  'Basic information': {
    father: 'Sohel',
    mother: 'Nasrin',
    address: {
      flat: 4,
      road: 'cheapside road',
      town: 'Brighton',
      postcode: 'BN1 4GD',
    },
  }
}

const {town} = daughter["Basic information"].address;

// console.log(father, ' ', mother)
console.log(name);
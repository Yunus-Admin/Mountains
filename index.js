const userNumber = parseFloat(prompt('MountainH1'));

function numberReturnSymbol(count) {
  let sum = '';
  for (let i = 0; i < count; i++) {
    sum += '#';
  }
  return sum;
}

function root(userNumber) {
  for (let i = 0; i < userNumber; i++) {
    console.log(numberReturnSymbol(i) + '\\');
  }

  console.log(numberReturnSymbol(userNumber) + '|');

  for (let i = userNumber - 1; i >= 0; i--) {
    console.log(numberReturnSymbol(i) + '/');
  }
}

console.log(root(userNumber));

const numberOfMountains = 5;
const minН = 3;
const maxH = 7;

function getRandomIntInclusive(minH, maxH) {
  minH = Math.ceil(minH);
  maxH = Math.floor(maxH);
  return Math.floor(Math.random() * (maxH - minH + 1)) + minH; //Максимум и минимум включаются
}

for (let i = 0; i <= numberOfMountains; i++) {
  console.log(root(i));
}

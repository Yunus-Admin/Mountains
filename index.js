const userNumber = parseFloat(prompt('MountainH1'));

function numberDrawHight(count) {
  let sum = '';
  for (let i = 0; i < count; i++) {
    sum += '#';
  }
  return sum;
}

function drawMountain(count) {
  let resultNumberDrawHight = '';

  for (let i = 0; i < count; i++) {
    console.log(numberDrawHight(i) + '\\');
  }

  console.log(numberDrawHight(count) + '|');

  for (let i = count - 1; i >= 0; i--) {
    console.log(numberDrawHight(i) + '/');
  }
}

drawMountain(userNumber);

const numberOfMountains = 5;
const minН = 3;
const maxH = 7;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

for (let i = 0; i <= numberOfMountains; i++) {
  drawMountain(getRandomIntInclusive(minН, maxH));
}

const userNumber = parseFloat(prompt('MountainH1'));

function numberDrawHight(count) {
  let sum = '';
  for (let i = 0; i < count; i++) {
    sum += '#';
  }
  return sum;
}

const numberOfMountains = 5;
const minН = 3;
const maxH = 10;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function generateMountain(count, modifications) {
  const resultNumberDrawHight = [];

  for (let i = 0; i < count; i++) {
    let add = numberDrawHight(i) + '\\';

    if (modifications) {
      const mods = ['=', '-*', '===@', ']-+', '◆'];
      const modPosition = getRandomIntInclusive(0, mods.length - 1);
      const mod = mods[modPosition];
      add += mod;
    }

    resultNumberDrawHight.push(add);
  }

  resultNumberDrawHight.push(numberDrawHight(count) + '|');

  for (let i = count - 1; i >= 0; i--) {
    resultNumberDrawHight.push(numberDrawHight(i) + '/');
  }

  return resultNumberDrawHight;
}

function drawMountain(count) {
  generateMountain(count).forEach((item) => {
    console.log(item);
  });
}

function drawMountainRandom(count) {
  generateMountain(count)
    .slice(0, getRandomIntInclusive(minН, maxH))
    .forEach((item) => {
      console.log(item);
    });
}

drawMountain(userNumber);

for (let i = 0; i < numberOfMountains; i++) {
  drawMountainRandom(getRandomIntInclusive(minН, maxH));
}

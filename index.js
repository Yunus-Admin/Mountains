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

function generateMountain(count) {
  const resultNumberDrawHight = [];
  function addSymbol(normalString) {
    const mods = ['=', '-*', '===@', ']-+', '◆'];
    const modPosition = getRandomIntInclusive(0, mods.length - 1);
    const mod = mods[modPosition];

    return normalString + mod;
  }

  for (let i = 0; i < count; i++) {
    let add = numberDrawHight(i) + '\\';
    if (getRandomIntInclusive(0, 1) > 0) {
      resultNumberDrawHight.push(addSymbol(add));
    } else {
      resultNumberDrawHight.push(add);
    }
  }

  resultNumberDrawHight.push(numberDrawHight(count) + '|');

  for (let i = count - 1; i >= 0; i--) {
    let addTwo = numberDrawHight(i) + '/';

    if (getRandomIntInclusive(0, 1) > 0) {
      resultNumberDrawHight.push(addSymbol(addTwo));
    } else {
      resultNumberDrawHight.push(addTwo);
    }
  }

  return resultNumberDrawHight;
}

function drawMountain(count) {
  generateMountain(count).forEach((item) => {
    console.log(item);
  });
}

function drawMountainRandom(count) {
  generateMountain(count, true)
    .slice(0, getRandomIntInclusive(minН, maxH))
    .forEach((item) => {
      console.log(item);
    });
}

drawMountain(userNumber);

for (let i = 0; i < numberOfMountains; i++) {
  drawMountainRandom(getRandomIntInclusive(minН, maxH));
}

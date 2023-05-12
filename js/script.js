const array = [5, 8, 10, 23, 48, 60];

for (const count of array) {
  if (count % 2 == 0) {
    console.log(`%cLiczba ${count} jest parzysta.`, 'background-color: gold; color: black');
  } else console.log(`%cLiczba ${count} nie jest parzysta.`, 'background-color: tomato; color: black');
}

console.log('--------------');

for (const count of array) {
  console.log(count / 5);
}

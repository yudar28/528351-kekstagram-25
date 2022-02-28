
// const fillArray = n => {
//   let arr = [];
//   if (n) for (let i = 1; i <= n;) arr.push(i++);
//   return arr;
// }

// const Array25 = fillArray(25);
// console.log(Array25);

// const createPhotoDescription = (i) => ({
//   id: i,
//   url: `photos/${i}.jpg`,
// });

// const newArray = [];

// Array25.forEach((value) => {
//   console.log(value);
//   newArray.push(createPhotoDescription(value));
// });

// console.log(newArray)


// const fillArray = n => {
//   let arr = [];
//   if (n) for (let i = 1; i <= n;) arr.push(createPhotoDescription(i++));
//   return arr;
// }

// console.log(fillArray(25));


// const ids = [1,2,3,4,5]
// const photos = []

// ids.forEach((i) => {
//   photos.push(createPhotoDescription(i));
// });

// console.log(photos);

//const result = [1,2,3,4,5].map(createPhotoDescription);

const getRundomNumber = (firstNumber, secondNumber) => {
  let min = firstNumber;
  let max = secondNumber;
  if (firstNumber > secondNumber) {
    min = secondNumber;
    max = firstNumber;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const fillArray = (n) => {
  const arr = [];
  if (n) {for (let i = 1; i <= n;) {arr.push(i++);}}
  return arr;
};

const getRundomArrayElement = (elements) => elements[getRundomNumber(0, elements.length -1)];

// Случайное перемешивание элементов в массиве;
// Источник: https://efim360.ru/javascript-kak-peremeshat-massiv/
const ARRAY_25_ELEMENTS = fillArray(25).sort(()=>Math.random()-0.5);

function getRundomArray (arr) {
  const newArray = [];
  for (let i=1; i<=getRundomNumber(1,4); i++) {
    newArray.push(getRundomArrayElement(arr));
  }
  return newArray;
}

getRundomArray(ARRAY_25_ELEMENTS);


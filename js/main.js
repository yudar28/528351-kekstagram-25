// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random;
const getRundomNumber = (firstNumber, secondNumber) => {
  let min = firstNumber;
  let max = secondNumber;
  if (firstNumber > secondNumber) {
    min = secondNumber;
    max = firstNumber;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для проверки максимальной длины строки.
const checkMaxLength = (text, maxNumberOfSymbols) => text.length <= maxNumberOfSymbols;

checkMaxLength('привет', 4);

const NAMES = [
  'Иван',
  'Артем',
  'Сергей',
  'Дарья',
  'Мария',
  'Ольга',
  'Евгений',
  'Олег',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.',
];

// Функция, возвращающая массив от 1 до n
// Источник: https://www.cyberforum.ru/javascript-beginners/thread2832924.html
const fillArray = (n) => {
  const arr = [];
  if (n) {for (let i = 1; i <= n;) {arr.push(i++);}}
  return arr;
};

// Случайное перемешивание элементов в массиве;
// Источник: https://efim360.ru/javascript-kak-peremeshat-massiv/
const ARRAY_25_ELEMENTS = fillArray(25).sort(()=>Math.random()-0.5);

const ARRAY_100_ELEMENTS = fillArray(100).sort(()=>Math.random()-0.5);

// Функция, возрвращающая случайный элемент массива
const getRundomArrayElement = (elements) => elements[getRundomNumber(0, elements.length -1)];

const ARRAY_COMMENTS = [];

const createComment = (number) => ({
  id: number,
  avatar: `img/avatar-${getRundomNumber(1,6)}.svg`,
  message: getRundomArrayElement(MESSAGE),
  name: getRundomArrayElement(NAMES),
});

ARRAY_100_ELEMENTS.forEach((value) => {
  ARRAY_COMMENTS.push(createComment(value));
});

function getRundomArray (arr) {
  const newArray = [];
  for (let i=1; i<=getRundomNumber(1,4); i++) {
    newArray.push(getRundomArrayElement(arr));
  }
  return newArray;
}

const createPhotoDescription = (number) => ({
  id: number,
  url: `photos/${number}.jpg`,
  description: 'Описание фотографии',
  likes: getRundomNumber(15, 200),
  comments: getRundomArray(ARRAY_COMMENTS),
});

const similarDescriptions = [];

ARRAY_25_ELEMENTS.forEach((value) => {
  similarDescriptions.push(createPhotoDescription(value));
});


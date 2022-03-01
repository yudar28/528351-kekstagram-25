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

//Функция, которая возвращает массив перемешенных чисел от 1 до length
//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const getRundomArrayNumber = (length) => {
  const arr = Array.from({ length: length }, (_v, k) => ++k);
  return arr.sort(() => Math.random()-0.5);
};

// Функция, возрвращающая случайный элемент массива
const getRundomArrayElement = (elements) => elements[getRundomNumber(0, elements.length -1)];

const comments = [];

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRundomNumber(1,6)}.svg`,
  message: getRundomArrayElement(MESSAGE),
  name: getRundomArrayElement(NAMES),
});

getRundomArrayNumber(100).forEach((value) => {
  comments.push(createComment(value));
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
  comments: getRundomArray(comments),
});

const getPhotosData = (numberPhotos) => {
  const similarDescriptions = [];
  getRundomArrayNumber(numberPhotos).forEach((value) => {
    similarDescriptions.push(createPhotoDescription(value));
  });
  return similarDescriptions;
};

getPhotosData(25);


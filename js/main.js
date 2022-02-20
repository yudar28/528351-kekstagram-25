// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random;
const getRundomNumber = (min, max) => {
  if (min < 0 || max <= min) {
    return undefined;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRundomNumber(1,4);

// Функция для проверки максимальной длины строки.
const checkMaxLength = (text, maxNumberOfSymbols) => text.length <= maxNumberOfSymbols;

checkMaxLength('привет', 4);

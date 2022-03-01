
const getRundomArrayNumber = (length) => {
  // eslint-disable-next-line no-shadow
  const arr = Array.from({ length: length }, (_v, k) => ++k);
  return arr.sort(() => Math.random()-0.5);
};

getRundomArrayNumber(8);


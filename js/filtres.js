import { debounce } from './util.js';
const filterSection = document.querySelector('.img-filters');

const filterForm = filterSection.querySelector('.img-filters__form');
const buttonsOfFilter = Array.from(filterForm.querySelectorAll('.img-filters__button'));

const NUMBER_RANDOM_PHOTOS = 10;
const RERENDER_DELAY = 5000;

const showFilters = () => {
  filterSection.classList.remove('img-filters--inactive');
};

const hiddenFilters = () => {
  filterSection.classList.add('img-filters--inactive');
};

const changeFilter = () => {
  buttonsOfFilter.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const activeButton = filterForm.getElementsByClassName('img-filters__button--active');
      activeButton[0].classList.remove('img-filters__button--active');
      evt.target.classList.add('img-filters__button--active');
    });
  });
};

const buttonDefault = filterForm.querySelector('#filter-default');
const buttonRandom = filterForm.querySelector('#filter-random');
const buttonDiscussed = filterForm.querySelector('#filter-discussed');

const filterPhoto = () => {
  const usersPhotoList = document.querySelector('.pictures');
  const userPhotos = Array.from(document.querySelectorAll('.picture'));

  const removePhotos = () => {
    userPhotos.forEach((photo) => {
      photo.remove();
    });
  };

  const addPhotos = (photos) => {
    photos.forEach((photo) => {
      usersPhotoList.append(photo);
    });
  };

  const getNumberComments = (photo) => photo.querySelector('.picture__comments').textContent;

  const compareComments = (photoA, photoB) => {
    const numberCommentsA = getNumberComments(photoA);
    const numberCommentsB = getNumberComments(photoB);

    return numberCommentsB - numberCommentsA;
  };

  const filterDefault = () => {
    removePhotos();
    addPhotos(userPhotos);
  };

  const filterRandom = () => {
    removePhotos();
    const rundomUserPhotos = userPhotos.slice().sort(() => Math.random() - 0.5).slice(0, NUMBER_RANDOM_PHOTOS);
    addPhotos(rundomUserPhotos);
  };

  const filterDiscussed = () => {
    removePhotos();
    const discussedPhotos = userPhotos.slice().sort(compareComments);
    addPhotos(discussedPhotos);
  };

  buttonDefault.addEventListener('click', () => {
    debounce(filterDefault(), RERENDER_DELAY);
  });

  buttonRandom.addEventListener('click', () => {
    debounce(filterRandom(), RERENDER_DELAY);
  });

  buttonDiscussed.addEventListener('click', () => {
    debounce(filterDiscussed(), RERENDER_DELAY);
  });

};


export { showFilters, hiddenFilters, changeFilter, filterPhoto };


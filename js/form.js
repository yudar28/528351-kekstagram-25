/* eslint-disable no-unused-expressions */
import { body } from './big-photo.js';
import { isEscapeKey } from './util.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoInput = uploadPhotoForm.querySelector('#upload-file');
const redactorPhoto = uploadPhotoForm.querySelector('.img-upload__overlay');
const previewPhoto = uploadPhotoForm.querySelector('.img-upload__preview').querySelector('img');
const buttonCancel = uploadPhotoForm.querySelector('.img-upload__cancel');
const inputHashtags = uploadPhotoForm.querySelector('.text__hashtags');
const MAX_LENGTH_HASHTAGS = 5;

const openFilter = () => {
  redactorPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeFilter = () => {
  redactorPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
};

uploadPhotoInput.addEventListener('change', () => {
  if (uploadPhotoInput.value.length !== 0) {
    openFilter();
  }
  //источник: https://ru.stackoverflow.com/questions/1026600/%D0%BA%D0%B0%D0%BA-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%B8%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D1%83-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-input;
  previewPhoto.src = URL.createObjectURL(uploadPhotoInput.files[0]);
});

buttonCancel.addEventListener(('click'), () => {
  closeFilter();
  uploadPhotoInput.value = '';
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    closeFilter();
    uploadPhotoInput.value = '';
  }
});

// Валидация хэштегов
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const isHashtagValid = (hashtag) => re.test(hashtag);

const isNotSameElements = (hashtags) => {
  const lowercasedHashtags = hashtags.map((element) => element.toLowerCase());
  return hashtags.length === new Set(lowercasedHashtags).size;
};

const validMaxLength = (hashtags, length) => hashtags.length <= length;

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'form__element',
  errorTextParent: 'form__element',
  errorTextClass: 'form__error-text',
});

const normalizeHashtags = (value) => {
  const hashtags = value.split(' ');
  return hashtags.filter((element) => element !== '');
};

const handlerLength = (value) => validMaxLength(normalizeHashtags(value), MAX_LENGTH_HASHTAGS);

const handlerSameElements = (value) => isNotSameElements(normalizeHashtags(value));

const handlerHashtag = (value) => {
  if (value === '') {
    return true;
  } else {
    return normalizeHashtags(value).every((element) => isHashtagValid(element));
  }
};

pristine.addValidator(inputHashtags, handlerLength, `Максимальное количесвто хэштегов: ${MAX_LENGTH_HASHTAGS}`);

pristine.addValidator(inputHashtags, handlerSameElements, 'Один и тот же хэш-тег не может быть использован дважды');

pristine.addValidator(inputHashtags, handlerHashtag, 'хэш-тег начинается с символа # и может состоять только из букв и чисел');

uploadPhotoForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
});



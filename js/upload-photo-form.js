import { isEscapeKey, body } from './util.js';

const MAX_SCALE_FOR_STYLE = 1;

const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoInput = uploadPhotoForm.querySelector('#upload-file');
const redactorPhoto = uploadPhotoForm.querySelector('.img-upload__overlay');
const previewPhoto = uploadPhotoForm.querySelector('.img-upload__preview').querySelector('img');
const buttonCancel = uploadPhotoForm.querySelector('.img-upload__cancel');
const textComment = uploadPhotoForm.querySelector('.text__description');
const inputHashtags = uploadPhotoForm.querySelector('.text__hashtags');
const effectSlider =  uploadPhotoForm.querySelector('.effect-level__slider');
const effectFieldset = uploadPhotoForm.querySelector('.effect-level');

const buttonIncreaseScale = uploadPhotoForm.querySelector('.scale__control--bigger');
const buttonDecreaseScale = uploadPhotoForm.querySelector('.scale__control--smaller');
const scaleValue = uploadPhotoForm.querySelector('.scale__control--value');

const smallPreviewPhotos = Array.from(uploadPhotoForm.querySelectorAll('.effects__preview'));

const openFilterModal = () => {
  redactorPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeFilterModal = () => {
  redactorPhoto.classList.add('hidden');
  body.classList.remove('modal-open');

  effectFieldset.style.display = 'none';
  inputHashtags.value = '';
  textComment.value = '';
  previewPhoto.style.transform = `scale(${MAX_SCALE_FOR_STYLE})`;
  previewPhoto.style.filter = '';
  previewPhoto.className = 'effects__preview--none';
  previewPhoto.dataset.filterName = '';
  effectSlider.classList.add('visually-hidden');

  buttonIncreaseScale.disabled = true;
  buttonDecreaseScale.disabled = false;

  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onUploadPhotoEscKeydow);
};

const isFocusedHashtag = () => document.activeElement === inputHashtags;
const isFocusedTextComment = () => document.activeElement === textComment;

const onUploadPhotoEscKeydow = (evt) => {
  if(isEscapeKey(evt) && !isFocusedHashtag() && !isFocusedTextComment()) {
    closeFilterModal();
    uploadPhotoInput.value = '';
  }
};

uploadPhotoInput.addEventListener('change', () => {
  if (uploadPhotoInput.value.length !== 0) {
    openFilterModal();
  }

  previewPhoto.src = URL.createObjectURL(uploadPhotoInput.files[0]);

  smallPreviewPhotos.forEach((photo) => {
    photo.style.backgroundImage = `url(${URL.createObjectURL(uploadPhotoInput.files[0])})`;
  });

  document.addEventListener('keydown', onUploadPhotoEscKeydow);
});

buttonCancel.addEventListener(('click'), () => {
  closeFilterModal();
  uploadPhotoInput.value = '';
});

export { uploadPhotoForm, previewPhoto, effectFieldset, buttonIncreaseScale, buttonDecreaseScale, scaleValue, closeFilterModal };

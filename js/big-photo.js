import { usersPhotoList, similarPhotoData } from './users.js';

const useresPhotoItems = Array.from(usersPhotoList.querySelectorAll('.picture'));
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCounter = bigPicture.querySelector('.comments-count');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const buttonCloseBigPicture = bigPicture.querySelector('.big-picture__cancel');

const commentCouner = bigPicture.querySelector('.social__comment-count');
const commentLoader= bigPicture.querySelector('.comments-loader');

const createComment = (item) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newCommentImg = document.createElement('img');
  newCommentImg.classList.add('social__picture');
  newCommentImg.src = item.avatar;
  newCommentImg.alt = item.name;
  newCommentImg.width = '35';
  newCommentImg.height = '35';
  newComment.append(newCommentImg);

  const newCommentText = document.createElement('p');
  newCommentText.textContent = item.message;
  newComment.append(newCommentText);

  commentsList.append(newComment);
};

const getBigPicture = (k) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  commentCouner.classList.add('hidden'); //Временно
  commentLoader.classList.add('hidden'); //Временно

  const PhotoData = similarPhotoData[k];

  bigPictureImg.src = PhotoData.url;
  bigPictureLikes.textContent = PhotoData.likes;
  bigPictureCommentsCounter.textContent = PhotoData.comments.length;
  bigPictureCaption.textContent = PhotoData.description;

  commentsList.innerHTML = '';

  similarPhotoData[k].comments.forEach((comment) => {
    createComment(comment);
  });
};


useresPhotoItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    getBigPicture(i);
  });
});

document.addEventListener('keydown', (e) => {
  if( e.keyCode === 27 ) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

buttonCloseBigPicture.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

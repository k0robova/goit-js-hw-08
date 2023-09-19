import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
const list = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img class="gallery__image" src='${preview}' alt='${description}' />
  </a>
</li>`
    )
    .join('');
}

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

const gallery = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

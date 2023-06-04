import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

// Creating Markup
const markupForTaks = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('');

//add a markup to the page, add a listener and declaring function
galleryRef.innerHTML = markupForTaks;
galleryRef.addEventListener("click", onGalleryClick);

//function
function onGalleryClick (e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return
  }

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
  instance.show()
  if (!instance) {
    return;
  }

  galleryRef.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close()
    }
  })
}

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const newGallery = (items) => {
    return (
        galleryItems
            .map(
                (item) =>
                    `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
               <img
                  class="gallery__image"
                  src="${item.preview}"
                  data-source="${item.original}"
                  alt="${item.description}"
               />
            </a>
         </div>`
            )
            .join("")
    );
};

gallery.insertAdjacentHTML("beforeend", newGallery(galleryItems));
gallery.addEventListener("click", clickOnImage);

function clickOnImage(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const selectedImg = evt.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`)

    instance.show();

  gallery.addEventListener("keydown", (closed) => {
      if (closed.key === "Escape") {
          instance.close();
    }
  });
}
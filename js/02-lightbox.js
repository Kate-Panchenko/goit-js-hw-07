import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const newGallery = (items) => {
    return (
        galleryItems
            .map(
                (item) =>
                    `<li>
                        <a class="gallery__item" href="${item.original}">
                            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                        </a>
                    </li>`)
            .join("")
    );
};

gallery.insertAdjacentHTML("beforeend", newGallery(galleryItems));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const markup = [];

galleryItems.forEach(({ preview, original, description }) => {
    
    markup.push(`

    <li>
      <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
      </a>
    </li>
  `)    
})

galleryRef.insertAdjacentHTML('beforeend', markup.join(' '));
const itemsRef = document.querySelectorAll('li');
itemsRef.forEach(element => {
  element.style.listStyleType = 'none';
})
  
    var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        
    });


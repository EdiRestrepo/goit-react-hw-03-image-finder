import React from "react";
import css from './ImageGalleryItem.module.scss'

function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map((image) => {
        return (
          <li className={css["imageGalleryItem"]} key={image.id}>
            <img className={css["imageGalleryItem-image"]} src={image.webformatURL} alt={image.tags}/>
          </li>
        );
      })
      }
    </>
  );
}

export default ImageGalleryItem;

import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import propTypes from 'prop-types';
import s from './ImageGallery.module.css';

export default function ImageGallery({ galleryPhotos, onOpenModal }) {
  return (
    <ul className={s.ImageGallery}>
      {galleryPhotos.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          previewUrl={webformatURL}
          imageUrl={largeImageURL}
          onClickImage={onOpenModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  onOpenModal: propTypes.func,
  galleryPhotos: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number,
      webformatURL: propTypes.string,
      largeImageURL: propTypes.string,
    }),
  ),
};

import propTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  previewUrl,
  imageUrl,
  onClickImage,
}) {
  return (
    <li className={s.ImageGalleryItem} onClick={e => onClickImage(e)}>
      <img
        src={previewUrl}
        alt=""
        className={s.imageImageGalleryItem}
        data-url={imageUrl}
        width="150"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  previewUrl: propTypes.string,
  imageUrl: propTypes.string,
  onClickImage: propTypes.func,
};

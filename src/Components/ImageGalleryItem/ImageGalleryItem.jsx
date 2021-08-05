import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imgId, imgName, webFormatImg,largeImage,openModal}) => (
    
  <li key={imgId}
    onClick={() => { openModal(largeImage); }}
    className={styles.ImageGalleryItem}>
    <img src={webFormatImg}
      alt={imgName}
      className={styles.ImageGalleryItemImage} /></li>
);
 



ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imgId: PropTypes.string.isRequired,
      imgName: PropTypes.string.isRequired,
      webFormatImg: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
      openModal:PropTypes.func.isRequired,
    }),
  ),
};

export default ImageGalleryItem;
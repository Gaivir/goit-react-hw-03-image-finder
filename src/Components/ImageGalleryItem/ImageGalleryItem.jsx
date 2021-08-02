import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imgId, imgName, imgWebformatURL, onClickModal }) => (
    
  <li key={imgId} onClick={onClickModal} className={styles.ImageGalleryItem}><img src={imgWebformatURL} alt={imgName} className={styles.ImageGalleryItemImage}/></li>
);
 



ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imgId: PropTypes.string.isRequired,
      imgName: PropTypes.string.isRequired,
      imgWebformatURL: PropTypes.string.isRequired,
      // imgLargeImageURL: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGalleryItem;
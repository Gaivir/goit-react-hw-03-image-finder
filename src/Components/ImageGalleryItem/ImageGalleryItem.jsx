import PropTypes from 'prop-types';
// import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({images}) => (
    images.map(({imgId, imgName, imgWebformatURL, imgLargeImageURL }) => (
        <li key={imgId}><img src={imgWebformatURL} alt={imgName} /></li>
    ))
 
)


ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imgId: PropTypes.string.isRequired,
      imgName: PropTypes.string.isRequired,
      imgWebformatURL: PropTypes.string.isRequired,
      imgLargeImageURL: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGalleryItem;
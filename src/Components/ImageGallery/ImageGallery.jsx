
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';



const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, name, webformatURL }) => (
      <ImageGalleryItem
        imgId={id}
        imgName={name}
        imgWebformatURL={webformatURL}
      // onClickModal = 
      />))}
   </ul>
)




export default ImageGallery;

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';



const ImageGallery = ({ images, onClick}) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, name, webformatURL,largeImageURL}) => (
      <ImageGalleryItem
        imgId={id}
        imgName={name}
        webFormatImg={webformatURL}
         largeImage={largeImageURL}
        openModal={onClick}
      />))}
   </ul>
)




export default ImageGallery;
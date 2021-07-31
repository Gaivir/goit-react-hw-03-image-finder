
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import styles from './ImageGallery.module.css';

const ImageGallery = (images) => (
  images.map(({ id, name, webformatURL, largeImageURL }) => (
    <ul className="ImageGallery">
  <ImageGalleryItem
        imgId={id}
        imgName={name}
        imgWebformatURL={webformatURL}
        imgLargeImageURL={largeImageURL}
      />
</ul>))
)




export default ImageGallery;
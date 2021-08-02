import { Component } from "react";
import imgsApi  from './services/imgs-api';
import styles from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button';
import Spinner from './Components/Loader/Loader';


class App extends Component {
  state = {
    images: [],
    showModal: false,
    webformatURL: '',
    largeImageURL: '',
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
  }

 
  
  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searchQuery !== this.state.searchQuery) {
      this.fetchImgs();
      this.scrollTo();
      
  }
}
  
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
    })
  };

  fetchImgs = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };
    this.setState({ isLoading: true });

    imgsApi.fetchImgs(options)
      .then(images => { this.setState(prevState => ({ images: [...prevState.images, ...images], currentPage: prevState.currentPage + 1, })) });
   
  }
 
 scrollTo = () => {
   window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
  }


  
  imgModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  };
  
 
  
  
  
  
  render() {
    // const visibleContacts = this.getVisibleContacts();
    const { images, showModal, largeImageURL,isLoading } = this.state;
    
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery}/>
        {showModal &&
          <Modal onClose={this.imgModal}>
          <img src={largeImageURL} alt='foto' />
          </Modal> }
        <ImageGallery
          images={images}
        />
        {images.length > 0 && !isLoading && <Button
          onClick={this.fetchImgs} />}

        {isLoading && <Spinner />}

      </div>
    )
  }
}


export default App;

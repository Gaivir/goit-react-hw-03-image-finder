import { Component } from "react";
import imgsApi  from './services/imgs-api';
import styles from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button';


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
    this.setState({searchQuery: query, currentPage: 1, images:[]})
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
    const { images, showModal, largeImageURL } = this.state;
    
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery}/>
        {showModal && <Modal
          url={largeImageURL}
          />}
        <ImageGallery
          images={images}
        />
        {images.length > 0 && <Button
          onClick={this.fetchImgs} />}

      </div>
    )
  }
}


export default App;

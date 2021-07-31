import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        text:"",

    }
    
      handleSubmit = event => {
    event.preventDefault();
         this.props.onSubmit(this.state);
         this.formReset();
         
    }
    
    formReset = () => {
        this.setState({
            text: '',
           
        })
    }
    render() {
    
        return (
        <header className={styles.Searchbar}>
  <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)

}
}




export default Searchbar;
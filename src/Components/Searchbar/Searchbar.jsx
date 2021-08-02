import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query:"",
    }




// 1. Звязуємо наш текст в стейті з даними що ввів користувач
    handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  }
    
// 2. Сабмітимо форму дані, що ввів користувача записуємо в пропс onSubmit і скидуємо пошук Reset
      handleSubmit = event => {
    event.preventDefault();
         this.props.onSubmit(this.state.query);
          this.formReset();
         
    }
    
// 3. Скидає пошук від даних користувача
    formReset = () => {
        this.setState({
            query: '',
           
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
    value={this.state.query}
    onChange={this.handleChange}
    />
  </form>
</header>
)

}
}




export default Searchbar;
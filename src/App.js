import { Component } from "react";
import Searchbar from './Components/Searchbar/Searchbar';


class App extends Component {
  state = {
    images :[],
    filter: "",
  }

    onChangFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };
  
   getVisibleContacts = () => {
    const {filter, images} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return images.filter(image => image.name.toLowerCase().includes(normalizedFilter),
    );
   }
  
  
  
  
//   formSubmitHandler = () => {
    
// }
  
  
  render() {
    // const visibleContacts = this.getVisibleContacts();
    
    return (
      <>
        <Searchbar/>

    </>
    )






}
}


export default App;

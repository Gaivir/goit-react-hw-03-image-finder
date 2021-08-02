// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Component } from "react";

 class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader type="Audio" color="#00BFFF" height={80} width={80} />
    );
  }
}

export default Spinner;


// export default class Loader extends React.Component {
//   //other logic
//   render() {
//     return (
//       <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs
//       />
//     );
//   }
// }
// import PropTypes from 'prop-types';
// // import styles from './Modal.module.css';


// const Modal = ({url}) => (

//     <div className="Overlay">
//         <div className="Modal">
//             <img src={url} alt=""/>
//         </div>
//     </div>
// );

// Modal.propTypes = {
//    url: PropTypes.string.isRequired,
//     largeNameImg: PropTypes.string.isRequired,
// };

// export default Modal;


import { Component } from 'react';
import styles from './Modal.module.css'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root');

 class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillUnmount() {
        console.log('Modal componentWillUnmount');

        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
                console.log("Нажали ESC");

                this.props.onClose();
            }
    }

    handlOverlayClick = event => {
        console.log('кликнули в оверлей');

        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        const { children } = this.props;

        return createPortal(
 <div className={styles.Overlay} onClick={this.handlOverlayClick}>
                <div className={styles.Modal}>

    {children}
    
  </div>
    </div>, modalRoot)
    }
}

Modal.propTypes = {
    children: PropTypes.element.isRequired
};

export default Modal;
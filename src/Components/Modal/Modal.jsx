import PropTypes from 'prop-types';
// import styles from './Modal.module.css';


const Modal = ({url}) => (

    <div className="Overlay">
        <div className="Modal">
            <img src={url} alt=""/>
        </div>
    </div>
);

Modal.propTypes = {
   url: PropTypes.string.isRequired,
    largeNameImg: PropTypes.string.isRequired,
};

export default Modal;
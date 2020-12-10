import { Component } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={e => this.handleBackDropClick(e)}>
        <div className={Modal}>
          <div
            className={s.ModalButtonWrapper}
            onClick={() => this.props.onCloseModal()}
          >
            <AiOutlineCloseCircle color="white" size="25px" />
          </div>
          <img src={this.props.imageUrl} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

import React, { Component } from "react";
import css from ':/Modal.module.scss'

export class Modal extends Component {
  render() {
    const {imageModal, typeImage} = this.props;
    return (
      <div className={css["overlay"]}>
        <div className={css["modal"]}>
          <img src={imageModal} alt={typeImage} />
        </div>
      </div>
    );
  }
}

export default Modal;

import React from "react";

const Modal = ({ selectedImg }) => {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt="enlarged picture" />
    </div>
  )
}

export default Modal;
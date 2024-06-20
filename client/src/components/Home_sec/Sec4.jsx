import React, { useState } from 'react';
import './Sec4.scss';
import video from '../../../public/Videos/yoxlanis 2.mp4';
import ScrollButton from '../ScrollButton/ScrollButton';
const Sec4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="App">
      <button onClick={handleOpenModal} className="openVideoBtn"><i className="fa-solid fa-play"></i></button>
      <h3>Be Creative Go Beyond!</h3>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>&times;</span>
            <video id="videoPlayer" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
<ScrollButton/>
    </>
  );
};

export default Sec4;

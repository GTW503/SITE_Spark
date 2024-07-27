import React, { useState } from 'react';
import './SubmitCV.css';
import SubmitCVModal from './SubmitCVModal';

const SubmitCV: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="submit-cv">
      <h1>Soumettre CV</h1>
      <button onClick={toggleModal} className="submit-button">Soumettre votre CV</button>
      <SubmitCVModal open={isModalOpen} handleClose={toggleModal} />
    </div>
  );
};

export default SubmitCV;

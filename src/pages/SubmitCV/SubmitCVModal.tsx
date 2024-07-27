import React from 'react';
import './SubmitCVModal.css';
import CVForm from './CVForm';

interface SubmitCVModalProps {
  open: boolean;
  handleClose: () => void;
}

const SubmitCVModal: React.FC<SubmitCVModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Soumettre votre CV</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="modal-content">
          <CVForm />
        </div>
      </div>
    </div>
  );
};

export default SubmitCVModal;

import React from 'react';
import './ChatModal.css';

interface ChatModalProps {
  open: boolean;
  handleClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Discuter avec nous</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="modal-content">
          <input type="text" placeholder="Votre message" className="modal-input" autoFocus />
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleClose}>Annuler</button>
          <button className="modal-button" onClick={handleClose}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;

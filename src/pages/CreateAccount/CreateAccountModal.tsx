import React from 'react';
import './CreateAccountModal.css';

interface CreateAccountModalProps {
  open: boolean;
  handleClose: () => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Créer un compte</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="modal-content">
          <input type="text" placeholder="Nom" className="modal-input" autoFocus />
          <input type="email" placeholder="Email" className="modal-input" />
          <input type="password" placeholder="Mot de passe" className="modal-input" />
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleClose}>Annuler</button>
          <button className="modal-button" onClick={handleClose}>Créer</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;

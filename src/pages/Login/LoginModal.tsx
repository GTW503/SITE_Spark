import React from 'react';
import './LoginModal.css';

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Se connecter</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="modal-content">
          <input type="email" placeholder="Email" className="modal-input" autoFocus />
          <input type="password" placeholder="Mot de passe" className="modal-input" />
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleClose}>Annuler</button>
          <button className="modal-button" onClick={handleClose}>Se connecter</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

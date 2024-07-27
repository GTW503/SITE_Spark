import React from 'react';
import './ContactModal.css';

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Contactez-nous</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="modal-content">
          <input type="text" placeholder="Nom" className="modal-input" />
          <input type="email" placeholder="Email" className="modal-input" />
          <input type="text" placeholder="Sujet" className="modal-input" />
          <textarea placeholder="Message" className="modal-input" rows={4}></textarea>
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleClose}>Annuler</button>
          <button className="modal-button" onClick={handleClose}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

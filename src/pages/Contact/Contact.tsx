import React, { useState } from 'react';
import './Contact.css';
import ContactModal from './ContactModal';

const Contact: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <button onClick={toggleModal}>Contacter nous</button>
      <ContactModal open={isModalOpen} handleClose={toggleModal} />
    </div>
  );
};

export default Contact;

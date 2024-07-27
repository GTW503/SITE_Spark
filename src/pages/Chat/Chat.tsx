import React, { useState } from 'react';
import './Chat.css';
import ChatModal from './ChatModal';

const Chat: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="chat">
      <h1>Discuter avec le chat</h1>
      <button onClick={toggleModal}>Ouvrir le chat</button>
      <ChatModal open={isModalOpen} handleClose={toggleModal} />
    </div>
  );
};

export default Chat;

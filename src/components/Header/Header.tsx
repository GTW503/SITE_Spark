import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CVForm from '../../pages/SubmitCV/CVForm'; // Assurez-vous que le chemin est correct
import sparkLogo from '../../assets/spark.jpg';

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={sparkLogo} alt="Sparkcorporation Logo" className="logo-image" />
            <span className="logo-text">Sparkcorporation</span>
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><button onClick={openModal} className="nav-button">Envoyer CV</button></li>
            <li><Link to="/projects">Réalisations</Link></li>
            <li><Link to="/chat">Chatbot</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="dropdown">
            <button className="dropdown-button">
              <i className="fas fa-user-circle"></i>
              <span>Compte</span>
            </button>
            <div className="dropdown-content">
              <Link to="/create-account">Créer un compte</Link>
              <Link to="/login">Se connecter</Link>
            </div>
          </div>
        </nav>
      </header>
      <CVForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;

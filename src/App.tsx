import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SubmitCV from './pages/SubmitCV/SubmitCV';
import Projects from './pages/Projects/Projects';
import Chat from './pages/Chat/Chat';
import Contact from './pages/Contact/Contact';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Login from './pages/Login/Login';
import SubmitCVModal from './pages/SubmitCV/SubmitCVModal'; // Assurez-vous que le chemin est correct

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <Header openModal={openModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/submit-cv" element={<SubmitCV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <SubmitCVModal open={isModalOpen} handleClose={closeModal} />
    </Router>
  );
};

export default App;

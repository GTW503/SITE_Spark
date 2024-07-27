import React, { useState, useEffect } from 'react';
import './Home.css';
import photo1 from '../../assets/photo1.jpeg';
import photo2 from '../../assets/photo2.avif';
import photo3 from '../../assets/photo3.avif';
import photo4 from '../../assets/photo4.jpg';
import photo5 from '../../assets/photo5.jpg';

const sections = [
  {
    image: photo1,
    text: 'Bienvenue chez Sparkcorporation. Découvrez nos solutions innovantes pour vos besoins technologiques.'
  },
  {
    image: photo2,
    text: 'À SPARK CORPORATION, nous croyons en la puissance de l’innovation pour transformer le monde..'
  },
  {
    image: photo3,
    text: 'Chez SPARK CORPORATION, notre objectif est simple : vous aider à réussir. Avec des solutions innovantes et un engagement sans faille envers la qualité, nous sommes déterminés à fournir des résultats qui dépassent vos attentes. Découvrez comment nous pouvons collaborer pour atteindre vos objectifs..'
  },
  {
    image: photo4,
    text: 'SPARK CORPORATION est votre allié pour transformer vos défis en opportunités.'
  },
  {
    image: photo5,
    text: 'Avec une équipe d’experts et des technologies avancées, nous sommes prêts à vous aider à redéfinir ce qui est possible pour votre entreprise. Ensemble, faisons l’avenir briller..'
  }
];

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection(prevSection => (prevSection + 1) % sections.length);
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`section ${index === currentSection ? 'section-enter' : 'section-exit'}`}
        >
          <div className="overlay"></div>
          <img src={section.image} alt={`Section ${index + 1}`} className="section-image" />
          <div className="content">
            <h1>{section.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

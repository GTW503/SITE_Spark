import React from 'react';
import './About.css';
import client1 from '../../assets/im1.jpg';
import client2 from '../../assets/im2.jpg';
import client3 from '../../assets/im3.avif';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>Nos différents offres et services</h2>
        <div className="offers">
          <div className="offer-card">Projet Création d'application</div>
          <div className="offer-card">Projet informatique portée Communautaire</div>
          <div className="offer-card">Projet mobile</div>
          <div className="offer-card">Projet de Prêt entre Entreprise</div>
        </div>
      </section>
      <section className="ongoing-projects-section">
        <h2>Projets en cours de financement</h2>
        <div className="projects">
          <div className="project-card">
            <img src={client1} alt="Projet 1" />
            <h3>Accès Pour Tous</h3>
            <p>Voir la vidéo de présentation du projet</p>
            <button>Découvrir et financer ce projet</button>
          </div>
          <div className="project-card">
            <img src={client2} alt="Projet 2" />
            <h3>projet gestion D’une École</h3>
            <p>Voir la vidéo de présentation du projet</p>
            <button>Découvrir et financer ce projet</button>
          </div>
          <div className="project-card">
            <img src={client3} alt="Projet 3" />
            <h3>Accès Pour Tous</h3>
            <p>Voir la vidéo de présentation du projet</p>
            <button>Découvrir et financer ce projet</button>
          </div>
          <div className="project-card">
            <img src={client1} alt="Projet 4" />
            <h3>Construction D’une École</h3>
            <p>Voir la vidéo de présentation du projet</p>
            <button>Découvrir et financer ce projet</button>
          </div>
        </div>
      </section>
      <section className="client-reviews-section">
        <h2>Que Disent Nos Clients</h2>
        <div className="reviews">
          <div className="review-card">
            <img src={client1} alt="Client 1" />
            <p>"Les services de Sparkcorporation sont tout simplement incroyables! Je suis vraiment satisfait du soutien que j'ai reçu."</p>
            <h4>Ornella</h4>
          </div>
          <div className="review-card">
            <img src={client2} alt="Client 2" />
            <p>"Sparkcorporation a transformé notre projet en réalité. Leur équipe est toujours disponible et prête à aider."</p>
            <h4>Cynthia</h4>
          </div>
          <div className="review-card">
            <img src={client3} alt="Client 3" />
            <p>"Grâce à Sparkcorporation, nous avons pu atteindre nos objectifs plus rapidement que prévu. Je les recommande vivement."</p>
            <h4>Amatré</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

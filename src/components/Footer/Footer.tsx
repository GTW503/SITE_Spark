import React from 'react';
import './Footer.css';
import logo from '../../assets/image1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left animated fadeInLeft">
          <img src={logo} alt="Sparkcorporation Logo" className="footer-logo" />
          <p>
            Sparkcorporation
            <br />
            1234 Spark Avenue
            <br />
            Lomé, Togo
          </p>
          <p>
            +228 90 00 00 00
            <br />
            contact@sparkcorporation.tg
          </p>
        </div>
        <div className="footer-center animated fadeInUp">
          <ul className="footer-links">
            <li><a href="#">À PROPOS</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">PROJETS</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CARTE DU SITE</a></li>
          </ul>
        </div>
        <div className="footer-right animated fadeInRight">
          <p>Suivez-nous sur les réseaux sociaux</p>
          <div className="footer-social">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.whatsapp.com"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="https://www.tiktok.com"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom animated fadeInUp">
        <p>
          Sparkcorporation propose un accompagnement individualisé pour chaque personne en situation de handicap souhaitant intégrer l’un de nos établissements. Vous pouvez être mis en relation avec notre référent handicap ou bénéficier de l’accompagnement de nos partenaires.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

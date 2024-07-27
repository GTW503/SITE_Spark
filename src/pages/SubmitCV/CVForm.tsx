import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './CVForm.css';

interface CVFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVForm: React.FC<CVFormProps> = ({ isOpen, onClose }) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID', // à remplacer par celui de Spark
        'YOUR_TEMPLATE_ID', // à remplacer par celui de Spark
        form.current,
        'YOUR_USER_ID' // remplacer par le user_id de Sparkcorporation
      ).then((result) => {
        console.log(result.text);
        alert('Message envoyé avec succès!');
      }, (error) => {
        console.log(error.text);
        alert('Erreur lors de l\'envoi du message');
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cv-form-modal">
      <div className="cv-form-modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <form ref={form} onSubmit={sendEmail} className="cv-form">
          <div className="form-group">
            <select name="genre" required>
              <option value="">Sélectionner votre genre</option>
              <option value="Monsieur">Monsieur</option>
              <option value="Madame">Madame</option>
              <option value="Mademoiselle">Mademoiselle</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" name="nom" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <input type="text" name="prenom" placeholder="Votre prénom" required />
          </div>
          <div className="form-group">
            <input type="text" name="quartier" placeholder="Votre quartier" required />
          </div>
          <div className="form-group">
            <input type="text" name="adresse" placeholder="Votre adresse" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Votre email" required />
          </div>
          <div className="form-group">
            <input type="text" name="numero" placeholder="Votre numéro" required />
          </div>
          <div className="form-group">
            <select name="type_demande" required>
              <option value="">Type de demande</option>
              <option value="Emploi">Emploi</option>
              <option value="Stage">Stage</option>
              <option value="Stage de mémoire">Stage de mémoire</option>
              <option value="Apprentissage">Apprentissage</option>
              <option value="Emploi de vacances">Emploi de vacances</option>
            </select>
          </div>
          <div className="form-group">
            <select name="secteur_recherche" required>
              <option value="">Secteur de recherche</option>
              <option value="Développeur d'application">Développeur d'application</option>
              <option value="Réseaux et communication">Réseaux et communication</option>
              <option value="Autres">Autres</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" name="nationalite" placeholder="Votre nationalité" required />
          </div>
          <div className="form-group">
            <label htmlFor="date_debut">Date de début:</label>
            <input type="date" id="date_debut" name="date_debut" required />
          </div>
          <div className="form-group">
            <label htmlFor="date_fin">Date de fin:</label>
            <input type="date" id="date_fin" name="date_fin" required />
          </div>
          <div className="full-width">
            <label htmlFor="cv">Curriculum Vitae:</label>
            <input type="file" id="cv" name="cv" required />
          </div>
          <div className="full-width">
            <label htmlFor="lettre_motivation">Lettre de Motivation:</label>
            <input type="file" id="lettre_motivation" name="lettre_motivation" required />
          </div>
          <div className="full-width checkbox-label">
            <label>
              <input type="checkbox" name="accept_terms" required />
              J'accepte que mes données personnelles soient traitées
            </label>
          </div>
          <div className="full-width">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CVForm;

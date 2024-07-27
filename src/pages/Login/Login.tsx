import React from 'react';
import './Login.css'; // Assurez-vous que ce chemin est correct

const Login: React.FC = () => {
  return (
    <div className="login">
      <h1>Se connecter</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;

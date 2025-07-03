
import React from 'react'
import InputMail from '../../core/components/forms/InputMail'
import { Input, Button } from '/src/core/kendo'
import { useAuth } from '../../core/redux/AuthContext';

const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh' // plein écran
    };

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '300px',
  padding: '2rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundColor: '#fff'
};

function Login() {
  const {isConnected, login} = useAuth();

  const [loginMail, setLoginMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(false);

  const isFormValid = password.length > 0 && emailValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginMail, password);
    // Simuler une connexion réussie
    login({ login: loginMail, name: 'Bob' });
  }

  return (
    <div style={containerStyle}>
      {!isConnected ? (
      <form noValidate style={formStyle} onSubmit={handleSubmit}>
        <h1>Connexion</h1>
        <InputMail  disabled={false} validating={true} value={loginMail}
          onChange={(e) => setLoginMail(e.target.value)}
          onValidChange={setEmailValid}
        />

        <Input label="Mot de passe" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <Button type="submit" themeColor={'primary'} disabled={!isFormValid}>Se connecter</Button>
      </form>
      ):(<p>Vous êtes déjà connecté</p>)}
    </div>
  )
}



export default Login
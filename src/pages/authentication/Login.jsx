
import React from 'react'
import InputMail from '../../core/components/forms/InputMail'
import { Input, Button } from '/src/core/kendo'

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
  return (
    <div style={containerStyle}>
      <form noValidate style={formStyle}>
        <h1>Connexion</h1>
        <InputMail  disabled={false} validating={true} />
        
        <Input label="Mot de passe" type="password" />
        
        <Button type="submit" themeColor={'primary'}>Se connecter</Button>
      </form>

    </div>
  )
}



export default Login
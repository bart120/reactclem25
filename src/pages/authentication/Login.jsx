
import React from 'react'
import InputMail from '../../core/components/forms/InputMail'
import { Input } from '@progress/kendo-react-inputs'

function Login() {
  return (
    <div>
      <h1>Connexion</h1>
      <form noValidate>
        <InputMail label={"Login"} disabled={true} />
      </form>

    </div>
  )
}



export default Login
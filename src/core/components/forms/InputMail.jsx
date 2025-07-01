import React, { useState } from 'react'
import { Input } from '/src/core/kendo'
import PropTypes from 'prop-types'

const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function InputMail({label='Email', validating=false, ...otherProps}) {
    const [value, setValue] = useState('');

    const onChangeInput = (event) => {
        setValue(event.target.value);
    };

    const showError = validating && value && !regEx.test(value);

  return (
    <div>
        <Input label={label} 
        type="email" {...otherProps}
        onChange={onChangeInput} 
        value={value}
        />
        {showError && (<div style={{ color: 'red' }}>Adresse mail invalide</div>)}
     </div>
    )
}

InputMail.propTypes = {
  label: PropTypes.string.isRequired,
}
/*
InputMail.defaultProps = {
  label: 'Email',
  validating: false,
}jusqu'à version 17, en v18 directement dans la déclaration de la fonction*/

export default InputMail
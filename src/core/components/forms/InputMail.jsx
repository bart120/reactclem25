import React from 'react'
import { Input } from '/src/core/kendo'
import PropTypes from 'prop-types'

function InputMail({label, ...otherProps}) {
  return (
    <Input label={label} type="email" {...otherProps} />
  )
}

InputMail.propTypes = {
  label: PropTypes.string.isRequired,
}

export default InputMail
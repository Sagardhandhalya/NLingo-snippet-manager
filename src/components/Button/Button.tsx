import { FC } from 'react'

import { IbuttonProps } from './Types'
import './Button.scss'

const Button: FC<IbuttonProps> = ({ text, onClick, type }) => {
  return (
    <button
      className="primary_btn"
      type={type}
      onClick={() => onClick((p) => p + 1)}
    >
      {text}
    </button>
  )
}

export default Button

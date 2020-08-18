import * as React from 'react'
import './styles.module.scss'

interface Props {
  inputElements: {
    placeholder: string
  }[]
}

export const FormMapper = (props: Props) => {
  const { inputElements } = props
  return (
    <form className='form'>
      {inputElements.map((element) => (
        <input
          className='form_element'
          key={element.placeholder}
          placeholder={element.placeholder}
        />
      ))}
    </form>
  )
}

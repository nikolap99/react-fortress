import * as React from 'react';
import './styles.module.scss';

interface Props {
  inputElements: {
    placeholder: string;
    value?: string;
  }[];
  formStyle?: object;
}

const x = 5;
console.log(x);

export const FormMapper = (props: Props) => {
  const { inputElements, formStyle } = props;
  return (
    <form className='form' style={formStyle}>
      {inputElements.map((element) => (
        <input
          className='form_element'
          key={element.placeholder}
          placeholder={element.placeholder}
        />
      ))}
    </form>
  );
};

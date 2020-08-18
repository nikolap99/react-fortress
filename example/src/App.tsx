import React from 'react'

import { FormMapper } from 'react-fortress'
import 'react-fortress/dist/index.css'

const App = () => {
  return (
    <FormMapper
      inputElements={[
        { placeholder: 'Full name...' },
        { placeholder: 'Email' },
        { placeholder: 'Password' }
      ]}
    />
  )
}

export default App

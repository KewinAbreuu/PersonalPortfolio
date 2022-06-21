
import React, { useState } from 'react'
import Route from './routes'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './globalStyle'

function App () {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Route/>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './store'

import { GlobalStyle } from './global-style'

// Modules
import { Login } from './modules/login'

function App() {
  return (
    <Provider store={Store}>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    </Provider>
  )
}

export default App

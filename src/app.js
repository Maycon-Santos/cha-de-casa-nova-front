import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './config/redux/store'

// Modules
import { Login } from './modules/login'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    </Provider>
  )
}

export default App

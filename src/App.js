import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import PokeDex from './pages/PokeDex'
import Error from './pages/Error'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/'>
          <PokeDex />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

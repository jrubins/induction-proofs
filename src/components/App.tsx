import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Redirect, Route, Switch, NavLink } from 'react-router-dom'

import SummationNNumbersPage from './pages/summationNNumbers/SummationNNumbersPage'

const App = () => {
  return (
    <div className="app">
      <header>
        <div>Induction Proofs</div>
        <nav className="nav">
          <ul>
            <li className="nav__item">
              <NavLink to="/summation-n-numbers">
                Sum of first N numbers
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/summation-n-numbers">
            <SummationNNumbersPage />
          </Route>

          <Redirect to="/summation-n-numbers" />
        </Switch>
      </main>
    </div>
  )
}

export default hot(App)

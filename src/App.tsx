import type { Component } from 'solid-js'
import { lazy } from 'solid-js'
import { Router, Route, A } from '@solidjs/router'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const ButtonPage = lazy(() => import('./pages/Button'))
const ModalPage = lazy(() => import('./pages/Modal'))
const DropdownPage = lazy(() => import('./pages/Dropdown'))
const MenuPage = lazy(() => import('./pages/Menu'))

const App: Component = () => {
  return (
    <div>
      <div class='drawer'>
        <input id='nav-drawer' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content flex flex-col'>
          <Navbar />
          {/* The main content is managed by the router */}
          <Router>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/button' component={ButtonPage} />
            <Route path='/modal' component={ModalPage} />
            <Route path='/dropdown' component={DropdownPage} />
            <Route path='/menu' component={MenuPage} />
          </Router>
        </div>
        <div class='drawer-side'>
          <label for='nav-drawer' aria-label='close sidebar' class='drawer-overlay'></label>
          <ul class='menu bg-base-200 min-h-full w-80 p-4'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/button'>Buttons</a>
            </li>
            <li>
              <a href='/modal'>Modal</a>
            </li>
            <li>
              <a href='/dropdown'>Dropdown</a>
            </li>
            <li>
              <a href='/menu'>Menu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

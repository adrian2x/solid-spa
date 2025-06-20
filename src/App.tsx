import type { Component } from 'solid-js'
import { lazy } from 'solid-js'
import { Router, Route } from '@solidjs/router'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

const App: Component = () => {
  return (
    <>
      <div class='drawer'>
        <input id='nav-drawer' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content flex flex-col'>
          <Navbar />
          {/* The main content is managed by the router */}
          <Router>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
          </Router>
        </div>
        <div class='drawer-side'>
          <label for='nav-drawer' aria-label='close sidebar' class='drawer-overlay'></label>
          <ul class='menu bg-base-200 min-h-full w-80 p-4'>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

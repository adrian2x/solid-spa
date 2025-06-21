import type { Component } from 'solid-js'
import { lazy } from 'solid-js'
import { Router, Route, A } from '@solidjs/router'
import Navbar from './components/Navbar'
import { MenuItem, Menu } from './components/Menu'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const AlertPage = lazy(() => import('./pages/Alert'))
const ButtonPage = lazy(() => import('./pages/Button'))
const ModalPage = lazy(() => import('./pages/Modal'))
const DropdownPage = lazy(() => import('./pages/Dropdown'))
const MenuPage = lazy(() => import('./pages/Menu'))
const TabsPage = lazy(() => import('./pages/Tabs'))
const SkeletonPage = lazy(() => import('./pages/Skeleton'))
const LoadingPage = lazy(() => import('./pages/Loading'))
const DockPage = lazy(() => import('./pages/Dock'))
const ListPage = lazy(() => import('./pages/List'))
const CheckboxPage = lazy(() => import('./pages/Checkbox'))

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
            <Route path='/list' component={ListPage} />
            <Route path='/tabs' component={TabsPage} />
            <Route path='/skeleton' component={SkeletonPage} />
            <Route path='/loading' component={LoadingPage} />
            <Route path='/dock' component={DockPage} />
            <Route path='/alert' component={AlertPage} />
            <Route path='/checkbox' component={CheckboxPage} />
          </Router>
        </div>
        <div class='drawer-side'>
          <label for='nav-drawer' aria-label='close sidebar' class='drawer-overlay'></label>
          <Menu class='min-h-full w-80 p-4'>
            <MenuItem>
              <a href='/'>Home</a>
            </MenuItem>
            <MenuItem>
              <a href='/about'>About</a>
            </MenuItem>
            <MenuItem>
              <a href='/alert'>Alert</a>
            </MenuItem>
            <MenuItem>
              <a href='/button'>Buttons</a>
            </MenuItem>
            <MenuItem>
              <a href='/modal'>Modal</a>
            </MenuItem>
            <MenuItem>
              <a href='/dropdown'>Dropdown</a>
            </MenuItem>
            <MenuItem>
              <a href='/menu'>Menu</a>
            </MenuItem>
            <MenuItem>
              <a href='/list'>List</a>
            </MenuItem>
            <MenuItem>
              <a href='/dock'>Dock</a>
            </MenuItem>
            <MenuItem>
              <a href='/tabs'>Tabs</a>
            </MenuItem>
            <MenuItem>
              <a href='/skeleton'>Skeleton</a>
            </MenuItem>
            <MenuItem>
              <a href='/loading'>Loading</a>
            </MenuItem>
            <MenuItem>
              <a href='/checkbox'>Checkbox</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default App

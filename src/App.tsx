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
const InputPage = lazy(() => import('./pages/Input'))
const SelectPage = lazy(() => import('./pages/Select'))
const RadioPage = lazy(() => import('./pages/Radio'))
const TogglePage = lazy(() => import('./pages/Toggle'))
const CollapsePage = lazy(() => import('./pages/Collapse'))

const App: Component = () => {
  const menu = () => (
    <>
      <Menu class='min-h-full w-80 p-4'>
        <MenuItem>
          <a href='/'>Home</a>
        </MenuItem>
        <MenuItem>
          <a href='/alert'>Alert</a>
        </MenuItem>
        <MenuItem>
          <a href='/button'>Buttons</a>
        </MenuItem>
        <MenuItem>
          <a href='/collapse'>Collapse</a>
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
        <MenuItem>
          <a href='/radio'>Radio</a>
        </MenuItem>
        <MenuItem>
          <a href='/input'>Input</a>
        </MenuItem>
        <MenuItem>
          <a href='/select'>Select</a>
        </MenuItem>
        <MenuItem>
          <a href='/toggle'>Toggle</a>
        </MenuItem>
      </Menu>
    </>
  )

  return (
    <div>
      <div class='drawer'>
        <input id='nav-drawer' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content flex flex-col'>
          <Navbar />
          {/* The main content is managed by the router */}
          <div class='flex'>
            <div class='hidden flex-none lg:block'>{menu()}</div>

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
              <Route path='/input' component={InputPage} />
              <Route path='/select' component={SelectPage} />
              <Route path='/radio' component={RadioPage} />
              <Route path='/toggle' component={TogglePage} />
              <Route path='/collapse' component={CollapsePage} />
            </Router>
          </div>
        </div>
        <div class='drawer-side'>
          <label for='nav-drawer' aria-label='close sidebar' class='drawer-overlay'></label>
          {menu()}
        </div>
      </div>
    </div>
  )
}

export default App

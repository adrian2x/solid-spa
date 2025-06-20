import { getAuth } from 'firebase/auth'
import { useAuth, useFirebaseApp } from 'solid-firebase'
import { Show } from 'solid-js'
import { Login } from './Login'
import { Avatar } from './Avatar'

export default function Navbar() {
  const app = useFirebaseApp()
  const state = useAuth(getAuth(app))
  return (
    <nav class='navbar bg-base-300 w-full min-h-[40px]'>
      <div class='flex-none'>
        <label for='nav-drawer' class='btn btn-square btn-ghost' aria-label='open sidebar'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            class='inline-block h-6 w-6 stroke-current'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </label>
      </div>
      <div class='mx-2 flex-1 px-2'>Navbar</div>
      <Show when={!state.loading && !state.data}>
        <div class='flex-none'>
          <ul class='menu menu-horizontal'>
            <li>
              <Login />
            </li>
          </ul>
        </div>
      </Show>
      <Show when={state.data!}>
        <div class='flex gap-2'>
          <input type='text' placeholder='Search' class='input input-bordered w-24 md:w-auto' />
          <div class='dropdown dropdown-end'>
            <Avatar src={state.data.photoURL} />
            <ul
              tabindex='0'
              class='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
              <li>
                <a class='justify-between'>
                  Profile
                  <span class='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => getAuth(app).signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </Show>
    </nav>
  )
}

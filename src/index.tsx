/* @refresh reload */
import './index.css'
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import { initializeApp } from 'firebase/app'
import { FirebaseProvider } from 'solid-firebase'

import App from './App'

const app = initializeApp({
  apiKey: 'AIzaSyA3BkAujIBoXWjzpnIdF9K1e-aexuhqNnk',
  authDomain: 'gaccount-auth.firebaseapp.com',
  projectId: 'gaccount-auth',
  storageBucket: 'gaccount-auth.firebasestorage.app',
  messagingSenderId: '177242727609',
  appId: '1:177242727609:web:f4e8b51c29d8f7310da768',
  measurementId: 'G-3YN6R7XRHV'
})

// Register the service worker if supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

render(
  () => (
    <FirebaseProvider app={app}>
      <App />
    </FirebaseProvider>
  ),
  document.getElementById('app')!
)

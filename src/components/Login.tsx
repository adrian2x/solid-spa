import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useAuth, useFirebaseApp } from 'solid-firebase'

export function Login() {
  const app = useFirebaseApp()
  const signIn = () => signInWithPopup(getAuth(app), new GoogleAuthProvider())

  return (
    <button class='btn btn-ghost' onClick={signIn}>
      Log In
    </button>
  )
}

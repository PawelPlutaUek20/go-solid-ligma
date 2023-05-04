import { GoogleAuthProvider, User, getAuth, signInWithPopup } from 'firebase/auth'
import { Component } from 'solid-js'
import { useFirebaseApp } from './firebase/useFirebaseApp'
import { getPerson } from './api'

const LoginComponent: Component = () => {
    const app = useFirebaseApp()
    const signIn = () => signInWithPopup(getAuth(app), new GoogleAuthProvider())

    return <button onClick={signIn}>Sign In with Google</button>
}

const UserComponent: Component<{ data: User }> = ({ data }) => {
    return <div><button onClick={getPerson}>fetch</button><pre>{JSON.stringify(data, null, 2)}</pre></div>
}

export { UserComponent, LoginComponent }

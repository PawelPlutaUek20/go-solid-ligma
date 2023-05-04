import { Component, Match, Switch } from 'solid-js';
import { getAuth } from 'firebase/auth';
import { useFirebaseApp } from './firebase/useFirebaseApp';
import { useAuth } from './firebase/useAuth';
import { LoginComponent, UserComponent } from './Login';


const App: Component = () => {
  const app = useFirebaseApp()
  const state = useAuth(getAuth(app))

  return (
    <Switch>
      <Match when={state.loading}>
        <p>Loading...</p>
      </Match>
      <Match when={state.data === null}>
        <LoginComponent />
      </Match>
      <Match when={state.data}>
        <UserComponent data={state.data} />
      </Match>
    </Switch>
  )
}

export default App;

/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import { FirebaseProvider } from './firebase/FirebaseProvider';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyAjAZu8DhDHUaMSbPZehh0S8mFi2hKy7Ms",
  authDomain: "vite-push-notifications.firebaseapp.com",
  projectId: "vite-push-notifications",
  storageBucket: "vite-push-notifications.appspot.com",
  messagingSenderId: "205085345476",
  appId: "1:205085345476:web:ef00a4cbce0905a58beb91"
}

render(() => <FirebaseProvider config={firebaseConfig}><App /></FirebaseProvider>, root!);

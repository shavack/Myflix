import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn, SignUp, Browse } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { UseAuthListener } from './hooks';

export default function App() {
  const { user } = UseAuthListener();
  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
}

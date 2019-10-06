import React from "react";
import "./App.css";
import NavBar from "./components/layout/Navbar";

// Content
import Landing from "./components/content/Landing";
import Main from "./components/content/Main";

import { withAuth } from "@okta/okta-react";
import { useAuth } from "./auth";

const App = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);

  return (
    <div className="App">
      <NavBar user={user} auth={auth} authenticated={authenticated} />
      <header className="App-header">
        {authenticated !== null && !authenticated ? <Landing /> : <Main user={user} />}
      </header>
    </div>
  );
});

export default App;

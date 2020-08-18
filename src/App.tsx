import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import HomeWithoutAuth from "./HomeWithoutAuth";
import PostNote from "./PostNote";
import SearchNotes from "./SearchNotes";
import PostComplete from "./PostComplete";
import EditNote from "./EditNote";

function App() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <HomeWithoutAuth />;
  }
  return (
    <Router>
      <div className="container">
        <div className="side-content">
          <Sidebar />
        </div>
        <div className="main-content">
          <Switch>
            <Route path="/new_note">
              <PostNote />
            </Route>
            <Route path="/search">
              <SearchNotes />
            </Route>
            <Route path="/post_complete">
              <PostComplete />
            </Route>
            <Route path="/edit/:noteID">
              <EditNote />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

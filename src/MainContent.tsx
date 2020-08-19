import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import PostNote from "./PostNote";
import SearchNotes from "./SearchNotes";
import EditNote from "./EditNote";
import NotFound from "./NotFound";

export default MainContent;

function MainContent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/new_note">
        <PostNote />
      </Route>
      <Route path="/search">
        <SearchNotes />
      </Route>
      <Route path="/edit/:noteID">
        <EditNote />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

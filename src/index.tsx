import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import "easymde/dist/easymde.min.css";
import config from "./auth_config.json";

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientID}
    redirectUri={window.location.origin}
    audience={config.audience}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

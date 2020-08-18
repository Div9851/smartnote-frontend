import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Image } from "semantic-ui-react";

export default HomeWithoutAuth;

function HomeWithoutAuth() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="home-without-auth">
      <Image src="./logo_medium.png" centered />
      <div className="login-button">
        <Button color="teal" onClick={loginWithRedirect}>
          ログイン
        </Button>
      </div>
    </div>
  );
}

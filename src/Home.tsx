import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "semantic-ui-react";

export default Home;

function Home() {
  const { user } = useAuth0();
  return (
    <div className="home">
      <Image src="./logo_medium.png" centered />
      <h1>Hello, {user.given_name}!</h1>
    </div>
  );
}

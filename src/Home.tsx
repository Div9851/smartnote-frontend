import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default Home;

function Home() {
  const { isAuthenticated } = useAuth0();
  let content;
  if (!isAuthenticated) {
    content = <h1>ログインしていません</h1>;
  } else {
    content = <h1>ようこそ！</h1>;
  }
  return <div className="home">{content}</div>;
}

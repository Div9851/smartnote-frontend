import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";

export default withRouter(PostComplete);

function PostComplete(props: any) {
  const { isAuthenticated } = useAuth0();
  const { history } = props;
  useEffect(() => {
    if (!isAuthenticated) {
      alert("ログインして下さい");
      history.push("/");
    }
  });
  return (
    <div className="post-complete">
      <h1>メモを保存しました！</h1>
    </div>
  );
}

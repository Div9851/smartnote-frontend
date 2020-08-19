import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import SimpleMDE from "react-simplemde-editor";

export default withRouter(PostNote);

function PostNote(props: any) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { history } = props;
  const [text, updateText] = React.useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      alert("ログインして下さい");
      history.push("/");
    }
  }, [history, isAuthenticated]);

  const handleClick = async () => {
    try {
      const token = await getAccessTokenSilently();
      const requestBody = JSON.stringify({
        content: text,
      });
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/notes/new_note",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );

      if (response.status !== 200) {
        alert("メモの保存に失敗しました");
        console.error(`${response.status}: ${response.statusText}`);
        return;
      }
    } catch (error) {
      alert("メモの保存に失敗しました");
      console.error(error);
      return;
    }
    history.push("/post_complete");
  };
  return (
    <div>
      <h1>新しいメモ</h1>
      <SimpleMDE onChange={updateText} />
      <Button color="green" floated="right" onClick={handleClick}>
        保存
      </Button>
    </div>
  );
}

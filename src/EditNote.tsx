import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams, withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import SimpleMDE from "react-simplemde-editor";
import DeleteModal from "./DeleteModal";

export default withRouter(EditNote);

function EditNote(props: any) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { history } = props;
  const [text, updateText] = useState("");
  const { noteID } = useParams();

  useEffect(() => {
    const f = async () => {
      if (!isAuthenticated) {
        alert("ログインして下さい");
        history.push("/");
        return;
      }
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/notes/" + noteID,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status !== 200) {
          alert("メモの取得に失敗しました");
          console.error(`${response.status}: ${response.statusText}`);
          return;
        }

        const responseData = await response.json();
        updateText(responseData["content"]);
      } catch (error) {
        alert("メモの取得に失敗しました");
        console.error(error);
        return;
      }
    };
    f();
  }, [getAccessTokenSilently, history, isAuthenticated, noteID]);

  const handleChange = (value: string) => {
    updateText(value);
  };

  const handleClick = async () => {
    try {
      const token = await getAccessTokenSilently();
      const requestBody = JSON.stringify({
        content: text,
      });
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/notes/" + noteID,
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
    alert("メモを保存しました！");
    history.push("/");
  };

  const handleDelete = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/notes/" + noteID,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        alert("メモの削除に失敗しました");
        console.error(`${response.status}: ${response.statusText}`);
        return;
      }
    } catch (error) {
      alert("メモの削除に失敗しました");
      console.error(error);
      return;
    }
    alert("メモを削除しました");
    history.push("/");
  };

  return (
    <div>
      <h1>メモの編集</h1>
      <SimpleMDE value={text} onChange={handleChange} />
      <Button color="green" floated="right" onClick={handleClick}>
        保存
      </Button>
      <DeleteModal
        trigger={
          <Button negative floated="right">
            削除
          </Button>
        }
        onDelete={handleDelete}
      />
    </div>
  );
}

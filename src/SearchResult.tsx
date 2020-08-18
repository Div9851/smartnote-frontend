import React from "react";
import { withRouter } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import { Header, Icon, Segment } from "semantic-ui-react";

export default withRouter(SearchResult);

function SearchResult(props: any) {
  const { data, history } = props;
  const handleClick = (noteID: string) => {
    history.push("/edit/" + noteID);
  };

  if (data == null) {
    return (
      <div className="search-result">
        <Segment placeholder>
          <Header icon>
            <Icon name="search" />
            検索結果なし
          </Header>
        </Segment>
      </div>
    );
  }
  const hits = [];
  for (let i = 0; i < data["hits"].length; i++) {
    const updatedAt = new Date(data["hits"][i]["updatedAt"]);
    hits.push(
      <Segment
        className="hit-note"
        key={i}
        onClick={() => handleClick(data["hits"][i]["noteID"])}
      >
        <div className="updated-at">
          Last Update: {updatedAt.toLocaleString()}
        </div>
        <ReactMarkDown source={data["hits"][i]["content"]} />
      </Segment>
    );
  }
  return <div className="search-result">{hits}</div>;
}

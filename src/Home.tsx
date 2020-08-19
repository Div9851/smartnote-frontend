import React from "react";
import { Header, Icon } from "semantic-ui-react";

export default Home;

function Home() {
  return (
    <div className="app-home">
      <div className="app-name">
        <Header as="h1" icon>
          <Icon name="sticky note" />
          Smart Note
        </Header>
      </div>
      <div className="app-desc">
        <Header as="h2" dividing>
          Smart Noteとは？
        </Header>
        <p>
          <a href="https://ja.wikipedia.org/wiki/Markdown">Markdown</a>
          で記述したメモを保存・検索できるサービスです。 Markdownエディタには
          <a href="https://github.com/Ionaru/easy-markdown-editor">EasyMDE</a>
          を、検索エンジンには
          <a href="https://www.elastic.co/jp/elasticsearch/">Elasticsearch</a>
          を採用しています。
        </p>
      </div>
      <div className="app-desc">
        <Header as="h2" dividing>
          検索に関するTips
        </Header>
        <ul>
          <li>検索結果は更新時刻の新しい順に表示されます</li>
          <li>検索バーに何も入力しないと、全てのメモが表示されます</li>
        </ul>
      </div>
      <div className="app-desc">
        <Header as="h2" dividing>
          GitHubへのリンク
        </Header>
        <ul>
          <li>
            <a href="https://github.com/Div9851/smartnote-frontend">
              https://github.com/Div9851/smartnote-frontend
            </a>
          </li>
          <li>
            <a href="https://github.com/Div9851/smartnote-backend">
              https://github.com/Div9851/smartnote-backend
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

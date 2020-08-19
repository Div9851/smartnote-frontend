import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";
import { Button, Divider, Input, Pagination } from "semantic-ui-react";
import SearchResult from "./SearchResult";

export default withRouter(SearchNotes);

function SearchNotes(props: any) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { history } = props;
  const [searchText, updateSearchText] = React.useState("");
  const [searchResult, updateSearchResult] = React.useState(null);
  const [total, updateTotal] = React.useState(0);
  const [currentPage, updateCurrentPage] = React.useState(1);
  const pageSize = 5;

  useEffect(() => {
    if (!isAuthenticated) {
      alert("ログインして下さい");
      history.push("/");
    }
  });

  const handleChange = (e: any) => {
    updateSearchText(e.target.value);
  };

  const handleClick = () => {
    updateCurrentPage(1);
    fetchDataFromAPI(searchText, 1, pageSize);
  };

  const fetchDataFromAPI = async (
    searchText: string,
    currentPage: number,
    pageSize: number
  ) => {
    try {
      const token = await getAccessTokenSilently();
      const query = `?searchText=${encodeURIComponent(searchText)}&from=${
        pageSize * (currentPage - 1)
      }&size=${pageSize}`;
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/notes/match_notes" + query,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        alert("検索に失敗しました");
        console.error(`${response.status}: ${response.statusText}`);
        return;
      }
      const responseData = await response.json();

      if (responseData["total"] === 0) updateSearchResult(null);
      else updateSearchResult(responseData);
      updateTotal(responseData["total"]);
    } catch (error) {
      alert("検索に失敗しました");
      console.error(error);
      return;
    }
  };

  return (
    <div>
      <h1>メモを探す</h1>
      <div className="container">
        <div className="search-text">
          <Input type="text" fluid value={searchText} onChange={handleChange} />
        </div>
        <div className="search-button">
          <Button icon="search" onClick={handleClick} />
        </div>
      </div>
      <Divider />
      <SearchResult data={searchResult} />
      <div className="pagination">
        <Pagination
          activePage={currentPage}
          totalPages={Math.ceil(total / pageSize)}
          onPageChange={(e, data) => {
            const nextPage = data.activePage as number;
            updateCurrentPage(nextPage);
            fetchDataFromAPI(searchText, nextPage, pageSize);
          }}
        />
      </div>
    </div>
  );
}

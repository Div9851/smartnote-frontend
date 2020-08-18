import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Divider, Input, Pagination } from "semantic-ui-react";
import SearchResult from "./SearchResult";

export default SearchNotes;

function SearchNotes() {
  const { getAccessTokenSilently } = useAuth0();
  const [searchText, updateSearchText] = React.useState("");
  const [searchResult, updateSearchResult] = React.useState(null);
  const [total, updateTotal] = React.useState(0);
  const [currentPage, updateCurrentPage] = React.useState(1);
  const pageSize = 5;

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
      }
      const responseData = await response.json();

      if (responseData["total"] === 0) updateSearchResult(null);
      else updateSearchResult(responseData);
      updateTotal(responseData["total"]);
    } catch (error) {
      alert("検索に失敗しました");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>メモを探す</h1>
      <Input
        className="search-text"
        type="text"
        value={searchText}
        onChange={handleChange}
      />
      <span className="search-button">
        <Button icon="search" onClick={handleClick} />
      </span>
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

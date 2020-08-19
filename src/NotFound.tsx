import React from "react";
import { Image } from "semantic-ui-react";

export default NotFound;

function NotFound() {
  return (
    <Image
      src={process.env.PUBLIC_URL + "/internet_404_page_not_found.png"}
      size="medium"
      centered
    />
  );
}

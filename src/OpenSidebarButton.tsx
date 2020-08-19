import React from "react";
import { Button } from "semantic-ui-react";

export default OpenSidebarButton;

function OpenSidebarButton(props: any) {
  return (
    <div className="open-sidebar-button" onClick={props.onClick}>
      <Button icon="bars" />
    </div>
  );
}

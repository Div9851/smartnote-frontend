import React from "react";
import { Menu } from "semantic-ui-react";
import SidebarItems from "./SidebarItems";

export default Sidebar;

function Sidebar() {
  return (
    <Menu id="sidebar" attached borderless fixed="top" icon inverted vertical>
      <SidebarItems />
    </Menu>
  );
}

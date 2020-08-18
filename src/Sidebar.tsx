import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default Sidebar;

function Sidebar() {
  const { logout } = useAuth0();
  return (
    <Menu id="sidebar" attached borderless fixed="top" icon inverted vertical>
      <Menu.Item as={Link} to="/">
        <Icon name="home" size="large" />
      </Menu.Item>
      <Menu.Item as={Link} to="/new_note">
        <Icon name="edit" size="large" />
      </Menu.Item>
      <Menu.Item as={Link} to="/search">
        <Icon name="search" size="large" />
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        <Icon name="sign out" size="large" />
      </Menu.Item>
    </Menu>
  );
}

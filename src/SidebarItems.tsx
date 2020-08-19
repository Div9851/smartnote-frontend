import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default SidebarItems;

function SidebarItems() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  let content;
  if (isAuthenticated) {
    content = (
      <>
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
      </>
    );
  } else {
    content = (
      <>
        <Menu.Item as={Link} to="/">
          <Icon name="home" size="large" />
        </Menu.Item>
        <Menu.Item onClick={loginWithRedirect}>
          <Icon name="sign in" size="large" />
        </Menu.Item>
      </>
    );
  }
  return content;
}

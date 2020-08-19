import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu, Sidebar } from "semantic-ui-react";
import MainContent from "./MainContent";
import SidebarItems from "./SidebarItems";
import OpenSidebarButton from "./OpenSidebarButton";

export default AppForSmartphone;

function AppForSmartphone() {
  const [visible, setVisible] = useState(false);

  return (
    <Router>
      <Sidebar.Pushable id="sidebar">
        <Sidebar
          as={Menu}
          animation="overlay"
          icon
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <SidebarItems />
        </Sidebar>
        <Sidebar.Pusher>
          <div className="main-content">
            <MainContent />
            <OpenSidebarButton onClick={() => setVisible(true)} />
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Router>
  );
}

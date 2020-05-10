import React from "react";

/**
 * * COMPONENTS
 */
import ToolBar from "../constants/Default/ToolBar";
import Sidebar from "../constants/Default/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="hold-transition layout-top-nav">
      <div className="wrapper">
        <ToolBar />

        <div className="content-wrapper">
          <div className="content">
            <div className="container pt-3">
              <div className="row">
                <div class="col-md-3">
                  <Sidebar />
                </div>
                <div class="col-md-9">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

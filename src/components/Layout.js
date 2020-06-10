import React from 'react';
import SideBar from './SideBar';
import MainBar from './MainBar';

const Layout = (props) => {
    return (
        <div id="main-container">
            <SideBar />

            <MainBar>{props.children}</MainBar>
      </div>
    );
}
       
export default Layout;
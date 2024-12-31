import React from "react";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import Header from "./header/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full ">
      <LeftSidebar />

      <div className="flex flex-col flex-grow">
        {/* TODO:: Name need to be sent after fetching user data from the api */}
        <Header name="John Smith" />

        {/* Main Content */}
        <div className="flex-grow bg-gray-50 p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

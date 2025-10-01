import React from "react";
import AppNavigationMenu from "../AppNavigationMenu/AppNavigationMenu";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen">
      <div className="h-full w-full bg-black relative">
        <AppNavigationMenu />
        {children}
      </div>
    </main>
  );
};

export default PageContainer;

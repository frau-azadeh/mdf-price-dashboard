// src/components/Layout.tsx
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4">{children}</main>
    </div>
  );
};

export default Layout;

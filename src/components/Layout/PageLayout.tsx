
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AiChatButton from "../AiChat/AiChatButton";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <AiChatButton />
      <Footer />
    </div>
  );
};

export default PageLayout;


import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface StaticPageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const StaticPageLayout: React.FC<StaticPageLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen flex-col light-theme">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-advisor-purple">{title}</h1>
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StaticPageLayout;

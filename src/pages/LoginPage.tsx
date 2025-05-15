
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import LoginForm from "@/components/Auth/LoginForm";

const LoginPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-12 flex items-center justify-center min-h-[calc(100vh-4rem-8rem)]">
        <LoginForm />
      </div>
    </PageLayout>
  );
};

export default LoginPage;

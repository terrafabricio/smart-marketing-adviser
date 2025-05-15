
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import SignupForm from "@/components/Auth/SignupForm";

const SignupPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-12 flex items-center justify-center min-h-[calc(100vh-4rem-8rem)]">
        <SignupForm />
      </div>
    </PageLayout>
  );
};

export default SignupPage;

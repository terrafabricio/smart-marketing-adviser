
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-12 flex items-center justify-center min-h-[calc(100vh-4rem-8rem)]">
        <ResetPasswordForm />
      </div>
    </PageLayout>
  );
};

export default ResetPasswordPage;

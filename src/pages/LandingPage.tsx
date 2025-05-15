
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";
import HowItWorks from "@/components/Landing/HowItWorks";
import Testimonials from "@/components/Landing/Testimonials";
import CallToAction from "@/components/Landing/CallToAction";

const LandingPage = () => {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </PageLayout>
  );
};

export default LandingPage;

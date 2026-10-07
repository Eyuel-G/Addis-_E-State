"use client";
import React from "react";
import Hero from "./pages/Hero";
import FeaturedProperties from "./pages/FeaturedProperties";
import WhyUs from "./pages/WhyUs";
import ClientStories from "./pages/ClientStories";
import CTA from "./pages/CTA";


const page = () => {
  return (
    <section>
      <Hero />
      <FeaturedProperties />
      <WhyUs />
      <ClientStories />
      <CTA />
    </section>
  );
};

export default page;

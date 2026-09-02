"use client";
import React from "react";
import Hero from "./pages/Hero";
import FeaturedProperties from "./pages/FeaturedProperties";
import WhyUs from "./pages/WhyUs";
import ClientStories from "./pages/ClientStories";


const page = () => {
  return (
    <section>
      <Hero />
      <FeaturedProperties />
      <WhyUs />
      <ClientStories />
    </section>
  );
};

export default page;

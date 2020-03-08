import React from "react";

import Layout from "../components/Layout/Layout";

import HomeHero from "../components/PageSections/HomePage/HomeHero/HomeHero";
import HomeAbout from "../components/PageSections/HomePage/HomeAbout/HomeAbout";
import HomeNews from "../components/PageSections/HomePage/HomeNews/HomeNews";
import HomeTest from "../components/PageSections/HomePage/HomeTest/HomeTest";
import ContactCTA from "../components/ContactCTA/ContactCTA";

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <HomeAbout />
    <HomeNews />
    {/* <HomeTest /> */}
    <ContactCTA />
  </Layout>
);

export default IndexPage;

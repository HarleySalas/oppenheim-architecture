import React from "react";
import { graphql } from "gatsby";
import "./project.scss";

import Layout from "../../components/Layout/Layout";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const Project = () => {
  return (
    <Layout>
      <ContactCTA />
    </Layout>
  );
};

export default Project;

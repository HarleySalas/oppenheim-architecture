import React from "react";

import Layout from "../components/Layout/Layout";
import NotFound from "../components/PageSections/NotFound/NotFound";
import ContactCTA from "../components/ContactCTA/ContactCTA";

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <NotFound />
    <ContactCTA />
  </Layout>
);

export default NotFoundPage;

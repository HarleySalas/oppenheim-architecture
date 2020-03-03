import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCount } from "../redux/test/test.selectors";
import { incrementCounter, decrementCounter } from "../redux/test/test.actions";

import Layout from "../components/Layout/Layout";

import HomeHero from "../components/PageSections/HomePage/HomeHero/HomeHero";
import HomeTest from "../components/PageSections/HomePage/HomeTest/HomeTest";
import ContactCTA from "../components/ContactCTA/ContactCTA";

const IndexPage = ({ count, incrementCounter, decrementCounter }) => (
  <Layout>
    <HomeHero />
    <HomeTest />
    <ContactCTA />
  </Layout>
);

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
});

const mapStateToProps = createStructuredSelector({
  count: selectCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

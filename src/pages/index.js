import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Schedule from '../components/schedule';
import Speakers from '../components/speakers';
import Social from '../components/social';
import Sponsors from '../components/sponsors';

const Index = () => (
  <Layout>
    <SEO title='ServerlessDays Virtual Home' />
    <Header />
    <Social />
    <Speakers/>
    <Schedule/>
    <Sponsors/>
  </Layout>
);

export default Index;

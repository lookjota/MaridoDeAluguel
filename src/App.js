import React from 'react';

import { Chef, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Gallery />
    <Chef />
    {/* <AboutUs /> */}
    {/* <Intro /> */}
    {/* <Laurels /> */}
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default App;

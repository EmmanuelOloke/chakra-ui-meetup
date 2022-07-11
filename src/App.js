import React from 'react';
import Banner from './components/Banner';
import ItWorks from './components/ItWorks';
import Upcoming from './components/Upcoming';
import Popular from './components/Popular';
import Connected from './components/Connected';
import Stories from './components/Stories';

function App() {
  return (
    <>
      <Banner />
      <ItWorks />
      <Upcoming />
      <Popular />
      <Connected />
      <Stories />
    </>
  );
}

export default App;

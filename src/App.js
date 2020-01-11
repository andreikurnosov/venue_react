import React from 'react';
import './App.css'

import Header from './components/header/header.component';
import Featured from './components/featured/featured.component';
import VenueNfo from './components/venue-nfo/venue-nfo.component';
import Highlights from './components/highlights/highlights.component';
import Pricing from './components/pricing/pricing.component';
import Location from './components/location/location.component';
import Footer from './components/footer/footer.component';

function App() {
  return ( 
    <div style={{backgroundColor: 'purple', height: '1200px'}} >
      <Header />
      <Featured />
      <VenueNfo />
      <Highlights />
      <Pricing />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import './resources/styles.css';

import Header from './components/header/header.component';
import Featured from './components/featured/featured.component';

function App() {
  return (
    <div style={{backgroundColor:'purple', height:'1200px'}}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;

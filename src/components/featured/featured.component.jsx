import React from 'react';
import Carrousel from '../carrousel/carrousel.component';
import Countdown from '../countdown/countdown.component';

import './featured.styles.css';

const Featured = () => {
  return (
    <div style={{position:'relative'}}>
      <Carrousel />
      <div className="featured_artist">
        <div className="wrapper">
          Ariana Grande
        </div>
              
      </div>
      <Countdown>

      </Countdown>
    </div>
  );
};

export default Featured;
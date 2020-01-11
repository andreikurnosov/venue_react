import React from 'react';
import Description from './description/description.component';
import Discount from './discount/discount.component';
import './highlights.styles.css'

const Highlights = () => {
  return (
    <div className="highlight_wrapper">
      <h2>Highlights</h2>
      <Description />
      <Discount />
    </div>
  );
};

export default Highlights;
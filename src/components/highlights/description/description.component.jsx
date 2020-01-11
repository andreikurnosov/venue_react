import React from 'react';
import Fade from 'react-reveal/Fade';
import './description.styles.css';

const Description = () => {
  return (
    <Fade>
      <div className="description-wrapper">
        <div className="description_highlight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor voluptatem aspernatur fugiat minus voluptatibus voluptates dicta non similique sit.
        </div>
      </div>
    </Fade>
  );
};

export default Description;
import React from 'react';
import './location.styles.css';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.00186761896205!2d98.36710545017846!3d7.891942539024084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031c6bb65840b%3A0x7f6566e9b22f2ba3!2z0JzQsNC60LTQvtC90LDQu9C00YE!5e0!3m2!1sru!2sru!4v1578720155291!5m2!1sru!2sru" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen="">
      </iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
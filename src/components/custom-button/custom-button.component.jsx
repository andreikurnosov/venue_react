import React from 'react';
import Button from '@material-ui/core/Button';

import TiketIcon from '../../resources/images/icons/ticket.png';

import './custom-button.styles.css';

const CustomButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.background,
        color: props.color
      }}
    >
      <img 
        src={TiketIcon}
        className="iconImage"
        alt="icon_button"
      />
      {props.text}
    </Button>
  );
};

export default CustomButton;
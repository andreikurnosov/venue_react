import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Zoom from 'react-reveal/Zoom';

import './pricing.styles.css';

class Pricing extends Component {
  constructor(props){
    super(props);
    this.state = {
      prices: [100, 150, 250],
      positions: ['Balcony', 'Medium', 'Mezonine'],
      desc: [
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.'
      ],
      linkTo: ['http://sales/balcony', 'http://sales/medium', 'http://sales/mezonine'],
      delay: [500, 0, 500]
    }
  }
  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i} >
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <CustomButton 
                text="Purchase"
                background="#ffa800"
                color="#fff"
                link={this.state.linkTo}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>

        </div>
      </div>
    )
  }
}

export default Pricing;
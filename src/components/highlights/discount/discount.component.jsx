import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './discount.styles.css';

import CustomButton from '../../custom-button/custom-button.component';

class Discount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      discountStart: 0,
      discountEnd: 30
    }
  }

  getPercentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.getPercentage();
    }, 30)
  }
  
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade
            onReveal={() => this.getPercentage()}
          >
            <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum excepturi maiores consequatur, labore fugit. Quas molestias libero quo eos? </p>
              <CustomButton 
                text="Purchase tickets"
                background="#ffa800"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>

        </div>
      </div>
    )
  }
}


export default Discount;
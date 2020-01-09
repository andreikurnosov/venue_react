import React from 'react';
import Slide from 'react-reveal/Slide';

import './countdown.styles.css';

class CountDown extends React.Component {
  constructor(){
    super();
    this.state = {
      deadline: 'Feb, 13, 2020',
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0'
    }

  }
  getTimeUntil = () => {
    const { deadline } = this.state;
    const timeUntil = Date.parse(deadline) - Date.parse(new Date());
    if(timeUntil < 0 ) {
      console.log('Date passed');
    } else {
        const seconds = Math.floor((timeUntil/1000)%60);
        const minutes = Math.floor((timeUntil/1000/60)%60);
        const hours = Math.floor((timeUntil/(1000*60*60))%24);
        const days = Math.floor(timeUntil/(1000*60*60*24));
        
        this.setState({ days, hours, minutes, seconds })
      }
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.state.deadline);
    }, 1000)
  }

  render() {
    const { days, hours, minutes, seconds} = this.state;
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Event start in
          </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">
                {days}
              </div>
              <div className="countdown_tag">
                Days
              </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
                {hours}
              </div>
              <div className="countdown_tag">
                Hs
              </div>
            </div>        
            <div className="countdown_item">
              <div className="countdown_time">
                {minutes}
              </div>
              <div className="countdown_tag">
                Min
              </div>
            </div>        
            <div className="countdown_item">
              <div className="countdown_time">
                {seconds}
              </div>
              <div className="countdown_tag">
                Sec
              </div>
            </div>
          </div>            
        </div>
      </Slide>
    );
  }
};

export default CountDown;
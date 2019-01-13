import React from 'react';
import propTypes from 'prop-types';
import autoBind from 'react-autobind';
import GlitchEffect from '../Components/GlitchEffect';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  '@global': {
    '@keyframes blinker': {
      '0%': {
        opacity: 0
      }
    }
  },
  root: {
    width: '100%',
    height: '100%',
    background: 'url(images/beach.jpg)',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    background: '#0f3854',
    background: 'radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%)',
    backgroundSize: '100%',
    padding: theme.spacing.unit * 8,
    textAlign: 'center'
  },
  clock: {
    fontFamily: '"Share Tech Mono", monospace',
    color: '#daf6ff',
    textShadow: '0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)',
    letterSpacing: '0.05em',
    fontSize: '80px',
    padding: '5px 0'
  },
  disruptClockStage1: {
    animation: 'blinker 1.5s linear infinite'
  },
  disruptClockStage2: {
    animation: 'blinker 0.5s linear infinite'
  }
});

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: props.time
    }
    autoBind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.eachSecond, 1000)
  }

  componentWillUnmount() {
    this.killTimer();
  }

  killTimer() {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
    }
  }

  eachSecond() {
    const newTime = this.state.remainingTime - 1;

    this.setState({remainingTime: newTime});

    if (newTime < 0) {
      this.killTimer();
      if (this.props.onComplete !== undefined) {
        this.props.onComplete();
      }
    }
  }

  render() {
    const { classes, disrupt, children } = this.props;
    const { remainingTime } = this.state;

    const seconds = remainingTime % 60;
		const minutes = Math.floor(remainingTime / 60);
    const hours = Math.floor(minutes / 60);
    
    const padZero = value => {
      return ('0' + value).slice(-2);
    }

    return (
      <div className={classes.root}>
        { disrupt && remainingTime < 3 && <GlitchEffect /> }
        <Paper className={classes.timer}>
          { children }
          <div className={classes.clock}>
            {padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}
          </div>
        </Paper>
      </div>
    );
  }

}

Timer.defaultProps = {
  time: 59
};

Timer.propTypes = {
  time: propTypes.number,
  disrupt: propTypes.bool,
  children: propTypes.node
};

export default withStyles(styles)(Timer);

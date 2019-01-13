import React from 'react';
import propTypes from 'prop-types';
import autoBind from 'react-autobind';

export default class Slideshow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slide: 0
    };

    autoBind(this);
  }

  componentDidMount() {
    window.onkeyup = this.keyEvent;
  }

  componentWillUnmount() {
    window.onkeyup = undefined;
  }

  keyEvent(event) {
    const eventKeyCode = event.code;
    const max = this.props.slides.length - 1;

    if (eventKeyCode === 'ArrowLeft' && this.state.slide > 0) {
      this.reverseSlide();
    }
    if (eventKeyCode === 'ArrowRight' && this.state.slide < max) {
      this.advanceSlide();
    }
  }

  advanceSlide() {
    this.setState({slide: this.state.slide + 1});
  }

  reverseSlide() {
    this.setState({slide: this.state.slide - 1});
  }

  render() {
    return (
      <React.Fragment>
        {this.props.slides[this.state.slide]}
      </React.Fragment>
    );
  }

}

Slideshow.propTypes = {
  slides: propTypes.arrayOf(propTypes.node)
};

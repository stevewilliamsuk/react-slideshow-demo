import React from 'react';
import propTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import { componentPropType } from '@material-ui/utils';

export default class DaisyChainedTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      in: props.in
    };
    this.triggerDaisyChain(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.in !== newProps.in) {
      this.setState({
        in: newProps.in
      });
      this.triggerDaisyChain(newProps);
    }
    this.props = newProps;
  }

  triggerDaisyChain(props) {
    if (props.in) {
      setTimeout(() => {
        this.props.whenLoaded();
      }, this.props.timeout / 1.5);
    }
  }

  render() {
    const { component, timeout, children } = this.props;

    const Component = component || Fade;

    return (
      <Component timeout={timeout} in={this.state.in}>
        {children}
      </Component>
    );
  }
}

DaisyChainedTransition.defaultProps = {
  timeout: 1500,
  whenLoaded: () => {}
};

DaisyChainedTransition.propTypes = {
  timeout: propTypes.number,
  whenLoaded: propTypes.func,
  component: componentPropType,
  children: propTypes.node
};

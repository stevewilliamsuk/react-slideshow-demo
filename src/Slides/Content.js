import React from 'react';
import DaisyChainedTransition from '../Components/DaisyChainedTransition';
import { withStyles, Grow, Paper, Typography } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel1: false,
      showPanel2: false,
      showPanel3: false
    };
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <DaisyChainedTransition component={Grow} in timeout={3000} whenLoaded={() => this.setState({showPanel1: true})}>
          <Paper elevation={4}>
            <DaisyChainedTransition in={this.state.showPanel1} whenLoaded={() => this.setState({showPanel2: true})}>
              <Typography variant="h1" component="p">Test</Typography>
            </DaisyChainedTransition>
            <DaisyChainedTransition in={this.state.showPanel2} whenLoaded={() => this.setState({showPanel3: true})}>
              <Typography variant="h2" component="p">Test Again</Typography>
            </DaisyChainedTransition>
            <DaisyChainedTransition in={this.state.showPanel3}>
              <Typography variant="h3" component="p">This slideshow is awesome, and anyone who says it isn't is lying</Typography>
            </DaisyChainedTransition>
          </Paper>
        </DaisyChainedTransition>
      </div>
    );
  }
}

export default withStyles(styles)(Content);

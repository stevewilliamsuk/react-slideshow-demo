import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: '#000',
    width: '100%',
    height: '100%'
  }
});

const BlankSpace = (props) => {

  const { classes } = props;

  return (
    <div className={classes.root} />
  );

};

export default withStyles(styles)(BlankSpace);
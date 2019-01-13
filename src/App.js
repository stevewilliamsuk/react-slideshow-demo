import React from 'react';
import { createGenerateClassName, withStyles, jssPreset } from '@material-ui/core/styles';
import { CssBaseline, MuiThemeProvider}  from '@material-ui/core';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import theme from './theme';
import Slideshow from './Slideshow';
import BlankSpace from './Slides/BlankSpace';
import Content from './Slides/Content';
import Timer from './Slides/Timer';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point',
});

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    background: '#333'
  }
});

const App = (props) => {

  const { classes } = props;

  const box = {
    slideShowRef: undefined
  };

  const slides = [ // slide a few slides into my DM!
    <BlankSpace />,
    <Timer time={10} onComplete={() => box.slideShowRef.advanceSlide() } disrupt />,
    <Content />
  ];

  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <div className={classes.root}>
            <Slideshow slides={slides} ref={(ref) => { box.slideShowRef = ref; }} />
          </div>
        </CssBaseline>
      </MuiThemeProvider>
    </JssProvider>
  );

};

export default withStyles(styles)(App);

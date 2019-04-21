import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '../Helpers/Button'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const style = {
    centered: {
      textAlign: 'center'
    }
  }
  
const StartQuiz = (props) => {
    const { classes } = props;

    return(
        <Grid item xs={10} className={classes.centered} >
          <Typography variant="h5" color="inherit">Click the start button to start the quiz!</Typography>
          <Button onClick={()=>props.onClick()} text='Start Quiz' />
        </Grid>
    )
}

StartQuiz.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(style)(StartQuiz)
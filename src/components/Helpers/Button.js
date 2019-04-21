import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const MaterialButton = props => {
    const { classes } = props;

    const toDisplay = props.isDisabled ? 
    (<Button variant="contained" disabled={props.isDisabled()} onClick={()=>props.onClick()} color="primary" className={classes.button}>
    {props.text}
    </Button>) : 
    (<Button variant="contained" onClick={()=>props.onClick()} color="primary" className={classes.button}>
        {props.text}
    </Button>)
    return(
      <>
        {toDisplay}
      </>
    )
}
MaterialButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MaterialButton);
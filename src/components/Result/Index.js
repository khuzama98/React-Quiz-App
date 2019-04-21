import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '../Helpers/Paper'
import Button from '../Helpers/Button'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const style = {
    centered: {
        textAlign: 'center'
    }
}

class Result extends React.Component {
    
    
    render(){
    const { classes } = this.props;
    const {sec,min} = this.props;
    const toDisplaySec = sec<10 ? '0'+sec : sec
    const toDisplayMin = min<10 ? '0'+min : min
        return(
            <Grid item xs={10} className={classes.centered} >
            <Paper>
            <Typography variant="h4" color='inherit' align='center' >Result</Typography>
            <Typography variant='h6' color='inherit' align='center'>{this.props.correct} correct answers out of {this.props.length}</Typography>
            <Typography variant='h6' color='inherit' align='center'>{toDisplayMin}:{toDisplaySec} time taken to complete quiz!</Typography>
            <Button onClick={()=>this.props.again()} text='Start Again' />
            </Paper>
            </Grid>
            )
        }
    }
    
    
Result.propTypes = {
    classes: PropTypes.object.isRequired,
};
    
export default withStyles(style)(Result)
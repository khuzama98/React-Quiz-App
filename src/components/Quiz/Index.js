import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '../Helpers/Paper'
import Timer from '../Timer/Index'

class Quiz extends React.Component {

    constructor(){
        super();
        this.state={
            time:''
        }
    }


    render(){
        
        return(
            <Grid item xs={10} >
            <Paper>
            <Timer getTime={this.props.getTime} />
            {this.props.ques}
            </Paper>
            </Grid>
            )
        }
    }
    
    
    
    export default Quiz
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from './components/Helpers/Button'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar/index'
import StartQuiz from './components/StartQuiz/Index'
import Quiz from './components/Quiz/Index'
import Result from './components/Result/Index'

const style = {
  containHeight : {
    minHeight: '80vh'
  },
}

class App extends Component {
  constructor(){
    super();
    this.state={
      isStarted: false,
      questions: [],
      i:0,
      value:'',
      correct:0,
      time:''
    }
  }
  
  newQues = (ans) => {
    const {questions,i,value,correct} = this.state
    if(ans===value){
      this.setState({correct:correct+1})
    }
    this.setState({
      i: i+1,
      value:''
    })
    
  }
  
  again = () => {
    this.setState({
      i:0,
      correct:0
    })
  }
  
  getTime = (min,sec) => {
    this.setState({
      min,
      sec
    })
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  isDisabled = () => this.state.value === ''
  
  startQuiz = () => {
    this.setState({
      isStarted: true
    })
  }
  
  componentDidMount(){
    fetch("https://opentdb.com/api.php?amount=10")
    .then((response)=> response.json())
    .then((res)=> this.setState({questions:res.results}))
  }
  
  render() {
    const {isStarted,questions,i,value,correct,min,sec} = this.state;
    let toDisplay = questions.map((item,index)=>{
      
      return(
        <>
        <div>{index+1}) {item.question}</div>
        <div>
        <input type="radio" name="value" 
        value={item.correct_answer} 
        checked={value===item.correct_answer} 
        onChange={this.handleChange} /> {item.correct_answer}<br />
        
        {item.incorrect_answers.map((element,index1) => {
          return(
            <>
            <input type="radio" key={index1} name="value"
            value={element} 
            checked={value===element} 
            onChange={this.handleChange} />{element}<br />
            </>
            )
          })}
          <Button isDisabled={this.isDisabled} onClick={()=> this.newQues(item.correct_answer)}  text='next' />
          </div>
          </>
          )
        })
        
        const { classes } = this.props;
        return (
          <>
          <Navbar />
          <Grid container justify="center" alignItems="center" className={classes.containHeight} >
          {!isStarted && <StartQuiz onClick={this.startQuiz} />}
          {isStarted && i<questions.length && <Quiz ques={toDisplay[i]} getTime={this.getTime} /> }
          {i===questions.length && <Result length={questions.length} correct={correct} min={min} sec={sec} again={this.again} /> }
          </Grid>
          </>
          );
        }
      }
      
      App.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      
      export default withStyles(style)(App);
      
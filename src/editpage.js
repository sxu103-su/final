import React from 'react';
import Inputone from  './input1';
import Inputtwo from  './input2';
import Inputthree from  './input3';
import Display from  './display';
import About from './about';
import Todos from './experience';
import uuid from 'uuid'; 
import Imgup from './imgup';
import Imgd from './imgdisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css';
var mystorage = window.localStorage;
export default class Editpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayhead: "",
            about:"",
            showinput: true,
            todos: [
               
            ],
            pictures:[
                { File:'./picture/demo.jpg'},
            ],
                

        }
    
    }
   
    
    inputone = (title) => {
        this.setState({displayhead: title});  
    }
    
    inputtwo = (title) => {
        this.setState({about: title});  
    }
    inputthree = (title) => {
        console.log(title)
        const newbullet = {
            id:uuid.v4(),
            title,
        }
        this.setState({todos: [...this.state.todos,newbullet]});  
    }
    del= () => {
        this.setState({ showinput: false });
    }
   
 
    render(){
       console.log(this.state.pictures)
        var form = this.state.showinput ? <Inputone/> : '';
  return (
    <div className="Homepage">
    <Inputone inputone={this.inputone} />
      <Display displayhead = {this.state.displayhead}/>
      <br></br>
      <Inputtwo inputtwo={this.inputtwo}/>
      <About about = {this.state.about}/>
      <Inputthree inputthree={this.inputthree}/>
      <div className="subhead">Experiences</div>
    <div className="border-bottom"></div>
      <Todos todos={this.state.todos}/>
      <Imgup imgup={this.imgup}/>
      <Imgd pictures={this.state.pictures}/>
      
    </div>
  );
    }
}
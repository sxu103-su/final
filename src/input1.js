import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default class Inputone extends React.Component{
    state = {
        title: '',
        on:true,
    }
    onChange = (e) => this.setState({title: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.inputone(this.state.title);
        this.setState({ title:''})
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render(){
  return (<div className="row inputone">  {
    this.state.on && (
    <form className="col-11" onSubmit={this.onSubmit}>
         <input 
         className="inputtext"
         type="text"  
         name="title" 
         placeholder="edit heading" 
         value={this.state.title}
         onChange={this.onChange}/>
         <input
         type="submit"
         value="Submit"
         className="btn" />
     </form>)
}
     
     <button onClick={this.toggle} className="close xx">x</button>
 </div> 
 );
}
}

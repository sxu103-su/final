import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default class Inputtwo extends React.Component{
    state = {
        title: '',
        on:true,
    }
    onChange = (e) => this.setState({title: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.inputtwo(this.state.title);
        this.setState({ title:''})
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render(){
  return (<div className="row">  {
    this.state.on && (
    <form className="col-11" onSubmit={this.onSubmit}>
         <textarea
         className="inputtext"
         type="text"  
         name="title" 
         placeholder="Describe yourself" 
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
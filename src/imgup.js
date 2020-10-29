
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default class Imgup extends React.Component{
    state = {
        selectedFile: null,
        on:true,
    }
   // onChange = (e) => this.setState({title: e.target.files[0]});
    getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({
                selectedFile: reader.result
            })
            console.log(reader.result);
        };
        reader.onerror = function (error) {
        console.log('Error: ', error);
        };
    }
   fileSelectedHandler = event => {
       console.log(event)
       this.getBase64(event.target.files[0])
   }
   toggle = () => {
    this.setState({
        on: !this.state.on
    })
}
    render(){console.log(this.state.selectedFile)
  return (<div>
        {this.state.on && (
     <form onSubmit={this.onSubmit}>
<input type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
<input
         type="submit"
         value="Submit"
         className="btn" />
     </form>)}
     <button onClick={this.toggle} className="close xx">x</button>
      <div className="border-bottom"></div>
       <img className="upimg" src={this.state.selectedFile} /></div>
  );}
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount () {
        axios.get('https://newsapi.org/v2/everything?domains=nytimes.com&pageSize=2&apiKey=a9e089bb0f18409b98d7e299dcaff889') 
        .then((res) => {
                this.setState({news:res.data.articles});
            })
        }
    render(){
        return (<div>
            <h2 className="loghead">login</h2>
            <div className="row col-12 logmain">
            <div className="log col-6">
            <p className="pl">Account</p>
<input type=" text " className="form-control" placeholder="account" aria-label="account " aria-describedby="basic-addon2 " id="myInput "/>
<p className="pl">Password</p>
<input type=" text " className="form-control" placeholder="password " aria-label="password " aria-describedby="basic-addon2 " id="myInput "/>
</div>
<button className="login">Log In</button></div>
<div className=''><h4>Break News From The NY Times</h4>
<div className="row news">
{this.state.news.map(article => {
    return(
        <div className="border-bottom pl">{article.title}</div>
    )
})}</div>
</div>
</div>
        );
}
}
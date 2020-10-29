import React from 'react';
import'./display.css';

import PropTypes from 'prop-types';

export default class Bullet extends React.Component{
    render(){
        return(
            <div>
                <p class="bullet">⚫{this.props.todo.title}</p>
            </div>
        )
    }}
   Bullet.propTypes = {
       todo: PropTypes.object.isRequired
    }
    
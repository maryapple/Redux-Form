import React from 'react'
import style from './style.css'




export default class extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange;
        this.state = {checked : false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ checked: !this.state.checked }) 
    }

    render() {
        return (
            <label>
                Есть супруга/супруг
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                
                {this.state.checked ?  this.props.children  : ''}
            </label>
        )
    }
}
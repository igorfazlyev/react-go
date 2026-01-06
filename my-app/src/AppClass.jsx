import { Component } from "react";
import './AppClass.css' 

export default class AppClass extends Component {
    constructor(props){
        super(props)
        this.state = {isTrue: false}
    }
    toggleIsTrue = ()=>{
        if (this.state.isTrue) {
            this.setState({isTrue: false})
        }else{
            this.setState({isTrue: true})
        }
    }
    render () {
        return (
            <>
                <h1 className="h1-red">{this.props.msg}</h1>
                <h2>This is a class component</h2>
                <hr />
                {this.state.isTrue && <p>It's true</p>}
                {!this.state.isTrue && <p>It's false</p>}
                <hr />
                <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleIsTrue}>Toggle IsTrue</a>
            </>
        )
    }
}
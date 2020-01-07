import React, { Component } from 'react'
import '../Login/Login.css'
import Augmate from './Augmate.png'
import axios from 'axios'
import { Field, reduxForm } from 'redux-form';

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            username:'',
            password:''
             
        }
    }

    clickHandler=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        })
    }


    login=(event)=>{
        
        alert("Username is "+ this.state.username+" "+ "Password is " + this.state.password)
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
        
    }

    register=()=>{

        this.props.history.push('/Signup');
    }
    
    render() {
        return (
            <div className='login'>
            
            <form >
            
            <div>
            <h1 className='heading2'>Sign In</h1>
            <img className='img1' src={Augmate}></img>
            </div>

            <div>
                <label className='lab1'>Enter Username</label>
                <Field className='inp1' type="text" name="username" component="input" value={this.state.username} onChange={this.clickHandler}></Field>
            </div>

            <div>
                <label className='lab2'>Enter Password</label>
                <Field className='inp2' type="text" name="password" component="input" value={this.state.password} onChange={this.clickHandler}></Field>
            </div>

            <div>
                <button onClick={this.login} disabled={!(this.state.username && this.state.password)} className="but1" type="submit">Login</button>
                <button onClick={this.register} className="but2" type="submit">Register</button>

            </div>

            </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'login'
})(Login)

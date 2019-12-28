import React, { Component } from 'react'
import '../Login/Login.css'
import Augmate from './Augmate.png'
import axios from 'axios'

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            username:'',
            password:''
             
        }
    }

    clickHandler1=(event)=>{

        this.setState({
            username:event.target.value
        })
    }

    clickHandler2=(event)=>{

        this.setState({
            password:event.target.value
        })
    }

    login=(event)=>{
        event.preventDefault();
        alert(this.state.username+" "+ this.state.password)
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
            <h1 className='heading2'>Sign In</h1>
            <img className='img1' src={Augmate}></img>
            <form>
            <div>
                <label className='lab1'>Enter Username</label>
                <input className='inp1' type="text" value={this.state.username} onChange={this.clickHandler1}></input>
            </div>

            <div>
                <label className='lab2'>Enter Password</label>
                <input className='inp2' type="text" value={this.state.password} onChange={this.clickHandler2}></input>
            </div>

            <div>
                <button onClick={this.login} className="but1" type="submit">Login</button>
                <button onClick={this.register} className="but2" type="submit">Register</button>

            </div>

            </form>
            </div>
        )
    }
}

export default Login

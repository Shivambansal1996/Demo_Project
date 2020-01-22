import React, { Component } from 'react'
import '../Login/Login.css'
import Augmate from './Augmate.png'
import axios from 'axios'
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            email_id:'',
            password:''
             
        }
    }

    clickHandler=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        })
    }


    login=(event)=>{
        
        event.preventDefault();
        alert("Username is "+ this.state.username+" "+ "Password is " + this.state.password)
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
        
    }

    signUp=()=>{

        this.props.history.push('/Signup');
    }
    
    render() {
        return (
            <div className='container' style={{position:"relative"}}>
            
            <div className="custom1">
            <h1 className="font-weight-500">Login to your Account</h1>
            <h6>Don't have an Account ? <code className="text-primary font-weight-bold" style={{cursor:"pointer"}} onClick={this.signUp}>Sign Up Free</code></h6>
            </div>

            <Form className="custom2">
             <FormGroup>
               <Label  for="exampleEmail" className="float-left">Email id</Label>
               <Input type="email"  name="email_id" placeholder="Email id" value={this.state.email_id} onChange={this.clickHandler} required/>
             </FormGroup>

            <FormGroup>
             <Label for="examplePassword" className="float-left">Password</Label>
             <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.clickHandler} required/>
             </FormGroup>

            <FormGroup check className="float-left">
             <Label check>
             <Input type="checkbox"/>{' '}
              Remember me
             </Label>
            </FormGroup>

            <h6 className="text-primary float-right" style={{cursor:"pointer"}}>Forgot password?</h6>
            <Button color="primary" size="lg" style={{marginTop:"55px"}} disabled={!(this.state.email_id && this.state.password)} onClick={this.login} >login with Email</Button>{' '}
            </Form>
            </div>
        )
    }
}

export default Login

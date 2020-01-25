import React, { Component } from 'react'
import '../Login/Login.css'
import Augmate from './Augmate.png'
import axios from 'axios'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Eye from './eye.png'
import Back from './Back.jpg'

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            email_id:'',
            password:'',
            emailError:'',
            passwordError:'',
            isPasswordShown:false,
            isPasswordStrength:''             
        }
        
    }


    handleChange=(e)=>{

        this.setState({
            [e.target.name]:e.target.value
        })

        if(e.target.name==='email_id'){
            var emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(e.target.value==='' || e.target.value===null ){
              this.setState({
                emailError:'Please enter an Email id'
              })
            }
            else if(!emailRegex.test(e.target.value)){
              this.setState({
                emailError:"Please enter a valid Email id"
              })
        
            } 
            else{
              this.setState({
                emailError:null
              })
            }
          }

          if(e.target.name==='password'){
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        
        
            if(e.target.value==='' || e.target.value===null ){
              this.setState({
                passwordError:'Please enter Password'
              })
            }
            else if(strongRegex.test(e.target.value)){
              this.setState({
                passwordError:'Strong Password'
              })
        
            }
        
            else if(mediumRegex.test(e.target.value)){
              this.setState({
                passwordError:'Weak Password'
              })
        
            }
            else{
              this.setState({
                passwordError:'Very Weak Password'
              })
            }
          }
    }

    eye=()=>{
       
        this.setState({
  
          isPasswordShown:!this.state.isPasswordShown
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
            <div>
        <img src={Back} width="100%" height="100%"></img>
            <div className='container' style={{position:"relative"}}>
            
            <div className="custom1">
            <h1>Login to your Account</h1>
            <h6>Don't have an Account ? <code style={{cursor:"pointer", color:'powderblue', fontWeight:'bolder', textDecoration:'underline'}} onClick={this.signUp}>Sign Up Free</code></h6>
            </div>

            <Form className="custom2">
             <FormGroup>
               <Label  for="exampleEmail" className="float-left">Email id<code>*</code></Label>
               <Input type="email"  name="email_id" placeholder="Email id" value={this.state.email_id} onChange={(e)=>{this.handleChange(e)}} required/>
               <div style={{color:'red', textAlign:'left'}}>{this.state.emailError}</div>
             </FormGroup>

            <FormGroup>
             <Label for="examplePassword" className="float-left">Password<code>*</code></Label>
             <Input type={(this.state.isPasswordShown)?"text" : "password"} name="password"  placeholder="Password" value={this.state.password} onChange={(e)=>{this.handleChange(e)}} required/>
             <img src={Eye} style={{ width: "20px", marginTop: "-67px", marginLeft: "433px"}} onClick={this.eye}></img>
             <div className='custome4'>{this.state.passwordError}</div>
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
            </div>
        )
    }
}

export default reduxForm({
    form: 'login'  // a unique identifier for this form
  })(Login)

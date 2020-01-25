import React, { Component } from 'react'
import './Signup.css'
import axios from 'axios'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Eye from './eye.png'
import Back from './Back.jpg'

export class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             first_name:'',
             last_name:'',
             email_id:'',
             mobile_no:'',
             password:'',
             confirm_password:'',
             firstnameError:'',
             lastnameError:'',
             emailError:'',
             mobileError:'',
             passwordError:'',
             confirmPasswordError:'',
             isPasswordShown:false,
             isConfirmPasswordShown:false

        }
    }
    

    handleChange=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })
  
    if(e.target.name==='first_name'){
    if(e.target.value==='' || e.target.value===null  ){
      this.setState({
        firstnameError:'Please enter first name'
      })
    }
    else{
      this.setState({
        firstnameError:null
      })
    }
  }

  if(e.target.name==='last_name'){
    if(e.target.value==='' || e.target.value===null ){
      this.setState({
        lastnameError:'Please enter last name'
      })
    }
    else{
      this.setState({
        lastnameError:null
      })
    }
  }

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

  if(e.target.name==='mobile_no'){
    if(e.target.value==='' || e.target.value===null ){
      this.setState({
        mobileError:'Please enter 10 digit mobile no'
      })
    }
    else{
      this.setState({
        mobileError:null
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

  if(e.target.name==='confirm_password'){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");


    if(e.target.value==='' || e.target.value===null ){
      this.setState({
        confirmPasswordError:'Please enter Password'
      })
    }
    else if(strongRegex.test(e.target.value)){
      this.setState({
        confirmPasswordError:'Strong Password'
      })

    }

    else if(mediumRegex.test(e.target.value)){
      this.setState({
        confirmPasswordError:'Weak Password'
      })

    }
    else{
      this.setState({
        confirmPasswordError:'Very Weak Password'
      })
    }
  }
    }

    eye=()=>{
       
      this.setState({

        isPasswordShown:!this.state.isPasswordShown
      })
      }

      eye1=()=>{
       
        this.setState({
  
          isConfirmPasswordShown:!this.state.isConfirmPasswordShown
        })
        }
    

    back=()=>{

        this.props.history.push('/')
    }

    signUp=(event)=>{

         event.preventDefault();
         console.log(this.state)
         if(this.state.password == this.state.confirm_password){
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(res=>{
            console.log(res)
            alert("Registration has been successfully")
            this.props.history.push('/')

        }).catch(error=>{
            console.log(error)
        })
    }
    else{
        alert("Password and Confirm Password doesn't match ")
    }
    }


   
    render() {
        return (
            <div className="custome1">
        <img src={Back} width="100%" height="100%"></img>

        <div className='custome5'>
        <h1>Create an Account</h1> 
        <h6>Already have an Account? <code style={{cursor:"pointer", color:'powderblue', textDecoration:'underline', fontWeight:'bolder'}} onClick={this.back}>Sign In!</code></h6>
        </div>

         <div className='container'>

       <Form className="custome3">
       
         <FormGroup>
          <Label for="exampleFirstName" className="float-left">First Name<code>*</code></Label>
          <Input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={(e)=>{this.handleChange(e)}} required/>
          <div style={{color:'red'}}>{this.state.firstnameError}</div>
        </FormGroup>

        <FormGroup>
        <Label for="exampleLastName" className="float-left">Last Name<code>*</code></Label>
        <Input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={(e)=>{this.handleChange(e)}} required/>
        <div style={{color:'red'}}>{this.state.lastnameError}</div>
      </FormGroup>

      <FormGroup>
        <Label for="Enter Email id" className="float-left">Email<code>*</code></Label>
        <Input type="email" name="email_id" placeholder="Email Id" value={this.state.email_id} onChange={(e)=>{this.handleChange(e)}} required/>
        <div style={{color:'red'}}>{this.state.emailError}</div>
      </FormGroup>

      <FormGroup>
        <Label for="Enter Mobile no" className="float-left">Mobile No<code>*</code></Label>
        <Input type="text" name="mobile_no" placeholder="Mobile No" value={this.state.mobile_no} onChange={(e)=>{this.handleChange(e)}} required/>
        <div style={{color:'red'}}>{this.state.mobileError}</div>
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword" className="float-left">Password<code>*</code></Label>
        <Input type={(this.state.isPasswordShown)?"text" : "password"} name="password"  placeholder="Password" value={this.state.password} onChange={(e)=>{this.handleChange(e)}} required/>
       <img src={Eye} style={{ width: "20px", marginTop: "-67px", marginLeft: "433px"}} onClick={this.eye}></img>
        <div className='custome4'>{this.state.passwordError}</div>
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword" className="float-left">Confirm Password<code>*</code></Label>
        <Input type={(this.state.isConfirmPasswordShown)?"text" : "password"} name="confirm_password"  placeholder="Confirm Password" value={this.state.confirm_password} onChange={(e)=>{this.handleChange(e)}} required/>
        <img src={Eye} style={{ width: "20px", marginTop: "-67px", marginLeft: "433px"}} onClick={this.eye1}></img>
        <div className='custome4'>{this.state.confirmPasswordError}</div>
      </FormGroup>

      <h6 className="font-weight-normal text-left">By creating an account, you agree to our <code className="text-primary font-weight-bold">Terms & Conditions</code></h6>
      <Button style={{marginTop:"5px"}} style={{ backgroundImage: "linear-gradient(to right,#9eafe5,#95bbe2,#82d7dc,#74e9d6)"}} size="lg" disabled={!(this.state.first_name && this.state.last_name && this.state.email_id && this.state.mobile_no && this.state.password && this.state.confirm_password)} onClick={this.signUp} >Create an Account</Button>{' '}
              
      </Form>   
                 </div>
         </div>
        )
    }
}

export default reduxForm({
  form: 'signup'  // a unique identifier for this form
})(Signup)
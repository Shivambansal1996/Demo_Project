import React, { Component } from 'react'
import './Signup.css'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             first_name:'',
             last_name:'',
             email_id:'',
             mobile_no:'',
             password:'',
             confirm_password:''
             
        }
    }

    clickHandler=(event)=>{

        this.setState({
           [event.target.name] : event.target.value
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
        
         <div className='container'>

         <h1 className="custome2">Create an Account</h1>
       

       <Form className="custome3">
         <FormGroup className="custome4">
          <Label for="exampleFirstName" className="float-left">First Name</Label>
          <Input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.clickHandler} required/>
        </FormGroup>

        <FormGroup>
        <Label for="exampleLastName" className="float-left">Last Name</Label>
        <Input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.clickHandler} required/>
      </FormGroup>

      <FormGroup>
        <Label for="Enter Email id" className="float-left">Email</Label>
        <Input type="email" name="email_id" placeholder="Email Id" value={this.state.email_id} onChange={this.clickHandler} required/>
      </FormGroup>

      <FormGroup>
        <Label for="Enter Mobile no" className="float-left">Mobile No</Label>
        <Input type="text" name="mobile_no" placeholder="Mobile No" value={this.state.mobile_no} onChange={this.clickHandler} required/>
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword" className="float-left">Password</Label>
        <Input type="password" name="password"  placeholder="Password" value={this.state.password} onChange={this.clickHandler} required/>
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword" className="float-left">Confirm Password</Label>
        <Input type="password" name="confirm_password"  placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.clickHandler} required/>
      </FormGroup>

      <h6 className="font-weight-normal text-left">By creating an account, you agree to our <code className="text-primary font-weight-bold">Terms & Conditions</code></h6>
      <Button style={{marginTop:"5px"}} color="primary" size="lg" disabled={!(this.state.first_name && this.state.last_name && this.state.email_id && this.state.mobile_no && this.state.password && this.state.confirm_password)} onClick={this.signUp} >Create an Account</Button>{' '}
      <hr></hr>
                <h6 className="font-weight-normal">Already have an Account? <code style={{cursor:"pointer"}} onClick={this.back} className="text-primary font-weight-bold">Sign In!</code></h6>
        
      
      </Form>   
                 </div>
         </div>
        )
    }
}

export default Signup
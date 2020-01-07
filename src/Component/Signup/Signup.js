import React, { Component } from 'react'
import './Signup.css'
import axios from 'axios'
import { Field, reduxForm } from 'redux-form';
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

    registerData=(event)=>{

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
            <div className='form'>
                
                <form>
                    <h1 style={{color: 'aliceblue', fontWeight: 'bold'}}>Registration</h1>

                    <div>
                    <label className="label1">Enter First Name</label>
                    <Field className="input1" type="text" name="first_name" component="input" value={this.state.first_name} onChange={this.clickHandler} required></Field>
                    </div>

                    <div>
                    <label className="label2">Enter Last Name</label>
                    <Field className="input2" type="text" name="last_name" component="input" value={this.state.last_name} onChange={this.clickHandler}></Field>
                    </div>

                    <div>
                    <label className="label4">Enter Email id</label>
                    <Field className="input4" type="email" name="email_id" component="input" value={this.state.email_id} onChange={this.clickHandler}></Field>
                    </div>

                    <div>
                    <label className="label5">Enter Mobile No</label>
                    <Field className="input5" type="number" name="mobile_no" component="input" value={this.state.mobile_no} onChange={this.clickHandler}></Field>
                    </div>

                    <div>
                    <label className="label6">Enter Password</label>
                    <Field className="input6" type="text" name="password" component="input" value={this.state.password} onChange={this.clickHandler}></Field>
                    </div>

                    <div>
                    <label className="label7">Retype Password</label>
                    <Field className="input7" type="text" name="confirm_password" component="input" value={this.state.confirm_password} onChange={this.clickHandler}></Field>
                    </div>

                   <div>
                       <button className='button1' disabled={!(this.state.first_name && this.state.last_name && this.state.email_id && this.state.mobile_no && this.state.password && this.state.confirm_password)} onClick={this.registerData} type="submit">Register</button>
                       <button onClick={this.back} className='button2' type="submit" >Back</button>
                   </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'signup'
   
}) (Signup)
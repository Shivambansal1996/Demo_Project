import React, { Component } from 'react'
import './Signup.css'
import axios from 'axios'

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

    clickHandler1=(event)=>{

        this.setState({
           first_name :event.target.value
        })
        event.preventDefault();
    }
    
    clickHandler2=(event)=>{

        this.setState({
           last_name :event.target.value
        })
    }
    
    clickHandler3=(event)=>{

        this.setState({
           email_id :event.target.value
        })
    }
    
    clickHandler4=(event)=>{

        this.setState({
           mobile_no :event.target.value
        })
    }
    
    clickHandler5=(event)=>{

        this.setState({
           password :event.target.value
        })
    }
    
    clickHandler6=(event)=>{

        this.setState({
           confirm_password :event.target.value
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
                    <input className="input1" type="text" value={this.state.first_name} onChange={this.clickHandler1}></input>
                    </div>

                    <div>
                    <label className="label2">Enter Last Name</label>
                    <input className="input2" type="text" value={this.state.last_name} onChange={this.clickHandler2}></input>
                    </div>

                    <div>
                    <label className="label4">Enter Email id</label>
                    <input className="input4" type="text" value={this.state.email_id} onChange={this.clickHandler3}></input>
                    </div>

                    <div>
                    <label className="label5">Enter Mobile No</label>
                    <input className="input5" type="number" value={this.state.mobile_no} onChange={this.clickHandler4}></input>
                    </div>

                    <div>
                    <label className="label6">Enter Password</label>
                    <input className="input6" type="text" value={this.state.password} onChange={this.clickHandler5}></input>
                    </div>

                    <div>
                    <label className="label7">Retype Password</label>
                    <input className="input7" type="text" value={this.state.confirm_password} onChange={this.clickHandler6}></input>
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

export default Signup

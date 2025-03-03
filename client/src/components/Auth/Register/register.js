import React,{useState} from "react";
import axios from "axios";
import './register.css'
import {useHistory} from 'react-router-dom';
import {MdCancel} from 'react-icons/md';
const Register=()=>{
    const[firstName,serFirstName]=useState()
    const[lastName,setLastName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[done,setDone]=useState()
    const history=useHistory();
    const reg=(e)=>{
        e.preventDefault()
        try {
            
            axios.post("/users",{firstName,lastName,email,password})
            .then((result)=>{
                setDone(<div className="succes">the user has been added successfully</div>)
                {history.push("/login")}
            }).catch((err)=>{
                setDone(<div className="wrong">error happen while regeister please try again</div>)
            })
        } catch (error) {
            setDone(<div className="wrong">error happen while regeister please try again</div>)
        }
    }
   //

    return (
        <section class="signup">
         <div class="container">
        <span style={{cursor:"pointer",marginLeft:"68.5rem"}}  onClick={()=>{history.push("/login")}}><MdCancel style={{height:"26px",width:"24px",paddingTop:"5px"}} /></span>
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Sign up</h2>
                    <form onSubmit={reg} class="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" onChange={(e)=>{ serFirstName(e.target.value)}} name="name" id="name" placeholder="First Name"/>
                        </div>
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" onChange={(e)=>{setLastName(e.target.value)}}  name="name" id="name" placeholder="Last Name"/>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email"onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="pass" id="pass" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <button class="form-submit">Register</button>
                        
                        </div>
                      
                    </form>
                   
                    {done }
                  
                  
                </div>
                <div class="signup-image">
                    <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
                    <a  onClick={()=>{history.push("/login")}} class="signup-image-link">I am already member</a>
                </div>
            </div>
        </div>
    </section>
    // <div className="Register">
    // <input type="text" placeholder="firstName"  />
    // <input type="text" placeholder="lastName" />
    // <input type="email" placeholder="email"  />
    // <input type="password" placeholder="password"  />

    // <button onClick={()=>{
    //      >Register</button>
    // 
    // </div>
    )
}

export default Register
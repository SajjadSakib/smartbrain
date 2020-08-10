import React,{Component} from 'react';
class Register extends Component {
constructor(props){
  super(props);
  this.state={
    name:'',
    email:'',
    password:''
  }
}



onNameChange=(data)=>{
  this.setState({name:data.target.value})
}

   onEmailChange=(data)=>{
  this.setState({email:data.target.value})
}
onPasswordChange=(data)=>{
  this.setState({password:data.target.value})
}
onSubmitRegister= () =>{
fetch('http://localhost:3001/register',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          name:this.state.name,
          email:this.state.email,
          password:this.state.password
        })
      })
        .then(response=>response.json())
        .then(data=>{
          if (data.id){
            this.props.loadUser(data)
            this.props.onRouteChange('home');
          }
        })
}


render(){
    return(
    
<div className="pa4 black-80 shadow-5 w-30 center">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="name" 
         name="name"  
         id="name"
         onChange={this.onNameChange}/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address"
        onChange={this.onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password"
        onChange={this.onPasswordChange}/>
      </div>
    </fieldset>
    <div className="">
      <input 
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Register" 
      onClick={this.onSubmitRegister}
      />
    </div>
  </div>
</div>

    )
  }
}
export default Register;

import React from 'react';
import {fakeAuth} from "../auth";
import {Redirect} from 'react-router-dom';

export class EmailLogin extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={RediFrom:false};


    this.checkValueEl=this.checkValueEl.bind(this);
    this.checkValuePd=this.checkValuePd.bind(this);

    this.handleSubmit=this.handleSubmit.bind(this);
  } 


 
  checkValueEl(e)
  {
    const hValue=e.target.value;
    if(hValue.length>50)
    {
      e.target.style.color="red";
      this.setState({EmailerrMsg:"too long (max 50)"});
    }
    else if(hValue.length<5)
    {
      e.target.style.color="red";
      this.setState({EmailerrMsg:"too short (min 5)"});
    }
    else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(hValue))
    {
      e.target.style.color="red";
      this.setState({EmailerrMsg:"invalid email"});
    } 
    else
    {
      e.target.style.color="";
      this.setState({EmailerrMsg:""});
    }
  } 

  checkValuePd(e)
  {
    const hValue=e.target.value;
    if(hValue.length>20)
    {
      e.target.style.color="red";
      this.setState({PassworderrMsg:"too long (max 20)"});
    }
    else if(hValue.length<1)
    {
      e.target.style.color="red";
      this.setState({PassworderrMsg:"too short (min 1)"});
    }
    else if(!/^(?=.*\d).{4,8}$/.test(hValue))
    {
      e.target.style.color="red";
      this.setState({PassworderrMsg:"4 and 8 digits long and at least one numeric."});
    } 
    else 
    {
      e.target.style.color="";
      this.setState({PassworderrMsg:""});
    }
  }

 

  IsValid()
  {
      if(this.state.EmailerrMsg===undefined)
      {
        this.setState({EmailerrMsg:"No email"});
        return false;
      }
      else if(this.state.PassworderrMsg===undefined)
      {
        this.setState({PassworderrMsg:"No password"});
        return false;      
      }
      else if(this.state.EmailerrMsg.length>0)
      {
        this.setState({EmailerrMsg:"invalid email"});
        return false;    
      }
      else if(this.state.PassworderrMsg.length>0)
      {
        this.setState({PassworderrMsg:"Invalid password"});
        return false;    
      }
      else
      {
        return true;
      }
  }

   handleSubmit(event) {
    event.preventDefault();

    if(this.IsValid())
    {
      var ArrInput=event.target.elements;
      var fn=ArrInput['email'].value;
      var ln=ArrInput['password'].value;
      fakeAuth.authenticate((succ)=>{this.setState({RediFrom:succ})},fn,ln);      
    };
  }  

  render()
  {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { RediFrom } = this.state

    if (RediFrom === true) {
      return (<Redirect to={from} />);
    }

    return (<div className="form-style-10">
      <h1>Sign In</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="inner-wrap">
        <label>Email:</label>
        <input type="email"  placeholder="email address" onChange={this.checkValueEl} name="email"/>
        <span className="spanerrmsg">{this.state.EmailerrMsg}</span>
        </div>

      <div className="inner-wrap">
      <label>Pass Word</label>
      <input type="password"  placeholder="password" onChange={this.checkValuePd} name="password"/>
      <span className="spanerrmsg">{this.state.PassworderrMsg}</span>
      </div>

      <div className="button-section">
      <input type="submit" name="Sign Im" />
      </div>
      
      </form>
    </div>)

  }

}

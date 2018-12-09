import React from 'react';

export class UserEntry extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={Touch:false};


    this.checkValueFn=this.checkValueFn.bind(this);
    this.checkValueLn=this.checkValueLn.bind(this);

    this.handleSubmit=this.handleSubmit.bind(this);
  } 


 
  checkValueFn(e)
  {
    const hValue=e.target.value;
    if(hValue.length>20)
    {
      e.target.style.color="red";
      this.setState({FirstNameerrMsg:"too long (max 20)"});
    }
    else if(hValue.length<5)
    {
      e.target.style.color="red";
      this.setState({FirstNameerrMsg:"too short (min 5)"});
    }
    else
    {
      e.target.style.color="";
      this.setState({FirstNameerrMsg:""});
    }
  } 

  checkValueLn(e)
  {
    const hValue=e.target.value;
    if(hValue.length>5)
    {
      e.target.style.color="red";
      this.setState({LastNameerrMsg:"too long (max 5)"});
    }
    else if(hValue.length<2)
    {
      e.target.style.color="red";
      this.setState({LastNameerrMsg:"too short (min 2)"});
    }
    else
    {
      e.target.style.color="";
      this.setState({LastNameerrMsg:""});
    }
  }

 

  IsValid()
  {
      if(this.state.FirstNameerrMsg===undefined)
      {
        console.log("err1");
        return false;
      }
      else if(this.state.LastNameerrMsg===undefined)
      {
        console.log("err2");
        return false;      
      }
      else if(this.state.FirstNameerrMsg.length>0)
      {
        console.log("err3");
        return false;    
      }
      else if(this.state.LastNameerrMsg.length>0)
      {
        console.log("err4");
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
      var fn=ArrInput['firstName'].value;
      var ln=ArrInput['lastName'].value;
      alert("complete submit from here;" +fn+" "+ln);
    };
  }  

  render()
  {
    return (<div className="divform">
      <label>User Details</label>
      <form onSubmit={this.handleSubmit}>
      <div className="divinput">
      <label className="lblinput">First Name</label>
      <input className="inputvalid" type="text"  placeholder="First Name" onChange={this.checkValueFn} name="firstName"/>
      <span className="spanerrmsg">{this.state.FirstNameerrMsg}</span>
      </div>
      <div className="divinput">
      <label className="lblinput">Last Name</label>
      <input className="inputvalid" type="text"  placeholder="Last Name" onChange={this.checkValueLn} name="lastName"/>
      <span className="spanerrmsg">{this.state.LastNameerrMsg}</span>
      </div>
      <button type="submit" value="Submit">Submit</button>
      </form>
    </div>)

  }

}

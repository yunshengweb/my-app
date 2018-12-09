import React from 'react';

export class Temp extends React.Component {
  constructor(props)
  {

    super(props);
    this.state={MyToken:"My token"};
    this.checkToken=this.checkToken.bind(this);
  }
  checkToken()
  {
    const lToken=localStorage.getItem('token');
    if(lToken)
    {
      this.setState({MyToken:"Existed Token"});

    }
    else
    {
      this.setState({MyToken:"No Token"});

    }
  }
  render()
  {
    return (<div>
      <button onClick={this.checkToken}>Auth Token</button>
      <label>{this.state.MyToken}</label>
    </div>);
  }
}

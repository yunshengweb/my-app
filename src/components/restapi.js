import React, { Component } from 'react';

export class RestApi extends Component {

  render(){
    return (<div>
      <button>Create</button>
      <button>Read</button>
      <button>Update</button>
      <button>Delete</button>
      <ActRead></ActRead>
    </div>);
  }
}


export class ActRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      Start:0
    };
  }

  RecordView(i)
  {
     const cur=this.state.Start;
     this.setState({Start:cur+i});
  }

  async componentDidMount(){
     const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const dat = await res.json();
    this.setState({data: dat});
  }

  render(){
    return (
      <div>
        <div className="prevnext"><button onClick={()=>this.RecordView(-10)} disabled={this.state.Start>0?false:true}>Prev 10</button>
        <label>{this.state.Start+1} to {this.state.Start+10}</label>
        <button  onClick={()=>this.RecordView(10)} disabled={this.state.Start>89?true:false}>Next 10</button>
        </div>
          <ul className="licol">
            {this.state.data.slice(this.state.Start,this.state.Start+10).map((item)=> 
                <li key={item.id.toString()} className="vertli">
                  <span className="col1">{item.id}</span>
                  <span className="col2">{item.userId}</span>
                  <span className="col3">{item.title}</span>
                  <span className="col4">{item.body}</span></li>
            )}
            </ul>
      </div>
    ); 
  }
}



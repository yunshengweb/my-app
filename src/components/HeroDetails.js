import React from 'react';


export class HeroDetails extends React.Component{
GoBack()
{
	this.props.history.goBack();
}
render(){
	return (
	<div>
	<Details heroId={this.props.match.params.id} name={this.props.match.params.name}> </Details>
	<br></br>
	<button onClick={this.GoBack.bind(this)} >Go Back</button>
	</div>
	);
	}
}

class Details extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={name:this.props.name};
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(e)
	{
		const hName=e.target.value;
		this.setState({name:hName});
	}
	render(){
		return (<div><h2>{this.state.name} Details</h2>
			<div className="grid-pad">id: {this.props.heroId}</div>
			<div><label>name: <input type="text" value={this.state.name} placeholder="name" onChange={this.handleChange}/></label></div>
			</div>
		);
	}
}



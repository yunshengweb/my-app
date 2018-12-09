import React from 'react';
import {Link} from "react-router-dom";
import '../index.css';

/*const FakeHeroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];*/


function VlItem(props){
    return 	(<li className="vertli" ><Link to={`${props.cPath}/${props.id}/${props.name}`}>
    <span className="badge">{props.id}</span>{props.name}</Link></li>);	
    }

function HlItem(props){
    return 	(<Link className="module" to={`${props.cPath}/${props.id}/${props.name}`}>{props.name}</Link>);	
}

        
export class VlLink extends React.Component{
    render(){
        return (
        	<ul className="vertligroup">
                {this.props.iList.map((item)=>
                     <VlItem cPath={this.props.cPath} id={item.id} name={item.name} key={item.id.toString()}> </VlItem>
                )}
	        </ul>
        ); 
    }
}


export class HlLink extends React.Component{
    render(){
        return (
        <div className="grid grid-pad">
            {this.props.iList.map((item)=>
                <HlItem cPath={this.props.cPath} id={item.id} name={item.name} key={item.id.toString()}></HlItem>
            )}
        </div>
        );
        }
    }

    
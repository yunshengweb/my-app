import React from 'react';
	
import {HlLink, VlLink} from "./linkgroup";

import '../index.css';

const FakeHeroes = [
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
	  ];



export class HeroHlLink extends React.Component{
	render(){
		return (<div><h1>Top Heroes</h1>
		<HlLink iList={FakeHeroes.slice(0,4)} cPath="/HeroDetails"></HlLink>
		</div>
		);
	}
}


export class HeroVlLink extends React.Component{
	render(){
		return (<div><h1>Top Heroes</h1>
		<VlLink iList={FakeHeroes} cPath="/HeroDetails"></VlLink>
		</div>
		);
	}
}
	



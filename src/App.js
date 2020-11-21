import React, { useState } from 'react';
import Search from './components/Search'
import TimezoneGroup from './components/TimezoneGroup'

function App() {
	
	const addZone = (data) =>{
		console.log(data)
		const cityName = data.replace(' ','_');
		const zoneName = cityName.split('/')
		.map(data => data[0].toUpperCase() + data.substr(1).toLowerCase()).join('/');
	}

	return (
		<div className="wrapper">
			<h2>TIMEZONE CONVERTER</h2>  
			<Search addZone = {addZone}/>
			<TimezoneGroup addZone = {function(e){
			
			}} />
    	</div>
  	);
}

export default App;

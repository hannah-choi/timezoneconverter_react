import React, { useState } from 'react';
import Search from './components/Search'
import TimezoneGroup from './components/TimezoneGroup'
import moment from 'moment-timezone';

function App() {

	const [zoneName, setZoneName] = useState(null)

	const addZone = (data) =>{
		console.log(data)
		const cityName = data.replace(' ','_');
		setZoneName(cityName.split('/')
		.map(data => data[0].toUpperCase() + data.substr(1).toLowerCase()).join('/'))
	}

	return (
		<div className="wrapper">
			<h2>TIMEZONE CONVERTER</h2>  
			<Search addZone = {addZone}/>
			<TimezoneGroup zoneName = {zoneName} />
    	</div>
  	);
}

export default App;

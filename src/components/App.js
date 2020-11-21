import React, { useState } from 'react';
import Search from './Search'
import TimezoneGroup from './TimezoneGroup'

function App() {
	
	const [city, setCity] = useState("");

	const selectCity = (selectedCity) => {
		setCity(selectedCity)
	}

	// const addZone = (???) =>{
	// 	const cityName = target.dataset.zone.replace(' ','_');
	// 	const zoneName = cityName.split('/')
	// 	.map(data => data[0].toUpperCase() + data.substr(1).toLowerCase()).join('/');
	// 	//this.setTimezoneGroup = new TimezoneGroup(zoneName, this.getDifference(zoneName), this.getGMT(zoneName))
	// 	//this.groupList.push(this.setTimezoneGroup)
	// }

	return (
		<div className="wrapper">
			<h2>TIMEZONE CONVERTER</h2>  
			<Search onSelect = {selectCity}/>
			<TimezoneGroup addZone = {function(e){
			}} />
    	</div>
  	);
}

export default App;

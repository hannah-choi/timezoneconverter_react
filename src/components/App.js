import React, { useState } from 'react';
import Search from './Search'
import TimezoneGroup from './TimezoneGroup'

function App() {

  return (
    <div className="wrapper">
      <h2>TIMEZONE CONVERTER</h2>  
      <Search />
      <TimezoneGroup />
    </div>
  );
}

export default App;

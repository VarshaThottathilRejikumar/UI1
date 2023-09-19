import React from 'react'
import FlightSearch from './FlightSearch'
import Filter from './Filter'
import Searchresult from './Searchresult'

const Greeter = () => {
  return (
    <div className="greeter-container">
      <div className="greeter-l">
      <FlightSearch/>
      <div className="placeholder">
        <Searchresult/>
      </div>
    
      </div>
      <div className="greeter-r">
        <Filter/>
      </div>
      


    </div>
  )
}

export default Greeter
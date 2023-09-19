import React, { useState } from 'react'
import Calender from './Calender';

function RoundTrip({ tripType }: { tripType: string }) {
    const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');

  // Function to handle swapping
  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };
  return (
    
        <div className='Roundtrip'>
        <div className='roundInput'>
                <input
                  type='text'
                  placeholder='From'
                  value={from}
              onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <button className='roundButton' onClick={handleSwap}>
                ⇆
              </button>
              <div className='roundInput'>
                <input
                  type='text'
                  placeholder='To'
                  value={to}
              onChange={(e) => setTo(e.target.value)}
                />
              </div>
              <div className='roundInput'>
                <Calender/>
              </div>
              <div className='searchButton'>
                <input
                  type='button'
                  value='Search'
                />
              </div>
            </div>
        
    
  )
}

export default RoundTrip
import React, { useState } from 'react'

function OneWay({ tripType }: { tripType: string }) {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
  
    // Function to handle swapping
    const handleSwap = () => {
      const temp = from;
      setFrom(to);
      setTo(temp);
    };
  return (
    <div className='oneWay'>
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
              <div className='md:flex-grow'>
                <input
                  type='date'
                  placeholder='Departure Date'
                  className='border rounded-md p-2'
                />
              </div>
              <div>
                <input
                  type='button'
                  value='Search'
                  className='bg-blue-500 text-white rounded-md p-2 cursor-pointer'
                />
              </div>
            </div>
  )
}

export default OneWay
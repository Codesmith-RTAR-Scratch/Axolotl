import React from 'react';

export default function ReceiptChart(){

  
  fetch('/upload', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then( data => {

    console.log('I am in Receipt Chart');
  })
  // .then(data => {
    //   console.log('data:', data)
    // })
    
    return (
      <div>
      <h1>hello</h1>
    </div>
  )
}


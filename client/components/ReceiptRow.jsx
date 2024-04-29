import React from 'react';



const ReceiptRow = ({ key, itemCost, foodItem, itemQuantity }) => {
  return(
    <tr>
      <td>{itemQuantity}</td>
      <td>{foodItem}</td>
      <td>${itemCost}</td>
      <td>
        <input className='nameInput' type="text" name="names" placeholder='Who&apos;s Buying?'/>
      </td>
    </tr>
  );
};
export default ReceiptRow;

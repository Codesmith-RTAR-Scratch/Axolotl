
import React from 'react';
import ReceiptRow from './ReceiptRow';
// import { findTotal } from '../reducers/receiptSlicer';

import { useSelector, useDispatch } from 'react-redux';

const ReceiptTable = () => {
  const receiptData = useSelector(state => state.receipt);
  const receiptItems = receiptData.receiptData;

  return (
    <div>
      <table className='receipt-table'>
        <tr>
          <th>Item Quantity</th>
          <th>Food Item</th>
          <th>Item Cost</th>
        </tr>
        {receiptItems.map((item, idx) => {
          return(
            <ReceiptRow
              key={ idx }
              itemCost={ item.itemCost }
              foodItem={ item.foodItem }
              itemQuantity={ item.itemQuantity }
            />
          );

        })}
        <tr>
          <th>------</th>
          <th>------</th>
          <th>-----</th>
        </tr>
        <tfoot>
          <tr>
            <td>Tax: ${receiptData.tax}</td>
          </tr>
          <tr>
            <td>Tip: ${receiptData.tip}</td>
          </tr>
          <tr>
            <td>Total: ${receiptData.total}</td>
          </tr>
        </tfoot> 
      </table>
    </div>
  );
};

export default ReceiptTable;

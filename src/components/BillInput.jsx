import { useState } from 'react';

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type='text'
        placeholder='Bill value'
        value={bill}
        onChange={(event) => onSetBill(Number(event.target.value))}
      ></input>
    </div>
  );
}

export default BillInput;

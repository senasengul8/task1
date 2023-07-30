// CustomerList.js
import React from 'react';
import CustomerCard from './CustomerCard';

const CustomerList = ({ customers }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard key={customer._id} customer={customer} />
      ))}
    </div>
  );
};

export default CustomerList;
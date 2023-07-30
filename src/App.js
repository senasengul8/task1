import React, { useEffect, useState } from 'react';
import './App.css';
import CustomerCard from './CustomerCard';
import FilterSection from './FilterSection';


//mongoose.connect(
  //'mongodb+srv://sude:sude@hal.vmv1wfk.mongodb.net/?retryWrites=true&w=majority',
  //{ useNewUrlParser: true, useUnifiedTopology: true },
  //() => {
   // console.log("Connected to MongoDB");
 // }
//);
const dataToAdd = [{
  "createdAt" : 1689067169,
  "stages" : {
      "firstMeeting" : null,
      "segmentsReady" : null,
      "campaignMeeting" : null,
      "resultEvaluation" : null
  },
  "platform" : "Shopify",
  "subscriptionType" : "Shopify",
  "name" : "Bonvagon"
},
{
  "createdAt" : 1689538783,
  "stages" : {
      "firstMeeting" : null,
      "segmentsReady" : null,
      "campaignMeeting" : null,
      "resultEvaluation" : null
  },
  "platform" : "Other",
  "subscriptionType" : "Iyzico",
  "name" : "Valiberta"
},
{
  "createdAt" : 1689085603,
  "stages" : {
      "firstMeeting" : 1689339951,
      "segmentsReady" : null,
      "campaignMeeting" : null,
      "resultEvaluation" : null
  },
  "platform" : "Other",
  "subscriptionType" : "Iyzilink",
  "name" : "Vena"
},
{
  "createdAt" : 1688467228,
  "stages" : {
      "firstMeeting" : 1688720626,
      "segmentsReady" : null,
      "campaignMeeting" : null,
      "resultEvaluation" : null
  },
  "platform" : "Other",
  "subscriptionType" : "Iyzico",
  "name" : "Breeze"
},
{
  "createdAt" : 1688467228,
  "stages" : {
      "firstMeeting" : 1688720626,
      "segmentsReady" : 1689161630,
      "campaignMeeting" : null,
      "resultEvaluation" : null
  },
  "name" : "Shopigo",
  "platform" : "Other",
  "subscriptionType" : "Iyzilink"
},
{
  "createdAt" : 1688203721,
  "stages" : {
      "firstMeeting" : 1688379232,
      "segmentsReady" : 1688817426,
      "campaignMeeting" : null,
      "resultEvaluation" : null
  },
  "name" : "Naimah",
  "platform" : "Shopify",
  "subscriptionType" : "Shopify"
},
{
  "createdAt" : 1688023824,
  "stages" : {
      "firstMeeting" : 1688203119,
      "segmentsReady" : 1688638307,
      "campaignMeeting" : 1689161631,
      "resultEvaluation" : null
  },
  "name" : "Cabani",
  "platform" : "Other",
  "subscriptionType" : "Iyzico"
}
];

const App = () => {
  const [customers, setCustomers] = useState(dataToAdd); // Initialize customers with the provided data
  const [filteredCustomers, setFilteredCustomers] = useState(dataToAdd); // Initialize filteredCustomers with all customers

  // Function to apply the filters and update the filteredCustomers state
  const handleFilter = (filters) => {
    let filteredData = [...customers];

    // Apply filters
    if (filters.stages.length > 0) {
      filteredData = filteredData.filter((customer) =>
        filters.stages.some((stage) => customer.stages[stage] !== null)
      );
    }

    if (filters.platform !== '') {
      filteredData = filteredData.filter((customer) => customer.platform === filters.platform);
    }

    if (filters.subscriptionType !== '') {
      filteredData = filteredData.filter(
        (customer) => customer.subscriptionType === filters.subscriptionType
      );
    }

    console.log('Filtered Customers:', filteredData); // Log the filtered customers to the console

    setFilteredCustomers(filteredData);
  };

  return (
    <div className="app">
      <div className="filter-and-list">
        <div className="customer-list">
          <h1 style={{ color: 'green', fontSize: '24px', paddingBottom: '5px' }}>Customers</h1>
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer) => (
              <CustomerCard
                key={customer.createdAt}
                customer={customer}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="filter-section">
          <h2>Filters</h2>
          <FilterSection onFilter={handleFilter} />
        </div>
      </div>
    </div>
  );
};

export default App;
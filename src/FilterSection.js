import React, { useState } from 'react';

const FilterSection = ({ onFilter }) => {
  const [selectedStages, setSelectedStages] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedSubscriptionType, setSelectedSubscriptionType] = useState('');

  // Function to handle checkbox selections and apply filters
  const handleFilter = () => {
    // Combine the selected filters into an object
    const filters = {
      stages: selectedStages,
      platform: selectedPlatform,
      subscriptionType: selectedSubscriptionType,
    };

    // Pass the filters to the parent component (App.js) to apply the filter
    onFilter(filters);
  };

  return (
    <div className="filter-section">
      {/* Stages filter */}
      <div>
        <h3>Stages</h3>
        <div className="stages-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedStages.includes('First Meeting')}
            onChange={() =>
              setSelectedStages((prevSelectedStages) =>
                prevSelectedStages.includes('First Meeting')
                  ? prevSelectedStages.filter((stage) => stage !== 'First Meeting')
                  : [...prevSelectedStages, 'First Meeting']
              )
            }
          />
          Delayed First Meeting
        </label>
        <label className="checkbox-label">
    <input
      type="checkbox"
      checked={selectedStages.includes('Delayed Al Segments')}
      onChange={() =>
        setSelectedStages((prevSelectedStages) =>
          prevSelectedStages.includes('Delayed Al Segments')
            ? prevSelectedStages.filter((stage) => stage !== 'Delayed Al Segments')
            : [...prevSelectedStages, 'Delayed Al Segments']
        )
      }
    />
    Delayed Al Segments
  </label>
  <label className="checkbox-label">
    <input
      type="checkbox"
      checked={selectedStages.includes('Delayed Campaign Meeting')}
      onChange={() =>
        setSelectedStages((prevSelectedStages) =>
          prevSelectedStages.includes('Delayed Campaign Meeting')
            ? prevSelectedStages.filter((stage) => stage !== 'Delayed Campaign Meeting')
            : [...prevSelectedStages, 'Delayed Campaign Meeting']
        )
      }
    />
    Delayed Campaign Meeting
  </label>
  <label className="checkbox-label">
    <input
      type="checkbox"
      checked={selectedStages.includes('Delayed Result Evaluation')}
      onChange={() =>
        setSelectedStages((prevSelectedStages) =>
          prevSelectedStages.includes('Delayed Result Evaluation')
            ? prevSelectedStages.filter((stage) => stage !== 'Delayed Result Evaluation')
            : [...prevSelectedStages, 'Delayed Result Evaluation']
        )
      }
    />
    Delayed Result Evaluation
  </label>
        {/* Add checkboxes for other stages */}
      </div>
      </div>
      {/* Platform filter */}
      <div>
        <h3>Platform</h3>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedPlatform === 'Shopify'}
            onChange={() =>
              setSelectedPlatform((prevSelectedPlatform) =>
                prevSelectedPlatform === 'Shopify' ? '' : 'Shopify'
              )
            }
          />
          Shopify
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedPlatform === 'Other'}
            onChange={() =>
              setSelectedPlatform((prevSelectedPlatform) =>
                prevSelectedPlatform === 'Other' ? '' : 'Other'
              )
            }
          />
          Other
        </label>
      </div>

      {/* Subscription Type filter */}
      <div>
        <h3>Subscription Type</h3>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedSubscriptionType === 'Shopify'}
            onChange={() =>
              setSelectedSubscriptionType((prevSelectedType) =>
                prevSelectedType === 'Shopify' ? '' : 'Shopify'
              )
            }
          />
          Shopify
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedSubscriptionType === 'Iyzico'}
            onChange={() =>
              setSelectedSubscriptionType((prevSelectedType) =>
                prevSelectedType === 'Iyzico' ? '' : 'Iyzico'
              )
            }
          />
          Iyzico
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={selectedSubscriptionType === 'Iyzilink'}
            onChange={() =>
              setSelectedSubscriptionType((prevSelectedType) =>
                prevSelectedType === 'Iyzilink' ? '' : 'Iyzilink'
              )
            }
          />
          Iyzilink
        </label>
      </div>

      {/* Apply button */}
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterSection;
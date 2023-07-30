import React from 'react';
import './CustomerCard.css'; // 
const CustomerCard = ({ customer }) => {
  const { name, createdAt, stages } = customer;

  const calculateLifetime = () => {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Convert current date to timestamp in seconds
    return Math.floor((currentTimestamp - createdAt) / (60 * 60 * 24));
  };

  const lifetime = calculateLifetime();

  const renderStageInfo = (stageName, stageTimestamp, deadlineDays) => {
    if (!stageTimestamp) {
      // Stage not completed
      const deadlineTimestamp = createdAt + deadlineDays * 24 * 60 * 60;
      const daysRemaining = Math.ceil((deadlineTimestamp - Date.now() / 1000) / (60 * 60 * 24));
      const delayDays = Math.max(0, Math.abs(daysRemaining));
  
      if (daysRemaining > 0) {
        return `${stageName} delayed for ${delayDays} days`;
      } else {
        return `${stageName} in ${delayDays} days`;
      }
    } else {
      // Stage completed
      const daysPassed = Math.ceil((Date.now() / 1000 - stageTimestamp) / (60 * 60 * 24));
      return `${stageName} done ${daysPassed} days ago`;
    }
  };
  return (
    <div className="customer-card">
      <h3>
        <span className="customer-name">{name}</span>
        <span className="customer-name">(Lifetime: {lifetime} days)</span>
      </h3>
      <ul>
        <li>{renderStageInfo('First Meeting', stages.firstMeeting, 3)}</li>
        <li>{renderStageInfo('AI Segments', stages.segmentsReady, 10)}</li>
        <li>{renderStageInfo('Campaign Meeting', stages.campaignMeeting, 15)}</li>
        <li>{renderStageInfo('Result Evaluation', stages.resultEvaluation, 20)}</li>
      </ul>
    </div>
  );
};

export default CustomerCard;
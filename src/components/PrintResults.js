import React from 'react';
import './PrintResults.scss';
import LowestRating from './LowestRating';

const PrintResults = ({ ratingGroups }) => {
  return (
    <div className="print-results">
      <LowestRating ratingGroups={ratingGroups} />
    </div>
  );
};

export default PrintResults;
import React from 'react';
import PropTypes from 'prop-types';

import './PrintResults.scss';
import LowestRating from './LowestRating';

const PrintResults = ({ ratingGroups, placeName, placeAddress }) => {
  return (
    <div className="print-results">
      <div className="print-results__place-info">
        <div className="print-results__row print-results__row--header">
          Valvontakohde &bull; Tillsynsobjekt
        </div>
        <div className="print-results__row">
          { placeName }
        </div>
        <div className="print-results__row">
          { placeAddress }
        </div>

      </div>
      <LowestRating ratingGroups={ratingGroups} />
    </div>
  );
};

PrintResults.propTypes = {
  ratingGroups: PropTypes.arrayOf(PropTypes.object),
  placeName: PropTypes.string.isRequired,
  placeAddress: PropTypes.string.isRequired,
}

export default PrintResults;
import React from 'react';
import PropTypes from 'prop-types';

import './LowestRating.scss';
import findWorstRating from '../../helpers/findWorstRating';
import RatingIcon from '../RatingIcon';

const LowestRating = ({ ratingGroups }) => {
  const lowestRating = findWorstRating(ratingGroups);
  return (
    <div className="lowest-rating">
      <div className="lowest-rating__text">Viimeisin tarkastus &bull; Senaste inspektion</div>
      <RatingIcon className="lowest-rating__icon" rating={lowestRating} />
    </div>
  );
};

LowestRating.propTypes = {
  ratingGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LowestRating;
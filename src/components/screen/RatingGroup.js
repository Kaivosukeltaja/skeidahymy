import React from 'react';
import './RatingGroup.scss';
import RatingSelect from './RatingSelect';

const RatingGroup = ({ group, onChange }) => {
  return (
    <div className="rating-group">
      <div className="rating-group__details">
        <div className="rating-group__title">{group.title}</div>
        <div className="rating-group__description">{group.description}</div>
      </div>
      <RatingSelect name={group.name} onChange={onChange} />
    </div>
  );
};

export default RatingGroup;
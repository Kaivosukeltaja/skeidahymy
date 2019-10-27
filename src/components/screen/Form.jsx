import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import FormField from './FormField';
import RatingGroup from './RatingGroup';

const Form = ({
  ratingGroups, changeRating, placeName, placeAddress, notes, changeFieldValue,
}) => (
  <div className="form">
    <FormField label="Valvontakohde" value={placeName} onChange={changeFieldValue('placeName')} />
    <FormField label="Osoite" value={placeAddress} onChange={changeFieldValue('placeAddress')} />

    { ratingGroups.map((group) => (
      <RatingGroup key={group.name} group={group} onChange={changeRating(group.name)} />
    )) }

    <FormField label="Huomioita" large value={notes} onChange={changeFieldValue('notes')} />
  </div>
);


Form.propTypes = {
  ratingGroups: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  changeRating: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  placeAddress: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
};

export default Form;

import React from 'react';
import './Form.scss';
import FormField from './FormField';
import RatingGroup from './RatingGroup';

const Form = ({ ratingGroups, changeRating, placeName, placeAddress, notes, changeFieldValue }) => {
  return (
    <div className="form">
      <FormField label="Valvontakohde" value={placeName} onChange={changeFieldValue('placeName')} />
      <FormField label="Osoite" value={placeAddress} onChange={changeFieldValue('placeAddress')} />

      { ratingGroups.map((group) => (
        <RatingGroup key={group.name} group={group} onChange={changeRating(group.name)} />
      )) }

      <FormField label="Huomioita" large value={notes} onChange={changeFieldValue('notes')} />
    </div>
  );
};

export default Form;
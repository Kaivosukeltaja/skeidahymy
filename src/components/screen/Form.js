import React from 'react';
import './Form.scss';
import FormInput from './FormInput';
import RatingGroup from './RatingGroup';

const Form = ({ ratingGroups, changeRating, placeName, placeAddress, notes, changeFieldValue }) => {
  return (
    <div className="form">
      <FormInput label="Valvontakohde" value={placeName} onChange={changeFieldValue('placeName')} />
      <FormInput label="Osoite" value={placeAddress} onChange={changeFieldValue('placeAddress')} />
      <FormInput label="Huomioita" large value={notes} onChange={changeFieldValue('notes')} />

      { ratingGroups.map((group) => (
        <RatingGroup key={group.name} group={group} onChange={changeRating(group.name)} />
      )) }
    </div>
  );
};

export default Form;
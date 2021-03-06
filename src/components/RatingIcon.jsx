import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as GreatIcon } from '../assets/great.svg';
import { ReactComponent as GoodIcon } from '../assets/good.svg';
import { ReactComponent as OkIcon } from '../assets/ok.svg';
import { ReactComponent as BadIcon } from '../assets/bad.svg';

const RatingIcon = ({ rating, ...rest }) => {
  switch(rating) {
    case 'great':
      return <GreatIcon {...rest} />
    case 'good':
      return <GoodIcon {...rest} />
    case 'ok':
      return <OkIcon {...rest} />
    default:
      return <BadIcon {...rest} />
  }
};

RatingIcon.propTypes = {
  rating: PropTypes.oneOf(['great', 'good', 'ok']),
};

export default RatingIcon;
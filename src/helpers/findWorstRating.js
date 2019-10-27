import { ratingValues } from '../data';

const findWorstRating = (values) => {
  const worstRating = values.reduce((previousWorst, currentValue) => {
    return valueOfRating(currentValue) <= valueOfRating(previousWorst) ? currentValue : previousWorst;
  });

  return worstRating.rating;
}

const valueOfRating = (rating) => ratingValues[rating.rating];

export default findWorstRating;

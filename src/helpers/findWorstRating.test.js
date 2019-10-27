import findWorstRating from './findWorstRating';

describe('findWorstRating', () => {
  const createEntry = (rating) => ({ rating });
  it('should return good when there are two goods and one great', () => {
    const values = [createEntry('good'), createEntry('good'), createEntry('great')];

    const returnValue = findWorstRating(values);

    expect(returnValue).toBe('good');
  });

  it('should return great when there are three greats', () => {
    const values = [createEntry('great'), createEntry('great'), createEntry('great')];

    const returnValue = findWorstRating(values);

    expect(returnValue).toBe('great');
  });

  it('should return bad when there is one bad and two greats', () => {
    const values = [createEntry('bad'), createEntry('great'), createEntry('great')];

    const returnValue = findWorstRating(values);

    expect(returnValue).toBe('bad');
  });

  it('should return ok when there is two oks and one good', () => {
    const values = [createEntry('ok'), createEntry('good'), createEntry('good')];

    const returnValue = findWorstRating(values);

    expect(returnValue).toBe('ok');
  });

});

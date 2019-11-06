import PropTypes from 'prop-types';

export const carPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

export const carsPropType = PropTypes.arrayOf(carPropType);
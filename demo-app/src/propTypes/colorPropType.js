import PropTypes from 'prop-types';

export const colorPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hexcode: PropTypes.string.isRequired,
});

export const colorsPropType = PropTypes.arrayOf(colorPropType)

import PropTypes from 'prop-types';
import React from 'react';

const Avatar = ({ image, ...props }) => {
  return <img src={image} alt="Weather Person Avatar" />;
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired
};

export default Avatar;

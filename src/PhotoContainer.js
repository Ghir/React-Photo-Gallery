import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo'

const PhotoContainer = props => {
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <Photo images={props.images} />
    </div>
  );
}

export default PhotoContainer;

import React from 'react';
import PropTypes from 'prop-types';

export default props => {

  if (!props.images) return <div></div>;
  
  const photos = props.images.map(image => {
    return (
      <li key={image.id}>
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} alt="flickr images" />
      </li>
    )
  });

  return (
    <ul>
      { photos }
    </ul>
  )
}

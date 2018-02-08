import React from 'react';

import PhotoContainer from './PhotoContainer';

export default props => {
  return <PhotoContainer keyword={props.keyword || props.match.params.tag} />
}

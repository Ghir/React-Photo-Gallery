import React, { Component } from 'react';
import { API } from '../constants.js';
import { API_KEY } from '../config.js';
import PhotosList from './PhotosList';

class PhotoContainer extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.search(this.props.keyword || this.props.match.params.tag);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword && nextProps.keyword !== this.props.keyword) {
      this.search(nextProps.keyword);
    } else if (nextProps.match && nextProps.match.params) {
      this.search(nextProps.match.params.tag);
    }
  }

  async search(keyword) {
    this.setState({ loading: true })
    const res = await fetch(`${API}&api_key=${API_KEY}&tags=${keyword}&per_page=24&safe_search=1&format=json&nojsoncallback=1`);
    const data = await res.json();
    this.setState({ images: data.photos.photo, loading: false });
  }

  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.keyword || this.props.match.params.tag}</h2>
        {
          (this.state.loading)
            ? <h4>Loading...</h4>
            : <PhotosList images={this.state.images} />
        }
      </div>
    );
  }
}

export default PhotoContainer;

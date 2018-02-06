import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config.js';
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      keyword: 'Animal'
    }
  }

  componentDidMount () {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.keyword}&per_page=24&safe_search=1&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoading: false, images: data.photos.photo });
      });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <Route path="/" component={SearchForm} />
          <Route path="/" component={MainNav} />
          <Route path="/" render={props => {
              return <PhotoContainer images={this.state.images} />;
              }} />
        </div>
      </BrowserRouter>
    );
  }
}

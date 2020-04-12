import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNav from './components/MainNav';
import NotFound from './components/NotFound';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      keyword: 'Sea'
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <Route exact path="/" render={props => <SearchForm onSearch={keyword => this.setState({ keyword })} />} />
          <Route path="/" component={MainNav} />
          <Switch>
            <Route exact path="/" render={props => <PhotoContainer keyword={this.state.keyword} />} />
            <Route exact path="/:tag" component={PhotoContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

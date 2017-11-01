import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAdF2sQYfZpOia19o4MoQo-WLRkS5OK2cU';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos })
    });
  }

  render () {
    return (
      <div className='container'>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.querySelector('.container'));

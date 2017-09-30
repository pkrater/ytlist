import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import { debounce } from "lodash";
//import logo from '../logo.svg';
import "./App.css";
import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";


const API_KEY = "AIzaSyDkLij43PkV3LBHWAcbuJh9-LYtel2806A";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.searchVideos('game');
  }
    searchVideos(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
   
  
  render() {  
    const searchVideos = debounce(term => {this.searchVideos(term)}, 400);
    return (
      <div className="App">
        <SearchBar onVideoSearch={term => searchVideos(term)} />
        <VideoDetail video={ this.state.selectedVideo } />
          <VideoList videos={ this.state.videos } 
                     onVideoSelect={selectedVideo=>this.setState( {selectedVideo} )} />      
        </div>
    );
  }
}

export default App;

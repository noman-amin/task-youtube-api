import React from "react";
import Search from "./components/Search";
import youtube from "./api/youtube";
import Sidebar from "./components/Sidebar";
import Videoplayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import "./App.css";

class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
  };

  onSearch = async (keyword) => {
    // A function which request youtuebe-api and bring the results.
    const response = await youtube.get("/search", {
      params: {
        q: keyword,
      },
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
    console.log(this.state);
  };

  onVideoSelected = (videoId) => {
    this.setState({ selectedVideoId: videoId });
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <div className="app-page">
          <Sidebar />
          <div className="video-div">
            <Videoplayer videoId={this.state.selectedVideoId} />
          </div>
          <div className="list-div">
            <VideoList
              onVideoSelected={this.onVideoSelected}
              data={this.state.videosMetaInfo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

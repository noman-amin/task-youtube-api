import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Search.css";

class Search extends React.Component {
  state = { title: "" };
  onSearchChanged = (event) => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <MenuIcon />
          <img
            className="header-logo"
            src="/images/youtube-icon.png"
            alt="YouTube Icon"
          />
        </div>
        <div className="header-input">
          <form className="headerInput-form" onSubmit={this.onSubmit}>
            <label>Search</label>
            <input
              className="headerInput-inputField"
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
            />
          </form>
          <SearchIcon className="header-inputButton" />
        </div>
        <div className="header-icons">
          <VideoCallIcon className="header-icon" />
          <AppsIcon className="header-icon" />
          <NotificationsIcon className="header-icon" />
          <Avatar alt="Noman Amin" src="/images/5899H.JPG" />
        </div>
      </div>
    );
  }
}

export default Search;

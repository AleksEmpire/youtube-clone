import React, { Component } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/searchBar/SearchBar";
import VideoDetails from "./components/videoDetails/VideoDetails";
import VideoList from "./components/videoList/VideoList";
import Api from "./api/Api";
export default class App extends Component {
  state = {
    video: [],
    selectedVideo: null,
  };
  handleSubmit = async (userInput) => {
    const response = await Api.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyA1tAVsMp6ObNwNkRTywPZPA8TGebsEDoo",
        q: userInput,
      },
    });
    console.log(response);
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };
  render() {
    const { selectedVideo, video } = this.state;
    return (
      <Grid container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList video={video} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import VideoItems from "../videoItems/VideoItems";
export default class VideoList extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <Grid container spacing={10}>
        {video.map((videoItem, id) => (
          <VideoItems
            onVideoSelect={onVideoSelect}
            key={id}
            video={videoItem}
          />
        ))}
      </Grid>
    );
  }
}

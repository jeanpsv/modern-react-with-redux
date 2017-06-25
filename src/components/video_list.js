import React from 'react'

import VideoListItem from './video_list_item'

class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: props.videos,
      onVideoSelect: props.onVideoSelect
    }
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      videos: nextState.videos,
      onVideoSelect: nextState.onVideoSelect
    })
  }

  render() {
    const videoItems = this.state.videos.map(video => {
      return (
        <VideoListItem
          key={video.etag}
          video={video}
          onVideoSelect={this.state.onVideoSelect}
        />
      )
    })
    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}

export default VideoList

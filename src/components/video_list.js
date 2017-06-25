import React from 'react'

import VideoListItem from './video_list_item'

class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: props.videos
    }
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      videos: nextState.videos
    })
  }

  render() {
    const videoItems = this.state.videos.map(video => {
      return <VideoListItem key={video.etag} video={video} />
    })
    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}

export default VideoList

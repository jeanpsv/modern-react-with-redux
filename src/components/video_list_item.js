import React from 'react'

class VideoListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      video: props.video
    }
  }

  render() {
    const video = this.state.video
    const imageUrl = video.snippet.thumbnails.default.url
    return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="video-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoListItem

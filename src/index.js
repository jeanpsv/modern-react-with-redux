import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({
      key: API_KEY,
      term: 'surf'
    }, (videos) => {
      let selectedVideo = videos[0]
      this.setState({ videos, selectedVideo })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))

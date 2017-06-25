import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'YOUR_YOUTUBE_API_KEY'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      let selectedVideo = videos[0]
      this.setState({ videos, selectedVideo })
    })
  }

  selectVideo(selectedVideo) {
    console.log(selectedVideo)
    this.setState({ selectedVideo })
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.selectVideo(selectedVideo)}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))

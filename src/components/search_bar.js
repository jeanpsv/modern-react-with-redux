import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: "",
      onSearchTermChange: props.onSearchTermChange
    }
  }

  onInputChange(event) {
    let term = event.target.value
    this.setState({ term })
    this.state.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event)}
        />
      </div>
    )
  }
}

export default SearchBar

// import React and React Component Class
import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.postTitle}</h1>
        <h2>{this.props.author}</h2>
        <p>{this.props.content}</p>
        <p>{this.props.comments}</p>
      </div>
    )
  }
}


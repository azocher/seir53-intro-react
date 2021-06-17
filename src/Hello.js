// import React and React Component Class
import React, { Component } from 'react'
import Name from './Name'

// declare nick name variable
const username = "Nick"

// define a Hello Component
class Hello extends Component {
  // use component render function to pass JSX
  render() {
    // return some JSX
    return (
      <h1>
        <Name name={username} emoji={"🤠"} />
        <Name name={"Weston"} emoji={"🦕"} />
        <Name name={"Anna"} emoji={"🦮"} />
      </h1>
    )
  }
}

// export component
export default Hello
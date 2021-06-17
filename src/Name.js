import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <p>
                Hello, {this.props.name}{this.props.emoji}!
            </p>
        )
    }
}

export default Name
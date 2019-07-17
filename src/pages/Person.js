import React, { Component } from 'react'
import { connect } from 'react-redux'

class Person extends Component {

  render () {
    return <h1>Person</h1>
  }
}

export default connect(
  ({person}) => ({person})
)(Person)

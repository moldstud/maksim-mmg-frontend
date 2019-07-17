import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchPopulation } from '../actions'
import Population from '../pages/Population'
import Person from '../pages/Person'
import '../styles/App.css'

class App extends Component {

  componentDidMount () {
    this.props.fetchPopulation()
  }

  render () {
    return (
      <div className={'container'}>
        <Route path="/" component={Population} exact/>
        <Route path="/person/:id" component={Person}/>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    fetchPopulation: () => dispatch(fetchPopulation())
  })
)(App)

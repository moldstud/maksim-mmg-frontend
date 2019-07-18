import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { fetchPopulation } from '../actions'
import Population from '../pages/Population'
import Person from '../pages/Person'
import NotFound from '../pages/NotFound'
import '../styles/App.css'
import PropTypes from 'prop-types'

export class App extends Component {

  componentDidMount () {
    this.props.fetchPopulation()
  }

  render () {
    return (
      <div className={'container'}>
        <Switch>
          <Route path="/" component={Population} exact/>
          <Route path="/person/:id" component={Person}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect to="/not-found"/>
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  fetchPopulation: PropTypes.func.isRequired,
}

export default connect(
  null,
  dispatch => ({
    fetchPopulation: () => dispatch(fetchPopulation())
  })
)(App)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spin, PageHeader, Descriptions} from 'antd'
import { fetchPerson } from '../actions'
import NotFound from '../pages/NotFound'

class Person extends Component {

  state = {
    personId: null
  }

  componentDidMount () {
    this.setState({personId: null})
  }

  componentDidUpdate () {
    const {id} = this.props.match.params
    const {population: {list}} = this.props
    const {personId} = this.state

    if (list && personId === null) {
      this.setState({personId: id})
      this.props.fetchPerson(id, list)
    }
  }

  onBack = () => {
    this.props.history.goBack()
  }

  render () {
    const {person: {data}, population: {isLoading, errorMessage}} = this.props
    const {personId} = this.state

    if (personId !== null && !data) {
      return <NotFound/>
    }

    return (
      <>
        <PageHeader title={'Person Page: ' + (data && data.name)} onBack={this.onBack}/>
        {isLoading && <Spin size="large"/>}
        {errorMessage && <div className={'errorMessage'}>{errorMessage}</div>}
        {data && <div className={'personWrapper'}>
          <div>
            <img alt={data.name} src={data.thumbnail} className={'responsiveImage'}/>
          </div>
          <div>
            <Descriptions.Item label="Person Data">
              <div style={{background: `${data.hair_color.toLowerCase()}`}} className={'hairColor'}>Hair Color</div>
              Id: {data.id}
              <br/>
              Age: {data.age}
              <br/>
              Weight: {data.weight}
              <br/>
              Height:{data.height}
              <br/>
              Friends: {data.friends.length ? data.friends.join(', ') : 'No friends'}
              <br/>
              Professions: {data.professions.length ? data.professions.join(', ') : 'No professions'}
              <br/>
            </Descriptions.Item>
          </div>
        </div>}
      </>
    )
  }
}

export default connect(
  ({person, population}) => ({person, population}),
  dispatch => ({
    fetchPerson: (id, list) => dispatch(fetchPerson(id, list))
  })
)(Person)

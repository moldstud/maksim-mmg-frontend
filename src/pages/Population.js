import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List, Spin } from 'antd'
import { Link } from 'react-router-dom'

class Population extends Component {

  render () {
    const {population: {list, isLoading, errorMessage}} = this.props

    const dataSource = list || []

    return (
      <>
        {isLoading && <Spin size="large"/>}
        {errorMessage && <div className={'errorMessage'}>{errorMessage}</div>}
        <List
          grid={{gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4}}
          dataSource={dataSource}
          renderItem={person => (
            <List.Item>
              <Link to={`/person/${person.id}`}>
                <Card hoverable cover={
                  <div className={'imageWrapper'}>
                    <img alt={person.name} src={person.thumbnail}/>
                  </div>
                }>
                  <Card.Meta title={person.name} description={(
                    <div style={{background: `${person.hair_color.toLowerCase()}`, color: '#fff'}}>Hair Color</div>
                  )}/>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </>
    )
  }
}

export default connect(
  ({population}) => ({population})
)(Population)

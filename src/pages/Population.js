import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Card, List, Spin, Input, PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import { setCurrentPage, setFilter, setPageSize } from '../actions'
import { filterPopulation } from '../utils'
import { TOWN_NAME } from '../constants/config'

class Population extends Component {

  onChangeCurrentPage = (page) => {
    this.props.setCurrentPage(page)
  }

  onChangePageSize = (page, size) => {
    this.props.setPageSize(size)
  }

  onChangeFilter = (event) => {
    this.props.setFilter(event.target.value)
  }

  onClearFilter = () => {
    this.props.setFilter(null)
  }

  render () {
    const {population: {list, isLoading, errorMessage, currentPage, pageSize, filter}} = this.props

    const dataSource = filter && list ? filterPopulation(list, filter) : list

    return (
      <>
        <PageHeader title={`Population Of ${TOWN_NAME}`}/>
        {isLoading && <Spin size="large"/>}
        {errorMessage && <div className={'errorMessage'}>{errorMessage}</div>}
        {list && <Input.Search
          placeholder="Input search text"
          enterButton="Show All"
          size="large"
          onChange={this.onChangeFilter}
          onSearch={this.onClearFilter}
          value={filter}
        />}
        {list && <Typography.Text strong>Total: {dataSource.length}</Typography.Text>}
        {list && <List
          grid={{gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4}}
          dataSource={dataSource}
          pagination={{
            position: 'both',
            showSizeChanger: true,
            current: currentPage,
            pageSize: pageSize,
            onChange: this.onChangeCurrentPage,
            onShowSizeChange: this.onChangePageSize
          }}
          renderItem={person => (
            <List.Item>
              <Link to={`/person/${person.id}`}>
                <Card hoverable cover={
                  <div className={'imageWrapper'}>
                    <img alt={person.name} src={person.thumbnail} className={'responsiveImage'}/>
                  </div>
                }>
                  <Card.Meta title={person.name} description={(
                    <div style={{background: `${person.hair_color.toLowerCase()}`}} className={'hairColor'}>
                      Hair Color
                    </div>
                  )}/>
                </Card>
              </Link>
            </List.Item>
          )}
        />}
      </>
    )
  }
}

export default connect(
  ({population}) => ({population}),
  dispatch => ({
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
    setPageSize: pageSize => dispatch(setPageSize(pageSize)),
    setFilter: filter => dispatch(setFilter(filter))
  })
)(Population)

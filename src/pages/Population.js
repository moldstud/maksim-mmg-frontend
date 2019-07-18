import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Card, List, Spin, Input, PageHeader } from 'antd'
import { setCurrentPage, setFilter, setPageSize } from '../actions'
import { filterPopulation } from '../utils'
import { TOWN_NAME } from '../constants/config'
import PropTypes from 'prop-types'

export class Population extends Component {

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

  onOpenPerson = (id) => {
    this.props.history.push(`/person/${id}`)
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
              <Card hoverable onClick={() => this.onOpenPerson(person.id)} cover={
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
            </List.Item>
          )}
        />}
      </>
    )
  }
}

Population.propTypes = {
  population: PropTypes.object.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setPageSize: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
}

export default connect(
  ({population}) => ({population}),
  dispatch => ({
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
    setPageSize: pageSize => dispatch(setPageSize(pageSize)),
    setFilter: filter => dispatch(setFilter(filter))
  })
)(Population)

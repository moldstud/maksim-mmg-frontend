import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { Population } from '../../pages/Population'
import { List, Spin, Card } from 'antd'
import { populationInitialState, populationList, stubFunc } from '../fixtures'

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
})

describe('<Population />', () => {

  const stubProps = {
    setCurrentPage: stubFunc,
    setFilter: stubFunc,
    setPageSize: stubFunc
  }

  it('Fetch population initial state', () => {
    const wrapper = shallow(<Population
      population={{...populationInitialState, isLoading: false}}
      {...stubProps}
    />)
    expect(wrapper.exists(Spin)).to.equal(false)
    expect(wrapper.exists('.errorMessage')).to.equal(false)
    expect(wrapper.exists(List)).to.equal(false)
  })

  it('Fetch population is loading', () => {
    const wrapper = shallow(<Population
      population={{...populationInitialState, isLoading: true}}
      {...stubProps}
    />)
    expect(wrapper.exists(Spin)).to.equal(true)
    expect(wrapper.exists('.errorMessage')).to.equal(false)
    expect(wrapper.exists(List)).to.equal(false)
  })

  it('Fetch population failed', () => {
    const errorMessage = 'Something wrong on server side'
    const wrapper = shallow(<Population
      population={{...populationInitialState, errorMessage}}
      {...stubProps}
    />)

    expect(wrapper.exists(Spin)).to.equal(false)
    expect(wrapper.exists('.errorMessage')).to.equal(true)
    expect(wrapper.exists(List)).to.equal(false)
    expect(wrapper.find('.errorMessage').text()).to.equal(errorMessage)
  })

  it('Fetch population success', () => {
    const wrapper = mount(<Population
      population={{...populationInitialState, list: populationList}}
      {...stubProps}
    />)

    expect(wrapper.exists(List)).to.equal(true)
    expect(wrapper.find(List.Item)).to.have.lengthOf(populationList.length)
    expect(wrapper.find(Card.Meta).first().props().title).to.equal(populationList[0].name)
  })

  it('Apply filter', () => {
    const wrapper = mount(<Population
      population={{...populationInitialState, list: populationList, filter: 'Farmer'}}
      {...stubProps}
    />)

    expect(wrapper.exists(List)).to.equal(true)
    expect(wrapper.find(List.Item)).to.have.lengthOf(1)
  })

})
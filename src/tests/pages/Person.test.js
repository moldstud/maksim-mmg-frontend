import React from 'react'
import { configure, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { Person } from '../../pages/Person'
import { PageHeader } from 'antd'
import { populationInitialState, personInitialState, populationList, stubFunc } from '../fixtures'

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
})

describe('<Person />', () => {

  it('Fetch person', () => {
    const data = populationList[0]
    const wrapper = mount(<Person
      population={{...populationInitialState, list: populationList}}
      person={{...personInitialState, data}}
      match={{params: {id: data.id}}}
      fetchPerson={stubFunc}
    />)

    expect(wrapper.exists(PageHeader)).to.equal(true)
    expect(wrapper.find(PageHeader).props().title).to.equal(`Person Page: ${data.name}`)
    expect(wrapper.contains(data.id.toString())).to.equal(true)
    expect(wrapper.contains(data.age.toString())).to.equal(true)
    expect(wrapper.contains(data.weight.toString())).to.equal(true)
    expect(wrapper.contains(data.height.toString())).to.equal(true)
    expect(wrapper.contains(data.professions.join(', '))).to.equal(true)
    expect(wrapper.contains(data.friends.join(', '))).to.equal(true)
  })

})
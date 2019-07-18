import React from 'react'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import { App } from '../../components/App'
import { Switch, Route, Redirect } from 'react-router-dom'
import { stubFunc } from '../fixtures'

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
})

describe('<App />', () => {
  const app = shallow(<App fetchPopulation={stubFunc}/>)
  const switcher = app.find(Switch)

  it('<App /> includes one <Switch/>', () => {
    expect(switcher).to.have.lengthOf(1)
  })

  it('<Switch/> includes three <Route/>', () => {
    expect(switcher.find(Route)).to.have.lengthOf(3)
  })

  it('<Switch/> includes one <Redirect/>', () => {
    expect(switcher.find(Redirect)).to.have.lengthOf(1)
  })
})
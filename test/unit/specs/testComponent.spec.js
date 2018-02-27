import Vue from 'vue'
import testComponent from '../../../src/components/testComponent.vue'
import { expect } from 'chai'

function getRenderText (component, propsData) {
  const Constructor = Vue.extend(component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
describe('testComponent', () => {
  it('should be hello world', () => {
    expect(getRenderText(testComponent, { msg: 'hello world' })).to.be.equal('hello world')
  })
})
